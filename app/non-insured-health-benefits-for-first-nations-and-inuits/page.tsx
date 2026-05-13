"use client";

import { motion } from "motion/react";
import {
  Eyebrow,
  InlineLink,
  PageHero,
  SiteFooter,
  SiteHeader,
  InuitTealAccents,
  InuitSectionBg,
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

const FAQ = [
  {
    q: "What is the NIHB Program?",
    a: "The NIHB (Non-Insured Health Benefits) Program covers certain dental care and other health-related benefits for eligible First Nations and Inuit clients that are not covered by provincial-territorial or other third-party insurance plans.",
  },
  {
    q: "Who is eligible for funding under the NIHB Program?",
    a: "The program is offered to all First Nations and Inuit individuals enrolled with Indigenous Services Canada. Contact our clinic and we'll confirm your eligibility together.",
  },
  {
    q: "What dental services are covered under NIHB?",
    a: "NIHB covers a wide range of dental services — including check-ups, cleanings, fillings, extractions, root canals, dentures, and more — when they're considered medically necessary.",
  },
  {
    q: "How does Calgary South Dental help with NIHB?",
    a: "Our team guides you through the entire process: we assist with paperwork, communicate with NIHB on your behalf, and handle direct billing so you don't have to pay up front and wait for reimbursement.",
  },
  {
    q: "How do I access my NIHB dental benefits?",
    a: "Just let us know you have NIHB eligibility when you book your appointment, and bring your Status ID. We handle the rest.",
  },
  {
    q: "Does it cost me anything to use NIHB benefits?",
    a: "Most services under the NIHB Program are fully covered. Some treatments may require a small co-payment — we'll always go over the cost (if any) with you before treatment begins.",
  },
  {
    q: "What if my claim is denied?",
    a: "You can request a review of the decision. We'll help you with the appeals process and any necessary resubmission of paperwork.",
  },
  {
    q: "How often can I see a dentist under NIHB?",
    a: "Routine dental exams are generally covered every six months, but the frequency of covered services depends on your individual needs and treatment plan.",
  },
  {
    q: "Can I use NIHB benefits for orthodontic treatment?",
    a: "Yes — orthodontic treatment may be covered if it's deemed medically necessary. We'll consult with you and submit a pre-determination to NIHB to confirm coverage before treatment starts.",
  },
  {
    q: "How can I track my NIHB benefits?",
    a: "You can contact the NIHB Program directly, or we can review your remaining coverage during your visits.",
  },
  {
    q: "Where can I get more information about NIHB?",
    a: "Visit the Indigenous Services Canada website, or contact us — we're happy to walk you through anything that isn't clear.",
  },
];

export default function NIHBPage() {
  return (
    <div
      className="min-h-screen bg-white text-[#141f2e]"
      style={{ fontFamily: "var(--font-poppins), sans-serif", overflowX: "clip" }}
    >
      <SiteHeader />

      <PageHero
        eyebrow="Inclusive Care for First Nations & Inuit Patients"
        title="Empowering First Nations Smiles"
        subtitle="Hassle-free, culturally sensitive dental care with NIHB direct billing — let Calgary South Dental handle the paperwork so you can focus on your smile."
        bgImage="/images/patients/nihb-hero.jpg"
        bgPosition="center top"
      />

      {/* ============================================================
          INTRO
          ============================================================ */}
      <section className="relative w-full bg-white overflow-hidden" style={{ paddingTop: "86.4px", paddingBottom: "60px" }}>
        <InuitSectionBg />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative max-w-[1100px] mx-auto text-center"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}
        >
          <Eyebrow>Non-Insured Health Benefits</Eyebrow>
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
            Hassle-Free Care, <span style={{ fontStyle: "italic", color: "#279DB9", fontWeight: 500 }}>Tailored to You</span>
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
            At Calgary South Dental, your dental care experience is uniquely tailored to you.
            Our friendly and experienced team — led by Dr. Deb Crowfoot, a proud First Nations
            doctor of dentistry — is here to address all your questions and concerns. We focus
            on your specific oral health needs, goals, and priorities, and together we&apos;ll
            help you achieve the beautiful, healthy smile you&apos;ve always dreamed of.
          </p>
          <a
            href="tel:4039841616"
            className="inline-flex items-center justify-center gap-2 mt-8 px-8 bg-[#279DB9] border-2 border-[#279DB9] text-white transition-all duration-300 hover:bg-transparent hover:text-[#279DB9] hover:scale-[1.03]"
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
            Book your appointment today
          </a>
        </motion.div>
      </section>

      {/* ============================================================
          ALL ABOUT NIHB — FAQ
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

        <div className="relative max-w-[1100px] mx-auto" style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center"
          >
            <Eyebrow color="#279DB9">Frequently Asked Questions</Eyebrow>
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
              All About the NIHB Program
            </h2>
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-16 space-y-4"
          >
            {FAQ.map((item, i) => (
              <motion.details
                key={i}
                variants={fadeUp}
                className="group rounded-2xl overflow-hidden transition-all"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <summary
                  className="cursor-pointer list-none flex items-start gap-4 p-6 md:p-7 text-white"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 transition-transform duration-300 group-open:rotate-45"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "#279DB9",
                      color: "#fff",
                      fontSize: "20px",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                  <span>{item.q}</span>
                </summary>
                <div
                  className="px-6 md:px-7 pb-6 md:pb-7 text-white/75"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "15.5px",
                    lineHeight: "27px",
                    paddingLeft: "clamp(20px, 8vw, 78px)",
                  }}
                >
                  {item.a}
                </div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          TEAL CTA
          ============================================================ */}
      <section
        className="w-full bg-[#279DB9] relative overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <InuitTealAccents variant="diamond" />

        <div
          className="relative max-w-[1100px] mx-auto text-center"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}
        >
          <Eyebrow color="#ffffff">Welcoming New NIHB Patients</Eyebrow>
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
            Book Your Appointment Today
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
            Call us at 403-984-1616 or stop by 60 Sunpark Plaza SE Unit 120 Calgary, AB T2X 3Y2. We&apos;ll
            confirm your eligibility, handle the direct billing, and get you scheduled with one
            of our caring dentists.
          </p>
          <InlineLink href="tel:4039841616" light>
            Call 403-984-1616
          </InlineLink>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
