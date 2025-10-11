import * as React from "react";
import { cn } from "@/lib/utils";
export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full rounded-xl border border-muted/60 bg-white dark:bg-[#0f172a] px-3 py-2 text-sm placeholder:text-ink/60 min-h-[120px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
