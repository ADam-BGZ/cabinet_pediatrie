import { chromium } from '@playwright/test';

const WIDTH = 1440;
const HEIGHT = 900;

async function main() {
  const browser = await chromium.launch();

  // Screenshot original site
  const origPage = await browser.newPage();
  await origPage.setViewportSize({ width: WIDTH, height: HEIGHT });
  await origPage.goto('https://dentiste-tanger.ma/', { waitUntil: 'networkidle', timeout: 30000 });
  await origPage.waitForTimeout(2000);

  // Full page screenshot original
  await origPage.screenshot({ path: 'docs/design-references/orig-full.png', fullPage: true });

  // Section screenshots original
  const origSections = [
    { name: 'header', selector: 'header, .elementor-location-header' },
    { name: 'hero', selector: '.elementor-section:first-of-type' },
  ];
  for (const s of origSections) {
    try {
      const el = await origPage.$(s.selector);
      if (el) await el.screenshot({ path: `docs/design-references/orig-${s.name}.png` });
    } catch {}
  }

  // Screenshot clone site
  const clonePage = await browser.newPage();
  await clonePage.setViewportSize({ width: WIDTH, height: HEIGHT });
  await clonePage.goto('http://localhost:3000/', { waitUntil: 'networkidle', timeout: 30000 });
  await clonePage.waitForTimeout(2000);

  // Full page screenshot clone
  await clonePage.screenshot({ path: 'docs/design-references/clone-full.png', fullPage: true });

  // Section screenshots clone
  const cloneSections = [
    { name: 'header', selector: 'header' },
    { name: 'hero', selector: 'section:first-of-type' },
    { name: 'about', selector: '#about' },
    { name: 'before-after', selector: '#before-after' },
    { name: 'testimonials', selector: '#testimonials' },
  ];
  for (const s of cloneSections) {
    try {
      const el = await clonePage.$(s.selector);
      if (el) await el.screenshot({ path: `docs/design-references/clone-${s.name}.png` });
    } catch {}
  }

  // Get page metrics
  const origHeight = await origPage.evaluate(() => document.documentElement.scrollHeight);
  const cloneHeight = await clonePage.evaluate(() => document.documentElement.scrollHeight);
  console.log(`Original page height: ${origHeight}px`);
  console.log(`Clone page height: ${cloneHeight}px`);
  console.log(`Difference: ${Math.abs(origHeight - cloneHeight)}px (${((1 - Math.abs(origHeight - cloneHeight) / origHeight) * 100).toFixed(1)}% similar)`);

  // Check key elements
  const checks = await clonePage.evaluate(() => {
    const results = {};
    results.headerExists = !!document.querySelector('header');
    results.heroExists = !!document.querySelector('section');
    results.aboutExists = !!document.querySelector('#about');
    results.beforeAfterExists = !!document.querySelector('#before-after');
    results.testimonialsExists = !!document.querySelector('#testimonials');
    results.footerExists = !!document.querySelector('footer');
    results.imgCount = document.querySelectorAll('img').length;
    results.fontFamily = getComputedStyle(document.body).fontFamily;
    results.bgColor = getComputedStyle(document.body).backgroundColor;
    return results;
  });
  console.log('\nClone element checks:', JSON.stringify(checks, null, 2));

  await browser.close();
}

main().catch(console.error);
