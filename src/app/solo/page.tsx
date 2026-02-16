import Link from "next/link";
import { type Metadata } from "next";
import { Button } from "~/components/Button";
import { FadeIn } from "~/components/FadeIn";
import { Navbar, Footer } from "~/components/layout";
import {
  Hero,
  ProductShowcase,
  ValueProps,
  PricingCards,
  Testimonials,
  SocialProof,
  EmailCapture,
} from "~/components/sections";

export const metadata: Metadata = {
  title: "FinalBit — AI Pre-Production for Filmmakers",
  description:
    "Upload your screenplay. Get a full breakdown, schedule, budget, and storyboard in minutes. Built for individual filmmakers and creators.",
};

const steps = [
  {
    number: "01",
    title: "Upload Your Script",
    description:
      "Drag and drop your screenplay. FinalBit reads and understands it instantly.",
  },
  {
    number: "02",
    title: "AI Does the Heavy Lifting",
    description:
      "Breakdown, schedule, budget, and storyboard are generated automatically from your screenplay.",
  },
  {
    number: "03",
    title: "Create & Iterate",
    description:
      "Refine your pre-production. Generate video, run script analysis, collaborate with the AI co-pilot.",
  },
];

const testimonials = [
  {
    quote:
      "I uploaded my short film screenplay and had a full breakdown in under 5 minutes. I spent a whole weekend doing it manually last time.",
    name: "Jordan Park",
    role: "Independent Filmmaker",
  },
  {
    quote:
      "The storyboard generation is magic. I can finally show producers what I see in my head without hiring an artist.",
    name: "Priya Sharma",
    role: "Screenwriter & Director",
  },
  {
    quote:
      "FinalBit gave me an accurate budget before I even started fundraising. That alone saved me months of guesswork.",
    name: "Alex Torres",
    role: "Indie Producer",
  },
];

export default function SoloPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar
        sticky
        cta={
          <Button as="a" href="#signup">
            Start Free
          </Button>
        }
        className="bg-neutral-400/80 text-neutral-100 backdrop-blur-sm"
      >
        <Link
          href="/"
          className="font-medium text-neutral-200 transition hover:text-white"
        >
          Home
        </Link>
        <Link
          href="#features"
          className="font-medium text-neutral-200 transition hover:text-white"
        >
          Features
        </Link>
        <Link
          href="#pricing"
          className="font-medium text-neutral-200 transition hover:text-white"
        >
          Pricing
        </Link>
      </Navbar>

      {/* Hero */}
      <Hero
        tagline="For Filmmakers & Creators"
        heading={
          <>
            Upload Your Screenplay.{" "}
            <span className="text-primary-300">
              Get a Full Breakdown in Minutes.
            </span>
          </>
        }
        description="Stop spending days on manual pre-production. FinalBit handles breakdowns, scheduling, budgeting, storyboards, and video — so you can focus on the creative work."
        screenshotDescription="Script upload interface with drag-and-drop zone and a preview of the AI-generated breakdown"
        cta={
          <Button
            as="a"
            href="#signup"
            size="lg"
            className="glow-cta shadow-theme"
          >
            Start Free
          </Button>
        }
      />

      {/* Full Product View */}
      <ProductShowcase />

      {/* Feature Deep-Dives (alternating copy + product shots) */}
      <div id="features">
        <ValueProps />
      </div>

      {/* How It Works */}
      <hr />
      <section className="relative overflow-hidden px-6">
        {/* Decorative gradient orb */}
        <div className="gradient-orb -right-24 top-0 h-[350px] w-[350px] bg-primary-300" />

        <div className="relative mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="mb-12 text-center">How It Works</h2>
          </FadeIn>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 100}>
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-300/20 font-mono text-sm font-bold text-primary-300">
                    {step.number}
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p className="mt-1 text-sm text-neutral-200">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* Pricing */}
      <hr />
      <div id="pricing">
        <PricingCards />
      </div>

      {/* Testimonials */}
      <hr />
      <Testimonials testimonials={testimonials} />

      {/* Email Capture */}
      <hr />
      <EmailCapture />

      {/* Footer */}
      <hr className="mt-auto" />
      <Footer
        logo={<span className="text-lg font-bold text-white">FinalBit</span>}
        copyright="&copy; 2026 FinalBit. All rights reserved."
        className="text-neutral-200"
      />
    </main>
  );
}
