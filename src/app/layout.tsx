import "~/styles/globals.css";

import { type Metadata } from "next";
import { bodyFont, headingFont, monoFont } from "~/fonts";

export const metadata: Metadata = {
  title: "FinalBit — AI-Powered Pre-Production",
  description:
    "Breakdowns, scheduling, budgets, storyboards, and video — one AI platform, fully connected to your screenplay.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable}`}
    >
      <body className="font-body min-h-screen bg-neutral-400 leading-normal text-neutral-100">
        <div className="from-primary-400/30 to-primary-400/30 bg-linear-to-r via-transparent">
          {children}
        </div>
      </body>
    </html>
  );
}
