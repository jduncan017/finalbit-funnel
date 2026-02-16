"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  children?: ReactNode;
  cta?: ReactNode;
  sticky?: boolean;
  className?: string;
}

export function Navbar({
  children,
  cta,
  sticky = false,
  className = "",
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`relative ${sticky ? "sticky top-0 z-50" : ""} ${className}`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image src="/logo.png" alt="Logo" width={120} height={32} priority />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-6 md:flex">{children}</div>

        {/* Desktop CTA */}
        {cta && <div className="hidden items-center md:flex">{cta}</div>}

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-8 w-8 items-center justify-center md:hidden"
        >
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "scale-x-0 opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "translate-y-0 -rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4 px-6 pb-6">{children}</div>
          {cta && <div className="px-6 pb-6">{cta}</div>}
        </div>
      </div>
    </nav>
  );
}
