"use client";
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
        "fixed top-0 h-full w-[85vw] max-w-sm bg-white dark:bg-[#0f172a] p-6 border-l border-muted/60", sideCls
      )}>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
