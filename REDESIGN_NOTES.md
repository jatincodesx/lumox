# Redesign Notes

Branch: `fix/cinematic-homepage-motion-system`
Base branch: `redesign/lumox-brand-cinematic`

## Empty-Space Issue Found And Fixed

- Found: the homepage wrapper in `app/(site)/page.tsx` used `overflow-hidden`.
- Impact: that ancestor overflow clipping broke `position: sticky` inside the process story. The browser scrolled through the tall story container while the sticky content was positioned off-screen, creating the huge empty black section.
- Fixed: removed homepage-level overflow clipping and changed body horizontal clipping from `overflow-x-hidden` to `overflow-x-clip` in `app/layout.tsx`.
- Also removed the extra proof band between hero and services to tighten the visual rhythm.

## Animation System Changes

- Strengthened `LumoxCore` with scroll-linked near-360-degree rotation, stronger glow, 3D-style transform, rotating rings, and section variants.
- Added `TypingText` for reusable hero typing with reduced-motion behavior.
- Added `OrbitCards` for orbiting/crawlable capability chips and service cards.
- Hero now uses scroll-linked text/core movement, parallax grid motion, a visible central core, and orbiting capability chips on desktop.
- Services now revolve around a central Lumox Core with six clickable service cards.
- Process story now uses a working sticky four-stage scroll sequence with active stage state, progress rail, animated nodes, core rotation, beam scaling, and mobile stacked fallback.
- Existing product, work, why, and contact sections continue the core language through product/dashboard, modules, layers, and CTA beam variants.

## Clickable Fixes

- Service cards are real anchors.
- Work capability cards are real anchors.
- FitPlus product mockup is a real external anchor.
- FitPlus CTA opens the live app with `target="_blank"` and `rel="noopener noreferrer"`.
- Navbar includes `Products` linking to the FitPlus/products section.
- Footer product link now reads `Products by Lumox`.
- CTA buttons remain semantic links.

## FitPlus Product Positioning

- Removed: “A real product focus under the Lumox umbrella.”
- Products section label: `Products by Lumox`.
- FitPlus headline: `FitPlus`.
- New copy positions FitPlus as a Lumox-built fitness and nutrition platform for structured workout planning, meal tracking, progress visibility, and long-term consistency.
- CTA buttons: `View FitPlus` and `Build a Product with Lumox`.
- Live URL: `https://fitplus-app.jatin-a2c.workers.dev`.

## SEO And Accessibility Notes

- Homepage keeps one H1.
- Major sections use H2s and service/product content remains real HTML.
- No important service or product text is only in canvas/SVG.
- Metadata title and description remain:
  - `Lumox Technologies | Websites, AI Tools & Digital Solutions`
  - `Lumox Technologies builds practical websites, web applications, AI-powered tools, and automation systems for businesses in Canberra and across Australia.`
- JSON-LD, sitemap, and robots files were not broken or replaced.
- Clickable-looking cards now use anchors with keyboard focus.
- Motion-heavy areas respect reduced motion.

## Performance Notes

- No Three.js or heavy 3D library was added.
- Motion is CSS/SVG/Framer based and mostly transform, opacity, scale, rotate, and path progress.
- Static export remains configured in `next.config.js`.
- Manual checks found no horizontal overflow on desktop or mobile.

## Build Result

- `npm install`: not needed; `node_modules` was already present.
- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed.

## Manual Preview Result

- Local dev server: `http://localhost:3010/`.
- Desktop hero: headline, CTAs, rotating Lumox Core, and orbit chips visible above the fold.
- Desktop services: six service links present around the Lumox Core.
- Desktop process story: sticky content now pins and animates instead of producing a blank scroll range.
- Mobile hero: headline, subcopy, CTAs, and the Lumox Core are visible in the first viewport with no horizontal overflow.
- FitPlus old copy is absent and external links use safe attributes.

## Remaining TODOs

- Preview the final branch in the real target browser/device mix before merging.
- If the brand kit later provides an SVG logo export, consider replacing PNG logo assets with SVG for sharper scaling.
