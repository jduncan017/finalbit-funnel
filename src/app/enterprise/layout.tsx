import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "FinalBit — AI Pre-Production for Teams",
  description:
    "Replace 4+ disconnected tools with one AI-powered platform. Breakdowns, scheduling, budgets, storyboards, and video — all connected to your screenplay.",
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
