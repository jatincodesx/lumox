// app/layout.tsx
import "./../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ClientProviders from "@/components/ClientProviders";
import { ORG } from "@/lib/seo";
import Script from "next/script";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lumox.example"),
  title: "Lumox Technologies — Software & Network Solutions",
  description: "Software development and network engineering for teams that need reliable delivery.",
  icons: { icon: "/favicon.svg" },
};

function JSONLD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG.name,
    url: ORG.url,
    logo: ORG.logo,
    sameAs: ORG.sameAs,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function Umami() {
  const url = process.env.NEXT_PUBLIC_UMAMI_URL;
  const id = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  if (!url || !id) return null;
  return <Script async defer src={url} data-website-id={id} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JSONLD />
        <Umami />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <ClientProviders>
          <Navbar />
          <main className="container-prose">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}