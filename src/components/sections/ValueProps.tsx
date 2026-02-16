import { List, CalendarDays, LayoutGrid } from "lucide-react";
import { FadeIn } from "~/components/FadeIn";
import { IconBubble } from "~/components/IconBubble";
import { ProductShot } from "~/components/ProductShot";

const rows = [
  {
    icon: <List />,
    heading: "AI-Powered Breakdowns",
    description:
      "Upload your screenplay and get a complete breakdown — characters, locations, props, wardrobe — generated in seconds. No more days of manual tagging.",
    shot: "Script breakdown panel showing tagged elements, character list, and location summary",
  },
  {
    icon: <CalendarDays />,
    heading: "Schedule & Budget",
    description:
      "AI generates your shooting schedule and production budget directly from the breakdown. Know your numbers before you commit a single dollar.",
    shot: "Calendar view with color-coded shooting days, alongside a budget summary with line items",
  },
  {
    icon: <LayoutGrid />,
    heading: "Storyboard & Video",
    description:
      "Turn scenes into AI-generated storyboard frames and video clips. Visualize your film before you shoot a single frame.",
    shot: "Storyboard grid with AI-generated frames and a video preview player",
  },
];

export function ValueProps() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl space-y-20">
        {rows.map((row, i) => (
          <FadeIn key={row.heading} delay={i * 100}>
            <div
              className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Copy */}
              <div className="flex flex-1 flex-col items-start gap-4">
                <IconBubble size="sm">{row.icon}</IconBubble>
                <h2>{row.heading}</h2>
                <p className="text-neutral-200">{row.description}</p>
              </div>

              {/* Product shot */}
              <div className="flex-1">
                <ProductShot description={row.shot} aspectRatio="4/3" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
