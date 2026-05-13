"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "motion/react";
import {
  SiteHeader,
  InuitDiamondCluster,
  InuitWaveLines,
  InuitSunburst,
  InuitChevronStack,
  InuitStarPattern,
  InuitArrowField,
} from "./components/SiteChrome";

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
    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-5">
      <GoogleGLogo />
      <div className="flex items-center gap-0.5">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <span
        className="text-center"
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          fontSize: "clamp(12px, 1.6vw, 16px)",
          fontWeight: 400,
          color: textColor,
          letterSpacing: "1.5px",
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

function FacebookIcon({ size = 22 }: { size?: number }) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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

function ServiceCard({
  image,
  title,
  href = "#",
}: {
  image: string;
  title: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group relative w-full max-w-[294px] h-[380px] sm:h-[440px] overflow-hidden flex-shrink-0 block"
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
            fontSize: "clamp(22px, 4.5vw, 32px)",
            fontWeight: 600,
            lineHeight: 1.2,
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

// ============================================================
// DECORATIVE VECTOR ART — global accents across home page
// Brand palette: #279DB9 teal · #d8a986 tan · #141f2e navy
// All decorations are pointer-events: none and aria-hidden.
// ============================================================

function DotGrid({
  rows = 6,
  cols = 10,
  color = "#d8a986",
  size = 4,
  gap = 18,
  opacity = 0.55,
}: {
  rows?: number;
  cols?: number;
  color?: string;
  size?: number;
  gap?: number;
  opacity?: number;
}) {
  const width = (cols - 1) * gap + size;
  const height = (rows - 1) * gap + size;
  return (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ opacity, display: "block" }}
    >
      {Array.from({ length: rows }).flatMap((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={c * gap + size / 2}
            cy={r * gap + size / 2}
            r={size / 2}
            fill={color}
          />
        ))
      )}
    </svg>
  );
}

function WaveSwoosh({
  color = "#279DB9",
  width = 520,
  height = 200,
  stroke = 2,
  opacity = 0.35,
}: {
  color?: string;
  width?: number;
  height?: number;
  stroke?: number;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox="0 0 520 200"
      fill="none"
      style={{ opacity, display: "block" }}
    >
      <path
        d="M0 130 Q 90 30 200 100 T 420 80 T 520 60"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <path
        d="M0 160 Q 100 70 220 130 T 440 110 T 520 90"
        stroke={color}
        strokeWidth={stroke - 0.5}
        strokeLinecap="round"
        opacity={0.55}
      />
    </svg>
  );
}

function OrganicBlob({
  color = "#d8a986",
  size = 420,
  opacity = 0.18,
}: {
  color?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill={color}
      style={{ opacity, display: "block" }}
    >
      <path d="M44.3,-67.5C56.5,-58.3,64.7,-43.7,69.7,-28.7C74.7,-13.7,76.5,1.8,73.1,16.5C69.7,31.2,61,45.1,49.1,55.6C37.1,66.1,21.9,73.3,5.4,73C-11.1,72.7,-28.9,65,-43.4,53.7C-57.9,42.4,-69.1,27.6,-72.3,11.3C-75.5,-5,-70.8,-22.8,-61.3,-36.3C-51.8,-49.7,-37.5,-58.8,-22.7,-66.4C-7.9,-74,7.4,-80.1,21.9,-78.4C36.5,-76.6,50.4,-67,44.3,-67.5Z" transform="translate(100 100)" />
    </svg>
  );
}

function CircleRings({
  color = "#279DB9",
  size = 260,
  rings = 4,
  stroke = 1.2,
  opacity = 0.35,
}: {
  color?: string;
  size?: number;
  rings?: number;
  stroke?: number;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      style={{ opacity, display: "block" }}
    >
      {Array.from({ length: rings }).map((_, i) => (
        <circle
          key={i}
          cx="50"
          cy="50"
          r={10 + i * (40 / rings)}
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={i % 2 === 0 ? "0" : "3 5"}
        />
      ))}
    </svg>
  );
}

function SmileArc({
  color = "#d8a986",
  width = 320,
  height = 120,
  stroke = 3,
  opacity = 0.4,
}: {
  color?: string;
  width?: number;
  height?: number;
  stroke?: number;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox="0 0 320 120"
      fill="none"
      style={{ opacity, display: "block" }}
    >
      <path
        d="M10 30 Q 160 130 310 30"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <circle cx="10" cy="30" r="5" fill={color} />
      <circle cx="310" cy="30" r="5" fill={color} />
    </svg>
  );
}

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================

export default function HomePage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showVerticalLabel, setShowVerticalLabel] = useState(false);

  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, (v) => v * -0.08);
  const labelY = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.6 });

  useEffect(() => {
    function handleScroll() {
      const sectionTwo = document.getElementById("section-two");
      const testimonials = document.getElementById("section-testimonials");
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

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    function updateVisibleCount() {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    }
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

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

  const safeIndex = Math.min(testimonialIndex, maxIndex);
  const visibleTestimonials = testimonials.slice(
    safeIndex,
    safeIndex + visibleCount
  );

  return (
    <div
      className="min-h-screen bg-white text-[#141f2e]"
      style={{ fontFamily: "var(--font-poppins), sans-serif", overflowX: "clip" }}
    >
      <SiteHeader />

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
              lineHeight: 1.15,
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
              fontSize: "clamp(14px, 2.2vw, 20px)",
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            Your Trusted Family Dentist in SE Calgary &mdash; Sunpark Plaza
          </motion.h1>

          <motion.h3
            variants={fadeUp}
            className="text-white uppercase mt-2"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(13px, 2vw, 20px)",
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: "880px",
            }}
          >
            Gentle, state-of-the-art family, cosmetic &amp; emergency care &mdash; serving Sundance, Midnapore, Shawnessy and all of SE Calgary. New patients always welcome.
          </motion.h3>

          <motion.div variants={fadeUp}>
            <GoogleRatingRow textColor="white" />
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="/contact-us"
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
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
        >
          <div className="flex-1">
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 600,
                lineHeight: 1.25,
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
        className="relative w-full bg-white overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        {/* Inuit geometric textile pattern — 10% opacity backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/inuit-pattern-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
          }}
        />
        {/* Soft white wash to lift the pattern back toward bg */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "rgba(255,255,255,0.75)" }}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative text-center max-w-[860px] mx-auto"
          style={{ paddingLeft: "24px", paddingRight: "24px", zIndex: 1 }}
        >
          <Eyebrow>WHAT WE OFFER</Eyebrow>
          <h2
            className="text-[#141f2e] uppercase"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(28px, 3.5vw, 50px)",
              fontWeight: 600,
              lineHeight: 1.15,
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
          <InlineLink href="/cosmetic-care/teeth-whitening-se-calgary">Explore all services</InlineLink>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative flex flex-wrap justify-center gap-4 sm:gap-0 mt-16 px-5 sm:px-0"
          style={{ zIndex: 1 }}
        >
          <ServiceCard
            image="/images/teeth-whitening.webp"
            title="TEETH WHITENING"
            href="/cosmetic-care/teeth-whitening-se-calgary"
          />
          <ServiceCard
            image="/images/porcelain-veneers.webp"
            title="PORCELAIN VENEERS"
            href="/cosmetic-care/porcelain-veneers-se-calgary"
          />
          <ServiceCard
            image="/images/cosmetic-bonding.webp"
            title="COSMETIC BONDING"
            href="/cosmetic-care/cosmetic-bonding-se-calgary"
          />
          <ServiceCard
            image="/images/gum-contouring.webp"
            title="GUM CONTOURING"
            href="/cosmetic-care/gum-contouring-se-calgary"
          />
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
        className="w-full bg-[#279DB9] relative overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        {/* Inuit-inspired decorative accents — star + arrow-field */}
        <motion.div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ top: 30, right: -80, zIndex: 0, opacity: 0.38 }}
          animate={{ rotate: [0, 4, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        >
          <InuitStarPattern size={420} primary="#d8a986" secondary="#ffffff" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ bottom: 20, left: 10, zIndex: 0, opacity: 0.55 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <InuitArrowField width={440} height={240} primary="#ffffff" secondary="#d8a986" />
        </motion.div>

        <div
          className="relative max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}
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
                lineHeight: 1.15,
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
            <InlineLink href="/meet-our-team" light>
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
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
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
                    fontSize: "clamp(72px, 12vw, 110px)",
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
          SECTION 5 — RESOLVE YOUR DENTAL CONCERNS
          ============================================================ */}
      <section
        className="w-full bg-[#279DB9] relative overflow-hidden"
        style={{ paddingTop: "120px", paddingBottom: "120px" }}
      >
        {/* Inuit-inspired decorative accents — sunburst + chevron stack */}
        <motion.div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ top: 30, right: -90, zIndex: 0, opacity: 0.38 }}
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        >
          <InuitSunburst size={420} primary="#d8a986" secondary="#ffffff" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ bottom: 20, left: 20, zIndex: 0, opacity: 0.55 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <InuitChevronStack width={420} height={280} primary="#ffffff" secondary="#d8a986" />
        </motion.div>

        <div
          className="relative max-w-[1440px] mx-auto"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}
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
              href="/contact-us"
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
              { prefix: "I don't like my", keyword: "Smile", href: "/cosmetic-care/porcelain-veneers-se-calgary" },
              { prefix: "I'm missing some", keyword: "Teeth", href: "/restorative-dentistry/dental-crowns-bridges-calgary-se" },
              { prefix: "My tooth is", keyword: "Broken", href: "/restorative-dentistry/dental-crowns-bridges-calgary-se" },
              { prefix: "My gums are", keyword: "Bleeding", href: "/gum-disease-bad-breath/periodontal-gum-care-se-calgary" },
              { prefix: "My teeth are", keyword: "Crooked", href: "/orthodontics/invisalign-calgary-south-east" },
              { prefix: "My dentures", keyword: "Fall Out", href: "/restorative-dentistry/dental-dentures-se-calgary" },
              { prefix: "My teeth are", keyword: "Discoloured", href: "/cosmetic-care/teeth-whitening-se-calgary" },
              { prefix: "I need a", keyword: "Family Dentist", href: "/general-dentistry/dental-cleanings-se-calgary" },
              { prefix: "Dentists make me", keyword: "Nervous", href: "/additional-care/sedation-dentistry-se-calgary" },
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
                  className="flex-shrink-0 inline-flex items-center justify-center text-white transition-all duration-500 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#279DB9] group-hover:border-white"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "999px",
                    border: "1.5px solid rgba(255,255,255,0.55)",
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
              lineHeight: 1.15,
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
          <InlineLink href="/general-dentistry/dental-cleanings-se-calgary" light>General dentistry</InlineLink>
        </motion.div>
      </div>

      {/* ============================================================
          SECTION 7 — DIRECT BILLING (insurance logo marquee)
          ============================================================ */}
      <section
        className="relative w-full bg-white overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        {/* Inuit geometric textile pattern — 10% opacity backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/inuit-pattern-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
          }}
        />
        {/* Soft white wash to lift the pattern back toward bg */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "rgba(255,255,255,0.75)" }}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative max-w-[1440px] mx-auto text-center"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}
        >
          <Eyebrow>Dentist in South Calgary</Eyebrow>
          <h2
            className="text-[#141f2e] uppercase"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(28px, 3.5vw, 50px)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "2px",
            }}
          >
            Direct Billing
          </h2>
          <p
            className="mt-6 text-[#141f2e] max-w-[820px] mx-auto"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "27.2px",
            }}
          >
            Accepting Most Major Insurances and Government Plans for Your Convenience!
          </p>
        </motion.div>

        {/* Logo marquee */}
        <div
          className="relative w-full mt-12"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0, black 80px, black calc(100% - 80px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, black 80px, black calc(100% - 80px), transparent 100%)",
            zIndex: 1,
          }}
        >
          <motion.div
            className="flex items-center gap-16"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
            }}
          >
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-16 shrink-0">
                {[
                  { src: "/images/insurance/canada.png", alt: "Government of Canada" },
                  { src: "/images/insurance/claim.png", alt: "Claim Secure" },
                  { src: "/images/insurance/green-shield-canada.png", alt: "Green Shield Canada" },
                  { src: "/images/insurance/des.png", alt: "DES Dental Insurance" },
                  { src: "/images/insurance/sun.png", alt: "Sun Life" },
                  { src: "/images/insurance/pacific.png", alt: "Pacific Blue Cross" },
                ].map((logo, i) => (
                  <img
                    key={`${dup}-${i}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="shrink-0 object-contain"
                    style={{ height: "90px", width: "auto" }}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9 — NIHB (FIRST NATIONS & INUITS)
          ============================================================ */}
      <section
        className="w-full bg-[#279DB9] relative overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        {/* Inuit-inspired decorative accents */}
        <motion.div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ top: 30, right: -90, zIndex: 0, opacity: 0.35 }}
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <InuitDiamondCluster size={420} primary="#d8a986" secondary="#ffffff" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ bottom: 30, left: 20, zIndex: 0, opacity: 0.55 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <InuitWaveLines width={420} height={220} primary="#ffffff" secondary="#d8a986" />
        </motion.div>

        <div
          className="relative max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}
        >
          {/* Left — text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1"
          >
            <Eyebrow>Government Coverage</Eyebrow>
            <div className="flex items-start gap-4">
              {/* Rotated vertical label — hidden on mobile to save width */}
              <div
                className="hidden md:block flex-shrink-0 mt-2"
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
                  NIHB Provider
                </span>
              </div>
              <div>
                <h2
                  className="text-white uppercase"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "clamp(28px, 3.5vw, 50px)",
                    fontWeight: 600,
                    lineHeight: 1.15,
                    letterSpacing: "2px",
                  }}
                >
                  We accept the Non-Insured Health Benefits for First Nations and Inuits
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
                  Calgary South Dental is proud to be a registered NIHB provider, offering
                  direct billing for eligible First Nations and Inuit patients across
                  Alberta. Our team takes care of the paperwork so you can focus on your
                  smile — from routine cleanings and exams to fillings, extractions, and
                  preventive care, all covered under the Non-Insured Health Benefits
                  program. Walk in with your status information and we&apos;ll handle the
                  rest.
                </p>
                <InlineLink href="/non-insured-health-benefits-for-first-nations-and-inuits" light>Learn More</InlineLink>
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
              src="/images/nihb-first-nations-inuits.webp"
              alt="Smiling patients — Non-Insured Health Benefits for First Nations and Inuits"
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
        className="w-full bg-white relative overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        {/* Inuit geometric textile pattern — 10% opacity backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/inuit-pattern-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
            zIndex: 0,
          }}
        />
        {/* Soft white wash to lift the pattern back toward bg */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "rgba(255,255,255,0.75)", zIndex: 0 }}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative max-w-[1440px] mx-auto"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}
        >
          {/* Heading + Google rating row */}
          <div className="text-center mb-12">
            <h2
              className="text-[#141f2e] uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(28px, 3.5vw, 50px)",
                fontWeight: 600,
                lineHeight: 1.15,
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
              className="hidden md:block transition-opacity duration-300 disabled:opacity-30"
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
                      className="flex flex-col items-start transition-all duration-500 ease-out hover:-translate-y-2 p-6 sm:p-8"
                      style={{
                        backgroundColor: i === 1 ? "#d3c6bc" : (visibleCount === 1 ? "#d3c6bc" : "rgba(211,198,188,0.35)"),
                        borderRadius: "8px",
                        boxShadow:
                          i === 1 || visibleCount === 1
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
                        className="text-[#1c1c1c] uppercase break-words"
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                          fontSize: "clamp(16px, 2.2vw, 20px)",
                          fontWeight: 600,
                          lineHeight: 1.4,
                          letterSpacing: "3px",
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
              className="hidden md:block transition-opacity duration-300 disabled:opacity-30"
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

          {/* Mobile arrows — visible below cards on small screens */}
          <div className="md:hidden flex items-center justify-center gap-10 mt-8">
            <button
              aria-label="Previous testimonial"
              onClick={prevTestimonial}
              disabled={testimonialIndex === 0}
              className="transition-opacity duration-300 disabled:opacity-30"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <img src="/icons/arrow-left.png" alt="" width={70} height={14} style={{ objectFit: "contain" }} />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={nextTestimonial}
              disabled={testimonialIndex >= maxIndex}
              className="transition-opacity duration-300 disabled:opacity-30"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <img src="/icons/arrow-right.png" alt="" width={70} height={14} style={{ objectFit: "contain" }} />
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
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
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
              className="w-full md:w-[690px] h-[320px] sm:h-[420px] md:h-[600px]"
              style={{
                border: 0,
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
                lineHeight: 1.15,
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
                  href="https://www.google.com/maps/place/Calgary+South+Dental/@50.9696866,-114.0468825,21901m/data=!3m1!1e3!4m6!3m5!1s0x53717788900e409b:0x8cd7b1c14e176e0a!8m2!3d50.901242!4d-114.0558708!16s%2Fg%2F11w4h015gp?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D"
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
                  60 Sunpark Plaza SE Unit 120 Calgary, AB T2X 3Y2
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
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.google.com/maps/place/Calgary+South+Dental/@50.9696866,-114.0468825,21901m/data=!3m1!1e3!4m6!3m5!1s0x53717788900e409b:0x8cd7b1c14e176e0a!8m2!3d50.901242!4d-114.0558708!16s%2Fg%2F11w4h015gp?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 bg-white text-[#279DB9] border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-[1.03]"
                    style={{
                      height: "40px",
                      borderRadius: "999px",
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Get Directions
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Calgary+South+Dental/@50.901242,-114.0558708,17z/data=!4m8!3m7!1s0x53717788900e409b:0x8cd7b1c14e176e0a!8m2!3d50.901242!4d-114.0558708!9m1!1b1!16s%2Fg%2F11w4h015gp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 bg-transparent text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-[#279DB9] hover:scale-[1.03]"
                    style={{
                      height: "40px",
                      borderRadius: "999px",
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Write a Review
                  </a>
                </div>
              </div>

              {/* Follow Us */}
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
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/calgarysouthdentalca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-[#d8a986] transition-colors duration-300"
                    aria-label="Instagram"
                    style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                  >
                    <InstagramIcon size={22} />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Calgary-South-Dental/61561602615233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-[#d8a986] transition-colors duration-300"
                    aria-label="Facebook"
                    style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                  >
                    <FacebookIcon size={22} />
                  </a>
                </div>
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
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
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
                { label: "MEET OUR TEAM", href: "/meet-our-team" },
                { label: "WHY US", href: "/why-us" },
                { label: "FOR PATIENTS", href: "/for-patients" },
                { label: "CONTACT US", href: "/contact-us" },
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
            {/* Social icons right-aligned */}
            <div className="absolute right-0 flex items-center gap-4">
              <a
                href="https://www.instagram.com/calgarysouthdentalca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-[#279DB9] transition-colors duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="https://www.facebook.com/people/Calgary-South-Dental/61561602615233/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-[#279DB9] transition-colors duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                <FacebookIcon size={24} />
              </a>
            </div>
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
