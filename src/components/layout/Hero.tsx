import { type ReactNode } from "react";

interface HeroProps {
  heading: string;
  subheading?: string;
  actions?: ReactNode;
  image?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function Hero({
  heading,
  subheading,
  actions,
  image,
  align = "center",
  className = "",
}: HeroProps) {
  const alignClasses =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section
      className={`flex flex-col gap-8 px-6 py-16 md:py-24 ${alignClasses} ${className}`}
    >
      <div className={`flex max-w-3xl flex-col gap-4 ${alignClasses}`}>
        <h1 className="text-2xl font-bold md:text-3xl">{heading}</h1>
        {subheading && <p className="text-lg text-gray-300">{subheading}</p>}
        {actions && <div className="mt-4 flex flex-wrap gap-4">{actions}</div>}
      </div>
      {image && <div className="w-full max-w-4xl">{image}</div>}
    </section>
  );
}
