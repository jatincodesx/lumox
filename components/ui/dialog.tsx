"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

export function DialogContent({ children }: { children: React.ReactNode }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40" />
      <DialogPrimitive.Content className={cn(
        "fixed left-1/2 top-1/2 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white dark:bg-[#0f172a] p-6 shadow-soft border border-muted/60"
      )}>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
