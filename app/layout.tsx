// app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import ClientProviders from "@/components/ClientProviders";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CONTACT_EMAIL, SITE_URL, services } from "@/lib/site-content";

const SITE_TITLE = "Lumox Technologies | Websites, AI Tools & Digital Solutions";
const SITE_DESCRIPTION =
  "Lumox Technologies builds practical websites, web applications, AI-powered tools, and automation systems for businesses in Canberra and across Australia.";

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
  keywords: [
    "Lumox Technologies",
    "websites Canberra",
    "web development Canberra",
    "AI tools for business",
    "business automation Australia",
    "web applications Canberra",
    "digital solutions Canberra",
  ],
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
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lumox Technologies Pty Ltd",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: CONTACT_EMAIL,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lumox Technologies",
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Lumox Technologies",
    url: SITE_URL,
    email: CONTACT_EMAIL,
    areaServed: [
      { "@type": "City", name: "Canberra" },
      { "@type": "Country", name: "Australia" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Canberra",
      addressRegion: "ACT",
      addressCountry: "AU",
    },
  },
  ...services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.text,
    provider: {
      "@type": "Organization",
      name: "Lumox Technologies Pty Ltd",
      url: SITE_URL,
    },
    areaServed: "Australia",
  })),
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-soft text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
