"use client";

import { motion } from "motion/react";
import {
  DotGrid,
  Eyebrow,
  OrganicBlob,
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

const COVERED = [
  { label: "Preventive Care", body: "Cleanings, exams, sealants, and fluoride treatments." },
  { label: "Diagnostic Services", body: "X-rays and oral assessments." },
  { label: "Restorative", body: "Fillings and crowns." },
  { label: "Endodontic", body: "Root canal therapy." },
  { label: "Prosthodontics", body: "Complete and partial dentures." },
  { label: "Periodontal", body: "Deep scaling and root planing." },
  { label: "Oral Surgery", body: "Simple extractions and minor surgical procedures." },
];

const ELIGIBILITY = [
  "You are a Canadian resident.",
  "Your household income is under $90,000 per year.",
  "You have filed your most recent tax return.",
  "You do not have access to private dental insurance.",
];

const STEPS = [
  { num: "01", label: "Visit canada.ca/dental", body: "Read the program details and confirm what's covered." },
  { num: "02", label: "Check eligibility on CRA My Account", body: "Log in and check your eligibility status directly." },
  { num: "03", label: "Receive your welcome package", body: "Once approved, Sun Life mails your CDCP member card with your effective date." },
  { num: "04", label: "Book with Calgary South Dental", body: "Call us at 403-984-1616 — we handle billing directly with Sun Life." },
];

export default function CDCPPage() {
  return (
    <div
      className="min-h-screen bg-white text-[#141f2e]"
      style={{ fontFamily: "var(--font-poppins), sans-serif", overflowX: "clip" }}
    >
      <SiteHeader />

      <PageHero
        eyebrow="Canadian Dental Care Plan"
        title="Free Dental Care With CDCP in Calgary"
        subtitle="Calgary South Dental proudly accepts the Canadian Dental Care Plan — helping eligible Canadians access quality dental care at little to no cost."
        bgImage="/images/patients/cdcp-hero.jpg"
      />

      {/* ============================================================
          WHAT IS CDCP
          ============================================================ */}
      <section className="w-full bg-white" style={{ paddingTop: "86.4px", paddingBottom: "60px" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-[1100px] mx-auto text-center"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
        >
          <Eyebrow>Learn About the Plan</Eyebrow>
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
            What Is the <span style={{ fontStyle: "italic", color: "#279DB9", fontWeight: 500 }}>CDCP</span>?
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
            The Canadian Dental Care Plan (CDCP), launched by the Government of Canada in 2023,
            helps eligible Canadians access essential dental services at little to no cost. From
            check-ups and cleanings to fillings, crowns, dentures, and more — this program makes
            dental care more affordable for everyone.
          </p>
        </motion.div>
      </section>

      {/* ============================================================
          SERVICES COVERED
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

        <div className="relative max-w-[1440px] mx-auto" style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center max-w-[820px] mx-auto"
          >
            <Eyebrow color="#279DB9">What&apos;s Covered</Eyebrow>
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
              Full Range of Services Under CDCP
            </h2>
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {COVERED.map((c) => (
              <motion.div
                key={c.label}
                variants={fadeUp}
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3
                  className="text-white uppercase"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                  }}
                >
                  {c.label}
                </h3>
                <span aria-hidden="true" className="block mt-3" style={{ width: "28px", height: "2px", backgroundColor: "#279DB9" }} />
                <p
                  className="mt-4 text-white/75"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "15px",
                    lineHeight: "25px",
                  }}
                >
                  {c.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          ELIGIBILITY (TEAL)
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
          className="relative max-w-[1100px] mx-auto"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center"
          >
            <Eyebrow color="#ffffff">Eligibility</Eyebrow>
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
              Who Qualifies for CDCP Coverage?
            </h2>
          </motion.div>

          <motion.ul
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto"
          >
            {ELIGIBILITY.map((e) => (
              <motion.li
                key={e}
                variants={fadeUp}
                className="flex items-start gap-3 text-white"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "16px",
                  lineHeight: "25px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  backdropFilter: "blur(6px)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    color: "#279DB9",
                    fontSize: "14px",
                    flexShrink: 0,
                    marginTop: "1px",
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
                {e}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ============================================================
          APPLICATION STEPS
          ============================================================ */}
      <section className="w-full bg-white" style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}>
        <div className="max-w-[1440px] mx-auto" style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center max-w-[820px] mx-auto"
          >
            <Eyebrow>Easy Application</Eyebrow>
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
              Let Us Help You Apply
            </h2>
            <p
              className="mt-5 text-[#141f2e]/80"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "16px",
                lineHeight: "27px",
              }}
            >
              Four short steps from interest to your first appointment.
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
            className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {STEPS.map((s) => (
              <motion.div
                key={s.num}
                variants={fadeUp}
                className="relative rounded-2xl p-8"
                style={{
                  border: "1px solid rgba(20,31,46,0.10)",
                  boxShadow: "0 12px 36px -20px rgba(20,31,46,0.15)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "44px",
                    fontWeight: 800,
                    color: "#d8a986",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </span>
                <h3
                  className="mt-4 text-[#141f2e] uppercase"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    lineHeight: 1.3,
                  }}
                >
                  {s.label}
                </h3>
                <p
                  className="mt-3 text-[#141f2e]/75"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "14.5px",
                    lineHeight: "24px",
                  }}
                >
                  {s.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="w-full bg-[#0f0f0f]" style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-[1100px] mx-auto text-center"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
        >
          <Eyebrow color="#279DB9">Get Started Today</Eyebrow>
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
            Schedule Your CDCP Appointment
          </h2>
          <p
            className="mt-6 text-white/80 max-w-[760px] mx-auto"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "16px",
              lineHeight: "27.2px",
            }}
          >
            Already approved for CDCP? Call us at 403-984-1616 with your member card handy — we
            handle the rest. Not sure if you qualify? We&apos;ll help you check.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:4039841616"
              className="inline-flex items-center justify-center gap-2 px-8 bg-[#279DB9] border-2 border-[#279DB9] text-white transition-all duration-300 hover:bg-transparent hover:scale-[1.03]"
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
              href="https://www.canada.ca/en/services/benefits/dental.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-[#0f0f0f] hover:scale-[1.03]"
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
              Visit canada.ca/dental
            </a>
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
