# Royal Bay Dental Co. — Clone Reference

**Source URL**: https://royalbaydentalco.ca/
**Captured**: 2026-05-10
**Platform**: WordPress + Cornerstone/X Theme page builder (`.x-section`, `.x-row`, `.x-col`, `.x-div` elements)
**Viewport used for extraction**: 1440 × 900px
**Total page height at 1440px**: ~9,243px

---

## Design System Reference

### Color Palette

All values extracted via `getComputedStyle()` — exact hex, no guesswork.

| Role | Hex | Used in |
|------|-----|---------|
| Text primary | `#141f2e` | Body text, nav links, headings in light sections, button text |
| Text dark | `#1c1c1c` | Testimonial reviewer names, some body divs |
| Text near-black | `rgba(28,28,28,0.85)` | Top bar address paragraph |
| Surface base | `#ffffff` | Body background, footer background, "Book Online Here" top-bar button bg |
| Surface warm | `#d3c6bc` | Emergency CTA strip section background (warm greige) |
| Brand accent / gold | `#d8a986` | "Book Now" button bg, "Book Online Here" hero CTA bg, all button borders, h5 eyebrow labels |
| Text white | `#ffffff` | All text on hero video section (h1, h2, h3), service card headings, "Read more" links on cards |
| Heading dark | `#141f2e` | H2 headings in light sections |
| H5 eyebrow accent | `#d8a986` | Section eyebrow labels (e.g. "Royal Bay Dental Co.", "OUR COMMUNITY", "SERVICES", "GET IN TOUCH") |
| Testimonial reviewer name | `#1c1c1c` | h5 names in testimonials |
| Footer bg | `#ffffff` | Footer section |
| Footer text | `#141f2e` | Footer links, copyright |
| Hero video overlay | `rgba(0,0,0,0.3)` | Dark overlay div covering hero video, full 1440×753px |
| Service card overlay | `linear-gradient(rgba(15,15,15,0), rgba(15,15,15,0.3) 100%)` | Bottom fade on all 8 service/cosmetic cards (294×440px) |

### Typography

**Google Fonts URL** (from `<link>` tags in page source):
```
https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,500,500i,600,600i%7CPoppins:400,400i,700,700i,600,600i&subset=latin,latin-ext&display=swap
```
Two fonts only: **Playfair Display** (serif) and **Poppins** (sans-serif).

| Role | Family | Size | Weight | Line Height | Letter Spacing | Transform |
|------|--------|------|--------|-------------|----------------|-----------|
| H1 | Playfair Display, serif | 20px | 200 | 28px | normal | none |
| H2 hero (main) | Playfair Display, serif | 50px | 500 | 65px | 2px | uppercase |
| H2 sections (light bg) | Playfair Display, serif | 50px | 500 | 65px | 2px | none |
| H2 sections (alt) | Playfair Display, serif | 50px | 500 | 60px | 2px | none |
| H2 emergency strip | Playfair Display, serif | 40px | 500 | 52px | 1.6px | uppercase |
| H2 service cards | Playfair Display, serif | 32px | 500 | 44.8px | 0.64px | uppercase |
| H3 hero subhead | Playfair Display, serif | 20px | 200 | 28px | normal | none |
| H5 eyebrow | Playfair Display, serif | 14px | 800 | 19.6px | 5.6px | uppercase |
| H5 testimonial name | Playfair Display, serif | 20px | 700 | 28px | 6px | uppercase |
| Body / nav links | Poppins, sans-serif | 16px | 400 | 27.2px | normal | none |
| Address in top bar (p) | Playfair Display, serif | 13px | 600 | 13px | normal | none |
| Link labels (p) | Playfair Display, serif | 20px | 600 | 22px | normal | none |
| Link labels white (p) | Playfair Display, serif | 20px | 500 | 28px | normal | none |
| Contact info bold | Playfair Display, serif | 16px | 700 | 22.4px | normal | none |
| Footer nav links | Poppins, sans-serif | 16px | 700 | normal | 0.16px | none |
| Button text | Poppins, sans-serif | 16px | 400 | 27.2px | normal | none |

**Note**: H1 and H3 in the hero share identical styles (20px, weight 200, Playfair Display). H1 reads "Your Local Dentist in Victoria, BC", H3 reads "Cutting-edge dentistry meets personalized, compassionate care."

### Spacing

| Element | Value |
|---------|-------|
| Header total height | 148.5px (≈149px) |
| Top bar row (row 1) | 46px tall |
| Main nav row (row 2) | 53px tall |
| Section padding (standard) | 86.4px top and bottom |
| Emergency strip section | 60px top and bottom |
| Testimonials section padding top | 65px |
| Transforming Experience section padding top | 28.8px |
| NOW HIRING section padding top | 86.4px |
| Container max-width (primary) | 1425px (rendered at ~1296px at 1440px viewport) |
| Top bar container max-width | 1825px, padding 80px L/R |
| Service card dimensions | 294px wide × 440px tall |
| Service card image dimensions | 294px wide × 440.23px tall |
| Main content images (hero/section photos) | 619.95px wide × 728.42px tall |
| Logo width × height | ~191px × 52.5px |
| Hero icon (tooth/dental icon) | 46px wide × 65px tall |
| Testimonial stars icon | 50px wide × 36.58px tall |
| Arrow left/right navigation | 100px wide × 19px tall |
| Invisalign bg left image | 644px wide × 500px tall |
| Invisalign bg right image | 307px wide × 500px tall |
| Google Maps iframe | 690px wide × 600px tall |

### Components

#### Navigation (Two Rows)

Row 1 — Top Utility Bar (46px tall, transparent bg):
- Left: Instagram icon link (SVG icon, no text)
- Center: Address "345B Latoria Blvd #202, Victoria, BC, V9C 0S9" — Playfair Display 13px 600 weight, `rgba(28,28,28,0.85)` color
- Right: "Book Online Here" button — bg `#ffffff`, border `2px solid #ffffff`, color `#141f2e`, Poppins 16px 400 weight, height 46px, width ~215px

Row 2 — Main Nav (53px tall, transparent bg):
- Left: Logo image (`logo-main.png`, ~191×52.5px)
- Center: Navigation links — Poppins 16px 400 weight, color `#141f2e`, dropdown menus for: General Dentistry, Invisalign, Cosmetic Dentistry, About, Contact
- Right: Phone "(778) 653-9426" — border `2px solid #d8a986`, transparent bg; "Book Now" — bg `#d8a986`, border `2px solid #d8a986`, color `#141f2e`

Both rows sit inside the `<header class="x-masthead">` which is `position: relative` (not sticky/fixed). Transparent background — overlaps hero.

Nav transition: `border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

#### Buttons

All buttons have `border-radius: 0px` (square corners).

| Button | bg | border | color | size |
|--------|-----|--------|-------|------|
| "Book Online Here" (top bar) | `#ffffff` | `2px solid #ffffff` | `#141f2e` | 46px tall, ~215px wide |
| "Book Online Here" (hero) | `#d8a986` | `2px solid #d8a986` | `#141f2e` | 40px tall, ~185px wide |
| "Book Now" (nav) | `#d8a986` | `2px solid #d8a986` | `#141f2e` | Poppins 16px 400 |
| Phone "(778) 653-9426" (nav) | transparent | `2px solid #d8a986` | `#141f2e` | Poppins 16px 400 |
| "Get Urgent Help" (emergency strip) | `#1c1c1c` | `2px solid #1c1c1c` | `#141f2e` | Poppins 16px 400 |

**Inline link labels** (used as CTA links below headings):
- "Meet the team", "Learn more", "General dentistry", "Continue reading", "Cosmetic dentistry" — Playfair Display 20px 600 weight, `#000000` color
- "Contact us" — same style
- "Read more" on service cards — Playfair Display 20px 500 weight, `#ffffff` color (on dark card overlay)

#### Service Cards (294×440px)

8 cards total: 4 General Dentistry cards + 4 Cosmetic cards. Each card is an `x-col` with:
- Width: 294px, Height: 440px
- Background: transparent (image fills from `<img>` element inside)
- Image: 294×440px photo, `object-fit: cover`
- Gradient overlay on image: `linear-gradient(rgba(15,15,15,0), rgba(15,15,15,0.3) 100%)` — fades to dark at bottom
- H2 heading: Playfair Display 32px 500 weight, `#ffffff`, letter-spacing 0.64px, uppercase
- "Read more" link: Playfair Display 20px 500 weight, `#ffffff`
- Text positioned at bottom of card over the gradient overlay

**General Dentistry Cards** (4 columns × 1 row):
1. Dental Anxiety And Sedation — image: `dental-anxiety-sedation.webp`
2. DENTAL EMERGENCIES — image: `dental-emergencies.webp`
3. PREVENTATIVE DENTISTRY — image: `preventative-dentistry.webp`
4. DENTAL IMPLANTS — image: `dental-implants.webp`

**Cosmetic Dentistry Cards** (4 columns × 1 row):
1. TEETH WHITENING — image: `teeth-whitening.webp`
2. PORCELAIN VENEERS — image: `porcelain-veneers.webp`
3. COSMETIC BONDING — image: `cosmetic-bonding.webp`
4. GUM CONTOURING — image: `gum-contouring.webp`

#### Testimonial Cards

Testimonial section has a horizontal carousel with left/right arrow navigation (arrow images: `arrow-left.png`, `arrow-right.png`, each 100×19px).

Each testimonial shows:
- Stars icon image (`testimonial-stars-icon.png`, 50×37px) — top of card
- Quote text: long paragraph
- Reviewer name: Playfair Display 20px 700 weight, `#1c1c1c`, letter-spacing 6px, uppercase

6 unique reviewers (carousel repeats them in 3 sets):
1. **Danielle R.** — "It was my daughter's first dentist appointment and she is 3 years old. Royal Bay Dental did an amazing job of making us both feel welcome. They were extremely patient and helpful. We will be coming back!"
2. **Cheryl F.** — "Best dental cleaning I've had in years. Anna was amazing as was the entire team at Royal Bay Dental. So glad my family has made the decision to switch to this dental office. Highly recommend them!!"
3. **Brad W.** — "Dr. Gurek was amazing and it went smoothly and seemed effortless. What an amazing crew and thank you to dental hygienist Anna for getting everything else really dialed in. It was an amazing experience being a brand new office. You all as a team will go far."
4. **kristopher c.** — "Fantastic dental clinic. The staff are very friendly and professional. The service is exceptional especially with the 3D scan of your teeth. They walk you through exactly what they will be doing. As a..."
5. **Rebecca A.** — "Highly recommend this Dental office. All the staff are kind and friendly. They all care about your dental anxieties and sensitivities and go above and beyond to ensure you have a pain free, enjoyable..."
6. **Jane O.** — "Beautiful, light filled office! Front desk staff, Teresa and the rest are bright and welcoming. Dr Gurek has the magic touch. I hardly felt a thing through three fillings! Assistant Lauren is kind and..."

### Animations

All interactive elements share the same transition from computed styles:
```
border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
filter 0.3s cubic-bezier(0.4, 0, 0.2, 1),
transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

Duration: **0.3s**, easing: **cubic-bezier(0.4, 0, 0.2, 1)** (Material Design standard ease).

- Buttons hover: background-color + border-color transition (0.3s)
- Nav links hover: same transitions
- Service cards: likely scale/transform hover (0.3s same easing)
- Testimonial carousel: horizontal slide on arrow click

### Hero Video

- File: `public/videos/royal-bay-runner-hd.mov`
- Original source: `https://royalbaydentalco.ca/wp-content/uploads/2025/06/Royal-Bay-Runner-HD.mov`
- Properties: `autoplay: true`, `muted: true`, `loop: true`
- Computed `object-fit: cover`
- Dimensions: fills full section — 1440px wide × 753px tall at 1440px viewport
- Poster image: `public/images/hero-video-poster.jpg` (original: `https://royalbaydentalco.ca/wp-content/uploads/2024/04/img-banner-video.jpg`)
- Dark overlay: absolute-positioned div covering full video area, bg `rgba(0,0,0,0.3)`, `position: absolute`, same 1440×753px dimensions

---

## Page Structure (Top to Bottom)

### Section 0 — Hero (753px tall)
- **Container**: `.x-section` — 1440×753px, transparent bg, `position: relative`
- **Video layer**: `<video>` autoplay muted loop, `object-fit: cover`, fills 1440×753px
- **Overlay div**: `rgba(0,0,0,0.3)` dark scrim, `position: absolute`, same size as hero
- **Content column**: centered flex column, overlaid on video
  - H5 eyebrow: "Royal Bay Dental Co." — Playfair Display 14px 800 weight `#d8a986`, letter-spacing 5.6px, uppercase
  - H2: "GENERAL AND COSMETIC DENTISTRY" — Playfair Display 50px 500 weight `#ffffff`, letter-spacing 2px, uppercase, line-height 65px
  - H1: "Your Local Dentist in Victoria, BC" — Playfair Display 20px 200 weight `#ffffff`, line-height 28px
  - H3: "Cutting-edge dentistry meets personalized, compassionate care." — Playfair Display 20px 200 weight `#ffffff`, line-height 28px
  - Dental icon image: `public/images/hero-icon.png`, 46×65px
  - CTA Button: "Book Online Here" — bg `#d8a986`, border `2px solid #d8a986`, color `#141f2e`, Poppins 16px 400, height 40px, width ~185px, `border-radius: 0`

### Section 1 — Emergency Strip (316px tall, bg `#d3c6bc`)
- Section padding: 60px top and bottom
- H2: "Dental Emergency? Call Us: (778) 653-9426" — Playfair Display 40px 500 weight `#141f2e`, letter-spacing 1.6px, uppercase, line-height 52px
- Body text: "Royal Bay Dental Co. is here for your dental emergencies with immediate appointments. We prioritize urgent care to ensure you receive prompt and efficient treatment. Contact us now for swift assistance."
- CTA link: "Get Urgent Help" — bg `#1c1c1c`, border `2px solid #1c1c1c`, Poppins 16px 400

### Section 2 — Creating Beautiful Smiles / About (901px tall, id="section-two")
- Section padding: 86.4px top and bottom
- Layout: Two columns — image left, text right
- LEFT column: Large photo `public/images/hero-brighter-smiles.webp` — 619.95×728.42px
- RIGHT column:
  - H5 eyebrow: "OUR COMMUNITY" — `#d8a986`, Playfair Display 14px 800 weight, letter-spacing 5.6px, uppercase
  - H2: "Creating Beautiful Smiles Together" — Playfair Display 50px 500 weight `#141f2e`, letter-spacing 2px, line-height 65px
  - Body text: "We are excited to be a part of the vibrant Royal Bay community and proud to be your trusted [dentist in Victoria, BC]. At Royal Bay Dental Co., we blend advanced dental technology with personalized, compassionate care to provide exceptional dental services for all your needs. Whether you require preventive care, emergency treatment, or cosmetic dentistry, we are here to help. Together, we can achieve your dental well-being and create brighter futures for everyone."
    - Note: "dentist in Victoria, BC" is a linked span inside the paragraph
  - CTA link: "Meet the team" — Playfair Display 20px 600 weight `#000000`

### Section 3 — Transforming Your Dental Experience (527px tall)
- Section padding: 28.8px top
- Layout: Full width text section
- H2: "Transforming Your Dental Experience" — Playfair Display 50px 500 weight `#141f2e`, letter-spacing 2px, line-height 60px
- Body text: "At Royal Bay Dental Co., our commitment goes beyond clinical excellence. We are dedicated to building lasting relationships and becoming an essential part of the Royal Bay community. Our [dentist Victoria, BC] emphasizes open communication, actively listens to your concerns, and collaborates with you to create personalized treatment plans that meet your unique needs. By educating you about your oral health..."
  - Note: "dentist Victoria, BC" is a linked span

### Section 4 — NOW HIRING (352px tall)
- Section padding: 86.4px top
- H2: "NOW HIRING" — Playfair Display 50px 500 weight `#141f2e`, letter-spacing 2px, line-height 60px
- Body text: "Royal Bay Dental Co. is pleased to announce we are accepting applications for building a remarkable team at our brand-new dental practice. If you value hard work and a high degree of accountability in yourself, a positive work environment and meaningful relationships with both team members..."

### Section 5 — Comprehensive General Dentistry (815px tall)
- Section padding: 86.4px top
- Layout: Two columns — text left, large photo right
- LEFT column:
  - H5 eyebrow: "SERVICES" — `#d8a986`, Playfair Display 14px 800 weight, letter-spacing 5.6px, uppercase
  - Vertical rotated label: "GENERAL DENTISTRY" — same eyebrow style, rotated decoratively
  - H2: "Comprehensive General Dentistry" — Playfair Display 50px 500 weight `#141f2e`, letter-spacing 2px, line-height 65px
  - Body text: "At Royal Bay Dental Co, our dentist is equipped to handle a wide range of dental needs, from routine procedures to complex restorations. Our [Victoria dentists] combine the latest technology with personalized care to ensure that each treatment plan aligns with your specific goals. Whether you need regular hygiene maintenance or more extensive dental work, we are here to provide comprehensive solutions for your oral health and a beautiful smile. Experience the difference at our state-of-the-art Victoria dentist near you, where your dental well-being is our top priority."
- RIGHT column: Large photo `public/images/general-dentistry.webp` — 619.95×728.42px

### Section 6 — Premier Dental Care / Service Cards (744px tall)
- Section padding: 28.8px top
- TOP: Four-column service card grid
  - 4 cards, each 294×440px with image + gradient overlay + H2 heading + "Read more" link
  - Cards: Dental Anxiety And Sedation (`dental-anxiety-sedation.webp`), DENTAL EMERGENCIES (`dental-emergencies.webp`), PREVENTATIVE DENTISTRY (`preventative-dentistry.webp`), DENTAL IMPLANTS (`dental-implants.webp`)
- BOTTOM: Center-aligned text block
  - H2: "Premier Dental Care Tailored To Your Needs" — Playfair Display 50px 500 weight `#141f2e`, letter-spacing 2px, line-height 60px
  - Subtext: "Begin your journey to a healthier, more radiant smile with Royal Bay Dental Co."
  - CTA link: "General dentistry" — Playfair Display 20px 600 weight `#000000`

### Section 7 — Always Welcoming New Patients (474px tall)
- Section padding: 86.4px top and bottom
- Background: transparent (white body beneath)
- H5 eyebrow: "Royal Bay Dental Co." — `#d8a986`, Playfair Display 14px 800 weight, letter-spacing 5.6px, uppercase
- H2: "ALWAYS WELCOMING NEW PATIENTS" — Playfair Display 50px 500 weight `#141f2e`, letter-spacing 2px, line-height 60px
- Body: "Experience the Royal Bay Dental Co. difference! Our Dentists Victoria BC accepting new patients and provide personalized treatment plans according to your dental needs. Join our caring dental community today!"
- CTA link: "Contact us" — Playfair Display 20px 600 weight `#000000`

### Section 8 — Invisalign Solutions (648px tall)
- Two background images split left/right:
  - LEFT: `public/images/invisalign-bg-left.jpg` — 644×500px, `background-size: cover`, `background-position: 50% 50%`
  - RIGHT: `public/images/invisalign-bg-right.jpg` — 307×500px, `background-size: cover`, `background-position: 50% 50%`
- RIGHT text column:
  - H5 eyebrow: "Royal Bay Dental Co." — `#d8a986`, Playfair Display 14px 800 weight, letter-spacing 5.6px, uppercase
  - H2: "INVISALIGN Solutions" — Playfair Display 50px 500 weight `#141f2e`, letter-spacing 2px, line-height 60px
  - Body: "Invisalign offers a modern, subtle way to enhance your smile. With flexible, comfortable aligners, our dental team at Royal Bay Dental Co. can straighten your teeth and improve your bite. Enjoy a cleaner, more balanced, and radiant smile with Invisalign!"
  - CTA link: "Continue reading" — Playfair Display 20px 600 weight `#000000`
  - Link href: `https://royalbaydentalco.ca/victoria-bc/invisalign/`

### Section 9 — Transformative Cosmetic Dentistry (815px tall)
- Section padding: 86.4px top
- Layout: Two columns — text left, large photo right
- LEFT column:
  - H5 eyebrow: "SERVICES" — `#d8a986`, Playfair Display 14px 800 weight, letter-spacing 5.6px, uppercase
  - Vertical rotated label: "Cosmetic DENTISTRY" — decorative
  - H2: "Transformative Cosmetic Dentistry" — Playfair Display 50px 500 weight `#141f2e`, letter-spacing 2px, line-height 65px
  - Body: "At Royal Bay Dental Co., we offer various cosmetic dental services, including porcelain veneers, cosmetic bonding, and complete smile makeovers. Our cosmetic [dentist] will develop a customized plan to help you achieve the stunning smile you've always dreamed of. Discover how we can transform your smile today!"
- RIGHT column: Large photo `public/images/cosmetic-dentistry.webp` — 619.95×728.42px

### Section 10 — World Class Oral Care / Cosmetic Cards (642px tall)
- Section padding: 28.8px top
- TOP: Center-aligned text block
  - H2: "WORLD CLASS ORAL CARE" — Playfair Display 50px 500 weight `#141f2e`, letter-spacing 2px, line-height 60px
  - Subtext: "Start your journey to a healthier, happier smile."
  - CTA link: "Cosmetic dentistry" — Playfair Display 20px 600 weight `#000000`
- BOTTOM: Four-column cosmetic card grid
  - 4 cards, each 294×440px: TEETH WHITENING (`teeth-whitening.webp`), PORCELAIN VENEERS (`porcelain-veneers.webp`), COSMETIC BONDING (`cosmetic-bonding.webp`), GUM CONTOURING (`gum-contouring.webp`)

### Section 11 — Patients Love IT HERE / Testimonials (695px tall)
- Section padding: 65px top
- H5 eyebrow: (embedded in carousel context — "Royal Bay Dental Co." style eyebrows used elsewhere)
- H2: "Patients Love IT HERE" — Playfair Display 50px 500 weight `#141f2e`, letter-spacing 2px, line-height 65px
- Carousel with left/right arrows (`arrow-left.png`, `arrow-right.png`)
- Each testimonial:
  - Stars icon: `testimonial-stars-icon.png` (50×37px)
  - Quote text (long paragraph)
  - Reviewer h5: Playfair Display 20px 700 weight `#1c1c1c`, letter-spacing 6px, uppercase
- 6 reviewers: Danielle R., Cheryl F., Brad W., kristopher c., Rebecca A., Jane O.

### Section 12 — Contact Info (773px tall)
- Section padding: 86.4px top and bottom
- Layout: Two columns
- LEFT column: Google Maps embed iframe, 690×600px
  - Embed URL: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1872.803337985863!2d-123.48926916475791!3d48.40...`
- RIGHT column:
  - H5 eyebrow: "GET IN TOUCH" — `#d8a986`, Playfair Display 14px 800 weight, letter-spacing 5.6px, uppercase
  - H2: "Contact Info" — Playfair Display 50px 500 weight `#141f2e`, letter-spacing 2px, line-height 60px
  - Subheading: "Creating a brighter future for your dental well-being."
  - **Find Us**: 345B Latoria Blvd #202, Victoria, BC, V9C 0S9 (link to Google Maps)
  - **Say Hello**: (778) 653-9426 (tel link) | info@royalbaydentalco.ca (mailto link)
  - **Visit Us**: Mon - Thu: 8:30am – 4:30pm | Fri: 8:30am – 3pm | Sat - Sun: Closed
  - **Follow Us**: Instagram icon/link
  - Contact info text style: Playfair Display 16px 700 weight `#000000`

### Footer
- Background: `#ffffff`
- Color: `#141f2e`
- Height: ~1685px (includes testimonial section above)
- Navigation links (center row): Poppins 16px 700 weight `#141f2e`, letter-spacing 0.16px
  - GENERAL DENTISTRY — `/general-dentistry/`
  - COSMETIC DENTISTRY — `/cosmetic-dentistry/`
  - INVISALIGN — `/invisalign/`
  - CONTACT US — `/contact/`
- Legal links: Sitemap, Privacy Policy
- Copyright: "©2026 Royal Bay Dental Co. | Sitemap | Privacy Policy"

---

## Full Page Copy

### Navigation
- Top bar: "345B Latoria Blvd #202, Victoria, BC, V9C 0S9" | "Book Online Here" (→ https://flexbook.me/royalbay/website)
- Nav dropdown items — Services:
  - General Dentistry, Preventative Dentistry, Dental Emergencies, Sedation Dentistry, Porcelain Crowns, Composite Fillings, Childrens Dentistry, Dental Implants, Single Tooth Implants & Bridges, Root Canal Treatment, Tmd – Appliances
  - Invisalign, Invisalign® Info, Invisalign® FAQs, Invisalign® for Adults, Invisalign® Videos, Invisalign® Costs
  - Cosmetic Dentistry, Cosmetic Bonding, Gum Contouring, Porcelain Veneers, Teeth Whitening
  - About → Our Story, Meet The Doctors, Meet The Team, Areas We Serve, Patient Forms, Careers, Before & After Gallery
  - Blog
  - Contact
- Phone: (778) 653-9426 | "Book Now"

### Hero
- Eyebrow: "Royal Bay Dental Co."
- H2: "GENERAL AND COSMETIC DENTISTRY"
- H1: "Your Local Dentist in Victoria, BC"
- H3: "Cutting-edge dentistry meets personalized, compassionate care."
- CTA: "Book Online Here" → https://flexbook.me/royalbay/website

### Emergency Strip
- H2: "Dental Emergency? Call Us: (778) 653-9426"
- Body: "Royal Bay Dental Co. is here for your dental emergencies with immediate appointments. We prioritize urgent care to ensure you receive prompt and efficient treatment. Contact us now for swift assistance."
- CTA: "Get Urgent Help" → tel:(778) 653-9426

### About / Community Section
- Eyebrow: "OUR COMMUNITY"
- H2: "Creating Beautiful Smiles Together"
- Body: "We are excited to be a part of the vibrant Royal Bay community and proud to be your trusted dentist in Victoria, BC. At Royal Bay Dental Co., we blend advanced dental technology with personalized, compassionate care to provide exceptional dental services for all your needs. Whether you require preventive care, emergency treatment, or cosmetic dentistry, we are here to help. Together, we can achieve your dental well-being and create brighter futures for everyone."
- CTA: "Meet the team" → https://royalbaydentalco.ca/about/meet-the-team/

### Transforming Experience Section
- H2: "Transforming Your Dental Experience"
- Body: "At Royal Bay Dental Co., our commitment goes beyond clinical excellence. We are dedicated to building lasting relationships and becoming an essential part of the Royal Bay community. Our dentist Victoria, BC, emphasizes open communication, actively listens to your concerns, and collaborates with you to create personalized treatment plans that meet your unique needs. By educating you about your oral health, [continues...]"

### NOW HIRING Section
- H2: "NOW HIRING"
- Body: "Royal Bay Dental Co. is pleased to announce we are accepting applications for building a remarkable team at our brand-new dental practice. If you value hard work and a high degree of accountability in yourself, a positive work environment and meaningful relationships with both team members [continues...]"

### General Dentistry Section
- Eyebrow: "SERVICES" / "GENERAL DENTISTRY"
- H2: "Comprehensive General Dentistry"
- Body: "At Royal Bay Dental Co, our dentist is equipped to handle a wide range of dental needs, from routine procedures to complex restorations. Our Victoria dentists combine the latest technology with personalized care to ensure that each treatment plan aligns with your specific goals. Whether you need regular hygiene maintenance or more extensive dental work, we are here to provide comprehensive solutions for your oral health and a beautiful smile. Experience the difference at our state-of-the-art Victoria dentist near you, where your dental well-being is our top priority."

### Service Cards (General Dentistry)
- "Dental Anxiety And Sedation" + "Read more"
- "DENTAL EMERGENCIES" + "Read more"
- "PREVENTATIVE DENTISTRY" + "Read more"
- "DENTAL IMPLANTS" + "Read more"

### Premier Dental Care CTA
- H2: "Premier Dental Care Tailored To Your Needs"
- Subtext: "Begin your journey to a healthier, more radiant smile with Royal Bay Dental Co."
- CTA: "General dentistry"

### New Patients Section
- Eyebrow: "Royal Bay Dental Co."
- H2: "ALWAYS WELCOMING NEW PATIENTS"
- Body: "Experience the Royal Bay Dental Co. difference! Our Dentists Victoria BC accepting new patients and provide personalized treatment plans according to your dental needs. Join our caring dental community today!"
- CTA: "Contact us"

### Invisalign Section
- Eyebrow: "Royal Bay Dental Co."
- H2: "INVISALIGN Solutions"
- Body: "Invisalign offers a modern, subtle way to enhance your smile. With flexible, comfortable aligners, our dental team at Royal Bay Dental Co. can straighten your teeth and improve your bite. Enjoy a cleaner, more balanced, and radiant smile with Invisalign!"
- CTA: "Continue reading" → https://royalbaydentalco.ca/victoria-bc/invisalign/

### Cosmetic Dentistry Section
- Eyebrow: "SERVICES" / "Cosmetic DENTISTRY"
- H2: "Transformative Cosmetic Dentistry"
- Body: "At Royal Bay Dental Co., we offer various cosmetic dental services, including porcelain veneers, cosmetic bonding, and complete smile makeovers. Our cosmetic dentist will develop a customized plan to help you achieve the stunning smile you've always dreamed of. Discover how we can transform your smile today!"

### World Class Oral Care CTA
- H2: "WORLD CLASS ORAL CARE"
- Subtext: "Start your journey to a healthier, happier smile."
- CTA: "Cosmetic dentistry"

### Service Cards (Cosmetic)
- "TEETH WHITENING" + "Read more"
- "PORCELAIN VENEERS" + "Read more"
- "COSMETIC BONDING" + "Read more"
- "GUM CONTOURING" + "Read more"

### Testimonials Section
- H2: "Patients Love IT HERE"
- Reviewer 1 — **Danielle R.**: "It was my daughter's first dentist appointment and she is 3 years old. Royal Bay Dental did an amazing job of making us both feel welcome. They were extremely patient and helpful. We will be coming back!"
- Reviewer 2 — **Cheryl F.**: "Best dental cleaning I've had in years. Anna was amazing as was the entire team at Royal Bay Dental. So glad my family has made the decision to switch to this dental office. Highly recommend them!!"
- Reviewer 3 — **Brad W.**: "Dr. Gurek was amazing and it went smoothly and seemed effortless. What an amazing crew and thank you to dental hygienist Anna for getting everything else really dialed in. It was an amazing experience being a brand new office. You all as a team will go far."
- Reviewer 4 — **kristopher c.**: "Fantastic dental clinic. The staff are very friendly and professional. The service is exceptional especially with the 3D scan of your teeth. They walk you through exactly what they will be doing. As a..."
- Reviewer 5 — **Rebecca A.**: "Highly recommend this Dental office. All the staff are kind and friendly. They all care about your dental anxieties and sensitivities and go above and beyond to ensure you have a pain free, enjoyable..."
- Reviewer 6 — **Jane O.**: "Beautiful, light filled office! Front desk staff, Teresa and the rest are bright and welcoming. Dr Gurek has the magic touch. I hardly felt a thing through three fillings! Assistant Lauren is kind and..."

### Contact Info Section
- Eyebrow: "GET IN TOUCH"
- H2: "Contact Info"
- Subhead: "Creating a brighter future for your dental well-being."
- **Find Us**: 345B Latoria Blvd #202, Victoria, BC, V9C 0S9
- **Say Hello**: (778) 653-9426 | info@royalbaydentalco.ca
- **Visit Us**: Mon - Thu: 8:30am – 4:30pm | Fri: 8:30am – 3pm | Sat - Sun: Closed
- **Follow Us**: (Instagram link)

### Footer
- Navigation: GENERAL DENTISTRY | COSMETIC DENTISTRY | INVISALIGN | CONTACT US
- Legal: "©2026 Royal Bay Dental Co. | Sitemap | Privacy Policy"

---

## Asset Inventory

### public/images/
| File | Used in |
|------|---------|
| `logo-main.png` | Main nav row, logo (~191×52.5px) |
| `logo-dark.png` | Footer logo (dark version) |
| `hero-icon.png` | Hero section, dental icon (46×65px) |
| `hero-video-poster.jpg` | Video poster frame for hero video |
| `hero-brighter-smiles.webp` | Section 2 "Creating Beautiful Smiles" — left column large photo (619.95×728.42px) |
| `general-dentistry.webp` | Section 5 "Comprehensive General Dentistry" — right column large photo |
| `cosmetic-dentistry.webp` | Section 9 "Transformative Cosmetic Dentistry" — right column large photo |
| `dental-anxiety-sedation.webp` | Service card 1 of 4 (General group) — 294×440px |
| `dental-emergencies.webp` | Service card 2 of 4 (General group) — 294×440px |
| `preventative-dentistry.webp` | Service card 3 of 4 (General group) — 294×440px |
| `dental-implants.webp` | Service card 4 of 4 (General group) — 294×440px |
| `teeth-whitening.webp` | Service card 1 of 4 (Cosmetic group) — 294×440px |
| `porcelain-veneers.webp` | Service card 2 of 4 (Cosmetic group) — 294×440px |
| `cosmetic-bonding.webp` | Service card 3 of 4 (Cosmetic group) — 294×440px |
| `gum-contouring.webp` | Service card 4 of 4 (Cosmetic group) — 294×440px |
| `invisalign-bg-left.jpg` | Invisalign section — left background image (644×500px) |
| `invisalign-bg-right.jpg` | Invisalign section — right background image (307×500px) |
| `testimonial-stars-icon.png` | Testimonial cards — stars icon (50×37px) |

### public/icons/
| File | Used in |
|------|---------|
| `arrow-left.png` | Testimonial carousel previous button (100×19px) |
| `arrow-right.png` | Testimonial carousel next button (100×19px) |

### public/videos/
| File | Used in |
|------|---------|
| `royal-bay-runner-hd.mov` | Hero section background video — autoplay, muted, loop, object-fit cover, 1440×753px |

---

## Implementation Notes for Cloner

1. **Fonts**: Load both Google Fonts — Playfair Display (400, 400i, 500, 500i, 600, 600i, 700, 700i) and Poppins (400, 400i, 600, 600i, 700, 700i) from the exact URL above.

2. **Header**: Two-row header, both rows transparent background. Logo in row 2 left. Nav links in row 2 center. Phone + Book Now buttons in row 2 right. Address + "Book Online Here" in row 1. Header overlays the hero section (not sticky at scroll 0).

3. **Hero**: Full bleed video section exactly 753px tall. Video fills 100% width and height with object-fit cover. Dark overlay `rgba(0,0,0,0.3)` covers the video. Content is centered over the overlay using flex layout.

4. **H5 Eyebrow labels**: Every section uses an H5 with `#d8a986` color, Playfair Display 14px weight 800, letter-spacing 5.6px, uppercase as a section label before the H2 heading. This is a distinctive brand motif.

5. **Two-column sections**: Sections 2, 5, 9 use a 50/50 or similar split with a large photo on one side (619.95×728.42px rendered size) and text on the other. The photo extends full column height without margins.

6. **Service cards**: Each card is exactly 294×440px. The image fills the entire card. A gradient overlay (`linear-gradient(rgba(15,15,15,0), rgba(15,15,15,0.3) 100%)`) sits above the image. H2 heading and "Read more" link sit at the bottom over the gradient. No border-radius.

7. **Brand gold color**: `#d8a986` is used consistently for: H5 eyebrows, all CTA button backgrounds (hero + nav Book Now), all CTA button borders (including outlined phone button in nav). This is the single brand accent.

8. **All buttons**: `border-radius: 0` (square corners). Borders are 2px solid. No text transform on button labels.

9. **Emergency strip**: The `#d3c6bc` warm greige background is unique to the emergency strip section. It stands out as the only colored section background (other sections are white/transparent).

10. **Invisalign section**: Uses CSS background-images on divs, not `<img>` tags — two panels side by side as section backgrounds, with text overlaid on the right side.

11. **Transitions**: All hover transitions use `0.3s cubic-bezier(0.4, 0, 0.2, 1)` — apply this to all interactive elements.

12. **Contact section**: Left half is a Google Maps embed iframe (690×600px). Right half has the contact details. The iframe src contains the encoded coordinates for 345B Latoria Blvd, Victoria BC.
