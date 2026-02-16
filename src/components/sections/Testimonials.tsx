import { Wrapper } from "~/components/Wrapper";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialsProps {
  heading?: string;
  testimonials: Testimonial[];
}

export function Testimonials({
  heading = "What People Are Saying",
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center">
          {heading}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Wrapper
              key={t.name}
              rounded="lg"
              padding="sm"
              className="border border-gray-400/30 bg-gray-400/20"
            >
              <p className="text-sm leading-relaxed text-neutral-200 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-300/20 text-sm font-semibold text-primary-300">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-neutral-300">{t.role}</p>
                </div>
              </div>
            </Wrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
