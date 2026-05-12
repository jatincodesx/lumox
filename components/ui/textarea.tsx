import * as React from "react";
import { cn } from "@/lib/utils";
export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-[120px] w-full rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm placeholder:text-ink/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
