import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SiteContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export function SiteContainer<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: SiteContainerProps<T>) {
  const Comp = as ?? "div";

  return (
    <Comp className={cn("site-container", className)} {...props}>
      {children}
    </Comp>
  );
}
