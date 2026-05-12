export const ORG = {
  name: "Lumox Technologies Pty Ltd",
  url: "https://lumoxtech.com.au",
  logo: "/logo.svg",
  sameAs: [],
};

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/fitplus", label: "FitPlus" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const ROUTES = [
  "/", "/services", "/projects", "/fitplus", "/about", "/contact",
  "/privacy", "/terms", "/careers",
];

export const defaultMeta = {
  title: "Lumox Technologies | Websites, AI Tools & Digital Solutions",
  description:
    "Lumox Technologies builds practical websites, web applications, AI-powered tools, and automation systems for businesses in Canberra and across Australia.",
  openGraph: {
    type: "website",
    url: ORG.url,
    title: "Lumox Technologies | Websites, AI Tools & Digital Solutions",
    description:
      "Practical digital solutions for businesses, including websites, web applications, automation tools, AI-powered systems, and technical consulting.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Lumox Technologies digital solutions preview" }],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
