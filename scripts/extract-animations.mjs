import { chromium } from 'playwright';

const TARGET_URL = 'https://dentiste-tanger.ma/';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  });
  const page = await context.newPage();

  console.log('Navigating to', TARGET_URL);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);

  // 1. Extract all animations and transitions
  console.log('\n=== ANIMATIONS & TRANSITIONS ===');
  const animations = await page.evaluate(() => {
    const results = [];
    document.querySelectorAll('*').forEach((el, i) => {
      const cs = getComputedStyle(el);
      const transition = cs.transition;
      const animation = cs.animation;
      const animationName = cs.animationName;
      
      if (transition && transition !== 'all 0s ease 0s' && transition !== 'none') {
        results.push({
          type: 'transition',
          tag: el.tagName.toLowerCase(),
          classes: el.className?.toString().split(' ').slice(0, 5).join(' ') || '',
          id: el.id || null,
          transition: transition,
          properties: cs.transitionProperty,
          duration: cs.transitionDuration,
          timing: cs.transitionTimingFunction,
          delay: cs.transitionDelay
        });
      }
      
      if (animationName && animationName !== 'none') {
        results.push({
          type: 'animation',
          tag: el.tagName.toLowerCase(),
          classes: el.className?.toString().split(' ').slice(0, 5).join(' ') || '',
          id: el.id || null,
          animation: animation,
          name: animationName,
          duration: cs.animationDuration,
          timing: cs.animationTimingFunction,
          iterationCount: cs.animationIterationCount
        });
      }
    });
    return results;
  });
  console.log(JSON.stringify(animations, null, 2));

  // 2. Check for scroll-driven animations
  console.log('\n=== SCROLL BEHAVIORS ===');
  const scrollBehaviors = await page.evaluate(() => {
    const results = [];
    // Check for smooth scroll library
    const hasLenis = document.querySelector('.lenis') !== null || document.querySelector('[data-lenis]') !== null;
    const hasLocomotiveScroll = document.querySelector('.locomotive-scroll') !== null;
    
    // Check for scroll-snap
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const htmlCS = getComputedStyle(htmlEl);
    const bodyCS = getComputedStyle(bodyEl);
    
    // Check for IntersectionObserver usage (animations on scroll)
    const invisibleElements = [...document.querySelectorAll('.elementor-invisible, [data-animate], .animate-on-scroll, .elementor-animation-grow, .elementor-animation-shrink, .elementor-animation-pulse, .elementor-animation-float, .elementor-animation-rotate')];
    
    return {
      hasLenis,
      hasLocomotiveScroll,
      htmlScrollSnap: htmlCS.scrollSnapType,
      bodyScrollSnap: bodyCS.scrollSnapType,
      scrollBehavior: htmlCS.scrollBehavior,
      animatedOnScroll: invisibleElements.map(el => ({
        tag: el.tagName.toLowerCase(),
        classes: el.className?.toString().split(' ').slice(0, 8).join(' '),
        dataAnimate: el.getAttribute('data-settings') || el.getAttribute('data-animate') || null,
        isVisible: el.getBoundingClientRect().top < window.innerHeight
      })).slice(0, 30)
    };
  });
  console.log(JSON.stringify(scrollBehaviors, null, 2));

  // 3. Check for Elementor animation classes
  console.log('\n=== ELEMENTOR ANIMATIONS ===');
  const elementorAnims = await page.evaluate(() => {
    const results = [];
    // Elementor uses data-settings with animation JSON
    document.querySelectorAll('[data-settings]').forEach(el => {
      try {
        const settings = JSON.parse(el.getAttribute('data-settings'));
        if (settings._animation || settings._animation_mobile || settings.animation) {
          results.push({
            tag: el.tagName.toLowerCase(),
            classes: el.className?.toString().split(' ').slice(0, 5).join(' ') || '',
            animation: settings._animation || null,
            animationMobile: settings._animation_mobile || null,
            animationDelay: settings._animation_delay || null,
            animationDuration: settings._animation_duration || null,
            entranceAnimation: settings.entrance_animation || null,
            fadeIn: settings._fade_in || null,
            fadingAnimations: settings._background_interaction || null
          });
        }
      } catch (e) {}
    });
    return results;
  });
  console.log(JSON.stringify(elementorAnims, null, 2));

  // 4. Scroll and check for scroll-triggered changes
  console.log('\n=== SCROLL-TRIGGERED CHANGES ===');
  
  // Scroll to bottom slowly
  const scrollPositions = [0, 500, 1000, 2000, 3000, 4000, 5000, 6000, 8000, 10000];
  const headerStates = [];
  
  for (const pos of scrollPositions) {
    await page.evaluate((y) => window.scrollTo(0, y), pos);
    await page.waitForTimeout(300);
    
    const headerState = await page.evaluate(() => {
      const header = document.querySelector('header');
      if (!header) return null;
      const cs = getComputedStyle(header);
      return {
        position: cs.position,
        top: cs.top,
        backgroundColor: cs.backgroundColor,
        boxShadow: cs.boxShadow,
        height: header.getBoundingClientRect().height,
        opacity: cs.opacity,
        transform: cs.transform
      };
    });
    headerStates.push({ scrollY: pos, header: headerState });
  }
  console.log('Header states on scroll:');
  console.log(JSON.stringify(headerStates, null, 2));

  // 5. Check for carousel/slider
  console.log('\n=== CAROUSELS & SLIDERS ===');
  const carousels = await page.evaluate(() => {
    const results = [];
    document.querySelectorAll('.swiper, .carousel, .slider, .slick, .elementor-swiper, [data-carousel], .wd-swiper-container').forEach(el => {
      results.push({
        tag: el.tagName.toLowerCase(),
        classes: el.className?.toString().split(' ').slice(0, 8).join(' ') || '',
        childCount: el.children.length,
        hasNavigation: el.querySelector('.swiper-button-next, .swiper-button-prev, .carousel-control, .slick-next, .slick-prev') !== null,
        hasPagination: el.querySelector('.swiper-pagination, .carousel-indicators, .slick-dots') !== null
      });
    });
    return results;
  });
  console.log(JSON.stringify(carousels, null, 2));

  // 6. Extract CSS keyframe animations
  console.log('\n=== CSS KEYFRAMES ===');
  const keyframes = await page.evaluate(() => {
    const results = [];
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule.type === CSSRule.KEYFRAMES_RULE) {
            results.push({
              name: rule.name,
              keyframes: [...rule.cssRules].map(r => ({
                keyText: r.keyText,
                cssText: r.cssText.slice(0, 300)
              }))
            });
          }
        }
      } catch (e) {}
    }
    return results;
  });
  console.log(JSON.stringify(keyframes, null, 2));

  // 7. Check for hover effects
  console.log('\n=== HOVER EFFECTS ===');
  const hoverEffects = await page.evaluate(() => {
    const results = [];
    // Check buttons and links
    document.querySelectorAll('a, button, .elementor-button, .elementor-widget-button').forEach(el => {
      const cs = getComputedStyle(el);
      if (cs.transition && cs.transition !== 'all 0s ease 0s' && cs.transition !== 'none') {
        results.push({
          tag: el.tagName.toLowerCase(),
          classes: el.className?.toString().split(' ').slice(0, 5).join(' ') || '',
          text: el.textContent?.trim().slice(0, 50) || '',
          transition: cs.transition
        });
      }
    });
    return results.slice(0, 20);
  });
  console.log(JSON.stringify(hoverEffects, null, 2));

  await browser.close();
  console.log('\n=== EXTRACTION COMPLETE ===');
}

main().catch(console.error);
