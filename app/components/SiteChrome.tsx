"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PATIENTS_NAV, SERVICES_NAV } from "../services-data";

// ============================================================
// SHARED ICONS
// ============================================================

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.487 17.14l-4.065-3.696a1 1 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.085-1.39z" />
    </svg>
  );
}

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.141 0-3.515.012-4.751.068-1.022.047-1.578.218-1.946.362-.489.19-.838.418-1.205.784a3.252 3.252 0 00-.784 1.205c-.144.368-.315.924-.362 1.946-.056 1.236-.068 1.61-.068 4.751s.012 3.515.068 4.751c.047 1.022.218 1.578.362 1.946.19.489.418.838.784 1.205.367.366.716.594 1.205.784.368.144.924.315 1.946.362 1.236.056 1.61.068 4.751.068s3.515-.012 4.751-.068c1.022-.047 1.578-.218 1.946-.362.489-.19.838-.418 1.205-.784.366-.367.594-.716.784-1.205.144-.368.315-.924.362-1.946.056-1.236.068-1.61.068-4.751s-.012-3.515-.068-4.751c-.047-1.022-.218-1.578-.362-1.946a3.252 3.252 0 00-.784-1.205 3.252 3.252 0 00-1.205-.784c-.368-.144-.924-.315-1.946-.362-1.236-.056-1.61-.068-4.751-.068zm0 3.063A5.135 5.135 0 1112 17.135 5.135 5.135 0 0112 7.028zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
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
        {/* Top utility bar */}
        <motion.div
          className="w-full overflow-hidden"
          initial={false}
          animate={{
            height: headerScrolled ? 0 : 46,
            opacity: headerScrolled ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: "#279DB9" }}
        >
          <div
            className="w-full flex items-center justify-between text-white"
            style={{
              height: "46px",
              maxWidth: "1825px",
              margin: "0 auto",
              paddingLeft: "clamp(16px, 3vw, 30px)",
              paddingRight: "clamp(16px, 3vw, 30px)",
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "13px",
              letterSpacing: "0.5px",
            }}
          >
            <span>60 Sunpark Plaza SE Unit 120, Calgary, AB</span>
            <a
              href="https://www.instagram.com/calgarysouthdentalca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </motion.div>

        {/* Main nav row */}
        <div className="w-full bg-[#0f0f0f]">
          <div
            className="w-full flex items-center justify-between"
            style={{
              maxWidth: "1825px",
              margin: "0 auto",
              paddingLeft: "clamp(16px, 3vw, 30px)",
              paddingRight: "clamp(16px, 3vw, 30px)",
              paddingTop: "10px",
              paddingBottom: "10px",
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
            <nav className="flex flex-col items-center gap-6 mt-8 px-6">
              {NAV_ITEMS.map((item) => {
                const hasSubmenu = !!item.submenu;
                const isOpen = mobileSubmenuOpen === item.label;
                return (
                  <div key={item.label} className="w-full text-center">
                    <button
                      onClick={() =>
                        hasSubmenu
                          ? setMobileSubmenuOpen(isOpen ? null : item.label)
                          : (window.location.href = item.href)
                      }
                      className="inline-flex items-center gap-2 text-white uppercase"
                      style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "18px",
                        fontWeight: 500,
                        letterSpacing: "1.4px",
                      }}
                    >
                      {item.label}
                      {hasSubmenu && (
                        <span
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s",
                          }}
                        >
                          <ChevronDown />
                        </span>
                      )}
                    </button>
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
                className="mt-4 flex items-center justify-center px-8 bg-[#279DB9] border-2 border-[#279DB9] text-white"
                style={{
                  height: "46px",
                  borderRadius: "999px",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                }}
              >
                403-984-1616
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
          <a
            href="https://www.instagram.com/calgarysouthdentalca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="absolute right-0 text-white hover:text-[#279DB9] transition-colors duration-300"
          >
            <InstagramIcon size={24} />
          </a>
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
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  bgImage: string;
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
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
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
