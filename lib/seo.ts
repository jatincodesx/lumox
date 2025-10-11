export const ORG = {
  name: "Lumox Technologies Pty Ltd",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lumox.example",
  logo: "/logo.svg",
  sameAs: [
    "https://www.linkedin.com/",
  ],
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const ROUTES = [
  "/", "/services", "/projects", "/about", "/contact",
  "/legal/privacy", "/legal/terms", "/careers",
];

export const defaultMeta = {
  title: "Lumox Technologies — Software & Network Solutions",
  description:
    "Software development and network engineering for teams that need reliable delivery. Web apps, APIs, dashboards, and secure campus networks.",
  openGraph: {
    type: "website",
    url: ORG.url,
    title: "Lumox Technologies — Software & Network Solutions",
    description:
      "Software development and network engineering for SMEs and enterprise teams.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Lumox" }],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
