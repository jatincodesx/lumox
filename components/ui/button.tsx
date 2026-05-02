import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-secondary text-white hover:bg-secondary/90 px-4 py-2 shadow-soft",
        outline:
          "border border-muted/60 bg-bg text-ink hover:bg-soft px-4 py-2",
        ghost: "text-secondary hover:bg-secondary/10 px-3 py-2",
        warm: "bg-warm text-white hover:bg-warm/90 px-4 py-2"
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
