import { Check } from "lucide-react";
import { Button } from "~/components/Button";
import { Wrapper } from "~/components/Wrapper";

export function OfferCard() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-2xl">
        <Wrapper rounded="lg" padding="lg" className="border border-primary-300/40 bg-primary-300/5 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary-300/20 px-4 py-1 text-sm font-semibold text-primary-300">
            Limited Offer
          </span>
          <h2>
            First Month:{" "}
            <span className="text-primary-300">$100</span>
          </h2>
          <p className="mt-1 text-sm text-neutral-300 line-through">
            $999/month
          </p>
          <p className="mt-4 text-base text-neutral-200">
            90% off your first month. Full B2B access for your entire team.
          </p>
          <ul className="mx-auto mt-6 max-w-sm space-y-3 text-left">
            {[
              "1-on-1 setup call with the founder",
              "Up to 10 seats — full team collaboration",
              "All Pro features unlocked",
              "3 custom AI project setups",
              "Premium support for 30 days",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary-300" strokeWidth={2.5} />
                <span className="text-neutral-200">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button as="a" href="#demo" size="lg">
              Book Your Demo
            </Button>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}
