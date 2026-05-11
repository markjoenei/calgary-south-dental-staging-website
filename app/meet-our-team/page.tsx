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

const TEAM = [
  {
    name: "Dr. Deb Crowfoot",
    title: "DDS",
    image: "/images/team/dr-deb-crowfoot.webp",
    bio:
      "Completed his doctorate in dentistry from the University of Washington. He is the second recorded First Nations Doctor in Dentistry to practice in Canada. He earned his undergraduate degree from Brigham Young University before obtaining his DDS from University of Washington. After graduation, he relocated to Alberta and opened a private practice on the Siksika Nation reserve. Over the past 30 years, he has opened multiple clinics throughout Alberta and Saskatchewan. His work focuses on educating and empowering future dentists and dental opportunities in these communities.",
  },
  {
    name: "Dr. Kevin Kalin",
    title: "DDS",
    image: "/images/team/dr-kevin-kalin.jpg",
    bio:
      "Graduated from the University of Alberta School of Dentistry with his Doctor of Dental Surgery degree in 2018. He completed two and a half years as a resident at the Harvard/Massachusetts General Hospital Oral and Maxillofacial Surgery Residency. Registered as a general practitioner in Alberta with extensive experience in surgical procedures including wisdom teeth extractions, bone grafting, and dental implant placement. Outside of dentistry, he enjoys playing hockey, biking, tennis, basketball, and hiking.",
  },
  {
    name: "Dr. Ethan Webster",
    title: "DDS",
    image: "/images/team/dr-placeholder.jpg",
    bio:
      "Born and raised in Cardston, Alberta. He served a two-year mission for his church in Fiji before attending the University of Alberta School of Dentistry, graduating in 2023. He moved to Okotoks with his wife and children, where he enjoys golfing, cooking, and spending time outdoors with his family.",
  },
  {
    name: "Dr. Strater Crowfoot",
    title: "DDS, MSD · Pediatric Specialist",
    image: "/images/team/dr-placeholder.jpg",
    bio:
      "Board-certified pediatric dentist and board-certified general dentist. He holds a bachelor's degree in Exercise Science from Brigham Young University and a Doctor of Dental Surgery from Creighton University School of Dentistry. He completed both a Master of Dental Science and pediatric specialty at Saint Louis University Center of Advanced Dental Education and Cardinal Glennon Children's Hospital. His practice emphasizes minimally invasive dentistry for children as early as 12 months old, with sedation dentistry available when needed.",
  },
  {
    name: "Dr. Dalin Tollestrup",
    title: "DDS",
    image: "/images/team/dr-placeholder.jpg",
    bio:
      "Grew up on a farm in Raymond, southern Alberta. He played college football at the University of Calgary and Brigham Young University, then attended dental school at Griffith University in Gold Coast, Australia. He turned down an opportunity to play for the Calgary Stampeders to pursue dentistry. He now lives in Black Diamond with his wife and children, enjoying outdoor activities including hiking, golfing, snowboarding, and fishing. He is committed to giving back to his small-town community.",
  },
  {
    name: "Dr. Brendan Kalin",
    title: "DDS",
    image: "/images/team/dr-placeholder.jpg",
    bio:
      "A welcomed addition to the Calgary South Dental family — Dr. Brendan brings a calm chairside manner and a commitment to ongoing learning to every appointment, working alongside our team to deliver gentle, comprehensive general dentistry for patients of every age.",
  },
  {
    name: "Dr. Sheldon Fradette",
    title: "DDS",
    image: "/images/team/dr-placeholder.jpg",
    bio:
      "Dr. Fradette rounds out our experienced team with a patient-first approach and a passion for restorative dentistry. He focuses on building long-term relationships with the families he treats here in SE Calgary.",
  },
];

export default function MeetOurTeamPage() {
  return (
    <div
      className="min-h-screen bg-white text-[#141f2e]"
      style={{ fontFamily: "var(--font-poppins), sans-serif", overflowX: "clip" }}
    >
      <SiteHeader />

      <PageHero
        eyebrow="Calgary South Dental"
        title="Meet Our Team"
        subtitle="Your Trusted Dentists Are Here in Calgary. We are here to provide compassionate care and help you achieve a healthy, beautiful smile!"
        bgImage="/images/team/team-hero.jpg"
      />

      {/* ============================================================
          INTRO STRIP — Compassionate Care, Expert Hands
          ============================================================ */}
      <section
        id="meet-our-team"
        className="w-full relative overflow-hidden"
        style={{
          paddingTop: "96px",
          paddingBottom: "72px",
          background:
            "linear-gradient(180deg, #ffffff 0%, #fbf6f1 55%, #ffffff 100%)",
        }}
      >
        {/* Decorative accents */}
        <motion.div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ top: -60, left: -120, zIndex: 0 }}
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <OrganicBlob color="#279DB9" size={380} opacity={0.08} />
        </motion.div>
        <motion.div
          aria-hidden="true"
          className="absolute pointer-events-none hidden md:block"
          style={{ bottom: -40, right: -100, zIndex: 0 }}
          animate={{ rotate: [0, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <OrganicBlob color="#d8a986" size={320} opacity={0.18} />
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute pointer-events-none hidden lg:block"
          style={{ top: 80, right: 60, zIndex: 0 }}
        >
          <DotGrid rows={4} cols={6} color="#279DB9" opacity={0.22} />
        </div>
        <div
          aria-hidden="true"
          className="absolute pointer-events-none hidden lg:block"
          style={{ bottom: 60, left: 60, zIndex: 0 }}
        >
          <DotGrid rows={3} cols={5} color="#d8a986" opacity={0.35} />
        </div>

        <div
          className="relative max-w-[1180px] mx-auto"
          style={{
            paddingLeft: "clamp(20px, 5vw, 80px)",
            paddingRight: "clamp(20px, 5vw, 80px)",
            zIndex: 1,
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center"
          >
            <Eyebrow>The People Behind Your Smile</Eyebrow>
            <h2
              className="text-[#141f2e] uppercase mt-2"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(30px, 3.8vw, 54px)",
                fontWeight: 600,
                lineHeight: "1.1",
                letterSpacing: "2px",
              }}
            >
              Compassionate Care,{" "}
              <span
                className="relative inline-block"
                style={{ color: "#279DB9", fontStyle: "italic", fontWeight: 700 }}
              >
                Expert Hands
                <motion.span
                  aria-hidden="true"
                  className="absolute left-0 right-0"
                  style={{
                    bottom: "-6px",
                    height: "3px",
                    backgroundColor: "#d8a986",
                    borderRadius: "2px",
                    transformOrigin: "left center",
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                />
              </span>
            </h2>
            <p
              className="mt-7 text-[#141f2e]/80 max-w-[820px] mx-auto"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: "29px",
              }}
            >
              Our dentists combine years of experience with a warm, personal touch — caring for
              patients of every age, every background, and every comfort level. Get to know the
              doctors who&apos;ll be looking after your family&apos;s smile.
            </p>
          </motion.div>

          {/* Stat / trust cards */}
          <motion.ul
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
            style={{ listStyle: "none", padding: 0 }}
          >
            {[
              { stat: "7", label: "Trusted Dentists" },
              { stat: "30+", label: "Years Of Care" },
              { stat: "All", label: "Ages Welcome" },
              { stat: "Same-Day", label: "Emergencies" },
            ].map((item) => (
              <motion.li
                key={item.label}
                variants={fadeUp}
                className="group relative flex flex-col items-center justify-center text-center transition-all duration-500"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(20,31,46,0.08)",
                  borderRadius: "16px",
                  padding: "26px 18px",
                  boxShadow: "0 12px 30px -22px rgba(20,31,46,0.25)",
                }}
                whileHover={{ y: -6 }}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    top: "-2px",
                    width: "44px",
                    height: "3px",
                    backgroundColor: "#279DB9",
                    borderRadius: "0 0 4px 4px",
                  }}
                />
                <span
                  className="text-[#279DB9]"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "clamp(28px, 3vw, 38px)",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.stat}
                </span>
                <span
                  className="mt-2 uppercase text-[#141f2e]/75"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "11.5px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                  }}
                >
                  {item.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ============================================================
          TEAM GRID
          ============================================================ */}
      <section className="w-full bg-white" style={{ paddingTop: "40px", paddingBottom: "86.4px" }}>
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
        >
          {TEAM.map((m) => (
            <motion.article
              key={m.name}
              variants={fadeUp}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(20,31,46,0.08)",
                boxShadow: "0 12px 36px -20px rgba(20,31,46,0.18)",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3
                  className="text-[#141f2e]"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    lineHeight: 1.2,
                  }}
                >
                  {m.name}
                </h3>
                <p
                  className="mt-1 uppercase text-[#279DB9]"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontSize: "12.5px",
                    fontWeight: 600,
                    letterSpacing: "2.5px",
                  }}
                >
                  {m.title}
                </p>
                <span
                  aria-hidden="true"
                  className="block mt-4 transition-all duration-500 group-hover:w-16"
                  style={{ width: "32px", height: "2px", backgroundColor: "#d8a986" }}
                />
                <p
                  className="mt-5 text-[#141f2e]/75"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "26px",
                  }}
                >
                  {m.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ============================================================
          OFFICE TOUR (anchor target)
          ============================================================ */}
      <section
        id="office-tour"
        className="w-full bg-[#279DB9] relative overflow-hidden"
        style={{ paddingTop: "86.4px", paddingBottom: "86.4px", scrollMarginTop: "120px" }}
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
            className="text-center flex flex-col items-center"
          >
            <Eyebrow color="#ffffff">Inside Our Clinic</Eyebrow>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "clamp(28px, 3.5vw, 50px)",
                fontWeight: 600,
                lineHeight: "1.15",
                letterSpacing: "2px",
              }}
            >
              Office Tour
            </h2>
            <p
              className="mt-6 text-white max-w-[820px] mx-auto"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "27.2px",
              }}
            >
              Take a virtual tour of our dental office! Our modern facility is designed with
              patient comfort and convenience in mind, featuring advanced dental technology and
              amenities to enhance your dental experience. Explore our welcoming reception area,
              treatment rooms equipped with the latest equipment, and comfortable patient
              lounges. We create a relaxing environment where you can feel at ease during your
              visit. Schedule an appointment today and see why patients choose Calgary South
              Dental for their dental care needs.
            </p>
            <InlineLink href="/contact-us" light>
              Book a visit
            </InlineLink>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA STRIP
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
            Ready to meet the team in person?
          </h2>
          <p
            className="mt-6 text-[#141f2e]/80 max-w-[760px] mx-auto"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "16px",
              lineHeight: "27.2px",
            }}
          >
            Same-day emergency appointments available. New patients are welcome at our SE
            Calgary clinic — call us at 403-984-1616 or book online.
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
            Call 403-984-1616
          </a>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
