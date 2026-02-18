import { FadeIn } from "~/components/FadeIn";
import { ProductImage } from "~/components/ProductImage";

interface ProductShowcaseProps {
  image?: string;
}

export function ProductShowcase({
  image = "/product/script-upload.jpg",
}: ProductShowcaseProps) {
  return (
    <section
      className="relative mt-40 overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to bottom, black 60%, rgba(0, 0, 0, 0) 90%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 65%, rgba(0, 0, 0, 0) 90%)",
      }}
    >
      {/* Decorative gradient orb */}
      <div className="gradient-orb bg-primary-300 top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className="mb-16 text-center">
            See Your Entire Pre-Production in One View
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <ProductImage
            src={image}
            alt="Full product interface with sidebar navigation, script editor, AI breakdown panel, shooting schedule calendar, and storyboard grid"
            direction="center"
          />
        </FadeIn>
      </div>
    </section>
  );
}
