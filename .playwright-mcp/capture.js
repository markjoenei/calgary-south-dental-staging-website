const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  // Capture top 60px (teal utility bar)
  const screenshotBuffer = await page.screenshot({ clip: { x: 0, y: 0, width: 1440, height: 60 } });
  const outPath = path.join(__dirname, 'header-socials.png');
  fs.writeFileSync(outPath, screenshotBuffer);
  console.log('Screenshot saved to:', outPath);

  // Evaluate social links JS
  const result = await page.evaluate(() => {
    const socialLinks = Array.from(document.querySelectorAll('header a[aria-label]')).map(a => ({
      label: a.getAttribute('aria-label'),
      href: a.getAttribute('href')
    }));
    return JSON.stringify(socialLinks);
  });
  console.log('SOCIAL_LINKS_JSON:', result);

  await browser.close();
})();
