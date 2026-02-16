import Link from "next/link";
import { Wrapper } from "~/components/Wrapper";
import { Button } from "~/components/Button";
import { Card, Navbar, Hero, Footer } from "~/components/layout";
import { FormInputsDemo } from "./_components/FormInputsDemo";

const colorGroups = [
  {
    name: "Primary",
    shades: [
      { label: "100", bg: "bg-primary-100", text: "text-primary-400" },
      { label: "200", bg: "bg-primary-200", text: "text-primary-400" },
      { label: "300", bg: "bg-primary-300", text: "text-white" },
      { label: "400", bg: "bg-primary-400", text: "text-white" },
    ],
  },
  {
    name: "Secondary",
    shades: [
      { label: "100", bg: "bg-secondary-100", text: "text-secondary-400" },
      { label: "200", bg: "bg-secondary-200", text: "text-secondary-400" },
      { label: "300", bg: "bg-secondary-300", text: "text-white" },
      { label: "400", bg: "bg-secondary-400", text: "text-white" },
    ],
  },
  {
    name: "Tertiary",
    shades: [
      { label: "100", bg: "bg-tertiary-100", text: "text-tertiary-400" },
      { label: "200", bg: "bg-tertiary-200", text: "text-tertiary-400" },
      { label: "300", bg: "bg-tertiary-300", text: "text-white" },
      { label: "400", bg: "bg-tertiary-400", text: "text-white" },
    ],
  },
  {
    name: "Neutral",
    shades: [
      { label: "100", bg: "bg-neutral-100", text: "text-neutral-400" },
      { label: "200", bg: "bg-neutral-200", text: "text-neutral-400" },
      { label: "300", bg: "bg-neutral-300", text: "text-white" },
      { label: "400", bg: "bg-neutral-400", text: "text-white" },
    ],
  },
  {
    name: "Gray",
    shades: [
      { label: "100", bg: "bg-gray-100", text: "text-gray-400" },
      { label: "200", bg: "bg-gray-200", text: "text-gray-400" },
      { label: "300", bg: "bg-gray-300", text: "text-white" },
      { label: "400", bg: "bg-gray-400", text: "text-white" },
    ],
  },
];

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

export default function ThemeTestPage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-400">
      {/* Navbar Demo */}
      <section className="mx-auto max-w-5xl space-y-6 px-6 pt-12">
        <h2 className="text-2xl font-semibold">Navbar</h2>
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <Navbar cta={<Button size="sm">Get Started</Button>}>
            <Link
              href="#features"
              className="hover:text-primary-300 text-base font-medium text-neutral-400 transition"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="hover:text-primary-300 text-base font-medium text-neutral-400 transition"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="hover:text-primary-300 text-base font-medium text-neutral-400 transition"
            >
              About
            </Link>
          </Navbar>
        </div>
        <div className="bg-primary-400 overflow-hidden rounded-xl shadow-sm">
          <Navbar
            cta={
              <Button variant="secondary" size="sm">
                Get Started
              </Button>
            }
            className="text-white"
          >
            <Link
              href="#features"
              className="text-primary-100 text-base font-medium transition hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-primary-100 text-base font-medium transition hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-primary-100 text-base font-medium transition hover:text-white"
            >
              About
            </Link>
          </Navbar>
        </div>
      </section>

      {/* Hero Demo */}
      <section className="mx-auto max-w-5xl space-y-6 px-6 pt-16">
        <h2 className="text-2xl font-semibold">Hero</h2>
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <Hero
            heading="Build Stunning Websites Fast"
            subheading="A reusable marketing template with theming baked in. Clone, rebrand, ship."
            actions={
              <>
                <Button size="lg">Start Building</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </>
            }
          />
        </div>
        <div className="bg-primary-400 overflow-hidden rounded-xl shadow-sm">
          <Hero
            heading="Left-Aligned Hero"
            subheading="Great for product pages with an image on the right side."
            align="left"
            actions={
              <>
                <Button variant="secondary">Get Started</Button>
                <Button variant="ghost">Watch Demo</Button>
              </>
            }
            className="text-white"
          />
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-16 px-6 py-16">
        {/* Color Swatches */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Color Palette</h2>
          <div className="space-y-6">
            {colorGroups.map((group) => (
              <div key={group.name}>
                <h3 className="mb-2 text-sm font-medium tracking-wider text-gray-300 uppercase">
                  {group.name}
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {group.shades.map((shade) => (
                    <div
                      key={shade.label}
                      className={`${shade.bg} ${shade.text} flex h-24 items-end rounded-lg p-3 text-sm font-medium shadow-sm`}
                    >
                      {group.name}-{shade.label}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Buttons</h2>

          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wider text-gray-300 uppercase">
              Variants
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary CTA</Button>
              <Button variant="secondary">Secondary CTA</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wider text-gray-300 uppercase">
              Sizes
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wider text-gray-300 uppercase">
              Rounding
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button rounded="none">None</Button>
              <Button rounded="sm">Small</Button>
              <Button rounded="md">Medium</Button>
              <Button rounded="lg">Large</Button>
              <Button rounded="xl">XL</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wider text-gray-300 uppercase">
              States
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Button variant="outline" disabled>
                Outline Disabled
              </Button>
              <Button variant="secondary" loading>
                Secondary Loading
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wider text-gray-300 uppercase">
              Polymorphic
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button as="a" href="#buttons">
                Anchor Button
              </Button>
              <Button as="link" href="#buttons" variant="secondary">
                Next Link Button
              </Button>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Cards</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <Card
              badge="Feature"
              heading="Card on White"
              description="Uses neutral/gray text on a white card background with a primary badge."
              className="bg-white"
            >
              <></>
            </Card>
            <Card
              badge="Feature"
              heading="Card on Primary-400"
              className="bg-primary-400 [&_.badge]:bg-primary-200 [&_.badge]:text-primary-400 text-white"
            >
              <p className="text-primary-100 mt-2 text-sm">
                Light text on a dark primary background for high-contrast
                sections.
              </p>
            </Card>
            <Card
              badge="Feature"
              heading="Card on Neutral-200"
              description="Subtle background using the neutral palette with a secondary accent badge."
              className="bg-neutral-200"
            >
              <></>
            </Card>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card
              heading="Card with Action"
              description="Cards can include an action slot for buttons or links."
              action={<Button size="sm">Learn More</Button>}
              className="bg-white"
            >
              <></>
            </Card>
            <Card
              heading="Custom Rounding"
              description="Override the default xl rounding."
              rounded="sm"
              className="bg-white"
            >
              <></>
            </Card>
          </div>
        </section>

        {/* Type Scale */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Type Scale (Golden Ratio)</h2>
          <p className="text-sm text-gray-300">
            Swap fonts in{" "}
            <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-sm">
              src/fonts/index.ts
            </code>
            . Headings auto-use{" "}
            <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-sm">
              font-heading
            </code>
            . Body auto-uses{" "}
            <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-sm">
              font-body
            </code>
            .
          </p>
          <div className="space-y-6 rounded-xl bg-white p-8 shadow-sm">
            <div className="border-b border-gray-200 pb-4">
              <h1 className="text-3xl font-bold">text-3xl &middot; ~110px</h1>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-bold">text-2xl &middot; ~68px</h2>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold">text-xl &middot; ~42px</h3>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-semibold">text-lg &middot; ~26px</h4>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <p className="text-base">
                text-base &middot; 16px — Body copy sits here. This is the
                default size for paragraphs and general content.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-300">
                text-sm &middot; 14px — Captions, labels, helper text.
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-300">
                text-xs &middot; 12px — Fine print, legal, metadata.
              </p>
            </div>
          </div>

          {/* Font family comparison */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="mb-2 text-xs font-medium tracking-wider text-gray-300 uppercase">
                font-body (Inter)
              </p>
              <p className="font-body text-lg">
                The quick brown fox jumps over the lazy dog.
              </p>
              <p className="font-body mt-2 text-base text-gray-300">
                Body text for readability. Clean, modern, works at any size.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="mb-2 text-xs font-medium tracking-wider text-gray-300 uppercase">
                font-heading
              </p>
              <h3 className="font-heading text-lg font-bold">
                The quick brown fox jumps over the lazy dog.
              </h3>
              <p className="font-heading mt-2 text-base text-gray-300">
                Heading font for titles. Swap in src/fonts/index.ts.
              </p>
            </div>
          </div>
        </section>

        {/* Wrapper Component Test */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Wrapper Component</h2>
          <p className="text-sm text-gray-300">
            <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">
              padding
            </code>
            : xs / sm / lg &nbsp;&middot;&nbsp;
            <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">
              rounded
            </code>
            : none / xs / sm / md / lg / xl &nbsp;&middot;&nbsp;
            <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">
              as
            </code>
            : any HTML tag &nbsp;&middot;&nbsp;
            <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">
              className
            </code>
            : bg, gradient, border, etc.
          </p>

          <div className="space-y-4">
            <Wrapper
              padding="lg"
              rounded="xl"
              className="bg-primary-400 text-white"
            >
              <h3 className="text-lg font-semibold">
                padding=&quot;lg&quot; &middot; rounded=&quot;xl&quot;
              </h3>
              <p className="text-primary-100 mt-1 text-sm">
                Large padding wrapper with xl rounding on a primary-400 bg.
              </p>
            </Wrapper>

            <Wrapper padding="sm" rounded="lg" className="bg-white shadow-sm">
              <h3 className="text-lg font-semibold">
                padding=&quot;sm&quot; &middot; rounded=&quot;lg&quot;
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Small padding wrapper with lg rounding. Card-style on white.
              </p>
            </Wrapper>

            <Wrapper
              padding="xs"
              rounded="md"
              className="border border-gray-200 bg-neutral-100"
            >
              <h3 className="text-lg font-semibold">
                padding=&quot;xs&quot; &middot; rounded=&quot;md&quot;
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                XS padding, md rounding. Tight wrapper with a border via
                className.
              </p>
            </Wrapper>

            <Wrapper
              padding="lg"
              rounded="xl"
              className="from-primary-400 to-secondary-400 bg-gradient-to-r text-white"
            >
              <h3 className="text-lg font-semibold">Gradient via className</h3>
              <p className="text-primary-100 mt-1 text-sm">
                Large padding with a gradient background passed through
                className.
              </p>
            </Wrapper>

            <Wrapper
              as="section"
              padding="sm"
              rounded="lg"
              className="bg-tertiary-100 border-tertiary-200 border"
            >
              <h3 className="text-tertiary-400 text-lg font-semibold">
                as=&quot;section&quot;
              </h3>
              <p className="text-tertiary-300 mt-1 text-sm">
                Renders as a &lt;section&gt; tag for semantic HTML.
              </p>
            </Wrapper>
          </div>
        </section>

        {/* Form Inputs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Form Inputs</h2>
          <p className="text-sm text-gray-300">
            Accessible, rebrandable form components. Normal states, error
            states, and disabled states.
          </p>
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <FormInputsDemo />
          </div>
        </section>
      </div>

      {/* Footer Demo */}
      <section className="mx-auto max-w-5xl space-y-6 px-6">
        <h2 className="text-2xl font-semibold">Footer</h2>
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <Footer
            columns={footerColumns}
            logo={
              <span className="text-primary-400 text-lg font-bold">Brand</span>
            }
            copyright="&copy; 2026 Brand. All rights reserved."
          />
        </div>
      </section>

      {/* Footer spacer */}
      <div className="mt-16" />
    </main>
  );
}
