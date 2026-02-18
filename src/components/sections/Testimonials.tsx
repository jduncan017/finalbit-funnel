import Image from "next/image";
import { Wrapper } from "~/components/Wrapper";
import { FadeIn } from "~/components/FadeIn";
import { Eyebrow } from "~/components/Eyebrow";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

interface TestimonialsProps {
  eyebrow?: string;
  heading?: string;
  testimonials: Testimonial[];
}

export function Testimonials({
  eyebrow = "Testimonials",
  heading = "What People Are Saying",
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="section-pad shadow-theme bg-black/20">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <Eyebrow className="mb-3 text-center">{eyebrow}</Eyebrow>
          <h2 className="mb-12 text-center">{heading}</h2>
        </FadeIn>
        <div className="grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100}>
              <Wrapper
                rounded="lg"
                padding="sm"
                className="card-hover flex-1 flex-col border border-gray-400/30 bg-linear-to-br from-gray-200/20 to-gray-600/20"
              >
                <p className="text-xl leading-relaxed font-light text-neutral-200">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <Image
                    src={t.image ?? "/logo.png"}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="h-16 w-16 shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xl font-medium">{t.name}</p>
                    <p className="text-lg text-neutral-200">{t.role}</p>
                  </div>
                </div>
              </Wrapper>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
