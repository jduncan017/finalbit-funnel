import { FadeIn } from "~/components/FadeIn";
import { ProductShot } from "~/components/ProductShot";

export function ProductShowcase() {
  return (
    <section className="relative px-6 py-16 md:py-24">
      {/* Decorative gradient orb */}
      <div className="gradient-orb left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-primary-300" />

      <div className="relative mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="mb-10 text-center">
            See Your Entire Pre-Production in One View
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <ProductShot
            description="Full product interface with sidebar navigation, script editor, AI breakdown panel, shooting schedule calendar, and storyboard grid"
            aspectRatio="16/9"
          />
        </FadeIn>
      </div>
    </section>
  );
}
