"use client";

import { motion } from "motion/react";
import {
  DotGrid,
  Eyebrow,
  InlineLink,
  OrganicBlob,
  PageHero,
  SiteFooter,
  SiteHeader,
} from "./SiteChrome";
import type { ServiceConfig } from "../services-data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const viewportOnce = { once: true, amount: 0.2 };

export default function ServicePage({ service }: { service: ServiceConfig }) {
  return (
    <div
      className="min-h-screen bg-white text-[#141f2e]"
      style={{ fontFamily: "var(--font-poppins), sans-serif", overflowX: "clip" }}
    >
      <SiteHeader />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        subtitle={service.heroSubtitle}
        bgImage={service.heroImage}
      />

      {/* ============================================================
          INTRO
          ============================================================ */}
      <section
        className="w-full bg-white"
        style={{ paddingTop: "86.4px", paddingBottom: "60px" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-[1100px] mx-auto text-center"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
        >
          <Eyebrow>{service.categoryLabel}</Eyebrow>
          <h2
            className="text-[#141f2e] uppercase"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(28px, 3.5vw, 50px)",
              fontWeight: 600,
              lineHeight: "1.15",
              letterSpacing: "2px",
            }}
          >
            About <span style={{ fontStyle: "italic", color: "#279DB9", fontWeight: 500 }}>{service.title}</span>
          </h2>
          <p
            className="mt-6 text-[#141f2e]/80"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: "29px",
            }}
          >
            {service.intro}
          </p>
        </motion.div>
      </section>

      {/* ============================================================
          PILLARS GRID
          ============================================================ */}
      <section
        className="w-full bg-[#0f0f0f] relative overflow-hidden"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(39,157,185,0.18), transparent 70%), radial-gradient(ellipse 40% 40% at 100% 100%, rgba(39,157,185,0.10), transparent 60%)",
          }}
        />

        <div
          className="relative max-w-[1440px] mx-auto"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center max-w-[820px] mx-auto"
          >
            <Eyebrow color="#279DB9">Why Patients Choose Us</Eyebrow>
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
              The CSD Approach
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
              What sets {service.title.toLowerCase()} at Calgary South Dental apart.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7"
          >
            {service.pillars.map((p) => (
              <motion.div
                key={p.label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(6px)",
                }}
              >
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
                  {p.num}
                </span>

                <div className="relative">
                  <h3
                    className="text-white uppercase"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontSize: "19px",
                      fontWeight: 600,
                      lineHeight: "26px",
                      letterSpacing: "2.5px",
                    }}
                  >
                    {p.label}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="block mt-4 transition-all duration-500 group-hover:w-16"
                    style={{ width: "32px", height: "2px", backgroundColor: "#279DB9" }}
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
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          DETAIL SPLIT — image + text
          ============================================================ */}
      <section
        className="w-full bg-[#279DB9] relative overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <motion.div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ top: 40, right: -80, zIndex: 0 }}
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <OrganicBlob color="#d8a986" size={460} opacity={0.18} />
        </motion.div>
        <motion.div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ bottom: 30, left: 30, zIndex: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <DotGrid rows={5} cols={8} color="#ffffff" opacity={0.35} />
        </motion.div>

        <div
          className="relative max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}
        >
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
              src={service.detailImage}
              alt={service.detailHeading}
              className="transition-transform duration-[800ms] ease-out group-hover:scale-105"
              style={{ width: "560px", maxWidth: "100%", objectFit: "cover", display: "block" }}
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1"
          >
            <Eyebrow color="#ffffff">Treatment Details</Eyebrow>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 600,
                lineHeight: "1.15",
                letterSpacing: "2px",
              }}
            >
              {service.detailHeading}
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
              {service.detailBody}
            </p>
            <InlineLink href="tel:4039841616" light>
              Call 403-984-1616
            </InlineLink>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          CTA
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
          className="max-w-[1100px] mx-auto text-center"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
        >
          <Eyebrow>Always Welcoming New Patients</Eyebrow>
          <h2
            className="text-[#141f2e] uppercase"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(28px, 3.5vw, 50px)",
              fontWeight: 600,
              lineHeight: "1.15",
              letterSpacing: "2px",
            }}
          >
            {service.closingHeading}
          </h2>
          <p
            className="mt-6 text-[#141f2e]/80 max-w-[820px] mx-auto"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: "29px",
            }}
          >
            {service.closingBody}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:4039841616"
              className="inline-flex items-center justify-center gap-2 px-8 bg-[#279DB9] border-2 border-[#279DB9] text-white transition-all duration-300 hover:bg-transparent hover:text-[#279DB9] hover:scale-[1.03]"
              style={{
                height: "52px",
                borderRadius: "999px",
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1.4px",
                textTransform: "uppercase",
              }}
            >
              Call 403-984-1616
            </a>
            <a
              href="/meet-our-team"
              className="inline-flex items-center justify-center gap-2 px-8 border-2 border-[#141f2e] text-[#141f2e] transition-all duration-300 hover:bg-[#141f2e] hover:text-white hover:scale-[1.03]"
              style={{
                height: "52px",
                borderRadius: "999px",
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1.4px",
                textTransform: "uppercase",
              }}
            >
              Meet the Team
            </a>
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
