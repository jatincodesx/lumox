// app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import ClientProviders from "@/components/ClientProviders";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Lumox", template: "%s — Lumox" },
  description: "Lumox AU site",
  openGraph: {
    type: "website",
    title: "Lumox",
    description: "Lumox AU site",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  },
  twitter: { card: "summary_large_image", title: "Lumox", description: "Lumox AU site" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-soft text-ink antialiased">
        <ClientProviders>
          <Navbar />
          <main className="container-prose">{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}