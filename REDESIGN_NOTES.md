# Lumox Redesign Notes

Branch: `redesign/dark-scroll-story-lumox-v2`

## Brand Assets Selected

- Navbar and footer mark: `public/brand/lumox-logo-white-512.png`
- JSON-LD logo: `public/brand/lumox-logo-white-1024.png`
- Favicons: `public/favicon-16x16.png`, `public/favicon-32x32.png`
- Apple touch icon: `public/apple-touch-icon.png`
- Open Graph image: `public/og.png`

The selected UI logo is the transparent white mark from the brand kit. It was chosen because it has strong contrast on the dark site background, avoids white boxes, and remains crisp at navbar/footer sizes. SVG would be preferred, but the audited brand kit did not include SVG logo files.

## Color System

- Background: near-black `#020617` equivalent through `--lumox-bg`.
- Deep navy: `#001A37` equivalent through the navy brand asset and dark surface tokens.
- Primary blue: brand blue close to `#0057B8`.
- Accent: restrained cyan-blue for glows, labels, rails, and interactive highlights.
- Text: near-white primary text with cool secondary grey.
- Cards: dark glass surfaces with subtle blue/white borders.

No light page sections were added.

## Scroll Animation System

The homepage now uses a continuous Lumox Core motion language across the full page:

- Global `ScrollOrchestrator` adds a scroll-linked progress rail, moving grid, and page-level blue light field.
- `LumoxCore` is reusable and changes by section variant: hero, services, process, product, modules, layers, and beam.
- Hero uses staggered text entry, scroll-linked core scale/position, and animated grid paths.
- Services uses a sticky core and connected service cards with scroll-aware reveals.
- Scroll Story keeps the original advanced sticky direction but now uses the same Lumox Core visual language.
- FitPlus transforms the core into a product dashboard moment with animated app stats and feature chips.
- Work/Capabilities splits the system into capability modules with staggered cards and scroll-linked rails.
- Why Lumox resolves into Strategy, Design, Build, Improve layers around the core.
- Contact resolves the system into a focused light beam and final CTA.

Framer Motion features used across the site include `useScroll`, `useTransform`, `useSpring`, `useMotionValueEvent`, sticky sections, parallax layers, scroll-linked scale/rotation/translation, staggered content reveals, and reduced-motion fallbacks.

## Alignment Fixes

- Added shared `site-container` sizing at `max-w-7xl`.
- Replaced mixed container widths with one container system.
- Standardized section padding and heading/copy widths.
- Normalized card heights with `auto-rows-fr` and full-height cards.
- Tightened hero height so the next section is hinted instead of leaving a dead scroll zone.
- Kept desktop text/object layouts aligned to the same left and right edges.
- Simplified mobile behavior so objects stack above text instead of forcing wrapped desktop choreography.
- Preserved `overflow-x-hidden` and avoided fixed-width animated objects that would create mobile horizontal scroll.

## SEO And Accessibility

- One H1 remains on the homepage.
- Major service/product/process copy remains real HTML text.
- H2/H3 hierarchy is preserved.
- Navbar and footer logos use `alt="Lumox Technologies logo"`.
- Metadata includes favicon, Apple touch icon, Open Graph, Twitter, and JSON-LD logo references.
- JSON-LD rendering remains handled by the existing safe `JsonLd` component.
- Buttons and links remain semantic keyboard-accessible controls.
- Motion-heavy components use `useReducedMotion` fallbacks.
- The mobile menu keeps the Radix dialog title for screen readers.

## Performance Notes

- No Three.js or heavy 3D dependency was added.
- The core visual is CSS, SVG paths, and Framer Motion transforms.
- Animations prefer transform, opacity, scale, rotate, and filter.
- The Open Graph image was resized to `1200x630`.
- Static export remains configured through `next.config.js`.

## Build Result

- `npm install`: not run because `node_modules` was already present.
- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed. Next generated all static app routes successfully.

Browser preview notes:

- Desktop preview at `http://localhost:3020/` verified dark hero rendering, navbar logo visibility, real HTML content, and no visible white sections in the checked viewport.
- The in-app browser later blocked new localhost navigation attempts due to its local browser policy, so final mobile visual verification could not be completed there.

## Remaining TODOs

- Replace `FITPLUS_URL = "#"` in `components/sections/FitPlus.tsx` when the live FitPlus URL is available.
- If a clean SVG logo export is later added to the brand kit, replace the PNG nav/footer mark with SVG.
