import type { Metadata } from "next";
import { Playfair_Display, Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Calgary South Dental | General and Cosmetic Dentistry in Calgary, AB",
  description:
    "Your trusted local dentist in Calgary, AB. Calgary South Dental offers comprehensive general and cosmetic dentistry with personalized, compassionate care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${montserrat.variable}`}
    >
      <body className="min-h-full bg-white text-[#141f2e]">{children}</body>
    </html>
  );
}
