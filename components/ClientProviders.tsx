"use client";

import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toast"; // we’ll create this next
// (Optional) your theme provider, etc.
// import { ThemeProvider } from "next-themes";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <ThemeProvider attribute="class">{children}</ThemeProvider> */}
      {children}
      <Toaster />
    </>
  );
}