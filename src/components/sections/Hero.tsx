import { type ReactNode } from "react";
import { FadeIn } from "~/components/FadeIn";
import { ProductShot } from "~/components/ProductShot";

interface HeroProps {
  tagline: string;
  heading: ReactNode;
  description: string;
  cta: ReactNode;
  screenshotDescription?: string;
}

export function Hero({
  tagline,
  heading,
  description,
  cta,
  screenshotDescription,
}: HeroProps) {
  return (
    <section className="h-fit px-6 pt-16 pb-12 md:px-16 md:py-32 lg:px-20">
      <div className="mx-auto flex h-fit max-w-[1280px] flex-col gap-10 md:flex-row md:gap-20">
        {/* Copy */}
        <FadeIn className="flex flex-1 flex-col items-start gap-6">
          <p className="text-primary-300 text-sm font-medium tracking-widest uppercase">
            {tagline}
          </p>
          <h1>{heading}</h1>
          <p className="max-w-xl text-neutral-200">{description}</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">{cta}</div>
        </FadeIn>

        {/* Image placeholder */}
        <FadeIn delay={200} className="flex flex-1 items-center">
          {screenshotDescription ? (
            <ProductShot
              description={screenshotDescription}
              aspectRatio="auto"
              className="h-full w-full"
            />
          ) : (
            <div className="from-primary-300/20 shadow-theme border-primary-200/10 via-primary-400/40 h-full w-full rounded-xl border bg-linear-to-br to-neutral-400" />
          )}
        </FadeIn>
      </div>
    </section>
  );
}
