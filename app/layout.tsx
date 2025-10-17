// app/layout.tsx
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import ClientProviders from "@/components/ClientProviders";

export const metadata = {
  title: "Lumox",
  description: "Lumox AU site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Use explicit light/dark classes so it works even without shadcn CSS tokens */}
      <body className="min-h-screen bg-white text-gray-900 dark:bg-neutral-950 dark:text-gray-100">
        <ClientProviders>
          <Navbar />
          <main className="max-w-6xl mx-auto p-4">{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}