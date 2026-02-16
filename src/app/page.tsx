import { Wrapper } from "~/components/Wrapper";

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

export default function ThemeTestPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-6 py-12 text-neutral-400">
      <div className="mx-auto max-w-5xl space-y-16">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Theme Test</h1>
          <p className="mt-2 text-lg text-gray-300">
            Edit <code className="rounded bg-gray-200 px-1.5 py-0.5 text-sm font-mono">src/styles/globals.css</code> to rebrand.
          </p>
        </div>

        {/* Color Swatches */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Color Palette</h2>
          <div className="space-y-6">
            {colorGroups.map((group) => (
              <div key={group.name}>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-300">
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

        {/* Sample Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-lg bg-primary-300 px-6 py-3 font-semibold text-white transition hover:bg-primary-400">
              Primary CTA
            </button>
            <button className="rounded-lg bg-secondary-300 px-6 py-3 font-semibold text-white transition hover:bg-secondary-400">
              Secondary CTA
            </button>
            <button className="rounded-lg bg-tertiary-300 px-6 py-3 font-semibold text-white transition hover:bg-tertiary-400">
              Tertiary CTA
            </button>
            <button className="rounded-lg border-2 border-primary-300 px-6 py-3 font-semibold text-primary-300 transition hover:bg-primary-100">
              Outline
            </button>
            <button className="rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-400 transition hover:bg-gray-300 hover:text-white">
              Muted
            </button>
          </div>
        </section>

        {/* Sample Cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Cards</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-3 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-400">
                Feature
              </div>
              <h3 className="text-lg font-semibold">Card on White</h3>
              <p className="mt-2 text-sm text-gray-300">
                Uses neutral/gray text on a white card background with a primary badge.
              </p>
            </div>
            <div className="rounded-xl bg-primary-400 p-6 text-white shadow-sm">
              <div className="mb-3 inline-block rounded-full bg-primary-200 px-3 py-1 text-sm font-medium text-primary-400">
                Feature
              </div>
              <h3 className="text-lg font-semibold">Card on Primary-400</h3>
              <p className="mt-2 text-sm text-primary-100">
                Light text on a dark primary background for high-contrast sections.
              </p>
            </div>
            <div className="rounded-xl bg-neutral-200 p-6 shadow-sm">
              <div className="mb-3 inline-block rounded-full bg-secondary-100 px-3 py-1 text-sm font-medium text-secondary-400">
                Feature
              </div>
              <h3 className="text-lg font-semibold">Card on Neutral-200</h3>
              <p className="mt-2 text-sm text-gray-300">
                Subtle background using the neutral palette with a secondary accent badge.
              </p>
            </div>
          </div>
        </section>

        {/* Type Scale */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Type Scale (Golden Ratio)</h2>
          <p className="text-sm text-gray-300">
            Swap fonts in <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">src/fonts/index.ts</code>.
            Headings auto-use <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">font-heading</code>.
            Body auto-uses <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">font-body</code>.
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
              <p className="text-base">text-base &middot; 16px — Body copy sits here. This is the default size for paragraphs and general content.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-300">text-sm &middot; 14px — Captions, labels, helper text.</p>
            </div>
            <div>
              <p className="text-xs text-gray-300">text-xs &middot; 12px — Fine print, legal, metadata.</p>
            </div>
          </div>

          {/* Font family comparison */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-300">font-body (Inter)</p>
              <p className="font-body text-lg">The quick brown fox jumps over the lazy dog.</p>
              <p className="font-body mt-2 text-base text-gray-300">Body text for readability. Clean, modern, works at any size.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-300">font-heading</p>
              <h3 className="font-heading text-lg font-bold">The quick brown fox jumps over the lazy dog.</h3>
              <p className="font-heading mt-2 text-base text-gray-300">Heading font for titles. Swap in src/fonts/index.ts.</p>
            </div>
          </div>
        </section>

        {/* Wrapper Component Test */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Wrapper Component</h2>
          <p className="text-sm text-gray-300">
            <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">padding</code>: xs / sm / lg
            &nbsp;&middot;&nbsp;
            <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">rounded</code>: none / xs / sm / md / lg / xl
            &nbsp;&middot;&nbsp;
            <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">as</code>: any HTML tag
            &nbsp;&middot;&nbsp;
            <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">className</code>: bg, gradient, border, etc.
          </p>

          <div className="space-y-4">
            <Wrapper padding="lg" rounded="xl" className="bg-primary-400 text-white">
              <h3 className="text-lg font-semibold">padding=&quot;lg&quot; &middot; rounded=&quot;xl&quot;</h3>
              <p className="mt-1 text-sm text-primary-100">
                Large padding wrapper with xl rounding on a primary-400 bg.
              </p>
            </Wrapper>

            <Wrapper padding="sm" rounded="lg" className="bg-white shadow-sm">
              <h3 className="text-lg font-semibold">padding=&quot;sm&quot; &middot; rounded=&quot;lg&quot;</h3>
              <p className="mt-1 text-sm text-gray-300">
                Small padding wrapper with lg rounding. Card-style on white.
              </p>
            </Wrapper>

            <Wrapper padding="xs" rounded="md" className="border border-gray-200 bg-neutral-100">
              <h3 className="text-lg font-semibold">padding=&quot;xs&quot; &middot; rounded=&quot;md&quot;</h3>
              <p className="mt-1 text-sm text-gray-300">
                XS padding, md rounding. Tight wrapper with a border via className.
              </p>
            </Wrapper>

            <Wrapper padding="lg" rounded="xl" className="bg-gradient-to-r from-primary-400 to-secondary-400 text-white">
              <h3 className="text-lg font-semibold">Gradient via className</h3>
              <p className="mt-1 text-sm text-primary-100">
                Large padding with a gradient background passed through className.
              </p>
            </Wrapper>

            <Wrapper as="section" padding="sm" rounded="lg" className="bg-tertiary-100 border border-tertiary-200">
              <h3 className="text-lg font-semibold text-tertiary-400">as=&quot;section&quot;</h3>
              <p className="mt-1 text-sm text-tertiary-300">
                Renders as a &lt;section&gt; tag for semantic HTML.
              </p>
            </Wrapper>
          </div>
        </section>
      </div>

      {/* Footer spacer */}
      <div className="mt-16" />
    </main>
  );
}
