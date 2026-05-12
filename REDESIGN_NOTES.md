# Lumox Redesign Notes

Branch: `redesign/dark-scroll-story-lumox`

## JSON-LD Runtime Error

The reported runtime error was:

`TypeError: undefined is not an object (evaluating 'r["@context"].toLowerCase')`

The likely cause was JSON-LD/schema rendering code assuming every schema entry was a valid object with a string-like `@context`. The site now uses `components/seo/JsonLd.tsx`, which normalizes schema input before rendering.

Fix summary:

- Accepts a single schema object or an array of schema objects.
- Filters out `null`, `undefined`, arrays, and non-object values.
- Skips schema objects missing `@type`.
- Adds the safe default `@context` value `https://schema.org` when missing.
- Deduplicates identical JSON-LD payloads.
- Uses `JSON.stringify` with `<` escaped before rendering server-side scripts.
- Includes a code comment explaining why malformed schema must not crash rendering.

## Dark Mode Design System

The site is now dark by default from the first server render:

- `html` renders with `class="dark"`.
- Root CSS tokens are dark-first.
- Body background is near-black with controlled blue/violet/cyan light fields.
- Cards use dark glass, subtle borders, and restrained glow.
- Navigation, mobile sheet, footer, buttons, inputs, badges, dialogs, and tabs were updated for dark surfaces.
- The old theme toggle was removed from navigation to avoid user-stored light mode causing a white flash.

## Scroll Story

The main interaction is the sticky section titled “From scattered tools to intelligent systems”.

Stages:

- Discover: maps the business problem and surrounding systems.
- Design: aligns interface, user journey, and architecture.
- Build: activates nodes around websites, apps, automations, and AI workflows.
- Launch: resolves the system into a CTA-style light beam.

Framer Motion features used:

- `useScroll`
- `useTransform`
- `useSpring`
- `useMotionValueEvent`
- Sticky scroll tracking
- Parallax grid motion
- Scroll-linked object scale and rotation
- Scroll-linked progress line
- Stage-aware text panel movement
- Reduced motion fallback with static content cards

## SEO Improvements

- Homepage keeps one H1 and clear H2 structure.
- Important text remains real HTML, not canvas or image text.
- Root metadata uses:
  - Title: `Lumox Technologies | Websites, AI Tools & Digital Solutions`
  - Description: `Lumox Technologies builds practical websites, web applications, AI-powered tools, and automation systems for businesses in Canberra and across Australia.`
  - Canonical: `https://lumoxtech.com.au`
- Open Graph and Twitter metadata remain configured.
- JSON-LD now includes `Organization`, `WebSite`, and `ProfessionalService`.
- Canberra/Australia relevance was added naturally without keyword stuffing.
- `robots.txt` remains present.
- `sitemap.xml` last modified dates were updated to `2026-05-12`.

## Performance Considerations

- No heavy 3D library was added.
- The central object is built with CSS and Framer Motion transforms.
- Animations prefer transform and opacity.
- Static export settings remain unchanged.
- Hero text renders as HTML immediately and is not blocked by the animated visual.
- `prefers-reduced-motion` users receive static or simplified animations.

## Build And Validation

- `npm install`: failed inside npm Arborist with `Cannot read properties of null (reading 'matches')`. The repository is pnpm-managed and has a pnpm lockfile.
- `npm run lint`: passed.
- `npm run typecheck`: passed after clearing stale generated `.next/types`.
- `npm run build`: passed. Next static export generated all app routes successfully.
- Browser preview: checked desktop and mobile at `http://localhost:3001`; homepage renders dark, has one H1, emits three JSON-LD scripts, and the mobile menu opens with an accessible hidden dialog title.

## Remaining TODOs

- Replace `FITPLUS_URL = "#"` in `components/sections/FitPlus.tsx` when the live FitPlus URL is available.
