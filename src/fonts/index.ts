import { Inter } from "next/font/google";

/*
 * ===========================================
 * FONTS — Swap these to rebrand
 * ===========================================
 * Each export produces a CSS variable that gets
 * wired into the Tailwind theme in globals.css.
 *
 * To use a local font instead:
 *   import localFont from "next/font/local";
 *   export const bodyFont = localFont({
 *     src: "./MyFont.woff2",
 *     variable: "--font-body-face",
 *   });
 */

// Body font
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body-face",
});

// Heading font — using Inter for now. Swap to differentiate headings.
// Example with a display font:
//   import { Playfair_Display } from "next/font/google";
//   export const headingFont = Playfair_Display({
//     subsets: ["latin"],
//     variable: "--font-heading-face",
//     weight: ["700", "800"],
//   });
export const headingFont = Inter({
  subsets: ["latin"],
  variable: "--font-heading-face",
  weight: ["600", "700", "800"],
});
