import Link from "next/link";
import {
  List,
  CalendarDays,
  CircleDollarSign,
  LayoutGrid,
  Video,
  BookOpen,
} from "lucide-react";
import { Button } from "~/components/Button";
import { FeatureTicker } from "~/components/FeatureTicker";
import { Navbar, Footer } from "~/components/layout";
import { Hero } from "~/components/sections";

const features = [
  {
    icon: <List />,
    label: "Breakdown",
    description: "AI-powered script analysis",
  },
  {
    icon: <CalendarDays />,
    label: "Scheduling",
    description: "Smart shoot planning",
  },
  {
    icon: <CircleDollarSign />,
    label: "Budgeting",
    description: "Accurate cost estimates",
  },
  {
    icon: <LayoutGrid />,
    label: "Storyboard",
    description: "Visual scene layouts",
  },
  { icon: <Video />, label: "Video", description: "AI-generated previews" },
  {
    icon: <BookOpen />,
    label: "Story Dev",
    description: "Script analysis & notes",
  },
];

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar
        sticky
        cta={
          <Button as="link" href="/teams">
            Book a Demo
          </Button>
        }
        className="bg-neutral-400/80 text-neutral-100 backdrop-blur-sm"
      >
        <Link
          href="#features"
          className="font-medium text-neutral-200 transition hover:text-white"
        >
          Features
        </Link>
        <Link
          href="/solo"
          className="font-medium text-neutral-200 transition hover:text-white"
        >
          Pricing
        </Link>
      </Navbar>

      {/* Hero */}
      <Hero
        tagline="AI-Powered Pre-Production"
        heading={
          <>
            Script to Screen.{" "}
            <span className="text-primary-300">Hours, Not Weeks.</span>
          </>
        }
        description="Breakdowns, scheduling, budgets, storyboards, and video — one platform, fully connected to your screenplay."
        cta={
          <>
            <Button as="link" href="/solo" size="lg" variant="outline">
              I&apos;m a Filmmaker
            </Button>
            <Button as="link" href="/teams" size="lg">
              I Run a Studio
            </Button>
          </>
        }
      />

      {/* Feature Ticker */}
      <section id="features">
        <div className="mx-auto max-w-[1280px]">
          <FeatureTicker features={features} />
        </div>
      </section>

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
