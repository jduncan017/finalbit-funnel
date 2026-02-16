import { Lexend_Deca, Courier_Prime } from "next/font/google";

/*
 * ===========================================
 * FONTS — FinalBit brand
 * ===========================================
 * Lexend Deca: primary brand font (body + headings)
 * Courier Prime: screenplay/monospace accent font
 */

// Body font — Lexend Deca Light/Regular/Medium
export const bodyFont = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-body-face",
  weight: ["300", "400", "500"],
});

// Heading font — Lexend Deca Medium/SemiBold/Bold
export const headingFont = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-heading-face",
  weight: ["500", "600", "700"],
});

// Mono/accent font — Courier Prime (screenplay references, pricing)
export const monoFont = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-mono-face",
  weight: "400",
});
