# Lumox Technologies — Website



## Tech
- Next.js 14 (App Router), TypeScript
- Tailwind CSS + custom tokens (light/dark via `class`)
- shadcn-style components (vendored)
- Framer Motion for subtle motion
- next-seo, JSON-LD
- Contact form via API proxy to Formspree
- Optional Umami analytics

## Quickstart
```bash
pnpm install
cp env.example .env.local
# Set FORMSPREE_FORM_ID
pnpm dev
```

## Build & Run
```bash
pnpm build
pnpm start
```

## Environment
- `NEXT_PUBLIC_SITE_URL` — absolute site URL (e.g. https://lumox.au)
- `FORMSPREE_FORM_ID` — your Formspree form ID
- (optional) `NEXT_PUBLIC_UMAMI_URL`, `NEXT_PUBLIC_UMAMI_WEBSITE_ID`

## Deploy (Vercel)
1. Push to GitHub.
2. Import repo in Vercel.
3. Set Environment Variables (above) in Vercel Project Settings → Environment Variables.
4. Deploy.  
   Vercel will auto-detect Next.js (app router). OG images come from `/og`.

## Sitemap & Robots
- `/sitemap.xml` and `/robots.txt` served via routes under `/app`.

## Testing
```bash
pnpm vitest
```

## License
MIT — see [LICENSE](./LICENSE).
