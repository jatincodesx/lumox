"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;

export function SheetContent({ children, side = "right" as const }: { children: React.ReactNode; side?: "left"|"right" }) {
  const sideCls = side === "left" ? "left-0" : "right-0";
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40" />
      <DialogPrimitive.Content className={cn(
        "fixed top-0 h-full w-[85vw] max-w-sm border-l border-white/10 bg-bg/95 p-6 text-ink shadow-[0_0_60px_rgba(0,0,0,0.45)] backdrop-blur-xl",
        sideCls
      )}>
        <DialogPrimitive.Title className="sr-only">Navigation menu</DialogPrimitive.Title>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
