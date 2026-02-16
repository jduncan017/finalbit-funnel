"use client";

import Link from "next/link";
import { Users, Sparkles, RefreshCcw, ArrowRight } from "lucide-react";
import { Button } from "~/components/Button";
import { IconBubble } from "~/components/IconBubble";
import { FadeIn } from "~/components/FadeIn";
import { CalModalTrigger } from "~/components/CalModalTrigger";
import { Navbar, Footer } from "~/components/layout";
import {
  Hero,
  FeatureGrid,
  ProductShowcase,
  ComparisonTable,
  OfferCard,
  Testimonials,
  SocialProof,
  DemoForm,
} from "~/components/sections";

const painPoints = [
  {
    before: "4+ disconnected tools",
    after: "One connected platform",
  },
  {
    before: "Days of manual breakdown",
    after: "Minutes with AI automation",
  },
  {
    before: "Script changes = manual updates everywhere",
    after: "Changes propagate automatically",
  },
  {
    before: "Separate AI subscriptions per tool",
    after: "Multi-model AI access included",
  },
];

const features = [
  {
    icon: (
      <IconBubble size="sm">
        <Users />
      </IconBubble>
    ),
    title: "Up to 10 Seats",
    description:
      "Your entire production team collaborates across all tools — breakdown, schedule, budget, storyboard — in one shared workspace.",
  },
  {
    icon: (
      <IconBubble size="sm">
        <Sparkles />
      </IconBubble>
    ),
    title: "Multi-Model AI",
    description:
      "Sora, VO, and other AI models included — no separate licenses. Generate video, storyboards, and script analysis from one subscription.",
  },
  {
    icon: (
      <IconBubble size="sm">
        <RefreshCcw />
      </IconBubble>
    ),
    title: "Everything Connected",
    description:
      "Change the screenplay and breakdowns, schedules, and budgets update automatically. No more exporting and importing between tools.",
  },
];

const testimonials = [
  {
    quote:
      "We replaced Final Draft, Movie Magic, and two other tools. Our pre-production timeline went from 3 weeks to 4 days.",
    name: "Sarah Chen",
    role: "Producer, Indie Studio",
  },
  {
    quote:
      "The AI breakdown alone saves us 20+ hours per project. The fact that it connects to scheduling and budgeting is a game-changer.",
    name: "Marcus Williams",
    role: "Line Producer",
  },
  {
    quote:
      "Being able to generate storyboards and video from the script — no competitor even comes close to that.",
    name: "Elena Rodriguez",
    role: "Creative Director",
  },
];

export default function TeamsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar
        sticky
        cta={
          <CalModalTrigger>
            {(openModal) => (
              <Button onClick={openModal}>Book a Demo</Button>
            )}
          </CalModalTrigger>
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
          href="#compare"
          className="font-medium text-neutral-200 transition hover:text-white"
        >
          Compare
        </Link>
      </Navbar>

      {/* Hero */}
      <Hero
        tagline="For Production Teams"
        heading={
          <>
            One Subscription Replaces{" "}
            <span className="text-primary-300">4+ Tools</span>
          </>
        }
        description="AI automation that turns days of manual pre-production into hours. Breakdowns, scheduling, budgeting, storyboards, and video — all connected to your screenplay."
        screenshotDescription="Team workspace showing collaborative breakdown, shared schedule, and real-time budget tracking"
        cta={
          <CalModalTrigger>
            {(openModal) => (
              <Button
                onClick={openModal}
                size="lg"
                className="glow-cta shadow-theme"
              >
                Book a Demo
              </Button>
            )}
          </CalModalTrigger>
        }
      />

      {/* Pain Points — Before / After */}
      <hr />
      <section className="relative overflow-hidden px-6">
        {/* Decorative gradient orb */}
        <div className="gradient-orb -left-24 top-1/2 h-[350px] w-[350px] -translate-y-1/2 bg-primary-300" />

        <div className="relative mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="mb-10 text-center">
              Stop Juggling Disconnected Tools
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {painPoints.map((p, i) => (
              <FadeIn key={p.before} delay={i * 80}>
                <div className="flex items-center gap-4 rounded-[12px] border border-gray-400/30 bg-gray-400/20 px-5 py-4">
                  <span className="flex-1 text-sm text-neutral-300 line-through">
                    {p.before}
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-primary-300" />
                  <span className="flex-1 text-sm font-medium text-secondary-300">
                    {p.after}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full Product View */}
      <ProductShowcase />

      {/* Features */}
      <hr />
      <div id="features">
        <FeatureGrid
          heading="Built for Production Teams"
          subheading="Everything your crew needs, connected in one workspace."
          features={features}
        />
      </div>

      {/* Social Proof */}
      <SocialProof />

      {/* Comparison Table */}
      <hr />
      <div id="compare">
        <ComparisonTable />
      </div>

      {/* Offer */}
      <hr />
      <OfferCard
        cta={
          <CalModalTrigger>
            {(openModal) => (
              <Button
                onClick={openModal}
                size="lg"
                className="glow-cta shadow-theme"
              >
                Book Your Demo
              </Button>
            )}
          </CalModalTrigger>
        }
      />

      {/* Testimonials */}
      <hr />
      <Testimonials
        heading="Trusted by Production Teams"
        testimonials={testimonials}
      />

      {/* Demo Form */}
      <hr />
      <DemoForm />

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
