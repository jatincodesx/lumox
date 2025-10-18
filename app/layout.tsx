// app/layout.tsx
import "./../styles/globals.css";
import type { Metadata } from "next";
import ClientProviders from "@/components/ClientProviders"; // ← make sure this exact file exists
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* DO NOT hard-code light colors here; tokens + next-themes will drive the class */}
      <body className="min-h-screen bg-soft text-ink antialiased">
        <ClientProviders>
          <Navbar />
          <main className="container-prose">{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}