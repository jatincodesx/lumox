# Copilot Instructions for Lumox Technologies Website

## Project Overview
- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS (custom tokens, light/dark via `class`), shadcn-style components (vendored in `components/ui/`)
- **Motion:** Framer Motion for subtle UI animations
- **SEO:** next-seo and JSON-LD integration
- **Forms:** Contact form API proxy to Formspree
- **Analytics:** Optional Umami integration

## Key Architecture & Patterns
- **App Structure:**
  - Main pages in `app/(site)/`, legal pages in `app/(legal)/`, API routes in `app/api/`
  - Shared layout in `app/layout.tsx`
  - UI components in `components/` and `components/ui/`
- **Routing:** Uses Next.js App Router conventions. Route files are typically named `page.tsx` (for pages) and `route.ts` (for API endpoints).
- **SEO:** Centralized config in `next-seo.config.ts` and helpers in `lib/seo.ts`.
- **Forms:** `components/ContactForm.tsx` posts to `/api/contact/route.ts`, which proxies to Formspree using the `FORMSPREE_FORM_ID` env variable.
- **Environment Variables:**
  - See `env.example` for required/optional variables. Always copy to `.env.local` for local dev.
- **Sitemap/Robots:** Served via custom routes in `app/sitemap/route.ts` and `app/robots/route.ts`.

## Developer Workflows
- **Install:** `pnpm install`
- **Dev:** `pnpm dev`
- **Build:** `pnpm build`
- **Start:** `pnpm start`
- **Test:** `pnpm vitest` (see `tests/` and `vitest.config.ts`)
- **Env Setup:** `cp env.example .env.local` and set required variables
- **Deploy:** Push to GitHub, import to Vercel, set env vars, deploy

## Conventions & Patterns
- **Component Style:** Prefer functional components, colocate styles with components, use Tailwind utility classes.
- **UI Library:** Use vendored shadcn components from `components/ui/` for consistency.
- **TypeScript:** Strict typing throughout; check `tsconfig.json` for settings.
- **Motion:** Use Framer Motion for subtle effects, not for major transitions.
- **SEO:** Use helpers from `lib/seo.ts` and config from `next-seo.config.ts`.
- **Testing:** Use Vitest for unit tests; see `tests/utils.test.ts` for examples.

## Integration Points
- **Formspree:** API proxy in `app/api/contact/route.ts`.
- **Umami Analytics:** Optional, controlled via env vars.
- **Vercel:** Auto-detects Next.js; OG images from `/og` route.

## Examples
- **Add a new page:** Create `page.tsx` in the appropriate subfolder under `app/(site)/` or `app/(legal)/`.
- **Add a new API route:** Create `route.ts` in `app/api/[route]/`.
- **Add a new UI component:** Place in `components/` or `components/ui/` and use Tailwind for styling.

---
_If any conventions or workflows are unclear, please ask for clarification or examples from the codebase._
