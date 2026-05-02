# Lumox Project Audit

## Stack

- Framework: Next.js 14 App Router.
- Language: TypeScript and React.
- Styling: Tailwind CSS with local design tokens in `styles/globals.css`.
- Package manager: pnpm is preferred because the repository has `pnpm-lock.yaml`. The package metadata pins `pnpm@9.15.9`.

## Install Dependencies

```bash
pnpm install
```

If pnpm is unavailable locally, install it through Corepack:

```bash
corepack enable
corepack prepare pnpm@9.15.9 --activate
pnpm install
```

## Run Locally

```bash
pnpm dev
```

The development server normally runs at `http://localhost:3000`.

## Build

```bash
pnpm build
```

The project is configured for static export with `output: "export"` in `next.config.js`.

## Deployment Output

- Output folder: `out/`
- cPanel upload target: the FTP account root. The FTP account should start in `/home/lumoxtec/public_html`.

## Main Files

- Root layout and SEO metadata: `app/layout.tsx`
- Homepage: `app/(site)/page.tsx`
- Services page: `app/(site)/services/page.tsx`
- Projects page: `app/(site)/projects/page.tsx`
- Contact page: `app/(site)/contact/page.tsx`
- Navigation: `components/Navbar.tsx`
- Footer: `components/Footer.tsx`
- Shared SEO route data: `lib/seo.ts`
- Global styles: `styles/globals.css`

## Public Assets

- Public folder: `public/`
- Logo: `public/logo.svg`
- Favicon: `public/favicon.svg`
- Open Graph image: `public/og.png`
- Homepage preview image: `public/lumox-workspace-preview.png`

## Problems Found

- The previous `public/og.png` file was corrupt and has been replaced.
- The old footer linked to `/legal/privacy` and `/legal/terms`, but route groups make those pages available at `/privacy` and `/terms`.
- The old app had static export enabled while still keeping runtime-only API and middleware files. Those do not run on cPanel static hosting, so they were removed for a clean static deployment.
- Generated deployment output existed in `deploy/`; `.gitignore` now keeps that out of Git.
- Tracked backup files from earlier local work were removed from the rebuild branch.

## Recommended cPanel Deployment

Use GitHub Actions to build the Next.js static export and upload `out/` to cPanel over FTP. This keeps GitHub as the source of truth and avoids manual file uploads.

## Assumptions

- `lumoxtech.com.au` should be the canonical production domain.
- The cPanel account can accept FTP or FTPS uploads into the web root for `lumoxtech.com.au`.
- The rebuilt site is static and does not need server-side Next.js APIs on cPanel.
- The FitPlus live URL is not present in the repository, so `FITPLUS_URL` is temporarily set to `"#"` in `app/(site)/page.tsx`.
