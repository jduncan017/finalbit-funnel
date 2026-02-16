import { type ReactNode } from "react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  columns?: FooterColumn[];
  logo?: ReactNode;
  copyright?: string;
  bottomContent?: ReactNode;
  className?: string;
}

export function Footer({
  columns = [],
  logo,
  copyright,
  bottomContent,
  className = "",
}: FooterProps) {
  return (
    <footer className={`px-6 py-12 ${className}`}>
      {columns.length > 0 && (
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-sm font-semibold tracking-wider text-neutral-400 uppercase">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    <Link
                      href={link.href}
                      className="hover:text-primary-300 text-sm text-gray-300 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:justify-between">
        {logo && <div>{logo}</div>}
        {copyright && <p className="text-sm text-gray-300">{copyright}</p>}
        {bottomContent && <div>{bottomContent}</div>}
      </div>
    </footer>
  );
}
