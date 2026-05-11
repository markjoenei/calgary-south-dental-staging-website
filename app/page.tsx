"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "motion/react";

// ============================================================
// SHARED HELPERS
// ============================================================

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
  },
};

const viewportOnce = { once: true, amount: 0.2 };

// ============================================================
// INLINE SVG HELPERS
// ============================================================

function GoogleGLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="Google">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function GoldStars() {
  return (
    <span style={{ display: "inline-flex", gap: "4px", color: "#FBBC04" }} aria-label="5 out of 5 stars">
      {[0,1,2,3,4].map(i => (
        <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </span>
  );
}

function GoogleRatingRow({ textColor = "white" }: { textColor?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mt-5">
      <GoogleGLogo />
      <div className="flex items-center gap-0.5">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <span
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          color: textColor,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        4.9 Rating from 112 Reviews
      </span>
    </div>
  );
}

function ChevronDown() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", flexShrink: 0 }}
    >
      <polyline points="2,4 6,8 10,4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", flexShrink: 0 }}
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

// ============================================================
// TESTIMONIAL DATA
// ============================================================

const testimonials = [
  {
    name: "Danielle R.",
    quote:
      "It was my daughter's first dentist appointment and she is 3 years old. Royal Bay Dental did an amazing job of making us both feel welcome. They were extremely patient and helpful. We will be coming back!",
  },
  {
    name: "Cheryl F.",
    quote:
      "Best dental cleaning I've had in years. Anna was amazing as was the entire team at Royal Bay Dental. So glad my family has made the decision to switch to this dental office. Highly recommend them!!",
  },
  {
    name: "Brad W.",
    quote:
      "Dr. Gurek was amazing and it went smoothly and seemed effortless. What an amazing crew and thank you to dental hygienist Anna for getting everything else really dialed in. It was an amazing experience being a brand new office. You all as a team will go far.",
  },
  {
    name: "kristopher c.",
    quote:
      "Fantastic dental clinic. The staff are very friendly and professional. The service is exceptional especially with the 3D scan of your teeth. They walk you through exactly what they will be doing. As a...",
  },
  {
    name: "Rebecca A.",
    quote:
      "Highly recommend this Dental office. All the staff are kind and friendly. They all care about your dental anxieties and sensitivities and go above and beyond to ensure you have a pain free, enjoyable...",
  },
  {
    name: "Jane O.",
    quote:
      "Beautiful, light filled office! Front desk staff, Teresa and the rest are bright and welcoming. Dr Gurek has the magic touch. I hardly felt a thing through three fillings! Assistant Lauren is kind and...",
  },
];

// ============================================================
// SERVICE CARD SUB-COMPONENT
// ============================================================

function ServiceCard({ image, title }: { image: string; title: string }) {
  return (
    <a
      href="#"
      className="group relative w-[294px] h-[440px] overflow-hidden flex-shrink-0 block"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
      />
      {/* Base dark gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(rgba(15,15,15,0), rgba(15,15,15,0.55) 100%)",
        }}
      />
      {/* Teal gradient that fades in on hover */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to top, rgba(39,157,185,0.6), rgba(39,157,185,0) 70%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h2
          className="text-white uppercase mb-2 transition-transform duration-500 ease-out group-hover:-translate-y-1"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: "44.8px",
            letterSpacing: "0.64px",
          }}
        >
          {title}
        </h2>
        <p
          className="text-white inline-flex items-center gap-2 transition-transform duration-500 ease-out group-hover:-translate-y-1"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "28px",
          }}
        >
          Read more
          <span
            className="inline-flex items-center justify-center transition-all duration-500 ease-out group-hover:translate-x-1"
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              color: "#141f2e",
              fontSize: "13px",
              lineHeight: 1,
            }}
          >
            &#8594;
          </span>
        </p>
      </div>
      {/* Bottom accent bar that grows on hover */}
      <span className="absolute bottom-0 left-0 h-[3px] bg-[#279DB9] w-0 group-hover:w-full transition-[width] duration-500 ease-out" />
    </a>
  );
}

// ============================================================
// EYEBROW SUB-COMPONENT
// ============================================================

function Eyebrow({
  children,
  color = "#d8a986",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <h5
      className="uppercase mb-4"
      style={{
        fontFamily: "var(--font-montserrat), sans-serif",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "19.6px",
        letterSpacing: "5.6px",
        color,
      }}
    >
      {children}
    </h5>
  );
}

// ============================================================
// INLINE LINK SUB-COMPONENT
// ============================================================

function InlineLink({
  href,
  children,
  light = false,
}: {
  href?: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a
      href={href || "#"}
      className={
        light
          ? "group inline-flex items-center mt-6 text-white hover:text-[#141f2e] transition-colors duration-300"
          : "group inline-flex items-center mt-6 text-black hover:text-[#279DB9] transition-colors duration-300"
      }
      style={{
        fontFamily: "var(--font-montserrat), sans-serif",
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "22px",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
      <span
        className={
          light
            ? "ml-[10px] transition-all duration-300 ease-out group-hover:bg-[#141f2e] group-hover:translate-x-1"
            : "ml-[10px] transition-all duration-300 ease-out group-hover:bg-[#279DB9] group-hover:translate-x-1"
        }
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          backgroundColor: light ? "#ffffff" : "#141f2e",
          color: light ? "#279DB9" : "#ffffff",
          fontSize: "14px",
          lineHeight: 1,
          verticalAlign: "middle",
          flexShrink: 0,
        }}
      >
        &#8594;
      </span>
    </a>
  );
}

// Nav items that get a chevron (dropdown indicator)
const NAV_ITEMS_WITH_CHEVRON = [
  "ABOUT US",
  "DENTAL SERVICES",
  "FOR PATIENTS",
];

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showVerticalLabel, setShowVerticalLabel] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, (v) => v * -0.08);
  const labelY = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.6 });

  useEffect(() => {
    function handleScroll() {
      const sectionTwo = document.getElementById("section-two");
      const testimonials = document.getElementById("section-testimonials");
      setHeaderScrolled(window.scrollY > 80);
      if (!sectionTwo || !testimonials) return;

      const startTrigger = sectionTwo.getBoundingClientRect().top;
      const endTrigger = testimonials.getBoundingClientRect().top;

      setShowVerticalLabel(
        startTrigger <= window.innerHeight * 0.6 && endTrigger > window.innerHeight * 0.4
      );
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const visibleCount = 3;
  const maxIndex = testimonials.length - visibleCount;

  function prevTestimonial() {
    if (testimonialIndex > 0) {
      setDirection(-1);
      setTestimonialIndex((i) => i - 1);
    }
  }

  function nextTestimonial() {
    if (testimonialIndex < maxIndex) {
      setDirection(1);
      setTestimonialIndex((i) => i + 1);
    }
  }

  const visibleTestimonials = testimonials.slice(
    testimonialIndex,
    testimonialIndex + visibleCount
  );

  return (
    <div
      className="min-h-screen bg-white text-[#141f2e]"
      style={{ fontFamily: "var(--font-poppins), sans-serif", overflowX: "clip" }}
    >
      {/* ============================================================
          HEADER — Modern sticky two-row header with scroll collapse
          ============================================================ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{
          transition: "box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: headerScrolled
            ? "0 4px 20px -8px rgba(0,0,0,0.25)"
            : "0 0 0 0 rgba(0,0,0,0)",
        }}
      >
        {/* ROW 1 — Top Utility Bar — collapses on scroll */}
        <motion.div
          className="w-full overflow-hidden"
          initial={false}
          animate={{
            height: headerScrolled ? 0 : 56,
            opacity: headerScrolled ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: "#279DB9" }}
        >
          <div
            className="w-full flex items-center justify-between"
            style={{
              height: "46px",
              maxWidth: "1825px",
              margin: "0 auto",
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "80px",
              paddingRight: "80px",
            }}
          >
            {/* Instagram icon */}
            <a
              href="https://www.instagram.com/calgarysouthdentalca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center text-white transition-transform duration-300 hover:scale-110"
            >
              <InstagramIcon size={20} />
            </a>

            {/* Address — hidden on mobile */}
            <p
              className="hidden md:flex items-center"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                lineHeight: "13px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#ffffff",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "6px", verticalAlign: "middle" }} aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
              60 Sunpark Plaza SE, Unit 120, Calgary, AB T2X 3Y2
            </p>

            {/* Right side — Book Online Here + mobile hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="hidden md:inline-flex items-center justify-center text-white transition-all duration-300 hover:text-white"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                Book Online Here
                <span
                  className="ml-2 inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    color: "#279DB9",
                    fontSize: "12px",
                  }}
                >
                  &#8594;
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ROW 2 — Main Nav — black band with glass effect on scroll */}
        <div
          className="w-full"
          style={{
            backgroundColor: headerScrolled ? "rgba(0,0,0,0.85)" : "#000000",
            backdropFilter: headerScrolled ? "blur(12px)" : "none",
            WebkitBackdropFilter: headerScrolled ? "blur(12px)" : "none",
            paddingTop: "10px",
            paddingBottom: "10px",
            transition: "background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            className="w-full flex items-center justify-between"
            style={{
              maxWidth: "1825px",
              margin: "0 auto",
              paddingLeft: "80px",
              paddingRight: "80px",
            }}
          >
            {/* Logo */}
            <motion.a
              href="/"
              className="flex-shrink-0"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.img
                src="/images/calgary-south-dental-logo.png"
                alt="Calgary South Dental"
                animate={{ height: headerScrolled ? 44 : 52.5 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                style={{ width: "auto", maxWidth: "200px", objectFit: "contain" }}
              />
            </motion.a>

            {/* Desktop nav — animated underline + rotating chevron */}
            <nav className="hidden md:flex items-center gap-8">
              {["HOME", "ABOUT US", "DENTAL SERVICES", "FOR PATIENTS", "CONTACT US"].map(
                (item) => {
                  const hasChevron = NAV_ITEMS_WITH_CHEVRON.includes(item);
                  return (
                    <a
                      key={item}
                      href="#"
                      className="group relative flex items-center gap-1 text-white uppercase"
                      style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "1.2px",
                        whiteSpace: "nowrap",
                        padding: "8px 0",
                      }}
                    >
                      <span className="relative inline-flex items-center transition-colors duration-300 group-hover:text-[#279DB9]">
                        {item}
                        {hasChevron && (
                          <span className="ml-1 inline-flex transition-transform duration-300 group-hover:rotate-180">
                            <ChevronDown />
                          </span>
                        )}
                      </span>
                      {/* Animated underline */}
                      <span
                        className="absolute left-0 right-0 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                        style={{
                          bottom: "0",
                          height: "2px",
                          backgroundColor: "#279DB9",
                          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                    </a>
                  );
                }
              )}
            </nav>

            {/* Right side actions — phone + Book Now CTA + mobile hamburger */}
            <div className="flex items-center gap-3">
              {/* Phone button — teal, pill-shaped on desktop */}
              <a
                href="tel:4039841616"
                className="hidden md:inline-flex items-center justify-center gap-2 px-5 border-2 border-[#279DB9] bg-[#279DB9] text-white transition-all duration-300 hover:bg-transparent hover:text-[#279DB9]"
                style={{
                  height: "40px",
                  borderRadius: "999px",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  whiteSpace: "nowrap",
                }}
              >
                <PhoneIcon />
                403-984-1616
              </a>

              {/* Mobile hamburger — animated bars */}
              <button
                className="md:hidden flex flex-col gap-[5px] p-2"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <span className="block w-6 h-[2px] bg-white transition-transform" />
                <span className="block w-6 h-[2px] bg-white transition-transform" />
                <span className="block w-6 h-[2px] bg-white transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          MOBILE MENU OVERLAY
          ============================================================ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#171717] flex flex-col"
          >
            <div className="flex justify-between items-center p-6">
              <img
                src="/images/calgary-south-dental-logo.png"
                alt="Calgary South Dental"
                style={{ width: "160px", objectFit: "contain" }}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-3xl leading-none"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 mt-12">
              {[
                "Home",
                "About Us",
                "Dental Services",
                "For Patients",
                "Contact Us",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-[#279DB9] transition-colors duration-300 uppercase tracking-[3px]"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="tel:4039841616"
                className="text-white hover:text-[#279DB9] transition-colors duration-300 uppercase tracking-[3px]"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                403-984-1616
              </a>
              <a
                href="https://www.instagram.com/calgarysouthdentalca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#279DB9] transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                @calgarysouthdentalca
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center px-8 bg-[#279DB9] border-2 border-[#279DB9] text-white transition-all duration-300 hover:bg-transparent"
                style={{
                  height: "46px",
                  borderRadius: "999px",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================================
          SECTION 0 — HERO (753px, video background) — modernized
          ============================================================ */}
      <section className="relative w-full overflow-hidden" style={{ height: "100vh" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-video-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/calgary-south-dental-hero.mp4" type="video/mp4" />
        </video>

        {/* Layered overlays — vertical gradient + slight teal vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(39,157,185,0.15) 100%)",
          }}
        />

        {/* Hero content — staggered entrance */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow color="#ffffff">Calgary South Dental</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-white uppercase mt-2"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(28px, 3.5vw, 50px)",
              fontWeight: 600,
              lineHeight: "65px",
              letterSpacing: "2px",
            }}
          >
            GENERAL AND COSMETIC DENTISTRY
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            className="text-white uppercase mt-3"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            Your Trusted Family Dentist in SE Calgary &mdash; Sunpark Plaza
          </motion.h1>

          <motion.h3
            variants={fadeUp}
            className="text-white uppercase mt-2"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            Gentle, state-of-the-art family, cosmetic &amp; emergency care &mdash; serving Sundance, Midnapore, Shawnessy and all of SE Calgary. New patients always welcome.
          </motion.h3>

          <motion.div variants={fadeUp}>
            <GoogleRatingRow textColor="white" />
          </motion.div>

          <motion.img
            variants={fadeUp}
            src="/images/hero-icon.png"
            alt=""
            className="mt-6"
            style={{ width: "46px", height: "65px" }}
          />

          <motion.a
            variants={fadeUp}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex items-center justify-center gap-2 bg-[#279DB9] border-2 border-[#279DB9] text-white transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-[1.03]"
            style={{
              height: "44px",
              minWidth: "185px",
              paddingLeft: "28px",
              paddingRight: "28px",
              borderRadius: "999px",
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "1px",
              textTransform: "uppercase",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            Book Online Here
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &#8594;
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll-down indicator */}
        <motion.div
          className="absolute left-1/2 bottom-8 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span
            className="text-white uppercase"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "3px",
              opacity: 0.85,
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "2px",
              height: "40px",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0))",
            }}
          />
        </motion.div>
      </section>

      {/* ============================================================
          SECTION 1 — EMERGENCY STRIP (bg #d3c6bc, 60px padding)
          ============================================================ */}
      {/* Fix 15: ensure full 60px padding top + bottom for ~316px height */}
      <section className="w-full bg-black" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          <div className="flex-1">
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 600,
                lineHeight: "52px",
                letterSpacing: "1.6px",
              }}
            >
              Dental Emergency?<br />Call Us: 403-984-1616
            </h2>
            <p
              className="mt-4 text-white"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "27.2px",
              }}
            >
              Royal Bay Dental Co. is here for your dental emergencies with immediate
              appointments. We prioritize urgent care to ensure you receive prompt and
              efficient treatment. Contact us now for swift assistance.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="tel:4039841616"
              className="group flex items-center justify-center gap-3 px-8 bg-[#1c1c1c] border-2 border-[#1c1c1c] text-white transition-all duration-300 hover:bg-[#279DB9] hover:border-[#279DB9] hover:scale-[1.03]"
              style={{
                height: "48px",
                borderRadius: "999px",
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                whiteSpace: "nowrap",
              }}
            >
              <PhoneIcon />
              Get Urgent Help
            </a>
          </div>
        </motion.div>
      </section>

      {/* ============================================================
          SECTION — OUR SERVICES (moved from cosmetic row)
          ============================================================ */}
      <section
        className="w-full bg-white"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-[860px] mx-auto"
          style={{ paddingLeft: "24px", paddingRight: "24px" }}
        >
          <Eyebrow>WHAT WE OFFER</Eyebrow>
          <h2
            className="text-[#141f2e] uppercase"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(28px, 3.5vw, 50px)",
              fontWeight: 600,
              lineHeight: "60px",
              letterSpacing: "2px",
            }}
          >
            Our Services
          </h2>
          <p
            className="mt-6 text-[#141f2e]"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "27.2px",
            }}
          >
            From a brighter everyday smile to a complete cosmetic transformation, our SE
            Calgary team blends artistry with the latest dental technology &mdash;
            comfortable, personalized, and built to last. Whitening, veneers, bonding,
            gum contouring &mdash; whatever your smile goal, we&apos;ll map a plan that
            fits your face, your lifestyle, and your budget.
          </p>
          <InlineLink href="#">Explore all services</InlineLink>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center mt-16"
        >
          <ServiceCard image="/images/teeth-whitening.webp" title="TEETH WHITENING" />
          <ServiceCard image="/images/porcelain-veneers.webp" title="PORCELAIN VENEERS" />
          <ServiceCard image="/images/cosmetic-bonding.webp" title="COSMETIC BONDING" />
          <ServiceCard image="/images/gum-contouring.webp" title="GUM CONTOURING" />
        </motion.div>
      </section>

      {/* ============================================================
          FIXED VERTICAL BRAND LABEL — visible from Section 2 to Testimonials
          Spring-smoothed Y translation tracks scroll for a drag/momentum feel.
          ============================================================ */}
      <div
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: "fixed",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          zIndex: 40,
          opacity: showVerticalLabel ? 1 : 0,
          transition: "opacity 0.4s cubic-bezier(0, 0, 0.2, 1)",
        }}
      >
        <motion.div
          style={{
            y: labelY,
            rotate: 180,
            paddingLeft: "30px",
            writingMode: "vertical-rl",
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "70px",
            fontWeight: 500,
            letterSpacing: "1.3px",
            color: "#000000",
            textShadow: "0 0 4px rgba(255,255,255,0.9), 1px 1px 0 rgba(255,255,255,0.8)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Calgary South Dental
        </motion.div>
      </div>

      {/* ============================================================
          SECTION 2 — CREATING BEAUTIFUL SMILES / ABOUT
          ============================================================ */}
      <section
        id="section-two"
        className="w-full bg-[#279DB9]"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <div
          className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          {/* Left — photo with rounded corners + soft shadow + hover zoom */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-shrink-0 w-full md:w-auto group overflow-hidden"
            style={{
              borderRadius: "8px",
              boxShadow: "0 20px 60px -20px rgba(20,31,46,0.25)",
            }}
          >
            <img
              src="/images/hero-brighter-smiles.webp"
              alt="Creating beautiful smiles"
              className="transition-transform duration-[800ms] ease-out group-hover:scale-105"
              style={{ width: "620px", maxWidth: "100%", objectFit: "cover", display: "block" }}
            />
          </motion.div>

          {/* Right — text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1"
          >
            <Eyebrow color="#ffffff">Dentist in South Calgary</Eyebrow>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(28px, 3.5vw, 50px)",
                fontWeight: 600,
                lineHeight: "65px",
                letterSpacing: "2px",
              }}
            >
              Looking for a trusted dental clinic in SE Calgary?
            </h2>
            <p
              className="mt-6 text-white"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "27.2px",
              }}
            >
              At Calgary South Dental, our dental clinic provides gentle, personalized
              dental care for patients of all ages&mdash;whether it&apos;s preventive
              check-ups, emergency treatments, or advanced services like Invisalign,
              veneers, root canals, sedation dentistry, cosmetic procedures, and
              more&mdash;to help you and your family achieve healthy, beautiful smiles.
            </p>
            <InlineLink href="#" light>
              Meet the team
            </InlineLink>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — TRANSFORMING YOUR DENTAL EXPERIENCE
          Fix 2: full-bleed bg-[#d3c6bc] (warm greige)
          Fix 11: center-align text
          Fix minor-1: paddingTop 28.8px (tighter top per context.md)
          ============================================================ */}
      <section
        className="w-full bg-[#0f0f0f] relative overflow-hidden"
        style={{ paddingTop: "120px", paddingBottom: "120px" }}
      >
        {/* Soft radial accent backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(39,157,185,0.18), transparent 70%), radial-gradient(ellipse 40% 40% at 100% 100%, rgba(39,157,185,0.10), transparent 60%)",
          }}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative max-w-[1440px] mx-auto"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          <div className="text-center max-w-[760px] mx-auto">
            <Eyebrow color="#279DB9">The CSD Standard</Eyebrow>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: "1.1",
                letterSpacing: "2px",
              }}
            >
              Our Core Values
            </h2>
            <p
              className="mt-5 text-white/70 mx-auto"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Three commitments that shape every visit, every conversation, and every smile we help build in SE Calgary.
            </p>
          </div>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7"
          >
            {[
              {
                num: "01",
                label: "Accessible",
                body: "Have a question, concern, or unexpected toothache? At Calgary South Dental, our team is always just a phone call away, ensuring you get the help you need when you need it.",
                image: "/images/dental-emergencies.webp",
                alt: "Always available dental care",
              },
              {
                num: "02",
                label: "Professional",
                body: "We combine professionalism with a friendly, light-hearted approach. Our team is dedicated to providing top-notch dental care in a warm and welcoming environment, making your visits enjoyable and stress-free.",
                image: "/images/general-dentistry.webp",
                alt: "Professional dental care",
              },
              {
                num: "03",
                label: "Authentic",
                body: "Honesty and transparency are at the heart of Calgary South Dental. We believe in open communication and will always provide you with clear, honest answers to any questions you may have. Experience our commitment to exceptional care and genuine service.",
                image: "/images/hero-brighter-smiles.webp",
                alt: "Genuine, transparent care",
              },
            ].map((v) => (
              <motion.div
                key={v.label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(6px)",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Watermark numeral */}
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-2 select-none transition-colors duration-500 group-hover:text-[#279DB9]/30"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "110px",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.04)",
                    letterSpacing: "-4px",
                  }}
                >
                  {v.num}
                </span>

                <div className="relative">
                  {/* Image chip */}
                  <div
                    className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:scale-105"
                    style={{
                      width: "84px",
                      height: "84px",
                      border: "1px solid rgba(39,157,185,0.30)",
                      boxShadow: "0 12px 28px -12px rgba(39,157,185,0.45)",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <img
                      src={v.image}
                      alt={v.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                    />
                  </div>

                  <h3
                    className="mt-6 text-white uppercase"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "28px",
                      letterSpacing: "3px",
                    }}
                  >
                    {v.label}
                  </h3>

                  {/* Accent rule */}
                  <span
                    aria-hidden="true"
                    className="block mt-4 transition-all duration-500 group-hover:w-16"
                    style={{
                      width: "32px",
                      height: "2px",
                      backgroundColor: "#279DB9",
                    }}
                  />

                  <p
                    className="mt-5 text-white/75"
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "15.5px",
                      fontWeight: 400,
                      lineHeight: "27px",
                    }}
                  >
                    {v.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================
          SECTION 4 — NOW HIRING
          Fix 11: center-align text
          ============================================================ */}
      <section
        className="w-full bg-white"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-[1440px] mx-auto text-center"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          <h2
            className="text-[#141f2e] text-center uppercase"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(28px, 3.5vw, 50px)",
              fontWeight: 600,
              lineHeight: "60px",
              letterSpacing: "2px",
            }}
          >
            NOW HIRING
          </h2>
          <p
            className="mt-6 text-[#141f2e] max-w-[860px] mx-auto text-center"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "27.2px",
            }}
          >
            Royal Bay Dental Co. is pleased to announce we are accepting applications
            for building a remarkable team at our brand-new dental practice. If you value
            hard work and a high degree of accountability in yourself, a positive work
            environment and meaningful relationships with both team members and patients,
            then we want to hear from you! Apply today and become part of our growing
            family.
          </p>
        </motion.div>
      </section>

      {/* ============================================================
          SECTION 5 — RESOLVE YOUR DENTAL CONCERNS
          ============================================================ */}
      <section
        className="w-full bg-[#279DB9] relative overflow-hidden"
        style={{ paddingTop: "120px", paddingBottom: "120px" }}
      >
        {/* Soft radial accent */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.12), transparent 70%)",
          }}
        />

        <div
          className="relative max-w-[1440px] mx-auto"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center max-w-[780px] mx-auto"
          >
            <Eyebrow color="#ffffff">Find Your Solution</Eyebrow>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: "1.1",
                letterSpacing: "2px",
              }}
            >
              Resolve Your <span style={{ fontStyle: "italic", fontWeight: 500 }}>Dental Concerns</span>
            </h2>
            <p
              className="mt-6 text-white/90 mx-auto"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Calgary South Dental is here to solve all your dental problems. Select a concern from the common dental issues below and explore options to achieve a healthy mouth, a stunning smile, and a better quality of life.
            </p>
            <a
              href="/book-appointment/"
              className="group inline-flex items-center justify-center gap-2 mt-8 px-8 bg-white border-2 border-white text-[#279DB9] transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-[1.03]"
              style={{
                height: "52px",
                borderRadius: "999px",
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              Book Appointment
            </a>
          </motion.div>

          {/* Concerns grid */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            {[
              { prefix: "I don't like my", keyword: "Smile", href: "#" },
              { prefix: "I'm missing some", keyword: "Teeth", href: "#" },
              { prefix: "My tooth is", keyword: "Broken", href: "#" },
              { prefix: "My gums are", keyword: "Bleeding", href: "https://calgarysouthdental.ca/gum-disease-bad-breath/" },
              { prefix: "My teeth are", keyword: "Crooked", href: "#" },
              { prefix: "My dentures", keyword: "Fall Out", href: "https://calgarysouthdental.ca/restorative-dentistry/dental-dentures-se-calgary/" },
              { prefix: "My teeth are", keyword: "Discoloured", href: "#" },
              { prefix: "I need a", keyword: "Family Dentist", href: "#" },
              { prefix: "Dentists make me", keyword: "Nervous", href: "#" },
            ].map((c) => (
              <motion.a
                key={c.keyword}
                href={c.href}
                variants={fadeUp}
                className="group flex items-center justify-between gap-4 rounded-2xl px-6 py-5 transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(6px)",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div className="min-w-0">
                  <p
                    className="text-white/75"
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "0.4px",
                      textTransform: "uppercase",
                    }}
                  >
                    {c.prefix}
                  </p>
                  <p
                    className="text-white mt-1 uppercase"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "26px",
                      letterSpacing: "1.5px",
                    }}
                  >
                    {c.keyword}
                  </p>
                </div>
                <span
                  className="flex-shrink-0 inline-flex items-center justify-center transition-all duration-500 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#279DB9]"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "999px",
                    border: "1.5px solid rgba(255,255,255,0.55)",
                    color: "#ffffff",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  aria-hidden="true"
                >
                  &#8594;
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premier CTA — full-bleed light teal tint panel */}
      <div
        className="w-full bg-black"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-[860px] mx-auto px-6"
        >
          <h2
            className="text-white uppercase"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(28px, 3.5vw, 50px)",
              fontWeight: 600,
              lineHeight: "60px",
              letterSpacing: "2px",
            }}
          >
            Premier Dental Care Tailored To Your Needs
          </h2>
          <p
            className="mt-4 text-white"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "27.2px",
            }}
          >
            Begin your journey to a healthier, more radiant smile with Royal Bay Dental Co.
          </p>
          <InlineLink href="#" light>General dentistry</InlineLink>
        </motion.div>
      </div>

      {/* ============================================================
          SECTION 7 — ALWAYS WELCOMING NEW PATIENTS
          ============================================================ */}
      <section
        className="w-full bg-white"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-[1440px] mx-auto text-center"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          <Eyebrow>Royal Bay Dental Co.</Eyebrow>
          <h2
            className="text-[#141f2e] uppercase"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(28px, 3.5vw, 50px)",
              fontWeight: 600,
              lineHeight: "60px",
              letterSpacing: "2px",
            }}
          >
            ALWAYS WELCOMING NEW PATIENTS
          </h2>
          <p
            className="mt-6 text-[#141f2e] max-w-[700px] mx-auto"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "27.2px",
            }}
          >
            Experience the Royal Bay Dental Co. difference! Our Dentists Victoria BC
            accepting new patients and provide personalized treatment plans according to
            your dental needs. Join our caring dental community today!
          </p>
          <InlineLink href="#">Contact us</InlineLink>
        </motion.div>
      </section>

      {/* ============================================================
          SECTION 8 — INVISALIGN SOLUTIONS (split bg images)
          ============================================================ */}
      <section className="w-full relative overflow-hidden" style={{ minHeight: "500px" }}>
        {/* Split background — full-bleed */}
        <div className="absolute inset-0 flex">
          <div
            className="flex-1"
            style={{
              backgroundImage: "url('/images/invisalign-bg-left.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          />
          <div
            style={{
              width: "307px",
              flexShrink: 0,
              backgroundImage: "url('/images/invisalign-bg-right.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          />
        </div>

        {/* Content: right half, white background */}
        <div className="relative z-10 flex h-full" style={{ minHeight: "500px" }}>
          {/* Spacer left half */}
          <div className="flex-1" />
          {/* Text right half */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-white flex flex-col justify-center"
            style={{
              width: "50%",
              minWidth: "320px",
              paddingLeft: "80px",
              paddingRight: "80px",
              paddingTop: "60px",
              paddingBottom: "60px",
            }}
          >
            <Eyebrow>Royal Bay Dental Co.</Eyebrow>
            <h2
              className="text-[#141f2e] uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(28px, 3vw, 50px)",
                fontWeight: 600,
                lineHeight: "60px",
                letterSpacing: "2px",
              }}
            >
              INVISALIGN Solutions
            </h2>
            <p
              className="mt-6 text-[#141f2e]"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "27.2px",
              }}
            >
              Invisalign offers a modern, subtle way to enhance your smile. With flexible,
              comfortable aligners, our dental team at Royal Bay Dental Co. can straighten
              your teeth and improve your bite. Enjoy a cleaner, more balanced, and radiant
              smile with Invisalign!
            </p>
            <InlineLink href="https://royalbaydentalco.ca/victoria-bc/invisalign/">
              Continue reading
            </InlineLink>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9 — TRANSFORMATIVE COSMETIC DENTISTRY
          ============================================================ */}
      <section
        className="w-full bg-[#279DB9]"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <div
          className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          {/* Left — text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1"
          >
            <Eyebrow>SERVICES</Eyebrow>
            <div className="flex items-start gap-4">
              {/* Rotated vertical label */}
              <div
                className="flex-shrink-0 mt-2"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                <span
                  className="text-[#d8a986] uppercase"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "5.6px",
                  }}
                >
                  Cosmetic DENTISTRY
                </span>
              </div>
              <div>
                <h2
                  className="text-white uppercase"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "clamp(28px, 3.5vw, 50px)",
                    fontWeight: 600,
                    lineHeight: "65px",
                    letterSpacing: "2px",
                  }}
                >
                  Transformative Cosmetic Dentistry
                </h2>
                <p
                  className="mt-6 text-white"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "27.2px",
                  }}
                >
                  At Royal Bay Dental Co., we offer various cosmetic dental services,
                  including porcelain veneers, cosmetic bonding, and complete smile
                  makeovers. Our cosmetic{" "}
                  <a href="#" className="underline">
                    dentist
                  </a>{" "}
                  will develop a customized plan to help you achieve the stunning smile
                  you&apos;ve always dreamed of. Discover how we can transform your smile
                  today!
                </p>
                <InlineLink href="#" light>Cosmetic dentistry</InlineLink>
              </div>
            </div>
          </motion.div>

          {/* Right — image with rounded corners + soft shadow + hover zoom */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-shrink-0 w-full md:w-auto group overflow-hidden"
            style={{
              borderRadius: "8px",
              boxShadow: "0 20px 60px -20px rgba(20,31,46,0.25)",
            }}
          >
            <img
              src="/images/cosmetic-dentistry.webp"
              alt="Transformative cosmetic dentistry"
              className="transition-transform duration-[800ms] ease-out group-hover:scale-105"
              style={{ width: "620px", maxWidth: "100%", objectFit: "cover", display: "block" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 11 — TESTIMONIALS CAROUSEL
          Fix 8: stars image at top of each card (already present)
          Fix 9: Google rating row under heading
          ============================================================ */}
      <section
        id="section-testimonials"
        className="w-full bg-white"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-[1440px] mx-auto"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          {/* Heading + Google rating row */}
          <div className="text-center mb-12">
            <h2
              className="text-[#141f2e] uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(28px, 3.5vw, 50px)",
                fontWeight: 600,
                lineHeight: "65px",
                letterSpacing: "2px",
              }}
            >
              <span style={{ fontStyle: "italic" }}>Patients Love </span>
              <span>IT HERE</span>
            </h2>
            {/* Google rating row with dark text for light background */}
            <GoogleRatingRow textColor="#141f2e" />
          </div>

          {/* Carousel viewport — relative wrapper so arrows can be absolutely positioned */}
          <div style={{ position: "relative" }}>
            {/* Left arrow — absolutely positioned, vertically centered with cards */}
            <button
              aria-label="Previous testimonial"
              onClick={prevTestimonial}
              disabled={testimonialIndex === 0}
              className="transition-opacity duration-300 disabled:opacity-30"
              style={{
                position: "absolute",
                left: "-60px",
                top: "calc(50% - 40px)",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                zIndex: 10,
                padding: 0,
              }}
            >
              <img src="/icons/arrow-left.png" alt="" width={100} height={19} style={{ objectFit: "contain" }} />
            </button>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={testimonialIndex}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({
                      x: d > 0 ? "100%" : "-100%",
                      opacity: 0,
                    }),
                    center: { x: "0%", opacity: 1 },
                    exit: (d: number) => ({
                      x: d > 0 ? "-100%" : "100%",
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {visibleTestimonials.map((t, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-start transition-all duration-500 ease-out hover:-translate-y-2"
                      style={{
                        backgroundColor: i === 1 ? "#d3c6bc" : "rgba(211,198,188,0.35)",
                        padding: "32px",
                        borderRadius: "8px",
                        boxShadow:
                          i === 1
                            ? "0 20px 40px -20px rgba(20,31,46,0.2)"
                            : "0 10px 30px -15px rgba(20,31,46,0.12)",
                      }}
                    >
                      {/* Large decorative opening quotation mark */}
                      <span
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                          fontSize: "70px",
                          fontWeight: 700,
                          color: "#141f2e",
                          lineHeight: 0.8,
                          marginBottom: "16px",
                          display: "block",
                          flexShrink: 0,
                        }}
                      >
                        &ldquo;
                      </span>
                      {/* Quote text */}
                      <p
                        className="text-[#141f2e] flex-1"
                        style={{
                          fontFamily: "var(--font-poppins), sans-serif",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "27.2px",
                        }}
                      >
                        {t.quote}
                      </p>
                      {/* Gold stars — below quote text */}
                      <div style={{ marginTop: "24px", flexShrink: 0 }}>
                        <GoldStars />
                      </div>
                      {/* Reviewer name */}
                      <h5
                        className="text-[#1c1c1c] uppercase"
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                          fontSize: "20px",
                          fontWeight: 600,
                          lineHeight: "28px",
                          letterSpacing: "6px",
                          marginTop: "12px",
                        }}
                      >
                        {t.name}
                      </h5>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right arrow — absolutely positioned, vertically centered with cards */}
            <button
              aria-label="Next testimonial"
              onClick={nextTestimonial}
              disabled={testimonialIndex >= maxIndex}
              className="transition-opacity duration-300 disabled:opacity-30"
              style={{
                position: "absolute",
                right: "-60px",
                top: "calc(50% - 40px)",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                zIndex: 10,
                padding: 0,
              }}
            >
              <img src="/icons/arrow-right.png" alt="" width={100} height={19} style={{ objectFit: "contain" }} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ============================================================
          SECTION 12 — CONTACT INFO (Maps + Details)
          Fix 13: remove @royalbaydentalco text — icon only
          ============================================================ */}
      <section
        className="w-full bg-[#279DB9]"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <div
          className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          {/* Left — Google Maps */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-shrink-0 w-full md:w-auto"
          >
            <iframe
              src="https://www.google.com/maps?q=60+Sunpark+Plaza+SE+Unit+120,+Calgary,+AB+T2X+3Y2&output=embed"
              title="Calgary South Dental location"
              style={{
                border: 0,
                width: "690px",
                height: "600px",
                maxWidth: "100%",
                borderRadius: "8px",
                boxShadow: "0 20px 60px -20px rgba(20,31,46,0.25)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Right — contact details */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1"
          >
            <Eyebrow>GET IN TOUCH</Eyebrow>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(28px, 3.5vw, 50px)",
                fontWeight: 600,
                lineHeight: "60px",
                letterSpacing: "2px",
              }}
            >
              Contact Info
            </h2>
            <p
              className="mt-4 text-white"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "27.2px",
              }}
            >
              Creating a brighter future for your dental well-being.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {/* Find Us */}
              <div>
                <p
                  className="text-white mb-1"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "22.4px",
                  }}
                >
                  Find Us
                </p>
                <a
                  href="https://www.google.com/maps/dir//Calgary+South+Dental,+60+Sunpark+Plaza+SE+Unit+120,+Calgary,+AB+T2X+3Y2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "27.2px",
                  }}
                >
                  60 Sunpark Plaza SE, Unit 120, Calgary, AB T2X 3Y2
                </a>
              </div>

              {/* Say Hello */}
              <div>
                <p
                  className="text-white mb-1"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "22.4px",
                  }}
                >
                  Say Hello
                </p>
                <a
                  href="tel:4039841616"
                  className="block text-white hover:text-[#d8a986] transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "27.2px",
                  }}
                >
                  403-984-1616
                </a>
              </div>

              {/* Visit Us */}
              <div>
                <p
                  className="text-white mb-1"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "22.4px",
                  }}
                >
                  Visit Us
                </p>
                <div
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "27.2px",
                  }}
                >
                  <p>Mon - Thu: 8:30am &ndash; 4:30pm</p>
                  <p>Fri: 8:30am &ndash; 3pm</p>
                  <p>Sat - Sun: Closed</p>
                </div>
              </div>

              {/* Follow Us — Fix 13: icon only, no text handle */}
              <div>
                <p
                  className="text-white mb-1"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "22.4px",
                  }}
                >
                  Follow Us
                </p>
                <a
                  href="https://www.instagram.com/calgarysouthdentalca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-[#d8a986] transition-colors duration-300"
                  aria-label="Instagram"
                  style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                >
                  <InstagramIcon size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
          Fix 12: remove border-t border-gray-100
          Fix 14: add Instagram icon on right side of nav row
          ============================================================ */}
      <footer className="w-full bg-[#000000]">
        <div
          className="max-w-[1440px] mx-auto py-12 flex flex-col items-center gap-8"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          {/* Logo */}
          <a href="/">
            <img
              src="/images/calgary-south-dental-logo.png"
              alt="Calgary South Dental"
              style={{ width: "191px", objectFit: "contain" }}
            />
          </a>

          {/* Nav links + Instagram icon on right */}
          <div className="w-full flex items-center justify-center relative">
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {[
                { label: "HOME", href: "/" },
                { label: "ABOUT US", href: "#" },
                { label: "DENTAL SERVICES", href: "#" },
                { label: "FOR PATIENTS", href: "#" },
                { label: "CONTACT US", href: "/contact-us/" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-[#279DB9] transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    letterSpacing: "0.16px",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            {/* Instagram icon right-aligned */}
            <a
              href="https://www.instagram.com/calgarysouthdentalca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="absolute right-0 text-white hover:text-[#279DB9] transition-colors duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              <InstagramIcon size={24} />
            </a>
          </div>

          {/* Horizontal divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              width: "100%",
              margin: "24px 0",
            }}
          />

          {/* Copyright */}
          <p
            className="text-white text-center"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "24px",
              opacity: 0.7,
            }}
          >
            &copy;2026 Calgary South Dental.{" "}
            <a href="#" className="hover:text-[#279DB9] transition-colors duration-300">
              Sitemap
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-[#279DB9] transition-colors duration-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
