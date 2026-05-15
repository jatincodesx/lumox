import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
  children?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-white/10", className)}>
      <div className="absolute left-1/2 top-[-18rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/18 blur-3xl" />
      <div className="absolute inset-0 motion-grid opacity-35" aria-hidden="true" />
      <SiteContainer
        className={cn(
          "relative z-10 grid gap-10 py-20 md:py-28",
          children ? "lg:grid-cols-[1fr_0.78fr] lg:items-end" : "",
        )}
      >
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72 md:text-xl md:leading-9">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta && (
                <Link href={primaryCta.href} className={buttonVariants({ variant: "primary", size: "lg" })}>
                  {primaryCta.label}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className={buttonVariants({ variant: "outline", size: "lg" })}>
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
        {children}
      </SiteContainer>
    </section>
  );
}
