import { type ReactNode } from "react";
import { Wrapper } from "~/components/Wrapper";
import { FadeIn } from "~/components/FadeIn";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  heading?: string;
  subheading?: string;
  features: Feature[];
  columns?: 2 | 3;
}

export function FeatureGrid({
  heading,
  subheading,
  features,
  columns = 3,
}: FeatureGridProps) {
  const gridCols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";

  return (
    <section className="px-6">
      <div className="mx-auto max-w-4xl">
        {(heading ?? subheading) && (
          <FadeIn>
            <div className="mb-12 text-center">
              {heading && <h2>{heading}</h2>}
              {subheading && (
                <p className="mt-3 text-neutral-200">{subheading}</p>
              )}
            </div>
          </FadeIn>
        )}
        <div className={`grid gap-6 ${gridCols}`}>
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 100}>
              <Wrapper
                rounded="lg"
                padding="sm"
                className="card-hover border border-gray-400/30 bg-gray-400/20"
              >
                <div className="mb-4">{f.icon}</div>
                <h3>{f.title}</h3>
                <p className="mt-2 text-sm text-neutral-200">
                  {f.description}
                </p>
              </Wrapper>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
