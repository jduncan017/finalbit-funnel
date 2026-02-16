import Link from "next/link";
import { type Metadata } from "next";
import { Users, Sparkles, RefreshCcw, ArrowRight } from "lucide-react";
import { Button } from "~/components/Button";
import { IconBubble } from "~/components/IconBubble";
import { Navbar, Footer } from "~/components/layout";
import {
  Hero,
  FeatureGrid,
  ComparisonTable,
  OfferCard,
  Testimonials,
  DemoForm,
} from "~/components/sections";

export const metadata: Metadata = {
  title: "FinalBit for Teams — Replace Your Entire Tool Stack",
  description:
    "One subscription replaces 4+ tools. AI-powered breakdowns, scheduling, budgeting, storyboards, and video — built for production teams.",
};

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
          <Button as="a" href="#demo">
            Book a Demo
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
        cta={
          <Button as="a" href="#demo" size="lg">
            Book a Demo
          </Button>
        }
      />

      {/* Pain Points — Before / After */}
      <hr />
      <section className="px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center">
            Stop Juggling Disconnected Tools
          </h2>
          <div className="space-y-4">
            {painPoints.map((p) => (
              <div
                key={p.before}
                className="flex items-center gap-4 rounded-[12px] border border-gray-400/30 bg-gray-400/20 px-5 py-4"
              >
                <span className="flex-1 text-sm text-neutral-300 line-through">
                  {p.before}
                </span>
                <ArrowRight className="text-primary-300 h-5 w-5 shrink-0" />
                <span className="text-secondary-300 flex-1 text-sm font-medium">
                  {p.after}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <hr />
      <div id="features">
        <FeatureGrid
          heading="Built for Production Teams"
          subheading="Everything your crew needs, connected in one workspace."
          features={features}
        />
      </div>

      {/* Comparison Table */}
      <hr />
      <div id="compare">
        <ComparisonTable />
      </div>

      {/* Offer */}
      <hr />
      <OfferCard />

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
