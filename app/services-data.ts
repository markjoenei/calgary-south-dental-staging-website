// ============================================================
// SERVICES DATA — content for every Dental Services inner page
// Mirrors the live calgarysouthdental.ca submenu structure.
// ============================================================

export type Pillar = {
  num: string;
  label: string;
  body: string;
};

export type ServiceConfig = {
  category: string;       // URL segment (e.g. "general-dentistry")
  slug: string;           // URL slug (e.g. "dental-cleanings-se-calgary")
  categoryLabel: string;  // Human-readable category (e.g. "General Dentistry")
  title: string;          // Page H1 (e.g. "Dental Cleanings in SE Calgary")
  eyebrow: string;        // Small uppercase line above the title
  heroSubtitle: string;   // Short hero subtitle
  heroImage: string;      // /images/services/*.{jpg|webp}
  intro: string;          // Welcome / lead paragraph
  pillars: Pillar[];      // 3–4 benefit pillars
  detailHeading: string;  // Sub-heading for the detail / process section
  detailBody: string;     // Detail paragraph
  detailImage: string;
  closingHeading: string; // CTA section heading
  closingBody: string;
};

export const SERVICES_NAV: {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}[] = [
  { label: "Emergency", href: "/emergency" },
  {
    label: "General Dentistry",
    href: "#",
    submenu: [
      { label: "Oral Exams & X-Rays", href: "/general-dentistry/oral-exams-dental-xrays-se-calgary" },
      { label: "Dental Cleanings", href: "/general-dentistry/dental-cleanings-se-calgary" },
      { label: "Oral Cancer Screening", href: "/general-dentistry/oral-cancer-screening-se-calgary" },
    ],
  },
  {
    label: "Gum Disease & Bad Breath",
    href: "#",
    submenu: [
      { label: "Periodontal (Gum) Care", href: "/gum-disease-bad-breath/periodontal-gum-care-se-calgary" },
      { label: "Halitosis Treatment", href: "/gum-disease-bad-breath/halitosis-treatment-se-calgary" },
      { label: "Scaling & Root Planing", href: "/gum-disease-bad-breath/scaling-root-planing-se-calgary" },
    ],
  },
  {
    label: "Restorative Dentistry",
    href: "#",
    submenu: [
      { label: "Tooth-Coloured Fillings", href: "/restorative-dentistry/tooth-coloured-fillings-se-calgary" },
      { label: "Crowns & Bridges", href: "/restorative-dentistry/dental-crowns-bridges-calgary-se" },
      { label: "Dentures", href: "/restorative-dentistry/dental-dentures-se-calgary" },
    ],
  },
  {
    label: "Cosmetic Care",
    href: "#",
    submenu: [
      { label: "Teeth Whitening", href: "/cosmetic-care/teeth-whitening-se-calgary" },
      { label: "Porcelain Veneers", href: "/cosmetic-care/porcelain-veneers-se-calgary" },
      { label: "Cosmetic Bonding", href: "/cosmetic-care/cosmetic-bonding-se-calgary" },
      { label: "Gum Contouring", href: "/cosmetic-care/gum-contouring-se-calgary" },
      { label: "Inlays & Onlays", href: "/cosmetic-care/inlays-onlays-se-calgary" },
    ],
  },
  {
    label: "Orthodontics",
    href: "#",
    submenu: [
      { label: "Invisalign", href: "/orthodontics/invisalign-calgary-south-east" },
      { label: "Traditional Braces", href: "/orthodontics/traditional-braces-calgary-se" },
    ],
  },
  {
    label: "Urgent Dental Care",
    href: "#",
    submenu: [
      { label: "Root Canal Therapy", href: "/urgent-dental-care/root-canal-therapy-se-calgary" },
      { label: "Wisdom Tooth Extraction", href: "/urgent-dental-care/wisdom-tooth-extraction-se-calgary" },
    ],
  },
  {
    label: "Additional Care",
    href: "#",
    submenu: [
      { label: "Sedation Dentistry", href: "/additional-care/sedation-dentistry-se-calgary" },
    ],
  },
  {
    label: "Children's Care",
    href: "#",
    submenu: [
      { label: "Sealants & Fluoride", href: "/childrens-care/sealants-fluoride-calgary-se" },
      { label: "Space Maintainers", href: "/childrens-care/space-maintainers-calgary-se" },
      { label: "Dental Cavities Treatment", href: "/childrens-care/dental-cavities-treatment-se-calgary" },
      { label: "Preventive Care", href: "/childrens-care/preventive-dental-care-se-calgary" },
    ],
  },
];

export const SERVICES: ServiceConfig[] = [
  // ---------- GENERAL DENTISTRY ----------
  {
    category: "general-dentistry",
    slug: "oral-exams-dental-xrays-se-calgary",
    categoryLabel: "General Dentistry",
    title: "Oral Exams & Dental X-Rays",
    eyebrow: "Preventive Dentistry",
    heroSubtitle:
      "Comprehensive oral exams and low-radiation digital X-rays — the foundation of a healthy mouth and an early warning system for problems before they hurt.",
    heroImage: "/images/services/detail-mature-man.jpg",
    intro:
      "Regular oral exams and dental X-rays are the cornerstone of preventive care at Calgary South Dental. Our dentists use a careful, head-to-toe approach — checking teeth, gums, bite, jaw, and soft tissues — and pair it with safe, low-dose digital imaging to catch decay, bone loss, infection, and other concerns long before they become painful or expensive to treat.",
    pillars: [
      {
        num: "01",
        label: "Early Detection",
        body: "Digital X-rays let us see between teeth, beneath fillings, and below the gumline — the places small problems hide before they become big ones.",
      },
      {
        num: "02",
        label: "Low-Radiation Imaging",
        body: "Modern digital sensors use up to 90% less radiation than traditional film while delivering sharper, instant images.",
      },
      {
        num: "03",
        label: "Tailored to You",
        body: "How often you need X-rays depends on your age, risk profile, and dental history — we never image more than necessary.",
      },
    ],
    detailHeading: "What to Expect at Your Exam",
    detailBody:
      "A full exam takes about 30–45 minutes. We review your medical history, take any needed images, screen for oral cancer, evaluate your bite and TMJ, and check existing dental work. Your dentist will walk you through the findings and build a personalized plan — no rush, no jargon, no surprise treatment.",
    detailImage: "/images/services/detail-clinical.jpg",
    closingHeading: "Due for a check-up?",
    closingBody:
      "New patients are welcome at our SE Calgary clinic. Book a comprehensive exam today and start with a clear picture of your oral health.",
  },
  {
    category: "general-dentistry",
    slug: "dental-cleanings-se-calgary",
    categoryLabel: "General Dentistry",
    title: "Dental Cleanings",
    eyebrow: "Preventive Dentistry",
    heroSubtitle:
      "Gentle, thorough professional cleanings to remove plaque and tartar, polish your smile, and keep gum disease and cavities at bay.",
    heroImage: "/images/services/detail-woman-visit.jpg",
    intro:
      "A professional cleaning at Calgary South Dental does what brushing and flossing alone can't — our registered dental hygienists carefully remove the hardened tartar (calculus) that builds up around teeth and below the gumline, polish surface stains, and finish with a fluoride rinse. The result: cleaner teeth, healthier gums, and fresher breath that lasts.",
    pillars: [
      {
        num: "01",
        label: "Plaque & Tartar Removal",
        body: "Ultrasonic scalers and hand instruments lift hardened deposits without harming enamel.",
      },
      {
        num: "02",
        label: "Polish & Stain Lift",
        body: "Surface stains from coffee, tea, and wine come off — you leave with a brighter, smoother smile.",
      },
      {
        num: "03",
        label: "Personalized Coaching",
        body: "Your hygienist will show you exactly where you're missing at home, so the next cleaning is even easier.",
      },
    ],
    detailHeading: "How Often Should You Come In?",
    detailBody:
      "Most patients benefit from a cleaning every six months, but some — those prone to gum disease, heavy tartar build-up, or who wear braces — may need three- or four-month intervals. We'll recommend a schedule based on your unique risk factors and adjust it as your oral health changes.",
    detailImage: "/images/services/detail-clinical.jpg",
    closingHeading: "Time for your next cleaning?",
    closingBody:
      "Book online or call 403-984-1616. Direct billing to most insurance providers — including NIHB — so your visit stays simple.",
  },
  {
    category: "general-dentistry",
    slug: "oral-cancer-screening-se-calgary",
    categoryLabel: "General Dentistry",
    title: "Oral Cancer Screening",
    eyebrow: "Preventive Dentistry",
    heroSubtitle:
      "A quick, painless screening at every check-up — because early detection saves lives.",
    heroImage: "/images/services/detail-mature-man.jpg",
    intro:
      "Oral cancer is highly treatable when found early. As part of every comprehensive exam at Calgary South Dental, your dentist performs a thorough oral cancer screening — gently examining your lips, tongue, cheeks, palate, throat, and neck for any unusual changes. It takes only a few minutes, and it could save your life.",
    pillars: [
      {
        num: "01",
        label: "Painless & Fast",
        body: "A visual and tactile exam — no swabs, no needles, no discomfort.",
      },
      {
        num: "02",
        label: "Done at Every Check-up",
        body: "Built into our standard exam at no extra cost — because consistency is what catches it early.",
      },
      {
        num: "03",
        label: "Clear Next Steps",
        body: "If anything looks unusual, we'll explain it clearly and refer you to a specialist promptly.",
      },
    ],
    detailHeading: "Know Your Risk Factors",
    detailBody:
      "Tobacco use, heavy alcohol consumption, HPV, prolonged sun exposure to the lips, and a family history of cancer all increase risk — but oral cancer can develop in anyone. Watch for sores that don't heal, persistent red or white patches, lumps, or numbness, and tell us right away if you notice anything new.",
    detailImage: "/images/services/detail-clinical.jpg",
    closingHeading: "Haven't been screened recently?",
    closingBody:
      "Schedule a comprehensive exam — screening is included. Five minutes today is worth the peace of mind for years to come.",
  },

  // ---------- GUM DISEASE & BAD BREATH ----------
  {
    category: "gum-disease-bad-breath",
    slug: "periodontal-gum-care-se-calgary",
    categoryLabel: "Gum Disease & Bad Breath",
    title: "Periodontal (Gum) Care",
    eyebrow: "Healthy Gums, Healthy Smile",
    heroSubtitle:
      "Targeted treatment for bleeding, swollen, or receding gums — protecting the bone and tissue that hold your teeth in place.",
    heroImage: "/images/services/detail-woman-visit.jpg",
    intro:
      "Gum disease is the leading cause of tooth loss in adults — and it's almost always preventable. At Calgary South Dental, our team offers comprehensive periodontal care from gentle deep cleanings through to advanced gum therapy, helping you reverse early disease and stabilize more advanced cases.",
    pillars: [
      {
        num: "01",
        label: "Catch It Early",
        body: "Bleeding when you brush is the first sign — and it's reversible if treated promptly.",
      },
      {
        num: "02",
        label: "Comfortable Therapy",
        body: "Numbing, modern ultrasonic instruments, and sedation options keep deeper cleanings stress-free.",
      },
      {
        num: "03",
        label: "Long-Term Maintenance",
        body: "Once stabilized, more frequent hygiene visits keep gum disease from coming back.",
      },
    ],
    detailHeading: "Why Gum Health Matters Beyond Your Mouth",
    detailBody:
      "Untreated gum disease is linked to heart disease, diabetes complications, stroke, and adverse pregnancy outcomes. Healthy gums aren't just about saving teeth — they're a meaningful contribution to your overall health.",
    detailImage: "/images/services/detail-clinical.jpg",
    closingHeading: "Gums bleeding when you brush?",
    closingBody:
      "Don't wait for it to get worse — call 403-984-1616 today and let's get ahead of it together.",
  },
  {
    category: "gum-disease-bad-breath",
    slug: "halitosis-treatment-se-calgary",
    categoryLabel: "Gum Disease & Bad Breath",
    title: "Halitosis (Bad Breath) Treatment",
    eyebrow: "Fresh Breath, Renewed Confidence",
    heroSubtitle:
      "Chronic bad breath usually has a cause we can find and fix — let's get to the bottom of it together.",
    heroImage: "/images/services/detail-clinical.jpg",
    intro:
      "Persistent bad breath isn't just embarrassing — it's often a signal that something else needs attention. At Calgary South Dental we diagnose the underlying cause, whether it's gum disease, tongue bacteria, dry mouth, an old restoration that needs replacing, or a medical condition — and we treat the source, not just the symptom.",
    pillars: [
      {
        num: "01",
        label: "Real Diagnosis",
        body: "We pinpoint the cause — gum disease, decay, dry mouth, or systemic issues — not just mask the smell.",
      },
      {
        num: "02",
        label: "Targeted Treatment",
        body: "Treatment ranges from a deep cleaning to addressing dry mouth or replacing leaking fillings.",
      },
      {
        num: "03",
        label: "Home Care That Works",
        body: "We'll teach you tongue scraping, proper flossing, and which rinses actually help (and which don't).",
      },
    ],
    detailHeading: "Common Causes We Address",
    detailBody:
      "Tongue bacteria, gum disease, cavities, sinus infections, dry mouth from medications, and certain foods all contribute. A short conversation and quick exam usually reveal the culprit — and most patients see significant improvement within a couple of weeks of starting the right treatment.",
    detailImage: "/images/services/detail-woman-visit.jpg",
    closingHeading: "Ready for fresher breath?",
    closingBody:
      "Book a consultation and let's find — and fix — the source for good.",
  },
  {
    category: "gum-disease-bad-breath",
    slug: "scaling-root-planing-se-calgary",
    categoryLabel: "Gum Disease & Bad Breath",
    title: "Scaling & Root Planing",
    eyebrow: "Deep Cleaning Therapy",
    heroSubtitle:
      "A deeper-than-regular cleaning that removes tartar from below the gumline — the gold-standard non-surgical treatment for gum disease.",
    heroImage: "/images/services/detail-clinical.jpg",
    intro:
      "When gum disease has progressed past the early stage, a standard cleaning isn't enough. Scaling and root planing — sometimes called a 'deep cleaning' — gently removes the hardened plaque and bacterial toxins from beneath your gumline, then smooths the tooth roots so gums can re-attach and heal. It's the most effective non-surgical treatment for moderate periodontal disease.",
    pillars: [
      {
        num: "01",
        label: "Numbed for Comfort",
        body: "Local anaesthetic keeps you comfortable; sedation is available if you'd prefer.",
      },
      {
        num: "02",
        label: "Done in Sections",
        body: "We typically treat one or two quadrants per visit so each area gets focused attention.",
      },
      {
        num: "03",
        label: "Measurable Results",
        body: "We re-measure your gum pockets after healing to confirm the treatment worked.",
      },
    ],
    detailHeading: "What Happens After Treatment",
    detailBody:
      "Most patients feel completely back to normal within a day or two. Some sensitivity is common briefly. We'll see you back in 4–6 weeks to measure healing, then transition you to a periodontal maintenance schedule (typically every 3–4 months) to keep your gums stable long-term.",
    detailImage: "/images/services/detail-woman-visit.jpg",
    closingHeading: "Need a deep cleaning?",
    closingBody:
      "We'll walk you through every step before we start. Book a consultation today.",
  },

  // ---------- RESTORATIVE DENTISTRY ----------
  {
    category: "restorative-dentistry",
    slug: "tooth-coloured-fillings-se-calgary",
    categoryLabel: "Restorative Dentistry",
    title: "Tooth-Coloured Fillings",
    eyebrow: "Restorative Care",
    heroSubtitle:
      "Strong, natural-looking composite fillings that bond directly to your tooth — no metal, no dark lines, no compromise.",
    heroImage: "/images/services/cosmetic-smile.jpg",
    intro:
      "When a cavity needs to be filled, you shouldn't have to choose between strength and appearance. At Calgary South Dental we use modern composite resin fillings that match your natural tooth colour exactly, bond directly to the tooth structure for added strength, and require less drilling than old amalgam fillings.",
    pillars: [
      {
        num: "01",
        label: "Invisible Repair",
        body: "Composite is shade-matched to your tooth — no one will know you had a filling.",
      },
      {
        num: "02",
        label: "Conservation of Tooth",
        body: "Bonded fillings preserve more healthy tooth than old metal ones that required mechanical retention.",
      },
      {
        num: "03",
        label: "Mercury-Free",
        body: "Composite resin contains no mercury — a peace-of-mind option for many patients.",
      },
    ],
    detailHeading: "Replacing Old Amalgam Fillings",
    detailBody:
      "If you have older silver-mercury fillings that are cracked, leaking, or simply unsightly, we can replace them with tooth-coloured composite. It's a great way to refresh your smile while protecting the tooth structure underneath — and many patients combine it with a whitening treatment for a complete upgrade.",
    detailImage: "/images/services/detail-clinical.jpg",
    closingHeading: "Cavity to fill, or old filling to replace?",
    closingBody:
      "Book an appointment and we'll talk through the options that make the most sense for your tooth.",
  },
  {
    category: "restorative-dentistry",
    slug: "dental-crowns-bridges-calgary-se",
    categoryLabel: "Restorative Dentistry",
    title: "Dental Crowns & Bridges",
    eyebrow: "Restorative Care",
    heroSubtitle:
      "Custom porcelain crowns and bridges to restore broken teeth and replace missing ones — strong, natural-looking, and built to last.",
    heroImage: "/images/services/cosmetic-smile.jpg",
    intro:
      "A crown ('cap') protects and rebuilds a tooth that's cracked, root-canalled, heavily filled, or worn down. A bridge replaces one or more missing teeth using crowns on either side as anchors. At Calgary South Dental we craft both from high-grade porcelain and zirconia for results that look — and chew — like the real thing.",
    pillars: [
      {
        num: "01",
        label: "Lifelike Aesthetics",
        body: "Layered porcelain captures the translucency of natural enamel — no grey gum lines, no obvious caps.",
      },
      {
        num: "02",
        label: "Long Lifespan",
        body: "Well-cared-for crowns and bridges typically last 15+ years and protect the tooth underneath.",
      },
      {
        num: "03",
        label: "Restores Function",
        body: "Chew confidently again on the side you've been avoiding — and stop overloading the other side.",
      },
    ],
    detailHeading: "Crown vs. Bridge — What's Right for You?",
    detailBody:
      "A crown covers one tooth that's still in your mouth but needs reinforcement. A bridge spans a gap where a tooth is missing — using the neighbouring teeth (or implants) as supports. We'll examine your bite, take impressions, and walk you through the options including alternatives like dental implants where appropriate.",
    detailImage: "/images/services/detail-clinical.jpg",
    closingHeading: "Need a crown or bridge?",
    closingBody:
      "Book a consultation. We'll examine your tooth, explain your choices, and give you an honest treatment estimate up front.",
  },
  {
    category: "restorative-dentistry",
    slug: "dental-dentures-se-calgary",
    categoryLabel: "Restorative Dentistry",
    title: "Dental Dentures",
    eyebrow: "Restorative Care",
    heroSubtitle:
      "Custom-fit full and partial dentures — designed for comfort, confidence, and a smile that looks like you.",
    heroImage: "/images/services/dentures.webp",
    intro:
      "Modern dentures look natural, fit comfortably, and let you eat the foods you love again. Whether you need a complete denture to replace a full arch of teeth, a partial denture that clips around remaining teeth, or implant-supported dentures that stay rock-solid, our team designs and fits each one to your unique mouth.",
    pillars: [
      {
        num: "01",
        label: "Natural Appearance",
        body: "Custom-shaded teeth and gum-coloured base for a result that looks like your own smile.",
      },
      {
        num: "02",
        label: "Better Stability Options",
        body: "Implant-retained dentures snap firmly in place — no slipping, no adhesive, no compromise.",
      },
      {
        num: "03",
        label: "Ongoing Adjustments",
        body: "Your mouth changes over time; we adjust and reline so dentures keep fitting comfortably.",
      },
    ],
    detailHeading: "Complete, Partial, and Implant-Supported",
    detailBody:
      "Complete dentures replace all teeth in an arch. Partials fill in around your remaining teeth. Implant-supported dentures use two to four implants to lock the denture firmly in place — most patients say it's a transformative upgrade in confidence and quality of life.",
    detailImage: "/images/services/detail-mature-man.jpg",
    closingHeading: "Considering dentures or upgrading old ones?",
    closingBody:
      "Book a free consultation. We'll examine your mouth, talk you through every option, and help you pick the right fit.",
  },

  // ---------- COSMETIC CARE ----------
  {
    category: "cosmetic-care",
    slug: "teeth-whitening-se-calgary",
    categoryLabel: "Cosmetic Care",
    title: "Teeth Whitening",
    eyebrow: "Cosmetic Dentistry",
    heroSubtitle:
      "Professional in-office and take-home whitening that's faster, safer, and dramatically more effective than over-the-counter strips.",
    heroImage: "/images/services/whitening-result.jpg",
    intro:
      "Years of coffee, tea, wine, and the simple passage of time can dim even the most well-cared-for smile. Calgary South Dental offers professional-strength whitening — both in-office for fast results and custom-tray take-home kits for gradual brightening — that delivers shades of difference no drugstore product can match.",
    pillars: [
      {
        num: "01",
        label: "Dramatic Results",
        body: "Most patients see 4–8 shades whiter after a single in-office session.",
      },
      {
        num: "02",
        label: "Custom-Fit Trays",
        body: "Take-home trays are moulded to your teeth so the gel stays exactly where it should — and off your gums.",
      },
      {
        num: "03",
        label: "Less Sensitivity",
        body: "Professional formulations include desensitizers; we tailor strength and timing to your comfort level.",
      },
    ],
    detailHeading: "In-Office vs. Take-Home Whitening",
    detailBody:
      "In-office whitening takes about an hour and gives the fastest result — perfect before a wedding or big event. Take-home trays are worn 30–60 minutes daily for 1–2 weeks and let you control the final shade. Many patients combine both for maximum effect.",
    detailImage: "/images/services/cosmetic-smile.jpg",
    closingHeading: "Ready for a brighter smile?",
    closingBody:
      "Book a quick consultation — we'll match the right whitening protocol to your goals, timeline, and sensitivity profile.",
  },
  {
    category: "cosmetic-care",
    slug: "porcelain-veneers-se-calgary",
    categoryLabel: "Cosmetic Care",
    title: "Porcelain Veneers",
    eyebrow: "Cosmetic Dentistry",
    heroSubtitle:
      "Ultra-thin custom porcelain shells that transform stained, chipped, or uneven front teeth into a Hollywood-bright, perfectly aligned smile.",
    heroImage: "/images/services/cosmetic-smile.jpg",
    intro:
      "Porcelain veneers are one of the most transformative cosmetic treatments in modern dentistry. Each veneer is hand-crafted to mimic the natural translucency of enamel and bonded permanently to the front of your tooth — instantly correcting discolouration, chips, gaps, or minor crowding in just two visits.",
    pillars: [
      {
        num: "01",
        label: "Tailored Smile Design",
        body: "Shape, length, shade — every detail is designed with you before any tooth is touched.",
      },
      {
        num: "02",
        label: "Stain-Resistant",
        body: "Porcelain doesn't pick up stains the way enamel does — your bright smile stays bright.",
      },
      {
        num: "03",
        label: "Minimally Invasive",
        body: "Only a thin layer of enamel is removed — much less than for a crown.",
      },
    ],
    detailHeading: "The Veneer Process",
    detailBody:
      "After a smile-design consultation, we gently prepare the front of each tooth, take impressions, and place temporaries. Your lab-crafted porcelain veneers are ready in about two weeks; we then bond them permanently — and check the bite, contacts, and aesthetics together with a mirror before you walk out.",
    detailImage: "/images/services/whitening-result.jpg",
    closingHeading: "Dreaming of a new smile?",
    closingBody:
      "Book a complimentary smile-design consultation. We'll talk through what's possible and show you a digital preview of your future smile.",
  },
  {
    category: "cosmetic-care",
    slug: "cosmetic-bonding-se-calgary",
    categoryLabel: "Cosmetic Care",
    title: "Cosmetic Bonding",
    eyebrow: "Cosmetic Dentistry",
    heroSubtitle:
      "An affordable, single-visit way to repair chips, close small gaps, and reshape teeth — using tooth-coloured composite sculpted by hand.",
    heroImage: "/images/services/couple-smile.jpg",
    intro:
      "Cosmetic bonding is a fast, conservative way to fix minor imperfections — a chipped front tooth, a small gap, an uneven edge. Tooth-coloured composite resin is sculpted onto the tooth, hardened with a curing light, and polished to match your natural enamel. Most cases are completed in a single visit with no drilling or anaesthetic needed.",
    pillars: [
      {
        num: "01",
        label: "Done in One Visit",
        body: "Most bonding repairs are start-to-finish in 30–60 minutes — perfect for last-minute touch-ups.",
      },
      {
        num: "02",
        label: "Conservative",
        body: "No (or minimal) enamel removal — your natural tooth stays intact.",
      },
      {
        num: "03",
        label: "Cost-Effective",
        body: "Significantly less than veneers, with great results for the right cases.",
      },
    ],
    detailHeading: "Bonding vs. Veneers — How to Choose",
    detailBody:
      "Bonding is ideal for small fixes — a corner chip, a small diastema (gap), or reshaping a single tooth. Veneers shine when you want to transform several front teeth uniformly or address deep discolouration. We'll examine your teeth and recommend whichever serves you best — never up-selling.",
    detailImage: "/images/services/detail-clinical.jpg",
    closingHeading: "Got a chip or small gap to fix?",
    closingBody:
      "Bonding might be the perfect answer. Book a consultation and let's take a look.",
  },
  {
    category: "cosmetic-care",
    slug: "gum-contouring-se-calgary",
    categoryLabel: "Cosmetic Care",
    title: "Gum Contouring",
    eyebrow: "Cosmetic Dentistry",
    heroSubtitle:
      "Reshape an uneven or 'gummy' smile with precision laser gum contouring — comfortable, fast, and immediately visible.",
    heroImage: "/images/services/cosmetic-smile.jpg",
    intro:
      "A smile that shows more gum than tooth — or a gumline that's uneven from tooth to tooth — can make even healthy teeth look short or asymmetric. Gum contouring gently and precisely reshapes your gumline using a soft-tissue laser, revealing more of your natural teeth and creating a balanced, harmonious smile.",
    pillars: [
      {
        num: "01",
        label: "Laser Precision",
        body: "Soft-tissue lasers seal as they go — minimal bleeding, faster healing.",
      },
      {
        num: "02",
        label: "Single Visit",
        body: "Most contouring is completed in one appointment under local anaesthetic.",
      },
      {
        num: "03",
        label: "Immediate Result",
        body: "You'll see the new gumline before you leave; final settling takes a few weeks.",
      },
    ],
    detailHeading: "Often Paired with Veneers or Whitening",
    detailBody:
      "Many patients combine gum contouring with veneers or whitening for a complete smile makeover. By correcting tooth proportions and gum symmetry together, the final result is more dramatic — and more natural — than either treatment alone.",
    detailImage: "/images/services/whitening-result.jpg",
    closingHeading: "Curious if contouring is right for you?",
    closingBody:
      "Book a smile-design consultation. We'll show you a preview of the proposed new gumline before any treatment begins.",
  },
  {
    category: "cosmetic-care",
    slug: "inlays-onlays-se-calgary",
    categoryLabel: "Cosmetic Care",
    title: "Inlays & Onlays",
    eyebrow: "Restorative & Cosmetic",
    heroSubtitle:
      "Custom porcelain restorations that sit between a filling and a crown — stronger than a filling, more conservative than a crown.",
    heroImage: "/images/services/detail-clinical.jpg",
    intro:
      "When a tooth is too damaged for a simple filling but doesn't need a full crown, an inlay or onlay is often the perfect middle ground. These lab-crafted porcelain (or composite) restorations are bonded into place to restore strength, function, and a natural appearance — while preserving as much healthy tooth as possible.",
    pillars: [
      {
        num: "01",
        label: "Tooth Conservation",
        body: "Only the damaged portion is replaced — more of your natural tooth stays intact than with a crown.",
      },
      {
        num: "02",
        label: "Lab Precision",
        body: "Crafted off-site for an exact fit, strength, and lifelike colour.",
      },
      {
        num: "03",
        label: "Lasts for Years",
        body: "Well-cared-for porcelain inlays and onlays routinely last 15–20 years.",
      },
    ],
    detailHeading: "Inlay or Onlay — What's the Difference?",
    detailBody:
      "An inlay fills the space between the cusps (the pointy parts of a back tooth). An onlay extends over one or more cusps when there's more damage. Both are placed across two visits: preparation and impressions at the first, bonding the final restoration in at the second.",
    detailImage: "/images/services/detail-woman-visit.jpg",
    closingHeading: "Tooth too damaged for a filling?",
    closingBody:
      "An inlay or onlay may be the perfect conservative option. Book a consultation and we'll evaluate together.",
  },

  // ---------- ORTHODONTICS ----------
  {
    category: "orthodontics",
    slug: "invisalign-calgary-south-east",
    categoryLabel: "Orthodontics",
    title: "Invisalign",
    eyebrow: "Clear Aligner Orthodontics",
    heroSubtitle:
      "Straighten your teeth discreetly with custom clear aligners — no metal, no wires, no compromise on results.",
    heroImage: "/images/services/invisalign-smile.jpg",
    intro:
      "Invisalign uses a series of nearly invisible, custom-made clear aligners to gradually shift your teeth into the position you want. Each aligner is worn for one to two weeks before swapping for the next. The result: a beautifully straight smile achieved on your timeline, without anyone noticing you're in treatment.",
    pillars: [
      {
        num: "01",
        label: "Virtually Invisible",
        body: "Clear, BPA-free plastic aligners are almost impossible to see at conversational distance.",
      },
      {
        num: "02",
        label: "Removable",
        body: "Take them out to eat, brush, floss, or for a special occasion — no food restrictions.",
      },
      {
        num: "03",
        label: "Predictable Results",
        body: "3D treatment planning lets you preview your final smile before treatment begins.",
      },
    ],
    detailHeading: "Is Invisalign Right for You?",
    detailBody:
      "Invisalign handles most cases that traditional braces do — crowding, spacing, overbites, underbites, crossbites. Treatment typically lasts 9–18 months depending on complexity. Your first consultation includes a 3D scan and a digital preview of your projected results — no commitment required.",
    detailImage: "/images/services/cosmetic-smile.jpg",
    closingHeading: "Considering straightening your smile?",
    closingBody:
      "Book a free Invisalign consultation. Scan, preview, and decide on your own terms — no pressure.",
  },
  {
    category: "orthodontics",
    slug: "traditional-braces-calgary-se",
    categoryLabel: "Orthodontics",
    title: "Traditional Braces",
    eyebrow: "Fixed Orthodontics",
    heroSubtitle:
      "Time-tested metal or ceramic braces — the most versatile tool in orthodontics for complex cases of all ages.",
    heroImage: "/images/services/orthodontics-male.jpg",
    intro:
      "Traditional braces remain the gold-standard for treating complex orthodontic cases — significant crowding, severe bite problems, or rotated teeth. Modern brackets are smaller, smoother, and more comfortable than ever, with ceramic (tooth-coloured) options available for older teens and adults who prefer a subtler look.",
    pillars: [
      {
        num: "01",
        label: "Handles Anything",
        body: "Braces can correct cases that clear aligners can't — making them the most versatile option.",
      },
      {
        num: "02",
        label: "Always On",
        body: "Braces work 24/7 — no risk of forgetting to wear your aligners.",
      },
      {
        num: "03",
        label: "Ceramic Option",
        body: "Tooth-coloured ceramic brackets are far less visible than classic metal.",
      },
    ],
    detailHeading: "What to Expect During Treatment",
    detailBody:
      "Treatment time averages 18–24 months and varies with complexity. You'll see us every 6–8 weeks for adjustments. We'll go over what to eat, what to avoid, and exactly how to clean around your braces — and we'll always be a phone call away if a wire pokes or a bracket comes loose.",
    detailImage: "/images/services/kids-group.jpg",
    closingHeading: "Wondering if braces are right for you or your child?",
    closingBody:
      "Book an orthodontic consultation. We'll examine, x-ray, and walk you through every option — braces, Invisalign, or a combination.",
  },

  // ---------- URGENT DENTAL CARE ----------
  {
    category: "urgent-dental-care",
    slug: "root-canal-therapy-se-calgary",
    categoryLabel: "Urgent Dental Care",
    title: "Root Canal Therapy",
    eyebrow: "Save Your Tooth",
    heroSubtitle:
      "Modern root canal treatment is comfortable, predictable, and the best way to save a tooth from extraction — usually completed in one or two visits.",
    heroImage: "/images/services/detail-clinical.jpg",
    intro:
      "A root canal saves a tooth whose nerve has been infected or damaged — by deep decay, a crack, or trauma. With modern techniques, gentle anaesthetic, and rotary instrumentation, the procedure is no more uncomfortable than a deep filling. The relief patients feel afterwards — from the throbbing pain that brought them in — is profound.",
    pillars: [
      {
        num: "01",
        label: "Pain Relief",
        body: "Most patients arrive in significant pain and leave feeling dramatically better.",
      },
      {
        num: "02",
        label: "Saves Your Tooth",
        body: "Keeping your natural tooth is almost always preferable to extraction and replacement.",
      },
      {
        num: "03",
        label: "Predictably Comfortable",
        body: "Profound numbing, sedation if needed, and gentle modern techniques.",
      },
    ],
    detailHeading: "What Happens After a Root Canal",
    detailBody:
      "Once the root canal is complete, the tooth typically needs a crown for long-term protection — back teeth especially. We'll discuss the full plan upfront so you know exactly what to expect (and what it will cost) before treatment begins.",
    detailImage: "/images/services/detail-woman-visit.jpg",
    closingHeading: "In pain right now?",
    closingBody:
      "Call us at 403-984-1616 — we accommodate same-day emergency appointments whenever possible.",
  },
  {
    category: "urgent-dental-care",
    slug: "wisdom-tooth-extraction-se-calgary",
    categoryLabel: "Urgent Dental Care",
    title: "Wisdom Tooth Extraction",
    eyebrow: "Urgent Dental Care",
    heroSubtitle:
      "Gentle, expert removal of erupted, impacted, or problematic wisdom teeth — with sedation options to keep you completely at ease.",
    heroImage: "/images/services/detail-clinical.jpg",
    intro:
      "Most adult mouths don't have room for wisdom teeth — and when they erupt sideways, partially, or cause crowding, infection, or pain, removing them is often the right call. Our team has extensive surgical experience including impacted extractions, with sedation available so you can sleep through the whole thing if you'd like.",
    pillars: [
      {
        num: "01",
        label: "Sedation Options",
        body: "From nitrous oxide to oral sedation — pick the comfort level that suits you.",
      },
      {
        num: "02",
        label: "Surgical Expertise",
        body: "Our surgically-trained dentists handle impacted cases that other clinics refer out.",
      },
      {
        num: "03",
        label: "Clear Recovery Plan",
        body: "Written aftercare instructions, prescription where needed, and a direct line for questions.",
      },
    ],
    detailHeading: "When to Have Them Out",
    detailBody:
      "Wisdom teeth that are erupting cleanly and easy to clean can often stay. Wisdom teeth that are impacted, causing pressure, infected, or contributing to crowding usually need to come out — earlier is generally easier than later, since the roots are still developing in teens and young adults.",
    detailImage: "/images/services/detail-mature-man.jpg",
    closingHeading: "Wisdom teeth bothering you?",
    closingBody:
      "Book a consultation — we'll x-ray, evaluate, and only recommend extraction if it's truly needed.",
  },

  // ---------- ADDITIONAL CARE ----------
  {
    category: "additional-care",
    slug: "sedation-dentistry-se-calgary",
    categoryLabel: "Additional Care",
    title: "Sedation Dentistry",
    eyebrow: "Comfort & Calm",
    heroSubtitle:
      "Nitrous oxide, oral sedation, and IV sedation options — so dental anxiety never stands between you and the care you need.",
    heroImage: "/images/services/detail-woman-visit.jpg",
    intro:
      "If anxiety, a strong gag reflex, or past bad experiences have kept you from the dentist, you're not alone — and we have solutions. Calgary South Dental offers a full range of sedation options, from gentle laughing gas right through to deeper sedation for longer procedures, so every patient can get the care they need in genuine comfort.",
    pillars: [
      {
        num: "01",
        label: "Nitrous Oxide (Laughing Gas)",
        body: "Light, fast-acting, wears off within minutes — you can even drive yourself home.",
      },
      {
        num: "02",
        label: "Oral Sedation",
        body: "A pill taken before your appointment to bring deeper relaxation; you'll need a ride home.",
      },
      {
        num: "03",
        label: "IV Sedation",
        body: "For complex procedures or significant anxiety — many patients have no memory of the visit afterwards.",
      },
    ],
    detailHeading: "Which Option Is Right for You?",
    detailBody:
      "We'll review your medical history, anxiety level, and the procedure you need, then recommend the lightest level of sedation that keeps you genuinely comfortable. You're always in control — never sedated beyond what you've agreed to.",
    detailImage: "/images/services/cosmetic-smile.jpg",
    closingHeading: "Anxiety holding you back?",
    closingBody:
      "Let's talk. Book a no-pressure consultation and we'll find the right comfort plan for you.",
  },

  // ---------- CHILDREN'S CARE ----------
  {
    category: "childrens-care",
    slug: "sealants-fluoride-calgary-se",
    categoryLabel: "Children's Care",
    title: "Sealants & Fluoride",
    eyebrow: "Children's Preventive Care",
    heroSubtitle:
      "Two of the most effective tools in pediatric dentistry — protecting your child's teeth from decay long before any problems start.",
    heroImage: "/images/services/kids-smile.jpg",
    intro:
      "Sealants and fluoride treatments are simple, painless, and remarkably effective — together they can dramatically reduce your child's risk of cavities. We apply both as part of routine pediatric visits, helping kids start their adult life with strong, decay-free teeth.",
    pillars: [
      {
        num: "01",
        label: "Sealants Block Decay",
        body: "Thin protective coatings painted into the deep grooves of back teeth — where cavities most often start.",
      },
      {
        num: "02",
        label: "Fluoride Strengthens Enamel",
        body: "Topical fluoride remineralizes early weak spots and makes enamel more resistant to acid.",
      },
      {
        num: "03",
        label: "Quick & Painless",
        body: "Both treatments take only a few minutes and no needles, no drilling.",
      },
    ],
    detailHeading: "When to Apply Each",
    detailBody:
      "Sealants are typically placed on permanent molars as they erupt (around ages 6 and 12) and can last 5–10 years with proper care. Fluoride varnish is applied at every cleaning visit and is safe and effective for kids of all ages — and adults too, especially those with a history of cavities.",
    detailImage: "/images/services/kids-friends.jpg",
    closingHeading: "Want to lock in your child's healthy teeth?",
    closingBody:
      "Book a kids' visit — we'll check, clean, fluoride, and seal as needed in a single friendly appointment.",
  },
  {
    category: "childrens-care",
    slug: "space-maintainers-calgary-se",
    categoryLabel: "Children's Care",
    title: "Space Maintainers",
    eyebrow: "Children's Preventive Care",
    heroSubtitle:
      "When a baby tooth is lost too early, a custom space maintainer holds the gap open so the adult tooth has room to erupt straight.",
    heroImage: "/images/services/kids-smile.jpg",
    intro:
      "Baby teeth do more than help your child chew — they hold the space for permanent teeth coming in underneath. If a baby tooth is lost early (to decay, trauma, or naturally a couple of years before its replacement), neighbouring teeth tend to drift into the gap, causing crowding and crooked adult teeth. A simple space maintainer prevents this — saving orthodontic treatment later.",
    pillars: [
      {
        num: "01",
        label: "Preserves Future Alignment",
        body: "Holds the gap so the adult tooth erupts where it should — no drift, no crowding.",
      },
      {
        num: "02",
        label: "Comfortable & Discreet",
        body: "Most maintainers are small metal bands hidden behind back teeth — your child barely notices.",
      },
      {
        num: "03",
        label: "Prevents Costlier Treatment",
        body: "A small appliance now can save the need for braces or extractions years from now.",
      },
    ],
    detailHeading: "Types of Space Maintainers",
    detailBody:
      "Most are 'band-and-loop' designs that wrap one tooth and extend a small wire across the gap. For larger spaces or front-tooth losses, we use other configurations. They stay in until the permanent tooth is just about to erupt — at which point we remove them in a quick visit.",
    detailImage: "/images/services/kids-friends.jpg",
    closingHeading: "Baby tooth lost early?",
    closingBody:
      "Book a kids' visit. We'll evaluate whether a space maintainer is needed and place one in just one or two short visits if so.",
  },
  {
    category: "childrens-care",
    slug: "dental-cavities-treatment-se-calgary",
    categoryLabel: "Children's Care",
    title: "Dental Cavities Treatment for Kids",
    eyebrow: "Children's Restorative Care",
    heroSubtitle:
      "Gentle, age-appropriate cavity treatment — including tell-show-do techniques, kid-friendly numbing, and sedation when needed.",
    heroImage: "/images/services/kids-smile.jpg",
    intro:
      "Cavities are common in childhood, and treating them early prevents pain, infection, and lost school days. Our team uses age-appropriate, child-friendly approaches — explaining each step in language kids understand, using gentle numbing techniques, and offering sedation for kids who need extra support to stay relaxed.",
    pillars: [
      {
        num: "01",
        label: "Tell-Show-Do Approach",
        body: "We tell, we show, then we do — kids feel in control because they know what's happening.",
      },
      {
        num: "02",
        label: "Gentle Numbing",
        body: "Topical gel first, then a slow, slow injection that most kids barely feel.",
      },
      {
        num: "03",
        label: "Sedation Available",
        body: "Nitrous oxide or oral sedation for kids with significant anxiety or larger treatment plans.",
      },
    ],
    detailHeading: "Treatment Options by Severity",
    detailBody:
      "Tiny early cavities often need only fluoride and improved home care. Small to moderate cavities are filled with tooth-coloured composite. Deeper cavities may need a pulpotomy ('baby root canal') and a crown. We always explain every option and answer every question — both yours and your child's.",
    detailImage: "/images/services/kids-group.jpg",
    closingHeading: "Worried about your child's tooth?",
    closingBody:
      "Bring them in — we'll examine, explain, and proceed only with your full understanding and agreement.",
  },
  {
    category: "childrens-care",
    slug: "preventive-dental-care-se-calgary",
    categoryLabel: "Children's Care",
    title: "Preventive Dental Care for Children",
    eyebrow: "Children's Preventive Care",
    heroSubtitle:
      "Cleanings, exams, fluoride, sealants, and home-care coaching — the whole preventive toolkit for healthy growing smiles.",
    heroImage: "/images/services/kids-friends.jpg",
    intro:
      "We start seeing kids around their first birthday for a 'happy visit' — and from there, we build a relationship that grows with them. Twice-yearly visits include a cleaning, fluoride, age-appropriate x-rays, and a full exam — plus coaching for both kids and parents on brushing, flossing, diet, and habits.",
    pillars: [
      {
        num: "01",
        label: "Start Early",
        body: "First visit by age 1 — short, fun, and sets the tone for lifelong comfort at the dentist.",
      },
      {
        num: "02",
        label: "Build Good Habits",
        body: "We teach kids (and parents) what to do at home — and make it fun, not a chore.",
      },
      {
        num: "03",
        label: "Catch Issues Early",
        body: "Regular visits spot bite issues, cavities, and habits like thumb-sucking when they're easiest to address.",
      },
    ],
    detailHeading: "Why Kids Love Coming Here",
    detailBody:
      "Our pediatric specialist Dr. Strater Crowfoot and our whole team make every kid feel welcome — from the toys in the waiting area to the prizes after the visit. We move at your child's pace, never force, and celebrate every win, even just sitting in the big chair.",
    detailImage: "/images/services/kids-group.jpg",
    closingHeading: "Time for your child's first (or next) visit?",
    closingBody:
      "Book a happy visit — short, fun, and the beginning of a lifelong friendship with their dentist.",
  },
];

// Quick-lookup map by category+slug
export const SERVICE_MAP: Record<string, ServiceConfig> = SERVICES.reduce(
  (acc, s) => {
    acc[`${s.category}/${s.slug}`] = s;
    return acc;
  },
  {} as Record<string, ServiceConfig>
);

// FOR PATIENTS dropdown — mirrors live site
export const PATIENTS_NAV: { label: string; href: string }[] = [
  { label: "Your First Visit", href: "/for-patients#your-first-visit" },
  { label: "Financial Options", href: "/for-patients#financial-options" },
  { label: "Patient Forms", href: "/new-patients-form" },
  {
    label: "Non-Insured Health Benefits for First Nations and Inuits",
    href: "/non-insured-health-benefits-for-first-nations-and-inuits",
  },
  { label: "CDCP Dentist", href: "/cdcp-dentist" },
];
