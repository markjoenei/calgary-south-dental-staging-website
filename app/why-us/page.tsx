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

const PILLARS = [
  {
    num: "01",
    label: "Experienced Dentists",
    body:
      "Our dentists in Calgary bring years of experience in various dental fields, providing top-quality care for patients of all ages.",
    image: "/images/why-us/experienced.jpg",
  },
  {
    num: "02",
    label: "Personalized Care",
    body:
      "We tailor our treatments to meet the unique needs of every patient, ensuring a comfortable and individualized dental experience.",
    image: "/images/why-us/family-care.jpg",
  },
  {
    num: "03",
    label: "First Nations Communities",
    body:
      "We are proud to prioritize culturally sensitive and accessible dental care for First Nations communities, led by Dr. Deb's advocacy for inclusive healthcare.",
    image: "/images/why-us/first-nations.jpg",
  },
  {
    num: "04",
    label: "State-of-the-Art Facility",
    body:
      "Equipped with the latest dental technologies, our clinic ensures that you receive the most advanced and effective treatments in a comfortable environment.",
    image: "/images/why-us/dental-anxiety.jpg",
  },
];

export default function WhyUsPage() {
  return (
    <div
      className="min-h-screen bg-white text-[#141f2e]"
      style={{ fontFamily: "var(--font-poppins), sans-serif", overflowX: "clip" }}
    >
      <SiteHeader />

      <PageHero
        eyebrow="Why Calgary South Dental"
        title="Expert Hands, Caring Hearts"
        subtitle="Calgary's leading dentists for your family's smile — combining advanced techniques with a personal touch, so every visit feels comfortable, personalized, and stress-free."
        bgImage="/images/why-us/why-us-hero.jpg"
      />

      {/* ============================================================
          WELCOME / INTRO
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
          <Eyebrow>Welcome to Calgary South Dental!</Eyebrow>
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
            Calgary&apos;s Trusted Dentists —{" "}
            <span style={{ fontStyle: "italic", color: "#279DB9", fontWeight: 500 }}>
              Dedicated to Your Smile and Community Care
            </span>
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
            At Calgary South Dental, your family&apos;s smiles deserve only the best care. Our
            dentists in Calgary bring years of experience to every appointment, combining
            advanced techniques with a personal touch. With compassionate hearts and expert
            hands, we are dedicated to making your dental experience comfortable, personalized,
            and stress-free.
          </p>
          <p
            className="mt-5 text-[#141f2e]/80"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: "29px",
            }}
          >
            Whether you&apos;re here for routine care, specialized treatments, or a friendly
            consultation, we treat you like family. Your health and happiness are our top
            priorities, and we&apos;re committed to helping you achieve a smile that reflects
            both.
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
            <Eyebrow color="#279DB9">What Sets Us Apart</Eyebrow>
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
              Four Pillars of Care
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
              Every visit, every conversation, every smile we help build in SE Calgary is shaped
              by these four commitments.
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
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7"
          >
            {PILLARS.map((p) => (
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

                <div className="relative flex gap-6 items-start">
                  <div
                    className="overflow-hidden rounded-2xl flex-shrink-0 transition-all duration-500 group-hover:scale-105"
                    style={{
                      width: "108px",
                      height: "108px",
                      border: "1px solid rgba(39,157,185,0.30)",
                      boxShadow: "0 12px 28px -12px rgba(39,157,185,0.45)",
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-white uppercase"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "28px",
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          DENTAL ANXIETY
          ============================================================ */}
      <section
        className="w-full bg-white relative overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <div
          className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1"
          >
            <Eyebrow>For Anxious Patients</Eyebrow>
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
              Your Trusted Calgary Dentist Alleviating Dental Anxiety
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
              Has dental anxiety been holding you back from visiting the dentist? Fear not —
              we&apos;re happy to provide assistance. We offer services designed to alleviate
              dental anxiety and make your experience as stress-free as possible. From nitrous
              oxide (laughing gas) to oral sedation, we have options to suit every level of
              anxiety and ensure you feel calm and at ease throughout your visit. Schedule your
              appointment with us today and let us show you how comfortable and enjoyable a trip
              to the dentist can be. Your smile — and your peace of mind — are worth it.
            </p>
            <InlineLink href="/additional-care/sedation-dentistry-se-calgary">Sedation options</InlineLink>
          </motion.div>

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
              src="/images/why-us/dental-anxiety.jpg"
              alt="Calm, anxiety-free dental visits"
              className="transition-transform duration-[800ms] ease-out group-hover:scale-105"
              style={{ width: "560px", maxWidth: "100%", objectFit: "cover", display: "block" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          FIRST NATIONS COMMITMENT
          ============================================================ */}
      <section
        className="w-full bg-[#279DB9] relative overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px" }}
      >
        <InuitTealAccents variant="diamond" />

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
              src="/images/why-us/first-nations.jpg"
              alt="Culturally sensitive dental care for First Nations communities"
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
            <Eyebrow color="#ffffff">Inclusive Care</Eyebrow>
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
              Our Commitment to First Nations Communities
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
              At Calgary South Dental, we recognize the importance of culturally sensitive care.
              Under Dr. Deb&apos;s leadership, we are proud to focus on serving First Nations
              communities and providing dental services that respect their traditions and
              values. Our clinic strives to create a welcoming environment where patients feel
              understood and supported. We are dedicated to addressing the oral health
              challenges faced by these communities and ensuring that everyone has access to
              quality dental care.
            </p>
            <InlineLink href="/non-insured-health-benefits-for-first-nations-and-inuits" light>
              NIHB &amp; community care
            </InlineLink>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          JOIN THE FAMILY CTA
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
            Join Our Calgary South Dental Family
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
            Your smile matters — we are here to help you achieve optimal oral health. Whether
            you&apos;re new to our clinic or a returning patient, we invite you to experience
            the difference that compassionate care can make. Let&apos;s work together to create
            a healthier, brighter smile for you and your family!
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
