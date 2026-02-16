# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Next.js + Turbopack)
- `npm run build` — Production build
- `npm run check` — Lint + typecheck in one command
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run typecheck` — TypeScript (`tsc --noEmit`)
- `npm run format:check` / `npm run format:write` — Prettier

## Architecture

This is a **reusable website/marketing funnel template** built on the T3 stack (Next.js 15, Tailwind CSS v4, TypeScript). The intent is to clone this repo per-project and customize the theme to rebrand.

### Theming system

All brand customization lives in two files:

- **`src/styles/globals.css`** — Colors and type scale defined in Tailwind v4's `@theme` block. Colors follow a `{name}-100` through `{name}-400` scale (100=lightest, 400=darkest) across five palettes: Primary, Secondary, Tertiary, Neutral, Gray. The type scale uses a golden ratio (×1.618) from a 16px base.
- **`src/fonts/index.ts`** — Font configuration using `next/font`. Exports `bodyFont` and `headingFont` as CSS variable providers. Swap imports here to rebrand typography (supports Google Fonts and local `.woff2`).

Base layer rules in `globals.css` auto-apply `font-body` to `body` and `font-heading` to `h1`–`h6`.

### Components

- **`src/components/Wrapper.tsx`** — Core layout primitive. Handles responsive padding (`xs`/`sm`/`lg`), border-radius (`xs` through `xl`), semantic HTML via `as` prop, and background/border/gradient via `className` passthrough. Children own all content styling.

### Path alias

`~/` maps to `./src/` (configured in `tsconfig.json`).

### Environment variables

Validated at build time via `@t3-oss/env-nextjs` in `src/env.js`. Add new env vars there with Zod schemas. Use `SKIP_ENV_VALIDATION=1` to bypass during Docker builds.

### Code style

- Use `type` imports (`import { type Foo }`) — enforced by ESLint
- Unused vars prefixed with `_` are allowed
- Prettier with `prettier-plugin-tailwindcss` for class sorting
