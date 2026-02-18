import { type ReactNode } from "react";
import { FadeIn } from "~/components/FadeIn";
import { Eyebrow } from "~/components/Eyebrow";
import { ProductImage } from "~/components/ProductImage";

interface HeroProps {
  tagline: string;
  heading: ReactNode;
  description: string;
  cta: ReactNode;
  image?: string;
  screenshotDescription?: string;
}

export function Hero({
  tagline,
  heading,
  description,
  cta,
  image = "/product/script-upload.jpg",
  screenshotDescription,
}: HeroProps) {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Gradient orb behind hero image */}
      <div className="gradient-orb -right-16 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 bg-primary-300 opacity-20 md:block" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col-reverse gap-10 md:flex-row md:items-center md:gap-16">
        {/* Copy */}
        <FadeIn className="flex flex-col items-start gap-6 md:w-5/12 md:shrink-0">
          <Eyebrow className="hidden md:block">{tagline}</Eyebrow>
          <h1>{heading}</h1>
          <p className="max-w-xl text-neutral-200">{description}</p>
          <div className="mt-4 flex w-full max-w-[520px] flex-col gap-4 sm:w-auto sm:flex-row">{cta}</div>
        </FadeIn>

        {/* Product image — extends past container edge on desktop */}
        <FadeIn delay={200} className="flex min-w-0 flex-1 items-center md:-mr-16 lg:-mr-32">
          <ProductImage
            src={image}
            alt={screenshotDescription ?? "FinalBit product interface"}
            direction="right"
          />
        </FadeIn>
      </div>
    </section>
  );
}
