import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { buttonVariants } from "@/components/ui/button";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  text: string;
  href?: string;
  label?: string;
};

export function CTASection({
  eyebrow = "Next step",
  title,
  text,
  href = "/contact",
  label = "Start a Project",
}: CTASectionProps) {
  return (
    <section className="relative z-10 pb-20 md:pb-28">
      <SiteContainer>
        <div className="relative overflow-hidden rounded-lg border border-primary/24 bg-primary/10 p-8 md:p-10">
          <div className="absolute right-0 top-1/2 h-56 w-80 -translate-y-1/2 bg-primary/18 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
            <p className="mt-4 text-lg leading-8 text-ink/72">{text}</p>
            <div className="mt-8">
              <Link href={href} className={buttonVariants({ variant: "warm", size: "lg" })}>
                {label}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

