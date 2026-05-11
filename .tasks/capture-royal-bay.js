const { chromium } = require('playwright');
const path = require('path');

const SCREENSHOTS_DIR = 'C:\\Users\\markj\\Desktop\\Claude-Projects\\Done Claude Ai Dental Websites\\calgary-south-dental-ai-website\\.tasks\\clone-royalbaydentalco\\screenshots';
const URL = 'https://royalbaydentalco.ca/';

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function gotoPage(page, url) {
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  } catch(e) {
    // If load times out, try domcontentloaded
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    } catch(e2) {
      console.log('Navigation warning: ' + e2.message.slice(0, 100));
    }
  }
  await sleep(3000); // extra wait for JS/fonts/images
}

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-web-security'] });

  // DESKTOP FULL PAGE
  let page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  console.log('Loading desktop...');
  await gotoPage(page, URL);
  try { await page.keyboard.press('Escape'); } catch(e) {}
  await sleep(1000);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'desktop-full.png'), fullPage: true });
  console.log('SAVED: desktop-full.png');

  // TABLET FULL PAGE
  let pageT = await browser.newPage();
  await pageT.setViewportSize({ width: 768, height: 1024 });
  console.log('Loading tablet...');
  await gotoPage(pageT, URL);
  await pageT.screenshot({ path: path.join(SCREENSHOTS_DIR, 'tablet-full.png'), fullPage: true });
  console.log('SAVED: tablet-full.png');
  await pageT.close();

  // MOBILE FULL PAGE
  let pageM = await browser.newPage();
  await pageM.setViewportSize({ width: 375, height: 812 });
  console.log('Loading mobile...');
  await gotoPage(pageM, URL);
  await pageM.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-full.png'), fullPage: true });
  console.log('SAVED: mobile-full.png');

  // MOBILE MENU OPEN
  var hamburgerSelectors = [
    'button[aria-label*="menu" i]',
    'button[aria-label*="nav" i]',
    '.hamburger', '.burger', '.menu-toggle', '.nav-toggle',
    '[class*="hamburger"]', '[class*="mobile-menu"]', '[class*="menu-icon"]',
    'button.navbar-toggler', '.navbar-toggle',
    '[class*="toggle"]',
    'button[class*="menu"]'
  ];
  var mobileMenuFound = false;
  for (var i = 0; i < hamburgerSelectors.length; i++) {
    try {
      var el = await pageM.$(hamburgerSelectors[i]);
      if (el) {
        var vis = await el.isVisible();
        if (vis) {
          await el.click();
          await sleep(1000);
          await pageM.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-menu-open.png') });
          console.log('SAVED: mobile-menu-open.png (via ' + hamburgerSelectors[i] + ')');
          mobileMenuFound = true;
          break;
        }
      }
    } catch(e) {}
  }
  if (!mobileMenuFound) {
    console.log('INFO: mobile menu trigger not found by selectors');
    // Try to log clickable buttons visible on mobile
    var mobileButtons = await pageM.evaluate(function() {
      return Array.from(document.querySelectorAll('button, [role="button"]')).map(function(el) {
        return { tag: el.tagName, classes: el.className, text: el.textContent.slice(0,30), aria: el.getAttribute('aria-label') };
      }).slice(0, 15);
    });
    console.log('Mobile buttons found: ' + JSON.stringify(mobileButtons));
  }
  await pageM.close();

  // BACK TO DESKTOP
  await page.setViewportSize({ width: 1440, height: 900 });
  console.log('Reloading desktop for section captures...');
  await gotoPage(page, URL);

  // NAV DEFAULT
  await page.evaluate(function() { window.scrollTo(0, 0); });
  await sleep(300);
  var navSelectors = ['header', 'nav', '#header', '.header', '.navbar', '[role="navigation"]'];
  var navHeight = 120;
  for (var i = 0; i < navSelectors.length; i++) {
    try {
      var navEl = await page.$(navSelectors[i]);
      if (navEl) {
        var navBox = await navEl.boundingBox();
        if (navBox && navBox.height > 30) { navHeight = Math.round(navBox.height) + 20; break; }
      }
    } catch(e) {}
  }
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-default.png'), clip: { x: 0, y: 0, width: 1440, height: navHeight } });
  console.log('SAVED: nav-default.png (height=' + navHeight + ')');

  // NAV SCROLLED
  await page.evaluate(function() { window.scrollTo(0, 400); });
  await sleep(800);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-scrolled.png'), clip: { x: 0, y: 0, width: 1440, height: navHeight } });
  console.log('SAVED: nav-scrolled.png');

  // NAV HOVER
  await page.evaluate(function() { window.scrollTo(0, 0); });
  await sleep(300);
  var navLinkSels = ['nav a', 'header a', '.navbar a', '.nav-link', '.menu-item a'];
  for (var i = 0; i < navLinkSels.length; i++) {
    try {
      var links = await page.$$(navLinkSels[i]);
      if (links.length > 1) {
        await links[1].hover();
        await sleep(400);
        await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-hover.png'), clip: { x: 0, y: 0, width: 1440, height: navHeight } });
        console.log('SAVED: nav-hover.png');
        break;
      }
    } catch(e) {}
  }

  // HERO SECTION
  await page.evaluate(function() { window.scrollTo(0, 0); });
  await sleep(500);
  var heroSelectors = ['#hero', '.hero', '[class*="hero"]', '.banner', '#banner', '[class*="banner"]', 'section:first-of-type', '.home-hero', '.page-hero'];
  var heroSaved = false;
  for (var i = 0; i < heroSelectors.length; i++) {
    try {
      var heroEl = await page.$(heroSelectors[i]);
      if (heroEl) {
        var heroBox = await heroEl.boundingBox();
        if (heroBox && heroBox.height > 150) {
          await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'desktop-hero.png'), clip: { x: 0, y: heroBox.y, width: 1440, height: heroBox.height } });
          console.log('SAVED: desktop-hero.png (selector=' + heroSelectors[i] + ' h=' + heroBox.height + ')');
          heroSaved = true;
          break;
        }
      }
    } catch(e) {}
  }
  if (!heroSaved) {
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'desktop-hero.png') });
    console.log('SAVED: desktop-hero.png (viewport fallback)');
  }

  // GET PAGE HEIGHT
  var pageHeight = await page.evaluate(function() { return document.body.scrollHeight; });
  console.log('Page height: ' + pageHeight);

  // DISCOVER SECTIONS
  var sectionData = await page.evaluate(function() {
    var candidates = Array.from(document.querySelectorAll('section, main > div, [class*="section"], [id*="section"], article'));
    var results = [];
    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];
      var r = el.getBoundingClientRect();
      var absTop = r.top + window.scrollY;
      if (el.offsetHeight > 80 && r.width > 300) {
        results.push({
          id: el.id || '',
          classes: (el.className || '').toString().slice(0, 120),
          top: Math.round(absTop),
          height: el.offsetHeight,
          width: el.offsetWidth
        });
      }
    }
    return results.slice(0, 35);
  });

  console.log('Sections discovered: ' + sectionData.length);
  sectionData.forEach(function(s, i) {
    console.log('  [' + i + '] top=' + s.top + ' h=' + s.height + ' id="' + s.id + '" classes="' + s.classes.slice(0, 70) + '"');
  });

  // Capture unique sections
  var lastBottom = 0;
  var sectionIndex = 0;
  for (var i = 0; i < sectionData.length; i++) {
    var sec = sectionData[i];
    if (sec.top < lastBottom - 100) continue;
    var labelRaw = sec.id ? sec.id : (sec.classes.split(' ').find(function(c) { return c.length > 2; }) || ('sec-' + sectionIndex));
    var label = labelRaw.replace(/[^a-zA-Z0-9-_]/g, '-').replace(/-+/g, '-').slice(0, 40);
    var fname = 'section-' + sectionIndex + '-' + label + '.png';
    await page.evaluate(function(top) { window.scrollTo(0, Math.max(0, top - 20)); }, sec.top);
    await sleep(500);
    var clipH = Math.min(sec.height + 40, 1400);
    await page.screenshot({
      path: path.join(SCREENSHOTS_DIR, fname),
      clip: { x: 0, y: sec.top, width: 1440, height: clipH }
    });
    console.log('SAVED: ' + fname);
    lastBottom = sec.top + clipH;
    sectionIndex++;
  }

  // VIEWPORT SCROLL CHUNKS
  var viewportH = 900;
  var chunks = Math.ceil(pageHeight / viewportH);
  if (chunks > 14) chunks = 14;
  for (var i = 0; i < chunks; i++) {
    await page.evaluate(function(y) { window.scrollTo(0, y); }, i * viewportH);
    await sleep(400);
    var pad = i < 10 ? '0' + i : '' + i;
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'scroll-chunk-' + pad + '.png') });
    console.log('SAVED: scroll-chunk-' + pad + '.png');
  }

  // FOOTER
  await page.evaluate(function() { window.scrollTo(0, document.body.scrollHeight); });
  await sleep(600);
  var footerSelectors = ['footer', '#footer', '.footer', '[class*="footer"]'];
  var footerSaved = false;
  for (var i = 0; i < footerSelectors.length; i++) {
    try {
      var ftEl = await page.$(footerSelectors[i]);
      if (ftEl) {
        var ftBox = await ftEl.boundingBox();
        if (ftBox && ftBox.height > 30) {
          await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section-footer.png'), clip: { x: 0, y: ftBox.y, width: 1440, height: ftBox.height } });
          console.log('SAVED: section-footer.png (h=' + ftBox.height + ')');
          footerSaved = true;
          break;
        }
      }
    } catch(e) {}
  }
  if (!footerSaved) {
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section-footer.png') });
    console.log('SAVED: section-footer.png (fallback)');
  }

  // BUTTON COMPONENTS
  await page.evaluate(function() { window.scrollTo(0, 0); });
  await sleep(400);
  var btnSelectors = [
    'a.btn', 'button.btn', 'a[class*="btn"]', 'button[class*="btn"]',
    '.button', 'a[class*="button"]', 'button[class*="button"]',
    '.cta-button', 'a[class*="cta"]',
    '.wp-block-button__link',
    'a[href*="appointment"]', 'a[href*="book"]'
  ];
  var btnSaved = false;
  for (var i = 0; i < btnSelectors.length; i++) {
    try {
      var btns = await page.$$(btnSelectors[i]);
      for (var bi = 0; bi < btns.length; bi++) {
        var bBox = await btns[bi].boundingBox();
        if (bBox && bBox.width > 40 && bBox.height > 15) {
          await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-button-primary.png'), clip: { x: Math.max(0, bBox.x - 10), y: Math.max(0, bBox.y - 10), width: bBox.width + 20, height: bBox.height + 20 } });
          console.log('SAVED: component-button-primary.png (selector=' + btnSelectors[i] + ')');
          await btns[bi].hover();
          await sleep(400);
          await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-button-hover.png'), clip: { x: Math.max(0, bBox.x - 10), y: Math.max(0, bBox.y - 10), width: bBox.width + 20, height: bBox.height + 20 } });
          console.log('SAVED: component-button-hover.png');
          btnSaved = true;
          break;
        }
      }
      if (btnSaved) break;
    } catch(e) {}
  }

  // SERVICE CARDS
  var cardSelectors = ['.service-card', '[class*="service-card"]', '[class*="service-item"]', '.card', '[class*="card-"]', '.services-grid .item'];
  for (var i = 0; i < cardSelectors.length; i++) {
    try {
      var cards = await page.$$(cardSelectors[i]);
      if (cards.length > 0) {
        await cards[0].scrollIntoViewIfNeeded();
        await sleep(400);
        var cBox = await cards[0].boundingBox();
        if (cBox && cBox.height > 50 && cBox.width > 80) {
          await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-service-card.png'), clip: { x: Math.max(0, cBox.x - 5), y: Math.max(0, cBox.y - 5), width: Math.min(cBox.width + 10, 600), height: cBox.height + 10 } });
          console.log('SAVED: component-service-card.png (selector=' + cardSelectors[i] + ')');
          break;
        }
      }
    } catch(e) {}
  }

  // TESTIMONIAL CARDS
  var testSelectors = ['.testimonial', '[class*="testimonial"]', '.review', '[class*="review"]', '.quote', '[class*="quote"]'];
  for (var i = 0; i < testSelectors.length; i++) {
    try {
      var testEls = await page.$$(testSelectors[i]);
      if (testEls.length > 0) {
        await testEls[0].scrollIntoViewIfNeeded();
        await sleep(400);
        var tBox = await testEls[0].boundingBox();
        if (tBox && tBox.height > 50) {
          await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-testimonial-card.png'), clip: { x: Math.max(0, tBox.x - 5), y: Math.max(0, tBox.y - 5), width: Math.min(tBox.width + 10, 700), height: tBox.height + 10 } });
          console.log('SAVED: component-testimonial-card.png (selector=' + testSelectors[i] + ')');
          break;
        }
      }
    } catch(e) {}
  }

  // KEYWORD-BASED SECTION CAPTURES
  await page.evaluate(function() { window.scrollTo(0, 0); });
  await sleep(300);
  var keywordSections = [
    { keywords: ['service', 'services', 'treatment', 'dental-care', 'our-services'], name: 'section-services' },
    { keywords: ['about', 'team', 'doctor', 'dentist', 'our-team', 'meet'], name: 'section-about' },
    { keywords: ['testimonial', 'review', 'patient', 'feedback'], name: 'section-testimonials' },
    { keywords: ['gallery', 'photo', 'before-after', 'before_after'], name: 'section-gallery' },
    { keywords: ['contact', 'location', 'address', 'appointment', 'book'], name: 'section-contact' },
    { keywords: ['faq', 'question', 'ask', 'frequently'], name: 'section-faq' },
    { keywords: ['insurance', 'payment', 'finance', 'financing'], name: 'section-insurance' },
    { keywords: ['welcome', 'intro', 'about-us', 'practice'], name: 'section-intro' }
  ];
  for (var ki = 0; ki < keywordSections.length; ki++) {
    var ks = keywordSections[ki];
    for (var kw = 0; kw < ks.keywords.length; kw++) {
      try {
        var kwSel = '#' + ks.keywords[kw] + ', [id*="' + ks.keywords[kw] + '"], [class*="' + ks.keywords[kw] + '"]';
        var kwEl = await page.$(kwSel);
        if (kwEl) {
          var kwBox = await kwEl.boundingBox();
          if (kwBox && kwBox.height > 100) {
            await page.evaluate(function(top) { window.scrollTo(0, Math.max(0, top - 20)); }, kwBox.y);
            await sleep(500);
            var kwClipH = Math.min(kwBox.height + 40, 1400);
            await page.screenshot({ path: path.join(SCREENSHOTS_DIR, ks.name + '.png'), clip: { x: 0, y: kwBox.y, width: 1440, height: kwClipH } });
            console.log('SAVED: ' + ks.name + '.png (kw=' + ks.keywords[kw] + ' h=' + kwBox.height + ')');
            break;
          }
        }
      } catch(e) {}
    }
  }

  await browser.close();
  console.log('ALL DONE');
})().catch(function(err) { console.error('FATAL ERROR: ' + err.message + '\n' + err.stack); process.exit(1); });
