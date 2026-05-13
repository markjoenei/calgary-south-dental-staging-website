"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Eyebrow,
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

const HOURS = [
  { day: "Monday", hours: "9:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 5:00 PM" },
  { day: "Wednesday", hours: "12:00 PM – 7:30 PM" },
  { day: "Thursday", hours: "9:00 AM – 5:00 PM" },
  { day: "Friday", hours: "9:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className="min-h-screen bg-white text-[#141f2e]"
      style={{ fontFamily: "var(--font-poppins), sans-serif", overflowX: "clip" }}
    >
      <SiteHeader />

      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Currently accepting new patients! Reach out by phone, email, or the form below — we'll get back to you within one business day."
        bgImage="/images/patients/contact-hero.jpg"
      />

      {/* ============================================================
          CONTACT INFO CARDS
          ============================================================ */}
      <section className="relative w-full bg-white overflow-hidden" style={{ paddingTop: "86.4px", paddingBottom: "60px" }}>
        <InuitSectionBg />
        <div className="relative max-w-[1440px] mx-auto" style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}>
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                label: "Visit Us",
                lines: ["60 Sunpark Plaza SE", "Unit 120", "Calgary, AB T2X 3Y2"],
                linesHref: "https://www.google.com/maps/place/Calgary+South+Dental/@50.9696866,-114.0468825,21901m/data=!3m1!1e3!4m6!3m5!1s0x53717788900e409b:0x8cd7b1c14e176e0a!8m2!3d50.901242!4d-114.0558708!16s%2Fg%2F11w4h015gp?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D",
                cta: { href: "https://www.google.com/maps/place/Calgary+South+Dental/@50.9696866,-114.0468825,21901m/data=!3m1!1e3!4m6!3m5!1s0x53717788900e409b:0x8cd7b1c14e176e0a!8m2!3d50.901242!4d-114.0558708!16s%2Fg%2F11w4h015gp?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D", text: "Get directions" },
              },
              {
                label: "Call Us",
                lines: ["403-984-1616", "Same-day emergency", "appointments available"],
                cta: { href: "tel:4039841616", text: "Call 403-984-1616" },
              },
              {
                label: "Connect",
                lines: ["@calgarysouthdentalca", "On Instagram & Facebook", "DM us anytime"],
                cta: { href: "https://www.instagram.com/calgarysouthdentalca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", text: "Follow on Instagram" },
              },
            ].map((card) => (
              <motion.div
                key={card.label}
                variants={fadeUp}
                className="rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
                style={{
                  border: "1px solid rgba(20,31,46,0.10)",
                  boxShadow: "0 12px 36px -20px rgba(20,31,46,0.15)",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <Eyebrow>{card.label}</Eyebrow>
                {"linesHref" in card && card.linesHref ? (
                  <a
                    href={card.linesHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 space-y-1 text-[#141f2e] hover:text-[#279DB9] transition-colors duration-300"
                  >
                    {card.lines.map((l) => (
                      <p
                        key={l}
                        style={{
                          fontFamily: "var(--font-poppins), sans-serif",
                          fontSize: "17px",
                          fontWeight: 500,
                          lineHeight: "27px",
                        }}
                      >
                        {l}
                      </p>
                    ))}
                  </a>
                ) : (
                  <div className="mt-2 space-y-1">
                    {card.lines.map((l) => (
                      <p
                        key={l}
                        className="text-[#141f2e]"
                        style={{
                          fontFamily: "var(--font-poppins), sans-serif",
                          fontSize: "17px",
                          fontWeight: 500,
                          lineHeight: "27px",
                        }}
                      >
                        {l}
                      </p>
                    ))}
                  </div>
                )}
                <a
                  href={card.cta.href}
                  target={card.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center mt-6 text-[#141f2e] hover:text-[#279DB9] transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  {card.cta.text}
                  <span
                    className="ml-[10px] transition-all duration-300 ease-out group-hover:bg-[#279DB9] group-hover:translate-x-1"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      backgroundColor: "#141f2e",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  >
                    →
                  </span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          FORM + HOURS / MAP — two-column
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

        <div
          className="relative max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
        >
          {/* LEFT — form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Eyebrow color="#279DB9">Send Us a Message</Eyebrow>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 600,
                lineHeight: "1.15",
                letterSpacing: "2px",
              }}
            >
              Get in Touch
            </h2>
            <p
              className="mt-4 text-white/75"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "16px",
                lineHeight: "27px",
              }}
            >
              Contact us via this form or call us to learn more about insurance coverage, what to
              expect on your first visit, and more.
            </p>

            {submitted ? (
              <div
                className="mt-8 rounded-2xl p-8"
                style={{
                  backgroundColor: "rgba(39,157,185,0.12)",
                  border: "1px solid rgba(39,157,185,0.35)",
                  color: "#fff",
                }}
              >
                <h3
                  className="uppercase"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                  }}
                >
                  Thanks — we&apos;ll be in touch shortly!
                </h3>
                <p
                  className="mt-3 text-white/80"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "15px",
                    lineHeight: "24px",
                  }}
                >
                  For anything urgent, call us at 403-984-1616 — we&apos;ll see you the same day
                  whenever possible.
                </p>
              </div>
            ) : (
              <form
                className="mt-8 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="firstName" placeholder="First Name*" required className="contact-input" />
                  <input type="text" name="lastName" placeholder="Last Name*" required className="contact-input" />
                </div>
                <input type="email" name="email" placeholder="Email*" required className="contact-input" />
                <input type="tel" name="phone" placeholder="Phone*" required className="contact-input" />
                <textarea
                  name="message"
                  placeholder="Message*"
                  required
                  rows={5}
                  className="contact-input"
                  style={{ resize: "vertical" }}
                />
                <button
                  type="submit"
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
                  Submit
                </button>
              </form>
            )}
            <style jsx>{`
              .contact-input {
                width: 100%;
                background-color: rgba(255, 255, 255, 0.06);
                border: 1px solid rgba(255, 255, 255, 0.18);
                border-radius: 12px;
                padding: 14px 18px;
                color: #ffffff;
                font-family: var(--font-poppins), sans-serif;
                font-size: 15px;
                transition: border-color 0.2s, background-color 0.2s;
              }
              .contact-input::placeholder {
                color: rgba(255, 255, 255, 0.55);
              }
              .contact-input:focus {
                outline: none;
                border-color: #279db9;
                background-color: rgba(255, 255, 255, 0.1);
              }
              .contact-input option {
                background-color: #0f0f0f;
                color: #ffffff;
              }
            `}</style>
          </motion.div>

          {/* RIGHT — hours + map */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow color="#d8a986">Office Hours</Eyebrow>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 600,
                lineHeight: "1.15",
                letterSpacing: "2px",
              }}
            >
              When We&apos;re Open
            </h2>

            <div className="mt-6 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
              {HOURS.map((h, i) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between"
                  style={{
                    padding: "14px 20px",
                    borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
                    backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}
                >
                  <span className="text-white" style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "0.5px" }}>
                    {h.day}
                  </span>
                  <span
                    style={{
                      color: h.hours === "Closed" ? "#d8a986" : "#ffffff",
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                  >
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Embedded map */}
            <div
              className="mt-8 rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                aspectRatio: "16 / 11",
                boxShadow: "0 20px 60px -25px rgba(0,0,0,0.5)",
              }}
            >
              <iframe
                title="Calgary South Dental — 60 Sunpark Plaza SE Unit 120"
                src="https://maps.google.com/maps?q=Calgary+South+Dental,+60+Sunpark+Plaza+SE+Unit+120,+Calgary,+AB+T2X+3Y2&t=m&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          NEW PATIENTS CTA — TEAL
          ============================================================ */}
      <section
        className="w-full bg-[#279DB9] relative overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <InuitTealAccents variant="diamond" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative max-w-[1100px] mx-auto text-center"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)", zIndex: 1 }}
        >
          <Eyebrow color="#ffffff">Currently Accepting</Eyebrow>
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
            New Patients Welcome
          </h2>
          <p
            className="mt-6 text-white max-w-[820px] mx-auto"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "17px",
              lineHeight: "29px",
            }}
          >
            Direct billing to most major insurers — including NIHB and CDCP. Same-day emergency
            appointments available. We can&apos;t wait to meet you.
          </p>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
