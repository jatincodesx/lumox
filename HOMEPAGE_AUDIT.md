# Homepage Audit

Branch audited: `fix/cinematic-homepage-motion-system`
Base redesign branch: `redesign/lumox-brand-cinematic`

## Summary

The redesign had the right dark cinematic direction, but the homepage was visually weak because the Lumox Core was treated like a section illustration instead of the page spine. The largest functional issue was that sticky scroll content was inside an overflow-clipped homepage wrapper, so the process story could scroll through a tall container while the intended sticky content sat off-screen.

## Broken Or Weak Areas

- Hero spacing: the hero used a split layout with the text and object separated. On mobile the core was pushed too low, leaving the first viewport feeling empty below the headline.
- Empty vertical gaps: `app/(site)/page.tsx` used `overflow-hidden` on the homepage wrapper. That broke `position: sticky` in the process story and created a long blank-feeling scroll range. The extra proof band between hero and services also weakened the page rhythm.
- Alignment: section widths were mostly consistent, but the hero, services, and scroll story did not share one visual center. Cards sat near the core without a strong orbit relationship.
- Navigation: nav links were semantic, but the FitPlus nav label was too narrow for the desired site structure. `Products` is clearer and leaves room for future Lumox products.
- Logo contrast: the white Lumox mark on the dark glass nav is visible. The current public brand assets are usable; no black-on-black logo issue was found.
- Services section: service cards looked interactive through hover/motion treatment but were not links. The layout did not make the core feel central enough.
- Clickable-looking cards: services and work capability cards had hover affordances without destinations. FitPlus visual mockup also looked like a product card and needed to be a real link.
- Scroll story animation: the section declared a sticky scroll story, but sticky behavior was blocked by overflow clipping. The 420vh height made the failure read as empty space.
- FitPlus wording: “A real product focus under the Lumox umbrella” sounded casual and undercut product credibility.
- FitPlus layout: the product mockup was visually useful, but the section needed a stronger “Products by Lumox” framing and safe external links.
- Mobile layout: the first pass pushed the core below the first viewport. Mobile needed a compact hero with the core visible without overlapping CTAs.
- Tablet layout: the section stack is acceptable, but animation needs to remain transform/opacity based to avoid tablet performance problems.
- Desktop layout: the desktop page needed a single cinematic object driving hero, services, process, product, work, why, and contact.
- SEO structure: metadata was already correct. Important homepage text remained HTML, but care was needed not to move service/product copy into canvas/SVG.
- Accessibility: main CTAs were semantic links. Fake-card interactions needed replacement with real anchors and visible focus.
- Framer Motion usage: existing usage was present but too subtle. The page needed deeper `useScroll`, `useTransform`, `useSpring`, `AnimatePresence`, `useMotionValueEvent`, sticky, and reduced-motion patterns.
- Performance risk: no heavy 3D runtime is justified. The page should stay CSS/SVG/Framer based with transform and opacity animations.

## Required Changes

- Remove ancestor overflow clipping that breaks sticky scroll sections.
- Remove the extra proof band between hero and services.
- Make the Lumox Core larger, scroll-linked, and almost full-rotation across key scroll ranges.
- Add orbiting capability chips and clickable service cards around the core.
- Rebuild the process section as a working four-stage sticky story: Discover, Design, Build, Launch.
- Keep mobile simpler: stacked process stages and a compact hero with the core visible in the first viewport.
- Make service cards, work capability cards, FitPlus product card, FitPlus CTA, nav links, footer links, and primary CTAs semantic links.
- Replace FitPlus copy with serious product positioning and link to `https://fitplus-app.jatin-a2c.workers.dev`.
- Preserve one H1, crawlable H2/H3 content, crawlable service copy, metadata, JSON-LD, sitemap, and robots files.

## Files Affected

- `app/(site)/page.tsx`: homepage section order, removed overflow clipping, removed proof spacer band.
- `app/layout.tsx`: changed body horizontal clipping to `overflow-x-clip` so sticky descendants work.
- `components/sections/Hero.tsx`: compacted hero, added typing component, orbit chips, stronger core placement, mobile correction.
- `components/sections/Services.tsx`: rebuilt services around central Lumox Core and clickable service anchors.
- `components/animations/LumoxCore.tsx`: strengthened the core object, glow, 3D illusion, and scroll-linked rotation.
- `components/animations/OrbitCards.tsx`: added reusable orbit card/chip component with real anchors.
- `components/animations/TypingText.tsx`: added reusable typing animation with reduced-motion behavior.
- `components/animations/ScrollStory.tsx`: rebuilt sticky four-stage process story and mobile fallback.
- `components/sections/FitPlus.tsx`: revised product copy, CTA text, external link safety, clickable product mockup.
- `components/sections/WorkCapabilities.tsx`: made capability cards real links.
- `lib/seo.ts`: changed nav label to `Products`.
- `components/Footer.tsx`: clarified product footer link wording.
