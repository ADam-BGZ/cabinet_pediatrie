import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const TARGET_URL = 'https://dentiste-tanger.ma/';
const DESKTOP_WIDTH = 1440;
const MOBILE_WIDTH = 390;
const VIEWPORT_HEIGHT = 900;

async function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const dir = path.dirname(destPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(destPath); });
      file.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: DESKTOP_WIDTH, height: VIEWPORT_HEIGHT },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  console.log('Navigating to', TARGET_URL);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);

  // Desktop screenshot
  console.log('Taking desktop screenshot...');
  await page.screenshot({ path: 'docs/design-references/desktop-full.png', fullPage: true });

  // Mobile screenshot
  console.log('Taking mobile screenshot...');
  await page.setViewportSize({ width: MOBILE_WIDTH, height: VIEWPORT_HEIGHT });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'docs/design-references/mobile-full.png', fullPage: true });

  // Back to desktop
  await page.setViewportSize({ width: DESKTOP_WIDTH, height: VIEWPORT_HEIGHT });
  await page.waitForTimeout(1000);

  // Extract global info
  console.log('Extracting global info...');
  const globalInfo = await page.evaluate(() => {
    const fonts = [...new Set([...document.querySelectorAll('*')].slice(0, 300).map(el => getComputedStyle(el).fontFamily))];
    
    const colors = new Set();
    document.querySelectorAll('*').forEach(el => {
      const cs = getComputedStyle(el);
      if (cs.color && cs.color !== 'rgba(0, 0, 0, 0)') colors.add(cs.color);
      if (cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)') colors.add(cs.backgroundColor);
    });

    const favicons = [...document.querySelectorAll('link[rel*="icon"]')].map(l => ({
      href: l.href,
      sizes: l.sizes?.toString() || '',
      rel: l.rel
    }));

    const meta = {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content || '',
      ogImage: document.querySelector('meta[property="og:image"]')?.content || ''
    };

    return {
      fonts: fonts.slice(0, 20),
      colors: [...colors].slice(0, 50),
      favicons,
      meta
    };
  });

  fs.writeFileSync('docs/research/global-info.json', JSON.stringify(globalInfo, null, 2));
  console.log('Global info saved');

  // Extract all assets
  console.log('Extracting assets...');
  const assets = await page.evaluate(() => {
    const images = [...document.querySelectorAll('img')].map(img => ({
      src: img.src || img.currentSrc,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      parentClasses: img.parentElement?.className?.toString().split(' ').slice(0, 5).join(' '),
      position: getComputedStyle(img).position,
      zIndex: getComputedStyle(img).zIndex
    }));

    const videos = [...document.querySelectorAll('video')].map(v => ({
      src: v.src || v.querySelector('source')?.src,
      poster: v.poster,
      autoplay: v.autoplay,
      loop: v.loop,
      muted: v.muted
    }));

    const backgroundImages = [];
    document.querySelectorAll('*').forEach(el => {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none') {
        backgroundImages.push({
          url: bg,
          element: el.tagName + '.' + (el.className?.toString().split(' ')[0] || '')
        });
      }
    });

    const svgs = [...document.querySelectorAll('svg')].map((svg, i) => ({
      index: i,
      viewBox: svg.getAttribute('viewBox'),
      width: svg.getAttribute('width'),
      height: svg.getAttribute('height'),
      parentClasses: svg.parentElement?.className?.toString().split(' ').slice(0, 3).join(' '),
      innerHTML: svg.outerHTML.slice(0, 500)
    }));

    return { images, videos, backgroundImages, svgCount: svgs.length, svgs: svgs.slice(0, 30) };
  });

  fs.writeFileSync('docs/research/assets.json', JSON.stringify(assets, null, 2));
  console.log(`Found ${assets.images.length} images, ${assets.videos.length} videos, ${assets.svgCount} SVGs`);

  // Download images
  console.log('Downloading images...');
  const downloadedImages = [];
  for (const img of assets.images) {
    if (img.src && img.src.startsWith('http')) {
      try {
        const ext = path.extname(new URL(img.src).pathname) || '.webp';
        const filename = `public/images/img-${downloadedImages.length}${ext}`;
        await downloadFile(img.src, filename);
        downloadedImages.push({ original: img.src, local: filename, alt: img.alt });
        console.log(`  Downloaded: ${filename}`);
      } catch (e) {
        console.log(`  Failed: ${img.src} - ${e.message}`);
      }
    }
  }

  // Download background images
  for (const bg of assets.backgroundImages) {
    const urlMatch = bg.url.match(/url\(["']?(.*?)["']?\)/);
    if (urlMatch && urlMatch[1].startsWith('http')) {
      try {
        const ext = path.extname(new URL(urlMatch[1]).pathname) || '.webp';
        const filename = `public/images/bg-${downloadedImages.length}${ext}`;
        await downloadFile(urlMatch[1], filename);
        downloadedImages.push({ original: urlMatch[1], local: filename, alt: 'background' });
        console.log(`  Downloaded background: ${filename}`);
      } catch (e) {
        console.log(`  Failed background: ${urlMatch[1]} - ${e.message}`);
      }
    }
  }

  // Download favicons
  console.log('Downloading favicons...');
  for (const fav of globalInfo.favicons) {
    if (fav.href) {
      try {
        const ext = path.extname(new URL(fav.href).pathname) || '.ico';
        const filename = `public/seo/favicon${ext}`;
        await downloadFile(fav.href, filename);
        console.log(`  Downloaded favicon: ${filename}`);
      } catch (e) {
        console.log(`  Failed favicon: ${fav.href} - ${e.message}`);
      }
    }
  }

  // Extract page structure
  console.log('Extracting page structure...');
  const pageStructure = await page.evaluate(() => {
    function walkDOM(el, depth = 0) {
      if (depth > 5) return null;
      const cs = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      
      if (rect.width === 0 || rect.height === 0) return null;
      
      const children = [...el.children]
        .map(c => walkDOM(c, depth + 1))
        .filter(Boolean);

      return {
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        classes: el.className?.toString().split(' ').slice(0, 8).join(' ') || null,
        rect: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
        display: cs.display,
        position: cs.position,
        zIndex: cs.zIndex !== 'auto' ? cs.zIndex : null,
        text: el.children.length === 0 ? el.textContent?.trim().slice(0, 200) || null : null,
        children: children.length > 0 ? children : undefined
      };
    }
    return walkDOM(document.body);
  });

  fs.writeFileSync('docs/research/page-structure.json', JSON.stringify(pageStructure, null, 2));
  console.log('Page structure saved');

  // Extract section-level CSS
  console.log('Extracting section CSS...');
  const sections = await page.evaluate(() => {
    const result = [];
    const sections = document.querySelectorAll('section, header, footer, nav, main, [class*="section"], [class*="hero"], [class*="banner"]');
    
    sections.forEach((el, i) => {
      const cs = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      
      if (rect.width < 100 || rect.height < 50) return;

      const props = ['fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color','backgroundColor','background','padding','paddingTop','paddingRight','paddingBottom','paddingLeft','margin','marginTop','marginRight','marginBottom','marginLeft','width','height','maxWidth','minWidth','display','flexDirection','justifyContent','alignItems','gap','gridTemplateColumns','borderRadius','border','boxShadow','overflow','position','top','right','bottom','left','zIndex','opacity','transform','transition','cursor'];
      
      const styles = {};
      props.forEach(p => {
        const v = cs[p];
        if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') {
          styles[p] = v;
        }
      });

      result.push({
        index: i,
        tag: el.tagName.toLowerCase(),
        classes: el.className?.toString().split(' ').slice(0, 10).join(' ') || '',
        rect: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
        styles,
        textPreview: el.textContent?.trim().slice(0, 300) || '',
        childCount: el.children.length
      });
    });

    return result;
  });

  fs.writeFileSync('docs/research/sections.json', JSON.stringify(sections, null, 2));
  console.log(`Found ${sections.length} sections`);

  // Take section screenshots
  console.log('Taking section screenshots...');
  for (let i = 0; i < Math.min(sections.length, 20); i++) {
    const s = sections[i];
    if (s.rect.h > 50) {
      try {
        await page.evaluate((rect) => {
          window.scrollTo(0, rect.y - 50);
        }, s.rect);
        await page.waitForTimeout(500);
        await page.screenshot({
          path: `docs/design-references/section-${i}.png`,
          clip: { x: 0, y: 0, width: DESKTOP_WIDTH, height: Math.min(s.rect.h + 100, VIEWPORT_HEIGHT) }
        });
      } catch (e) {
        console.log(`  Failed section screenshot ${i}`);
      }
    }
  }

  // Save downloaded images info
  fs.writeFileSync('docs/research/downloaded-assets.json', JSON.stringify(downloadedImages, null, 2));

  await browser.close();
  console.log('Extraction complete!');
}

main().catch(console.error);
