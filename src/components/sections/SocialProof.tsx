import { FadeIn } from "~/components/FadeIn";
import { Eyebrow } from "~/components/Eyebrow";

const stats = [
  { value: "2,400+", label: "Filmmakers" },
  { value: "15,000+", label: "Scripts Analyzed" },
  { value: "90%", label: "Time Saved" },
  { value: "4.9/5", label: "Rating" },
];

export function SocialProof() {
  return (
    <section className="shadow-theme mx-auto w-full max-w-[1200px] rounded-full border border-gray-200/20 bg-black/20 p-20">
      <FadeIn>
        <Eyebrow className="mb-10 text-center">
          Trusted by filmmakers and studios worldwide
        </Eyebrow>
      </FadeIn>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 100}>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-lg text-neutral-300">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
