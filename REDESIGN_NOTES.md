# Lumox Technologies Redesign Notes

Branch: `redesign/framer-premium-lumox-site`

## What Changed

- Redesigned the homepage into a premium technology consultancy and product studio layout.
- Added a dedicated FitPlus page at `/fitplus` while keeping FitPlus featured on the homepage.
- Updated navigation, footer, services, work, about, and contact pages for a consistent site experience.
- Reworked the visual direction around strong hierarchy, bento-style cards, restrained gradients, and clear conversion paths.
- Kept contact handling as `mailto:` because the project does not include a safe backend form flow.

## Animation Approach

- Framer Motion was already installed in the project and is used through reusable client components:
  - `AnimatedSection`
  - `FadeIn`
  - `StaggerContainer`
  - `MotionCard`
  - `MotionButton`
  - `HeroSystemVisual`
- Animation is limited to opacity, transform, scale, and subtle motion effects.
- Reduced-motion preferences are respected through Framer Motion hooks and global CSS.
- Page content remains static/server-rendered where practical for SEO and export safety.

## SEO Improvements

- Updated homepage metadata description for Canberra and Australia relevance.
- Added keyword themes through Next metadata.
- Added JSON-LD for Organization, WebSite, ProfessionalService, and core Service offerings.
- Added canonical metadata for main route pages.
- Added `/fitplus` to the sitemap and refreshed sitemap dates.
- Preserved semantic `header`, `main`, `section`, `nav`, and `footer` structure through the app shell and pages.

## Deployment Considerations

- The app remains a Next.js static export with `output: 'export'`.
- No server-only route handlers or runtime-only features were added.
- The GitHub Actions workflow still deploys only from `main`.
- This branch has not been merged into `main` and has not triggered deployment.

## TODOs

- Replace `FITPLUS_URL = "#"` in `lib/site-content.ts` with the live FitPlus URL when available.

## Build and Test Results

- `npm install --package-lock=false`: failed with npm internal error `Cannot read properties of null (reading 'matches')`.
- `pnpm install --frozen-lockfile --force`: passed.
- `pnpm lint`: passed with no ESLint warnings or errors.
- `pnpm typecheck`: passed.
- `pnpm build`: passed and generated static routes, including `/fitplus`.
- `npm run lint`: passed with no ESLint warnings or errors.
- `npm run typecheck`: passed.
- `npm run build`: passed and generated static routes, including `/fitplus`.
- Browser smoke test: passed on desktop and mobile-width viewport with no console errors found.
