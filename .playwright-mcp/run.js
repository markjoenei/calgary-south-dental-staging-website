
const { chromium } = require('playwright');
const path = require('path');
const OUTPUT_DIR = 'C:/Users/markj/Desktop/Claude-Projects/Done Claude Ai Dental Websites/calgary-south-dental-ai-website/.playwright-mcp';
const BASE_URL = 'http://localhost:3000';
const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 375, height: 812 },
];
const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'contact', path: '/contact-us' },
];
(async () => {
  const browser = await chromium.launch({ headless: true });
  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    for (const route of ROUTES) {
      const url = BASE_URL + route.path;
      console.log('Navigating to ' + url + ' at ' + vp.width + 'x' + vp.height + '...');
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(800);
      const filename = 'header-' + route.name + '-' + vp.name + '.png';
      const outPath = path.join(OUTPUT_DIR, filename);
      await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: vp.width, height: 200 } });
      console.log('  Saved: ' + filename);
    }
    await context.close();
  }
  await browser.close();
  console.log('All screenshots captured.');
})();
