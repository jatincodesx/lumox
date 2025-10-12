import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-muted/60 px-2.5 py-1 text-xs font-medium text-ink/80 bg-white dark:bg-[#0f172a]",
        className
      )}
      {...props}
    />
  );
}
