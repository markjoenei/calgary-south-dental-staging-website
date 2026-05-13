"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PATIENTS_NAV, SERVICES_NAV } from "../services-data";

// ============================================================
// SHARED ICONS
// ============================================================

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
      aria-hidden="true"
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
      aria-hidden="true"
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
      aria-hidden="true"
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
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// ============================================================
// NAV STRUCTURE — About Us has a real dropdown
// ============================================================

type NavSubItem = {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
};
type NavItem = {
  label: string;
  href: string;
  submenu?: NavSubItem[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT US",
    href: "#",
    submenu: [
      { label: "Meet Our Team", href: "/meet-our-team" },
      { label: "Office Tour", href: "/meet-our-team#office-tour" },
      { label: "Why Us", href: "/why-us" },
    ],
  },
  {
    label: "DENTAL SERVICES",
    href: "#",
    submenu: SERVICES_NAV,
  },
  {
    label: "FOR PATIENTS",
    href: "/for-patients",
    submenu: PATIENTS_NAV,
  },
  { label: "CONTACT US", href: "/contact-us" },
];

// ============================================================
// SUB-MENU ITEM — supports an optional sub-flyout to the right
// ============================================================

function SubMenuItem({
  sub,
}: {
  sub: { label: string; href: string; submenu?: { label: string; href: string }[] };
}) {
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const hasFlyout = !!sub.submenu && sub.submenu.length > 0;

  return (
    <div
      className="relative"
      onMouseEnter={() => hasFlyout && setFlyoutOpen(true)}
      onMouseLeave={() => hasFlyout && setFlyoutOpen(false)}
    >
      <a
        href={sub.href}
        className="flex items-center justify-between px-5 py-2.5 text-white hover:text-[#279DB9] hover:bg-white/5 transition-colors duration-200"
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "0.5px",
        }}
      >
        <span>{sub.label}</span>
        {hasFlyout && (
          <span style={{ display: "inline-flex", marginLeft: "10px", opacity: 0.7 }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </a>

      {hasFlyout && (
        <AnimatePresence>
          {flyoutOpen && (
            <motion.div
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              transition={{ duration: 0.16, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-full top-0 bg-[#0f0f0f] border border-[#279DB9]/30 shadow-2xl"
              style={{
                minWidth: "280px",
                marginLeft: "4px",
                borderRadius: "6px",
                padding: "10px 0",
              }}
            >
              {sub.submenu!.map((leaf) => (
                <a
                  key={leaf.label}
                  href={leaf.href}
                  className="block px-5 py-2.5 text-white hover:text-[#279DB9] hover:bg-white/5 transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                  }}
                >
                  {leaf.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

// ============================================================
// SITE HEADER — sticky, two-row (utility bar + main nav)
// Matches home base design.
// ============================================================

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHeaderScrolled(window.scrollY > 80);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
              paddingLeft: "clamp(16px, 5vw, 80px)",
              paddingRight: "clamp(16px, 5vw, 80px)",
            }}
          >
            {/* Social icons — Instagram + Facebook */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/calgarysouthdentalca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center text-white transition-transform duration-300 hover:scale-110"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://www.facebook.com/people/Calgary-South-Dental/61561602615233/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center text-white transition-transform duration-300 hover:scale-110"
              >
                <FacebookIcon size={20} />
              </a>
            </div>

            {/* Address — hidden on mobile, links to Google Maps */}
            <a
              href="https://www.google.com/maps/place/Calgary+South+Dental/@50.9696866,-114.0468825,21901m/data=!3m1!1e3!4m6!3m5!1s0x53717788900e409b:0x8cd7b1c14e176e0a!8m2!3d50.901242!4d-114.0558708!16s%2Fg%2F11w4h015gp?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center hover:opacity-80 transition-opacity duration-300"
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
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginRight: "6px", verticalAlign: "middle" }}
                aria-hidden="true"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
              60 Sunpark Plaza SE Unit 120 Calgary, AB T2X 3Y2
            </a>

            {/* Right side — Book Online Here */}
            <div className="flex items-center gap-3">
              <a
                href="/contact-us"
                className="group hidden md:inline-flex items-center justify-center text-white transition-colors duration-300 hover:text-[#141f2e]"
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
                  className="ml-2 inline-flex items-center justify-center transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110 group-hover:bg-[#141f2e] group-hover:text-white"
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    color: "#279DB9",
                    fontSize: "12px",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
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
              paddingLeft: "clamp(16px, 5vw, 80px)",
              paddingRight: "clamp(16px, 5vw, 80px)",
            }}
          >
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

            {/* Desktop nav with dropdown */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const hasSubmenu = !!item.submenu;
                const isOpen = openSubmenu === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasSubmenu && setOpenSubmenu(item.label)}
                    onMouseLeave={() => hasSubmenu && setOpenSubmenu(null)}
                  >
                    <a
                      href={item.href}
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
                        {item.label}
                        {hasSubmenu && (
                          <span
                            className="ml-1 inline-flex transition-transform duration-300"
                            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                          >
                            <ChevronDown />
                          </span>
                        )}
                      </span>
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

                    {/* Dropdown — supports one level of nested submenus */}
                    {hasSubmenu && (
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute left-0 top-full bg-[#0f0f0f] border border-[#279DB9]/30 shadow-2xl"
                            style={{
                              minWidth: "260px",
                              marginTop: "4px",
                              borderRadius: "6px",
                              padding: "10px 0",
                            }}
                          >
                            {item.submenu!.map((sub) => (
                              <SubMenuItem key={sub.label} sub={sub} />
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
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

              <button
                className="md:hidden flex flex-col gap-[5px] p-2"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <span className="block w-6 h-[2px] bg-white" />
                <span className="block w-6 h-[2px] bg-white" />
                <span className="block w-6 h-[2px] bg-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
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
            <nav className="flex flex-col items-center gap-6 mt-12 w-full px-6">
              {NAV_ITEMS.map((item) => {
                const hasSubmenu = !!item.submenu;
                const isOpen = mobileSubmenuOpen === item.label;
                return (
                  <div key={item.label} className="w-full text-center">
                    {hasSubmenu ? (
                      <button
                        onClick={() => setMobileSubmenuOpen(isOpen ? null : item.label)}
                        className="inline-flex items-center gap-2 text-white hover:text-[#279DB9] transition-colors duration-300 uppercase tracking-[3px]"
                        style={{
                          fontFamily: "var(--font-poppins), sans-serif",
                          fontSize: "18px",
                          fontWeight: 600,
                        }}
                      >
                        {item.label}
                        <span
                          style={{
                            display: "inline-flex",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s",
                          }}
                        >
                          <ChevronDown />
                        </span>
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="inline-block text-white hover:text-[#279DB9] transition-colors duration-300 uppercase tracking-[3px]"
                        style={{
                          fontFamily: "var(--font-poppins), sans-serif",
                          fontSize: "18px",
                          fontWeight: 600,
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                    {hasSubmenu && isOpen && (
                      <div className="mt-3 flex flex-col items-center gap-3">
                        {item.submenu!.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="text-white/80 hover:text-[#279DB9] transition-colors"
                            style={{
                              fontFamily: "var(--font-poppins), sans-serif",
                              fontSize: "15px",
                              letterSpacing: "0.5px",
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
                href="https://www.instagram.com/calgarysouthdentalca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
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
    </>
  );
}

// ============================================================
// SITE FOOTER — matches home design
// ============================================================

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#000000]">
      <div
        className="max-w-[1440px] mx-auto py-12 flex flex-col items-center gap-8"
        style={{ paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}
      >
        <a href="/">
          <img
            src="/images/calgary-south-dental-logo.png"
            alt="Calgary South Dental"
            style={{ width: "191px", objectFit: "contain" }}
          />
        </a>

        <div className="w-full flex items-center justify-center relative">
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { label: "HOME", href: "/" },
              { label: "MEET OUR TEAM", href: "/meet-our-team" },
              { label: "WHY US", href: "/why-us" },
              { label: "CONTACT US", href: "#" },
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
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="absolute right-0 flex items-center gap-4">
            <a
              href="https://www.instagram.com/calgarysouthdentalca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-[#279DB9] transition-colors duration-300"
            >
              <InstagramIcon size={24} />
            </a>
            <a
              href="https://www.facebook.com/people/Calgary-South-Dental/61561602615233/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-[#279DB9] transition-colors duration-300"
            >
              <FacebookIcon size={24} />
            </a>
          </div>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            width: "100%",
            margin: "24px 0",
          }}
        />

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
          <a href="#" className="hover:text-[#279DB9] transition-colors">
            Sitemap
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-[#279DB9] transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}

// ============================================================
// SHARED VECTOR DECORATIONS — match home design system
// ============================================================

export function Eyebrow({
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

export function DotGrid({
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

export function OrganicBlob({
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

// ============================================================
// INUIT-INSPIRED DECORATIONS — used on teal feature sections
// and as a faint textile-pattern backdrop on white sections.
// ============================================================

export function InuitDiamondCluster({
  size = 380,
  primary = "#d8a986",
  secondary = "#ffffff",
}: {
  size?: number;
  primary?: string;
  secondary?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 380 380"
      fill="none"
      style={{ display: "block" }}
    >
      <g transform="translate(190 190)">
        <polygon points="0,-150 150,0 0,150 -150,0" stroke={primary} strokeWidth="2" fill="none" opacity="0.55" />
        <polygon points="0,-115 115,0 0,115 -115,0" stroke={secondary} strokeWidth="1.5" fill="none" opacity="0.5" />
        <polygon points="0,-80 80,0 0,80 -80,0" fill={primary} opacity="0.32" />
        <polygon points="0,-45 45,0 0,45 -45,0" fill={secondary} opacity="0.45" />
        <path d="M0,-150 L-10,-168 L0,-186 L10,-168 Z" fill={primary} opacity="0.6" />
        <path d="M150,0 L168,-10 L186,0 L168,10 Z" fill={primary} opacity="0.6" />
        <path d="M0,150 L10,168 L0,186 L-10,168 Z" fill={primary} opacity="0.6" />
        <path d="M-150,0 L-168,10 L-186,0 L-168,-10 Z" fill={primary} opacity="0.6" />
        <circle r="5" fill={secondary} opacity="0.85" />
      </g>
    </svg>
  );
}

export function InuitWaveLines({
  width = 420,
  height = 220,
  primary = "#ffffff",
  secondary = "#d8a986",
}: {
  width?: number;
  height?: number;
  primary?: string;
  secondary?: string;
}) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 420 220" fill="none" style={{ display: "block" }}>
      <path d="M0,40 Q105,10 210,40 T420,40" stroke={primary} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M0,85 Q105,55 210,85 T420,85" stroke={secondary} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.65" />
      <path d="M0,130 Q105,100 210,130 T420,130" stroke={primary} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45" />
      <path d="M0,175 Q105,145 210,175 T420,175" stroke={secondary} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M55,32 L62,22 L69,32 Z" fill={primary} opacity="0.55" />
      <path d="M155,32 L162,22 L169,32 Z" fill={primary} opacity="0.55" />
      <path d="M255,32 L262,22 L269,32 Z" fill={primary} opacity="0.55" />
      <path d="M355,32 L362,22 L369,32 Z" fill={primary} opacity="0.55" />
      <circle cx="105" cy="155" r="2" fill={secondary} opacity="0.6" />
      <circle cx="210" cy="155" r="2" fill={secondary} opacity="0.6" />
      <circle cx="315" cy="155" r="2" fill={secondary} opacity="0.6" />
    </svg>
  );
}

export function InuitSunburst({
  size = 400,
  primary = "#d8a986",
  secondary = "#ffffff",
}: {
  size?: number;
  primary?: string;
  secondary?: string;
}) {
  const rays = 8;
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 400 400" fill="none" style={{ display: "block" }}>
      <g transform="translate(200 200)">
        {Array.from({ length: rays }).map((_, i) => (
          <g key={`r-${i}`} transform={`rotate(${(i * 360) / rays})`}>
            <line x1="0" y1="-160" x2="0" y2="-95" stroke={primary} strokeWidth="2" opacity="0.65" strokeLinecap="round" />
            <path d="M-7,-160 L0,-178 L7,-160 Z" fill={primary} opacity="0.75" />
          </g>
        ))}
        {Array.from({ length: rays }).map((_, i) => (
          <line
            key={`s-${i}`}
            transform={`rotate(${(i * 360) / rays + 22.5})`}
            x1="0"
            y1="-130"
            x2="0"
            y2="-95"
            stroke={secondary}
            strokeWidth="1.5"
            opacity="0.45"
            strokeLinecap="round"
          />
        ))}
        <circle r="70" stroke={primary} strokeWidth="2" fill="none" opacity="0.65" />
        <circle r="50" stroke={secondary} strokeWidth="1" fill="none" opacity="0.5" />
        <circle r="30" fill={primary} opacity="0.32" />
        <circle r="6" fill={secondary} opacity="0.9" />
      </g>
    </svg>
  );
}

export function InuitChevronStack({
  width = 420,
  height = 280,
  primary = "#ffffff",
  secondary = "#d8a986",
}: {
  width?: number;
  height?: number;
  primary?: string;
  secondary?: string;
}) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 420 280" fill="none" style={{ display: "block" }}>
      <path d="M30,260 L210,80 L390,260" stroke={primary} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.55" />
      <path d="M65,260 L210,115 L355,260" stroke={secondary} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.65" />
      <path d="M100,260 L210,150 L320,260" stroke={primary} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M135,260 L210,185 L285,260" stroke={secondary} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.45" />
      <path d="M170,260 L210,220 L250,260" stroke={primary} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.55" />
      <circle cx="210" cy="80" r="4" fill={primary} opacity="0.85" />
      <circle cx="160" cy="130" r="2" fill={secondary} opacity="0.55" />
      <circle cx="260" cy="130" r="2" fill={secondary} opacity="0.55" />
    </svg>
  );
}

export function InuitStarPattern({
  size = 400,
  primary = "#d8a986",
  secondary = "#ffffff",
}: {
  size?: number;
  primary?: string;
  secondary?: string;
}) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 400 400" fill="none" style={{ display: "block" }}>
      <g transform="translate(200 200)">
        <polygon points="0,-160 60,0 0,160 -60,0" fill={primary} opacity="0.35" />
        <polygon points="-160,0 0,-60 160,0 0,60" fill={secondary} opacity="0.32" />
        <polygon points="0,-85 30,0 0,85 -30,0" fill={primary} opacity="0.55" />
        <polygon points="-85,0 0,-30 85,0 0,30" fill={secondary} opacity="0.5" />
        <polygon points="0,-160 -12,-178 0,-196 12,-178" fill={primary} opacity="0.7" />
        <polygon points="0,160 12,178 0,196 -12,178" fill={primary} opacity="0.7" />
        <polygon points="-160,0 -178,-12 -196,0 -178,12" fill={primary} opacity="0.7" />
        <polygon points="160,0 178,12 196,0 178,-12" fill={primary} opacity="0.7" />
        <circle r="7" fill={secondary} opacity="0.9" />
      </g>
    </svg>
  );
}

export function InuitArrowField({
  width = 440,
  height = 240,
  primary = "#ffffff",
  secondary = "#d8a986",
}: {
  width?: number;
  height?: number;
  primary?: string;
  secondary?: string;
}) {
  const cols = 8;
  const rows = 4;
  const sx = 50;
  const sy = 52;
  const tris: React.ReactElement[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const offset = r % 2 === 0 ? 0 : sx / 2;
      const cx = 28 + c * sx + offset;
      const cy = 28 + r * sy;
      const isAlt = (r + c) % 2 === 0;
      const color = isAlt ? primary : secondary;
      const opacity = isAlt ? 0.5 : 0.6;
      tris.push(
        <path
          key={`${r}-${c}`}
          d={`M${cx - 7},${cy + 6} L${cx},${cy - 7} L${cx + 7},${cy + 6} Z`}
          fill={color}
          opacity={opacity}
        />
      );
    }
  }
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 440 240" fill="none" style={{ display: "block" }}>
      {tris}
    </svg>
  );
}

// Section-wide Inuit textile pattern + soft white wash (0.1 / 0.75).
// Drop into any `relative overflow-hidden` section as the first child;
// then put real content in a `relative z-10` wrapper.
export function InuitSectionBg({
  patternOpacity = 0.1,
  washOpacity = 0.75,
}: {
  patternOpacity?: number;
  washOpacity?: number;
}) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/inuit-pattern-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: patternOpacity,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: `rgba(255,255,255,${washOpacity})` }}
      />
    </>
  );
}

// Drop-in animated pair of Inuit motifs for teal sections.
// `variant` cycles three distinct combos; defaults to "diamond".
export function InuitTealAccents({
  variant = "diamond",
}: {
  variant?: "diamond" | "star" | "sun";
}) {
  if (variant === "star") {
    return (
      <>
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
      </>
    );
  }
  if (variant === "sun") {
    return (
      <>
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
      </>
    );
  }
  // diamond (default)
  return (
    <>
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
    </>
  );
}

export function InlineLink({
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
          flexShrink: 0,
        }}
      >
        &#8594;
      </span>
    </a>
  );
}

// ============================================================
// PAGE HERO — generic intro banner matching home aesthetic
// ============================================================

export function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
  bgPosition = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  bgImage: string;
  bgPosition?: string;
}) {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        minHeight: "clamp(420px, 60vh, 540px)",
        paddingTop: "clamp(130px, 18vw, 180px)",
        paddingBottom: "clamp(70px, 10vw, 120px)",
      }}
    >
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: bgPosition }}
        />
        <div className="absolute inset-0 bg-[#0f0f0f]/65" />
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{ top: 100, right: -80, zIndex: 0 }}
        animate={{ rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <OrganicBlob color="#d8a986" size={460} opacity={0.18} />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{ bottom: 40, left: 40, zIndex: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <DotGrid rows={5} cols={8} color="#ffffff" opacity={0.3} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
        className="relative z-10 max-w-[1100px] mx-auto px-6 text-center"
      >
        <Eyebrow color="#d8a986">{eyebrow}</Eyebrow>
        <h1
          className="text-white uppercase"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "2px",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 text-white/85 max-w-[760px] mx-auto"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
