import { List, CalendarDays, LayoutGrid } from "lucide-react";
import { FadeIn } from "~/components/FadeIn";
import { Eyebrow } from "~/components/Eyebrow";
import { IconBubble } from "~/components/IconBubble";
import { ProductImage } from "~/components/ProductImage";

const rows = [
  {
    icon: <List />,
    heading: "AI-Powered Breakdowns",
    description:
      "Upload your screenplay and get a complete breakdown — characters, locations, props, wardrobe — generated in seconds. No more days of manual tagging.",
    shotAlt:
      "Script breakdown panel showing tagged elements, character list, and location summary",
    image: "/product/script.png",
  },
  {
    icon: <CalendarDays />,
    heading: "Schedule & Budget",
    description:
      "AI generates your shooting schedule and production budget directly from the breakdown. Know your numbers before you commit a single dollar.",
    shotAlt:
      "Calendar view with color-coded shooting days, alongside a budget summary with line items",
    image: "/product/budgeting-3.png",
  },
  {
    icon: <LayoutGrid />,
    heading: "Storyboard & Video",
    description:
      "Turn scenes into AI-generated storyboard frames and video clips. Visualize your film before you shoot a single frame.",
    shotAlt:
      "Storyboard grid with AI-generated frames and a video preview player",
    image: "/product/video-editor.png",
  },
];

export function ValueProps() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <Eyebrow className="mb-3 text-center">Features</Eyebrow>
          <h2 className="mb-24 text-center">
            Everything You Need, One Platform
          </h2>
        </FadeIn>
      </div>
      <div className="mx-auto max-w-[1200px] space-y-40">
        {rows.map((row, i) => {
          const imageOnRight = i % 2 === 0;
          return (
            <FadeIn key={row.heading} delay={i * 100}>
              <div
                className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${
                  !imageOnRight ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Copy */}
                <div className="flex max-w-[480px] flex-1 flex-col items-start gap-4">
                  <div className="Header flex items-center gap-4">
                    <IconBubble size="sm">{row.icon}</IconBubble>
                    <h2>{row.heading}</h2>
                  </div>
                  <p className="text-neutral-200">{row.description}</p>
                </div>

                {/* Product shot */}
                <div className="flex-1">
                  <ProductImage
                    src={row.image}
                    alt={row.shotAlt}
                    direction={imageOnRight ? "right" : "left"}
                  />
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
