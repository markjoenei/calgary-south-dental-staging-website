"use client";

import { motion } from "motion/react";
import {
  Eyebrow,
  InlineLink,
  InuitSectionBg,
  InuitTealAccents,
  PageHero,
  SiteFooter,
  SiteHeader,
} from "../components/SiteChrome";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const viewportOnce = { once: true, amount: 0.2 };

export default function ForPatientsPage() {
  return (
    <div
      className="min-h-screen bg-white text-[#141f2e]"
      style={{ fontFamily: "var(--font-poppins), sans-serif", overflowX: "clip" }}
    >
      <SiteHeader />

      <PageHero
        eyebrow="For Patients"
        title="Everything You Need to Know"
        subtitle="From your first visit through to financing and insurance — we've made dental care simple, transparent, and stress-free for every patient who walks through our doors."
        bgImage="/images/patients/for-patients-hero.jpg"
      />

      {/* ============================================================
          INTRO STRIP
          ============================================================ */}
      <section
        className="relative w-full bg-white overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "60px" }}
      >
        <InuitSectionBg />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative max-w-[1100px] mx-auto text-center"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}
        >
          <Eyebrow>Welcome to Calgary South Dental</Eyebrow>
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
            We Make Dentistry <span style={{ fontStyle: "italic", color: "#279DB9", fontWeight: 500 }}>Simple</span>
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
            Whether you&apos;re visiting us for the first time or you&apos;ve been part of our
            family for years, we want every appointment to feel comfortable, transparent, and
            unhurried. Here&apos;s what you can expect — and how to make the most of every visit.
          </p>
        </motion.div>
      </section>

      {/* ============================================================
          YOUR FIRST VISIT (anchor)
          ============================================================ */}
      <section
        id="your-first-visit"
        className="w-full bg-[#279DB9] relative overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px", scrollMarginTop: "120px" }}
      >
        <InuitTealAccents variant="sun" />

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
              src="/images/patients/first-visit.jpg"
              alt="Your first visit at Calgary South Dental"
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
            <Eyebrow color="#ffffff">Getting Started</Eyebrow>
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
              Your First Visit
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
              Welcome to Calgary South Dental! Your first visit with us is all about getting to
              know you and understanding your dental health needs. We&apos;ll start with a
              friendly consultation and examination, where our dentist will discuss your medical
              history, oral health goals, and any concerns you may have. We&apos;ll make sure you
              feel comfortable, informed, and never rushed — from the moment you step into our
              office.
            </p>
            <InlineLink href="/new-patients-form" light>
              Fill out the new patient form
            </InlineLink>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          FINANCIAL OPTIONS (anchor)
          ============================================================ */}
      <section
        id="financial-options"
        className="w-full bg-white"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px", scrollMarginTop: "120px" }}
      >
        <div
          className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-shrink-0 w-full md:w-auto group overflow-hidden"
            style={{
              borderRadius: "8px",
              boxShadow: "0 20px 60px -20px rgba(20,31,46,0.18)",
            }}
          >
            <img
              src="/images/patients/financial.jpg"
              alt="Affordable, flexible dental care"
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
            <Eyebrow>Insurance &amp; Payment</Eyebrow>
            <h2
              className="text-[#141f2e] uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 600,
                lineHeight: "1.15",
                letterSpacing: "2px",
              }}
            >
              Financial Options
            </h2>
            <p
              className="mt-6 text-[#141f2e]/80"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "27.2px",
              }}
            >
              We believe quality dental care should never be out of reach. Calgary South Dental
              offers a range of financial options to accommodate different budgets and insurance
              plans. We&apos;ll help you navigate your insurance coverage, discuss flexible
              payment plans, and explore financing where it makes sense — so you can focus on
              your treatment, not the bill.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Direct billing to most major insurers",
                "NIHB direct billing for First Nations & Inuit patients",
                "CDCP (Canadian Dental Care Plan) accepted",
                "Flexible payment plans for larger treatment",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "15px",
                    color: "#141f2e",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "#279DB9",
                      color: "#fff",
                      fontSize: "12px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PATIENT FORMS LINK
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
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(39,157,185,0.18), transparent 70%)",
          }}
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative max-w-[1100px] mx-auto text-center"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
        >
          <Eyebrow color="#279DB9">Patient Forms</Eyebrow>
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
            Save Time — Fill It Out Online
          </h2>
          <p
            className="mt-6 text-white/80 max-w-[820px] mx-auto"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: "29px",
            }}
          >
            Our online patient form lets you complete your medical history, insurance details,
            and contact information before you arrive. The result: less paperwork in the waiting
            room and more time with your dentist talking about what actually matters — your
            smile.
          </p>
          <a
            href="/new-patients-form"
            className="inline-flex items-center justify-center gap-2 mt-8 px-8 bg-[#279DB9] border-2 border-[#279DB9] text-white transition-all duration-300 hover:bg-transparent hover:scale-[1.03]"
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
            Open the new patient form
          </a>
        </motion.div>
      </section>

      {/* ============================================================
          CTA STRIP
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
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 600,
              lineHeight: "1.15",
              letterSpacing: "2px",
            }}
          >
            Ready to book your visit?
          </h2>
          <p
            className="mt-6 text-[#141f2e]/80 max-w-[760px] mx-auto"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "16px",
              lineHeight: "27.2px",
            }}
          >
            Same-day emergency appointments available. Call 403-984-1616 or book online — and
            we&apos;ll handle everything from insurance verification to your appointment
            reminder.
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
              href="/contact-us"
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
              Contact us
            </a>
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
