"use client";

import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toast";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
