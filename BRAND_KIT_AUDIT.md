# Lumox Brand Kit Audit

Branch: `redesign/dark-scroll-story-lumox-v2`

Audited folder: `/Users/jatinvohra/Documents/VSC/lumox_main/lumox_enterprise_brand_kit`

## Assets Found

Vector PDF logos:

- `lumox_enterprise_brand_kit/vector/lumox-logo-white.pdf`
- `lumox_enterprise_brand_kit/vector/lumox-logo-primary.pdf`
- `lumox_enterprise_brand_kit/vector/lumox-logo-black.pdf`

PNG logo and mark files:

- `lumox_enterprise_brand_kit/png/lumox-logo-white-16.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-white-32.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-white-48.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-white-180.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-white-512.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-white-1024.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-white-2048.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-black-16.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-black-32.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-black-48.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-black-180.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-black-512.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-black-1024.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-black-2048.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-navy-16.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-navy-32.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-navy-48.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-navy-180.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-navy-512.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-navy-1024.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-navy-2048.png`
- `lumox_enterprise_brand_kit/png/lumox-icon-blue-16.png`
- `lumox_enterprise_brand_kit/png/lumox-icon-blue-32.png`
- `lumox_enterprise_brand_kit/png/lumox-icon-blue-48.png`
- `lumox_enterprise_brand_kit/png/lumox-icon-blue-180.png`
- `lumox_enterprise_brand_kit/png/lumox-icon-blue-512.png`
- `lumox_enterprise_brand_kit/png/lumox-icon-blue-1024.png`
- `lumox_enterprise_brand_kit/png/lumox-icon-blue-2048.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-accent.png`
- `lumox_enterprise_brand_kit/png/lumox-logo-primary.png`
- `lumox_enterprise_brand_kit/png/lumox-wordmark-white.png`

Favicon and touch icon files:

- `lumox_enterprise_brand_kit/favicon/lumox-favicon-16x16.png`
- `lumox_enterprise_brand_kit/favicon/lumox-favicon-32x32.png`
- `lumox_enterprise_brand_kit/favicon/lumox-favicon-48x48.png`
- `lumox_enterprise_brand_kit/favicon/apple-touch-icon.png`

Social and presentation files:

- `lumox_enterprise_brand_kit/social/lumox-social-icon-1024.png`
- `lumox_enterprise_brand_kit/presentation/lumox-presentation-navy.png`

No SVG logo files, brand color documents, typography notes, or usage guideline documents were found in the brand kit folder.

## Recommended Assets

Primary dark-site logo:

- `public/brand/lumox-logo-white-512.png`
- Source: `lumox_enterprise_brand_kit/png/lumox-logo-white-512.png`
- Reason: transparent PNG, crisp at UI sizes, white mark has strong contrast on the dark Lumox background.

Dark-background logo:

- `public/brand/lumox-logo-white-512.png`
- Source: `lumox_enterprise_brand_kit/png/lumox-logo-white-512.png`
- Reason: the white mark remains legible on `#020617` and deep navy surfaces.

Light-background logo, if needed later:

- `lumox_enterprise_brand_kit/png/lumox-logo-black-512.png`
- Reason: transparent black mark is suitable for future light surfaces, but it was not used in this dark redesign.

Icon-only mark:

- `public/brand/lumox-logo-white-512.png`
- Reason: stronger dark-mode contrast than the navy or black marks.

Favicon:

- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- Sources: `lumox_enterprise_brand_kit/favicon/lumox-favicon-16x16.png`, `lumox_enterprise_brand_kit/favicon/lumox-favicon-32x32.png`

Apple touch icon:

- `public/apple-touch-icon.png`
- Source: `lumox_enterprise_brand_kit/favicon/apple-touch-icon.png`

Open Graph/social preview:

- `public/og.png`
- Source: `lumox_enterprise_brand_kit/png/lumox-logo-primary.png`
- Processing: resized to `1200x630` for social preview weight and correct metadata dimensions.

## Rejected Or Limited Assets

- `lumox-logo-black-*`: rejected for dark UI use because the black mark has very low contrast against near-black and navy backgrounds.
- `lumox-logo-navy-*`: rejected for dark UI use because the average navy mark is too close to the site background and becomes nearly invisible.
- `lumox-icon-blue-*`: not used as the primary nav/footer mark because contrast is acceptable but weaker than the white mark on `#020617`; useful as a future accent or app icon.
- `lumox-wordmark-white.png`: not used in the UI because it is a large `2560x1440` RGB file without alpha transparency. The checker-like background is baked into the image and would look poor on the dark site.
- `lumox-logo-primary.png`: not used as an inline logo because it has a full navy background and large dimensions. It is suitable for Open Graph after resizing.
- `lumox-logo-accent.png`: not used because it has no alpha channel and a light/white background.
- PDF logo files: retained as vector source assets, but not used directly in the website because browser/static export usage is better served by SVG or optimized PNG. No SVG equivalents were present in the kit.

## Contrast And Background Notes

- The selected white transparent mark has excellent contrast on the site background and dark glass cards.
- Navy and black transparent marks fail contrast on dark navy/black surfaces.
- Large RGB wordmark/primary/accent files do not have transparent backgrounds, so they should not be placed over the dark UI.
- SVG would be preferred over PNG for nav/footer marks if a clean SVG export becomes available. Because the kit did not include SVG logos, the transparent white PNG mark was selected.
