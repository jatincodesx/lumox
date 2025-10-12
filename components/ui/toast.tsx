"use client";
import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";

export function Toaster({ children }: { children?: React.ReactNode }) {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      {children}
      <ToastPrimitive.Viewport className="fixed bottom-4 right-4 w-96 max-w-[calc(100vw-2rem)] space-y-2" />
    </ToastPrimitive.Provider>
  );
}

export function Toast({
  title,
  description,
  open,
  onOpenChange,
  tone = "default",
}: {
  title?: string;
  description?: string;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  tone?: "default" | "success" | "error";
}) {
  const bg =
    tone === "success" ? "bg-accent text-white" : tone === "error" ? "bg-warm text-white" : "bg-secondary text-white";
  return (
    <ToastPrimitive.Root open={open} onOpenChange={onOpenChange} className={`${bg} rounded-xl p-4 shadow-soft`}>
      {title && <ToastPrimitive.Title className="font-semibold">{title}</ToastPrimitive.Title>}
      {description && <ToastPrimitive.Description className="text-sm opacity-90">{description}</ToastPrimitive.Description>}
    </ToastPrimitive.Root>
  );
}
