"use client";

import { useRouter } from "next/navigation";
import {
  List,
  CalendarDays,
  CircleDollarSign,
  LayoutGrid,
  Video,
  BookOpen,
} from "lucide-react";
import { FeatureTicker } from "~/components/FeatureTicker";
import { FadeIn } from "~/components/FadeIn";
import { Navbar, Footer } from "~/components/layout";

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

const teamSizes = [
  { value: "", label: "Select your team size…" },
  { value: "1", label: "Just me" },
  { value: "2-3", label: "2–3 people" },
  { value: "4-5", label: "4–5 people" },
  { value: "6-10", label: "6–10 people" },
  { value: "11-20", label: "11–20 people" },
  { value: "20+", label: "20+ people" },
];

const TEAM_THRESHOLD = 3; // index in teamSizes where it tips to /teams

export default function LandingPage() {
  const router = useRouter();

  function handleSelect(value: string) {
    if (!value) return;
    const idx = teamSizes.findIndex((t) => t.value === value);
    if (idx >= TEAM_THRESHOLD) {
      router.push("/teams");
    } else {
      router.push("/solo");
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar
        sticky
        className="bg-neutral-400/80 text-neutral-100 backdrop-blur-sm"
      />

      {/* Hero — single focused CTA */}
      <section className="flex flex-1 items-center px-6 pt-16 pb-12 md:px-16 md:py-32 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-primary-300 mb-4 text-sm font-medium tracking-widest uppercase">
              AI-Powered Pre-Production
            </p>
            <h1>
              Script to Screen.{" "}
              <span className="text-primary-300">Hours, Not Weeks.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-neutral-200">
              Breakdowns, scheduling, budgets, storyboards, and video — one
              platform, fully connected to your screenplay.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mx-auto mt-10 max-w-sm">
              <label
                htmlFor="team-size"
                className="mb-3 block text-sm font-medium text-white"
              >
                How many people are on your production team?
              </label>
              <select
                id="team-size"
                onChange={(e) => handleSelect(e.target.value)}
                defaultValue=""
                className="w-full cursor-pointer rounded-xl border border-gray-400/30 bg-gray-400/30 px-4 py-3.5 text-base text-white transition focus:border-primary-300 focus:ring-2 focus:ring-primary-200 focus:outline-none"
              >
                {teamSizes.map((t) => (
                  <option
                    key={t.value}
                    value={t.value}
                    disabled={!t.value}
                    className="bg-neutral-400 text-white"
                  >
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Feature Ticker */}
      <section>
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
