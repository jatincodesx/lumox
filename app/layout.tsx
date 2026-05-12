// app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import ClientProviders from "@/components/ClientProviders";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

const SITE_URL = "https://lumoxtech.com.au";
const SITE_TITLE = "Lumox Technologies | Websites, AI Tools & Digital Solutions";
const SITE_DESCRIPTION =
  "Lumox Technologies builds practical websites, web applications, AI-powered tools, and automation systems for businesses in Canberra and across Australia.";

const jsonLdSchemas = [
  {
    "@type": "Organization",
    name: "Lumox Technologies",
    legalName: "Lumox Technologies Pty Ltd",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/lumox-logo-white-1024.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Canberra",
      addressRegion: "ACT",
      addressCountry: "AU",
    },
  },
  {
    "@type": "WebSite",
    name: "Lumox Technologies",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-AU",
  },
  {
    "@type": "ProfessionalService",
    name: "Lumox Technologies",
    url: SITE_URL,
    areaServed: ["Canberra", "Australia"],
    priceRange: "$$",
    serviceType: [
      "Web development Canberra",
      "AI tools for business",
      "Business automation Australia",
      "Web applications Canberra",
      "Digital solutions Canberra",
    ],
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  title: {
    default: SITE_TITLE,
    template: "%s | Lumox Technologies",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Lumox Technologies",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Lumox Technologies digital solutions preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-bg text-ink antialiased">
        <JsonLd schema={jsonLdSchemas} />
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
