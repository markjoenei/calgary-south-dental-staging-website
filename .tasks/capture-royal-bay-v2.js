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
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    } catch(e2) {
      console.log('Navigation warning: ' + e2.message.slice(0, 80));
    }
  }
  await sleep(3000);
}

// Capture a section by scrolling to it and using a viewport clip (y always 0 based)
async function captureSection(page, scrollY, clipH, filename, viewportW) {
  viewportW = viewportW || 1440;
  await page.evaluate(function(y) { window.scrollTo(0, y); }, scrollY);
  await sleep(500);
  var safeClipH = Math.min(clipH, 900); // viewport height cap
  await page.screenshot({
    path: path.join(SCREENSHOTS_DIR, filename),
    clip: { x: 0, y: 0, width: viewportW, height: safeClipH }
  });
  console.log('SAVED: ' + filename + ' (scroll=' + scrollY + ' clipH=' + safeClipH + ')');
}

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });

  // ── FULL PAGE CAPTURES ──────────────────────────────────────────────────────

  // Desktop
  let page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  console.log('Loading desktop...');
  await gotoPage(page, URL);
  try { await page.keyboard.press('Escape'); } catch(e) {}
  await sleep(800);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'desktop-full.png'), fullPage: true });
  console.log('SAVED: desktop-full.png');

  // Tablet
  let pageT = await browser.newPage();
  await pageT.setViewportSize({ width: 768, height: 1024 });
  console.log('Loading tablet...');
  await gotoPage(pageT, URL);
  await pageT.screenshot({ path: path.join(SCREENSHOTS_DIR, 'tablet-full.png'), fullPage: true });
  console.log('SAVED: tablet-full.png');
  await pageT.close();

  // Mobile
  let pageM = await browser.newPage();
  await pageM.setViewportSize({ width: 375, height: 812 });
  console.log('Loading mobile...');
  await gotoPage(pageM, URL);
  await pageM.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-full.png'), fullPage: true });
  console.log('SAVED: mobile-full.png');

  // Mobile menu
  var hamburgerSelectors = [
    'button[aria-label*="menu" i]', 'button[aria-label*="nav" i]',
    '.hamburger', '.burger', '.menu-toggle', '.nav-toggle',
    '[class*="hamburger"]', '[class*="mobile-menu"]', '[class*="menu-icon"]',
    'button.navbar-toggler', '.navbar-toggle', '[class*="toggle"]', 'button[class*="menu"]'
  ];
  var mobileMenuFound = false;
  for (var i = 0; i < hamburgerSelectors.length; i++) {
    try {
      var el = await pageM.$(hamburgerSelectors[i]);
      if (el && await el.isVisible()) {
        await el.click();
        await sleep(1000);
        await pageM.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-menu-open.png') });
        console.log('SAVED: mobile-menu-open.png (via ' + hamburgerSelectors[i] + ')');
        mobileMenuFound = true;
        break;
      }
    } catch(e) {}
  }
  if (!mobileMenuFound) {
    // Dump visible buttons to find toggle
    var mBtns = await pageM.evaluate(function() {
      return Array.from(document.querySelectorAll('button, [role="button"], a[class*="toggle"], .toggle')).slice(0, 20).map(function(el) {
        var r = el.getBoundingClientRect();
        return { tag: el.tagName, cls: el.className.slice(0,60), text: el.textContent.trim().slice(0,30), visible: r.width > 0 && r.height > 0 };
      });
    });
    console.log('Mobile interactive elements: ' + JSON.stringify(mBtns, null, 2));
  }
  await pageM.close();

  // ── DESKTOP SECTION CAPTURES ───────────────────────────────────────────────

  await page.setViewportSize({ width: 1440, height: 900 });
  console.log('Reloading desktop for section captures...');
  await gotoPage(page, URL);

  var pageHeight = await page.evaluate(function() { return document.body.scrollHeight; });
  console.log('Page height: ' + pageHeight);

  // Nav
  await page.evaluate(function() { window.scrollTo(0, 0); });
  await sleep(300);
  var navH = 120;
  var navEl = await page.$('header') || await page.$('nav') || await page.$('.header');
  if (navEl) {
    var nb = await navEl.boundingBox();
    if (nb) navH = Math.round(nb.height) + 20;
  }
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-default.png'), clip: { x: 0, y: 0, width: 1440, height: navH } });
  console.log('SAVED: nav-default.png (navH=' + navH + ')');

  // Nav scrolled
  await page.evaluate(function() { window.scrollTo(0, 400); });
  await sleep(800);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-scrolled.png'), clip: { x: 0, y: 0, width: 1440, height: navH } });
  console.log('SAVED: nav-scrolled.png');

  // Nav hover
  await page.evaluate(function() { window.scrollTo(0, 0); });
  await sleep(300);
  var navLinks = await page.$$('header a, nav a');
  if (navLinks.length > 1) {
    await navLinks[1].hover();
    await sleep(400);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'nav-hover.png'), clip: { x: 0, y: 0, width: 1440, height: navH } });
    console.log('SAVED: nav-hover.png');
  }

  // Hero - first viewport
  await page.evaluate(function() { window.scrollTo(0, 0); });
  await sleep(500);
  // Check if there's a dedicated hero element
  var heroEl = await page.$('#hero, .hero, [class*="hero"], .banner, #banner, [class*="banner"]');
  if (heroEl) {
    var hb = await heroEl.boundingBox();
    if (hb && hb.height > 150) {
      // Scroll to make the hero top align with viewport
      await page.evaluate(function(top) { window.scrollTo(0, Math.max(0, top)); }, hb.y);
      await sleep(400);
      var heroClipH = Math.min(hb.height, 900);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'desktop-hero.png'), clip: { x: 0, y: 0, width: 1440, height: heroClipH } });
      console.log('SAVED: desktop-hero.png (hero element h=' + hb.height + ')');
    } else {
      await page.evaluate(function() { window.scrollTo(0, 0); });
      await sleep(300);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'desktop-hero.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
      console.log('SAVED: desktop-hero.png (first viewport)');
    }
  } else {
    await page.evaluate(function() { window.scrollTo(0, 0); });
    await sleep(300);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'desktop-hero.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
    console.log('SAVED: desktop-hero.png (first viewport fallback)');
  }

  // ── DISCOVER SECTIONS ────────────────────────────────────────────────────────
  var sectionData = await page.evaluate(function() {
    var candidates = Array.from(document.querySelectorAll('.x-section, section, [class*="x-section"], main > div'));
    var results = [];
    var seen = new Set();
    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];
      var rect = el.getBoundingClientRect();
      var absTop = Math.round(rect.top + window.scrollY);
      var key = absTop + '-' + el.offsetHeight;
      if (seen.has(key)) continue;
      seen.add(key);
      if (el.offsetHeight > 80 && rect.width > 300) {
        results.push({
          id: el.id || '',
          classes: (el.className || '').toString().slice(0, 100),
          top: absTop,
          height: el.offsetHeight
        });
      }
    }
    return results.slice(0, 30);
  });

  console.log('Sections: ' + sectionData.length);
  sectionData.forEach(function(s, i) {
    console.log('  [' + i + '] top=' + s.top + ' h=' + s.height + ' id="' + s.id + '" c="' + s.classes.slice(0, 60) + '"');
  });

  // Capture sections by scrolling to them and shooting the viewport
  var lastBottom = 0;
  var secIdx = 0;
  for (var i = 0; i < sectionData.length; i++) {
    var sec = sectionData[i];
    if (sec.top < lastBottom - 100) continue; // skip overlapping

    var labelRaw = sec.id ? sec.id : (sec.classes.split(' ').find(function(c) { return c.length > 2 && !/^me-|^e\d/.test(c); }) || ('sec-' + secIdx));
    var label = labelRaw.replace(/[^a-zA-Z0-9-_]/g, '-').replace(/-+/g, '-').slice(0, 40);
    var fname = 'section-' + secIdx + '-' + label + '.png';

    // Scroll to the top of this section
    var scrollTarget = Math.max(0, sec.top - navH);
    await page.evaluate(function(y) { window.scrollTo(0, y); }, scrollTarget);
    await sleep(500);

    // Capture at most 2 viewports of content if section is very tall
    var totalH = sec.height;
    if (totalH <= 900) {
      var clipH = Math.min(totalH + 40, 900);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, fname), clip: { x: 0, y: 0, width: 1440, height: clipH } });
      console.log('SAVED: ' + fname);
    } else {
      // Tall section — take two shots
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, fname), clip: { x: 0, y: 0, width: 1440, height: 900 } });
      console.log('SAVED: ' + fname + ' (top half of tall section)');
      // Second half
      var fname2 = 'section-' + secIdx + '-' + label + '-cont.png';
      await page.evaluate(function(y) { window.scrollTo(0, y); }, scrollTarget + 860);
      await sleep(400);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, fname2), clip: { x: 0, y: 0, width: 1440, height: 900 } });
      console.log('SAVED: ' + fname2);
    }

    lastBottom = sec.top + sec.height;
    secIdx++;
  }

  // ── SCROLL CHUNKS ─────────────────────────────────────────────────────────
  var chunks = Math.ceil(pageHeight / 900);
  if (chunks > 14) chunks = 14;
  for (var i = 0; i < chunks; i++) {
    await page.evaluate(function(y) { window.scrollTo(0, y); }, i * 900);
    await sleep(400);
    var pad = i < 10 ? '0' + i : '' + i;
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'scroll-chunk-' + pad + '.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
    console.log('SAVED: scroll-chunk-' + pad + '.png');
  }

  // ── FOOTER ──────────────────────────────────────────────────────────────────
  await page.evaluate(function() { window.scrollTo(0, document.body.scrollHeight); });
  await sleep(600);
  var footerEl = await page.$('footer') || await page.$('#footer') || await page.$('.footer') || await page.$('[class*="footer"]');
  if (footerEl) {
    var fb = await footerEl.boundingBox();
    if (fb) {
      await page.evaluate(function(y) { window.scrollTo(0, y); }, Math.max(0, fb.y - 20));
      await sleep(400);
      await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section-footer.png'), clip: { x: 0, y: 0, width: 1440, height: Math.min(fb.height + 20, 900) } });
      console.log('SAVED: section-footer.png (h=' + fb.height + ')');
    }
  } else {
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'section-footer.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
    console.log('SAVED: section-footer.png (fallback)');
  }

  // ── BUTTON COMPONENTS ────────────────────────────────────────────────────
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
  for (var i = 0; i < btnSelectors.length && !btnSaved; i++) {
    try {
      var btns = await page.$$(btnSelectors[i]);
      for (var bi = 0; bi < btns.length && !btnSaved; bi++) {
        var bBox = await btns[bi].boundingBox();
        if (bBox && bBox.width > 40 && bBox.height > 15) {
          // Scroll element into view
          await btns[bi].scrollIntoViewIfNeeded();
          await sleep(400);
          bBox = await btns[bi].boundingBox();
          if (!bBox) continue;
          var bx = Math.max(0, bBox.x - 10), by = Math.max(0, bBox.y - 10);
          var bw = bBox.width + 20, bh = bBox.height + 20;
          // Make sure clip is within viewport
          if (by + bh > 900) { by = Math.max(0, 900 - bh); }
          await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-button-primary.png'), clip: { x: bx, y: by, width: bw, height: bh } });
          console.log('SAVED: component-button-primary.png');
          await btns[bi].hover();
          await sleep(400);
          await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-button-hover.png'), clip: { x: bx, y: by, width: bw, height: bh } });
          console.log('SAVED: component-button-hover.png');
          btnSaved = true;
        }
      }
    } catch(e) {}
  }

  // All clickable links for button discovery if no standard btn found
  if (!btnSaved) {
    var allLinks = await page.evaluate(function() {
      return Array.from(document.querySelectorAll('a')).slice(0, 30).map(function(el) {
        return { text: el.textContent.trim().slice(0, 40), href: el.href.slice(0, 60), cls: el.className.slice(0, 60) };
      });
    });
    console.log('All links sample: ' + JSON.stringify(allLinks.slice(0, 10)));
  }

  // ── SERVICE CARDS ─────────────────────────────────────────────────────────
  var cardSelectors = ['.service-card', '[class*="service-card"]', '[class*="service-item"]', '.card', '[class*="card-"]'];
  for (var i = 0; i < cardSelectors.length; i++) {
    try {
      var cards = await page.$$(cardSelectors[i]);
      if (cards.length > 0) {
        await cards[0].scrollIntoViewIfNeeded();
        await sleep(400);
        var cBox = await cards[0].boundingBox();
        if (cBox && cBox.height > 50 && cBox.width > 80) {
          var cx = Math.max(0, cBox.x - 5);
          var cy = Math.max(0, cBox.y - 5);
          if (cy + cBox.height + 10 > 900) cy = Math.max(0, 900 - cBox.height - 10);
          await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-service-card.png'), clip: { x: cx, y: cy, width: Math.min(cBox.width + 10, 600), height: Math.min(cBox.height + 10, 900) } });
          console.log('SAVED: component-service-card.png');
          break;
        }
      }
    } catch(e) {}
  }

  // ── TESTIMONIAL CARDS ─────────────────────────────────────────────────────
  var testSelectors = ['.testimonial', '[class*="testimonial"]', '.review', '[class*="review"]', '.quote', '[class*="quote"]'];
  for (var i = 0; i < testSelectors.length; i++) {
    try {
      var testEls = await page.$$(testSelectors[i]);
      if (testEls.length > 0) {
        await testEls[0].scrollIntoViewIfNeeded();
        await sleep(400);
        var tBox = await testEls[0].boundingBox();
        if (tBox && tBox.height > 50) {
          var tx = Math.max(0, tBox.x - 5);
          var ty = Math.max(0, tBox.y - 5);
          if (ty + tBox.height + 10 > 900) ty = Math.max(0, 900 - tBox.height - 10);
          await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'component-testimonial-card.png'), clip: { x: tx, y: ty, width: Math.min(tBox.width + 10, 700), height: Math.min(tBox.height + 10, 900) } });
          console.log('SAVED: component-testimonial-card.png');
          break;
        }
      }
    } catch(e) {}
  }

  // ── KEYWORD SECTIONS ──────────────────────────────────────────────────────
  await page.evaluate(function() { window.scrollTo(0, 0); });
  await sleep(300);
  var keywordSections = [
    { keywords: ['service', 'services', 'treatment', 'dental-care', 'our-services'], name: 'section-services' },
    { keywords: ['about', 'team', 'doctor', 'dentist', 'our-team', 'meet'], name: 'section-about' },
    { keywords: ['testimonial', 'review', 'patient', 'feedback'], name: 'section-testimonials' },
    { keywords: ['gallery', 'photo', 'before-after'], name: 'section-gallery' },
    { keywords: ['contact', 'location', 'address', 'appointment', 'book'], name: 'section-contact' },
    { keywords: ['faq', 'question', 'ask', 'frequently'], name: 'section-faq' },
    { keywords: ['insurance', 'payment', 'finance', 'financing'], name: 'section-insurance' }
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
            await page.evaluate(function(y) { window.scrollTo(0, Math.max(0, y - 20)); }, kwBox.y);
            await sleep(500);
            var kwClipH = Math.min(kwBox.height + 40, 900);
            await page.screenshot({ path: path.join(SCREENSHOTS_DIR, ks.name + '.png'), clip: { x: 0, y: 0, width: 1440, height: kwClipH } });
            console.log('SAVED: ' + ks.name + '.png');
            break;
          }
        }
      } catch(e) {}
    }
  }

  await browser.close();
  console.log('ALL DONE');
})().catch(function(err) {
  console.error('FATAL ERROR: ' + err.message);
  console.error(err.stack);
  process.exit(1);
});
