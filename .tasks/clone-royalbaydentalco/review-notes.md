# QA Review — 2026-05-10T18:00:00Z

**Original:** https://royalbaydentalco.ca/
**Clone:** http://localhost:3000/
**Iteration:** 3

STATUS: ACCEPTABLE

---

## Iteration 3 Fix Verification

All 4 requested Iteration 3 fixes are confirmed applied and working:

| # | Fix | Result |
|---|-----|--------|
| 1 | Carousel arrows flank the cards (left edge / right edge, vertically centered) | CONFIRMED — `position: absolute; left: -60px; top: 50%; transform: translateY(-50%)` and `right: -60px` equivalent on right arrow. Arrows appear on card sides, centered to card grid height. |
| 2 | "Patients Love" italic / "IT HERE" upright | CONFIRMED — DOM: first `<span>` has `font-style: italic`, second `<span>` has no override (upright). Renders correctly in screenshot. |
| 3 | Location pin SVG before the address in top utility bar | CONFIRMED — DOM: `header p svg` present, map-pin path `d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"` confirmed. |
| 4 | Testimonial cards use inline gold SVG stars, not the dark PNG | CONFIRMED — `GoldStars` component renders 5 inline SVGs with `fill="#d8a986"` (brand gold). Stars appear warm gold in screenshot. 3 instances (one per visible card) confirmed. |

---

## Critical Issues (0)

None. All sections present, all images load, no JS console errors, no route failures.

---

## Major Issues (0)

The two Major issues from the previous iteration 2 review (arrow positioning and italic heading) are both resolved. No new Major issues introduced.

---

## Minor Issues (3)

### 1. Carousel arrow Y-position — centered to cards rather than between heading and cards
**Section:** Section 11 — Testimonials carousel
**Expected:** In `section-11-x-section.png` (original), the arrows sit at the Y-position that falls between the Google rating row and the top edge of the cards — roughly in the whitespace gap above the card grid. Visually the arrows appear to float in the area just before the cards begin.
**Actual:** Clone arrows are at `top: 50%` of the relative wrapper that wraps only the card grid, so they are vertically centered to the card height (mid-card), not above the cards in the gap. The arrows are slightly overlapping the upper portion of the cards on the left/right instead of appearing cleanly above them.
**Fix:** Expand the `position: relative` wrapper to include the whitespace between the heading block and the cards (i.e., move the arrow buttons into a wrapper that spans from the heading to the card bottom), or adjust `top` to a value like `top: -30px` (negative offset so arrows sit above card top edge). This is cosmetic — arrows are functional and flanking as intended.

### 2. Address in top utility bar — mixed case vs. all-caps in original
**Section:** Navigation Row 1 — address text
**Expected:** Original screenshots show "345B LATORIA BLVD #202, VICTORIA, BC, V9C 0S9" in ALL CAPS (WordPress theme applies `text-transform: uppercase` to this element).
**Actual:** Clone renders "345B Latoria Blvd #202, Victoria, BC, V9C 0S9" in mixed/sentence case. This is a pre-existing issue from iterations 1 and 2.
**Fix:** Add `textTransform: "uppercase"` to the address `<p>` element's inline style. This is a one-line change.

### 3. Extra "Learn more" CTA links in Sections 3 and 4
**Section:** Section 3 (Transforming Your Dental Experience) and Section 4 (NOW HIRING)
**Expected:** Original sections 3 and 4 end with just the body text — no arrow CTA link below them.
**Actual:** Clone appends an `<InlineLink>Learn more</InlineLink>` arrow button at the bottom of both sections. These don't exist in the original. This is a pre-existing issue from iteration 1.
**Fix:** Remove the `<InlineLink href="#">Learn more</InlineLink>` from both Section 3 and Section 4 JSX blocks.

---

## What's Working

- All 4 Iteration 3 fixes verified and rendering correctly
- Header two-row layout: Row 1 (utility bar, 46px) and Row 2 (main nav, 53px), both transparent, overlaying hero
- "Book Online Here" top bar button: white bg, white border, dark text — correct
- Nav links: Poppins 16px, correct order, chevrons on GENERAL DENTISTRY / INVISALIGN / COSMETIC DENTISTRY / ABOUT — correct
- Phone button in nav: gold `#d8a986` outline, phone icon prefix, transparent bg — correct
- Location pin SVG before address — iteration 3 fix verified
- Hero section: 753px, video + dark overlay, all text (eyebrow / H2 / H1 / H3), Google rating row, dental icon, gold CTA button
- Hero "Patients Love" heading: italic on "Patients Love", upright on "IT HERE" — iteration 3 fix verified
- Carousel arrows flanking cards at left/right edges, vertically centered — iteration 3 fix verified
- Testimonial gold SVG stars (`#d8a986`, 5 per card) — iteration 3 fix verified
- Testimonial card layout: quote glyph → body text → gold stars → reviewer name — correct
- Testimonial card backgrounds: center `rgb(211,198,188)` solid, flanking `rgba(211,198,188,0.35)` — correct
- Emergency strip: `#d3c6bc` bg, correct copy, "Get Urgent Help" dark button
- Section 2 (Creating Beautiful Smiles): two-column, image left, "OUR COMMUNITY" eyebrow, correct copy, "Meet the team" InlineLink
- Section 3 (Transforming): `#d3c6bc` greige bg, padding-top 28.8px, decorative vertical watermark at right edge
- Section 4 (NOW HIRING): white bg, correct H2 and body copy
- Section 5 (General Dentistry): two-column, rotated "GENERAL DENTISTRY" vertical label, "SERVICES" eyebrow, "Comprehensive General Dentistry" H2
- All 4 General Dentistry service cards: 294×440px, correct images, gradient overlay, H2 titles, "Read more"
- Premier Dental Care CTA panel: full-bleed `#d3c6bc`, correct copy, InlineLink arrow circle
- Section 7 (Always Welcoming New Patients): "Royal Bay Dental Co." eyebrow, uppercase H2, "Contact us" InlineLink
- Section 8 (Invisalign): split bg image layout (left 644px / right 307px), right text column with eyebrow + H2 + body + "Continue reading"
- Section 9 (Cosmetic Dentistry): two-column, rotated "Cosmetic DENTISTRY" label, correct copy
- All 4 Cosmetic service cards: correct images and titles
- World Class Oral Care CTA panel: full-bleed `#d3c6bc`, uppercase H2, "Cosmetic dentistry" InlineLink
- Contact section: Google Maps iframe 690×600px, "GET IN TOUCH" eyebrow, address / phone / email / hours / Instagram icon
- Footer: logo-dark.png, 4 nav links with correct hrefs, Instagram icon right-aligned, hr divider, copyright text
- All InlineLink arrow circles: 28×28px, `#141f2e` bg, white arrow — correct
- Eyebrow component: `#d8a986`, 14px Playfair weight 800, 5.6px letter-spacing, uppercase — correct throughout
- All buttons: `border-radius: 0` square corners — correct
- All hover transitions: 0.3s cubic-bezier(0.4, 0, 0.2, 1) — correct
- No JS errors, all images load
