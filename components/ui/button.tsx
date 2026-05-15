import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary px-4 py-2 text-white shadow-[0_0_28px_hsl(var(--lumox-primary)/0.25)] hover:bg-primary/90",
        outline:
          "border border-white/15 bg-white/[0.03] px-4 py-2 text-ink hover:border-primary/45 hover:bg-primary/10",
        ghost: "px-3 py-2 text-primary hover:bg-primary/10",
        warm: "bg-white px-4 py-2 text-slate-950 hover:bg-white/90"
      },
      size: { sm: "h-9 px-3 text-sm", md: "h-10 px-4", lg: "h-12 px-6 text-base" }
    },
    defaultVariants: { variant: "primary", size: "md" }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonStyles({ variant, size }), className)} {...props} />
  )
);
Button.displayName = "Button";

export type ButtonVariants = VariantProps<typeof buttonStyles>;
export const buttonVariants = (opts?: ButtonVariants) => buttonStyles(opts);
