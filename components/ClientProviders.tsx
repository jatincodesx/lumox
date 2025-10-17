// components/ClientProviders.tsx
"use client";
import * as React from "react";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import SEO from "@/next-seo.config";
import { ToastProvider, useToast } from "@/components/ui/use-toast";
import { Toaster, Toast } from "@/components/ui/toast";

function ToastMount() {
  const { state, hide } = useToast();
  return (
    <Toaster>
      <Toast
        open={state.open}
        onOpenChange={hide}
        title={state.title}
        description={state.description}
        tone={state.tone}
      />
    </Toaster>
  );
}

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <DefaultSeo {...SEO} />
      <ToastProvider>
        {children}
        <ToastMount />
      </ToastProvider>
    </ThemeProvider>
  );
}