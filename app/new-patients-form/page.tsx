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

const SECTIONS = [
  {
    num: "01",
    label: "Personal Details",
    fields: ["First & last name", "Sex", "Birth date", "Marital status", "How you heard about us"],
  },
  {
    num: "02",
    label: "Medical History",
    fields: [
      "Care under a medical doctor in the past two years",
      "Allergies and adverse reactions to medications",
      "Existing conditions (heart, diabetes, asthma, thyroid, etc.)",
      "Pregnancy / nursing / birth control (women — optional)",
    ],
  },
  {
    num: "03",
    label: "Your Smile Goals",
    fields: [
      "Veneers / crowns",
      "Sedation dentistry",
      "Replace metal fillings",
      "Replace missing teeth",
      "Correct misaligned teeth",
      "Broken or cracked teeth",
      "Dental implants",
      "TMJ / night guards · Sports guards · Whitening",
    ],
  },
  {
    num: "04",
    label: "Dental Concerns",
    fields: [
      "Dental anxiety / apprehension",
      "Previous dental crowns or implants",
      "Sensitivity to hot, cold, sweets, or sours",
      "Bleeding gums / slow-healing sores",
      "Difficulty chewing / TMD / headaches",
      "Sleep problems / clenching or grinding",
    ],
  },
];

export default function NewPatientsFormPage() {
  return (
    <div
      className="min-h-screen bg-white text-[#141f2e]"
      style={{ fontFamily: "var(--font-poppins), sans-serif", overflowX: "clip" }}
    >
      <SiteHeader />

      <PageHero
        eyebrow="Save Time at Your Visit"
        title="New Patients Form"
        subtitle="Complete your medical history and dental goals online before your appointment — so we spend less time on paperwork and more time on you."
        bgImage="/images/patients/forms.jpg"
      />

      {/* ============================================================
          INTRO
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
          <Eyebrow>Online Intake Form</Eyebrow>
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
            What You&apos;ll Be Asked
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
            Filling out the form takes about 10 minutes. It&apos;s split into four short sections
            so you can save and come back if needed. All information is confidential and
            reviewed only by your dental team.
          </p>
        </motion.div>
      </section>

      {/* ============================================================
          FORM SECTIONS GRID
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
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7"
          >
            {SECTIONS.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl p-8 md:p-10"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-2 select-none"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "110px",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.04)",
                    letterSpacing: "-4px",
                  }}
                >
                  {s.num}
                </span>
                <h3
                  className="text-white uppercase"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    letterSpacing: "2.5px",
                  }}
                >
                  {s.label}
                </h3>
                <span
                  aria-hidden="true"
                  className="block mt-4"
                  style={{ width: "32px", height: "2px", backgroundColor: "#279DB9" }}
                />
                <ul className="mt-5 space-y-2.5">
                  {s.fields.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-white/80"
                      style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "15.5px",
                        lineHeight: "24px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "#d8a986",
                          marginTop: "10px",
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          CONSENT NOTE + TEAL BLOCK
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
          className="relative max-w-[1100px] mx-auto text-center"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}
        >
          <Eyebrow color="#ffffff">Treatment Consent</Eyebrow>
          <h2
            className="text-white uppercase"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "clamp(26px, 3vw, 42px)",
              fontWeight: 600,
              lineHeight: "1.2",
              letterSpacing: "2px",
            }}
          >
            Transparent. Informed. Always Your Choice.
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
            At the end of the form you&apos;ll be asked to confirm the information is accurate
            and acknowledge that all dental services are your responsibility. We always discuss
            fees and treatment options before any work is done — no surprises, ever.
          </p>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="w-full bg-white" style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-[1100px] mx-auto text-center"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
        >
          <Eyebrow>Ready to Start?</Eyebrow>
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
            Got Your Appointment Booked?
          </h2>
          <p
            className="mt-6 text-[#141f2e]/80 max-w-[760px] mx-auto"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "16px",
              lineHeight: "27.2px",
            }}
          >
            Call us at 403-984-1616 if you have any questions about completing the form, or stop
            by during office hours and our team will help you finish it in person.
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
              href="/for-patients"
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
              For Patients Overview
            </a>
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
