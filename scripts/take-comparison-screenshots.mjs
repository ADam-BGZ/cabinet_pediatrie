import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const ORIGINAL_URL = 'https://dentiste-tanger.ma/';
const LOCAL_URL = 'http://localhost:3000/';
const DESKTOP_WIDTH = 1440;
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

async function takeFullPageScreenshot(browser, url, filename) {
  const context = await browser.newContext({
    viewport: { width: DESKTOP_WIDTH, height: VIEWPORT_HEIGHT },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  console.log(`Navigating to ${url} for screenshot: ${filename}`);
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `docs/design-references/${filename}`, fullPage: true });
    console.log(`Screenshot saved: docs/design-references/${filename}`);
  } catch (error) {
    console.error(`Failed to take screenshot for ${url}:`, error);
  } finally {
    await context.close();
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  // Take screenshot of original site
  await takeFullPageScreenshot(browser, ORIGINAL_URL, 'original-site-desktop.png');

  // Take screenshot of local site
  await takeFullPageScreenshot(browser, LOCAL_URL, 'cloned-site-desktop.png');

  await browser.close();
  console.log('Screenshot comparison complete!');
}

main().catch(console.error);
