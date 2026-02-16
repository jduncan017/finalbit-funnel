import { FadeIn } from "~/components/FadeIn";

const stats = [
  { value: "2,400+", label: "Filmmakers" },
  { value: "15,000+", label: "Scripts Analyzed" },
  { value: "90%", label: "Time Saved" },
  { value: "4.9/5", label: "Rating" },
];

export function SocialProof() {
  return (
    <section className="border-y border-gray-400/20 bg-gray-400/10 px-6 py-16 backdrop-blur-sm md:py-20">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="mb-10 text-center text-sm font-medium tracking-widest text-neutral-300 uppercase">
            Trusted by filmmakers and studios worldwide
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-neutral-300">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
