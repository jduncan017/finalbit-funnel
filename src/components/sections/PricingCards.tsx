import { Check } from "lucide-react";
import { Button } from "~/components/Button";
import { Wrapper } from "~/components/Wrapper";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Creator",
    price: "$28",
    period: "/mo",
    description: "For individual filmmakers and screenwriters.",
    features: [
      "All core AI tools",
      "Script breakdown & scheduling",
      "Budgeting & storyboard",
      "1 project at a time",
      "Standard support",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$70",
    period: "/mo",
    description: "For serious creators who need more power.",
    features: [
      "Everything in Creator",
      "Unlimited projects",
      "Video creation (Sora, VO)",
      "Script coverage & analysis",
      "Priority support",
    ],
    cta: "Go Pro",
    highlighted: true,
  },
];

export function PricingCards() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center">Simple Pricing</h2>
        <p className="mb-12 text-center text-neutral-200">
          Start creating. Upgrade when you&apos;re ready.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {tiers.map((tier) => (
            <Wrapper
              key={tier.name}
              rounded="lg"
              padding="sm"
              className={`border ${
                tier.highlighted
                  ? "border-primary-300 bg-primary-300/5"
                  : "border-gray-400/30 bg-gray-400/20"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-4 inline-block rounded-full bg-primary-300/20 px-3 py-1 text-xs font-semibold text-primary-300">
                  Most Popular
                </span>
              )}
              <h3>{tier.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-mono text-2xl font-bold text-white">
                  {tier.price}
                </span>
                <span className="text-sm text-neutral-300">{tier.period}</span>
              </div>
              <p className="mt-2 text-sm text-neutral-200">
                {tier.description}
              </p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary-300" strokeWidth={2.5} />
                    <span className="text-neutral-200">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  as="link"
                  href="#signup"
                  variant={tier.highlighted ? "primary" : "outline"}
                  size="md"
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </Wrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
