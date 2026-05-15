import Link from "next/link";
import { ArrowRight, Box, BriefcaseBusiness, Layers3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteContainer } from "@/components/layout/SiteContainer";

const previews: Array<{
  title: string;
  text: string;
  href: string;
  cta: string;
  icon: LucideIcon;
}> = [
  {
    title: "Services",
    text: "Websites, web applications, AI tools, dashboards, automations, and product MVPs built around practical business needs.",
    href: "/services",
    cta: "Explore services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Products",
    text: "Lumox is building a focused product ecosystem, starting with FitPlus and expanding into useful business and consumer tools.",
    href: "/products",
    cta: "View products",
    icon: Box,
  },
  {
    title: "Work",
    text: "Selected delivery categories and capability examples across business websites, AI-assisted workflows, and operational systems.",
    href: "/work",
    cta: "See work",
    icon: Layers3,
  },
];

export function HomePreviews() {
  return (
    <section className="section-band relative z-10">
      <SiteContainer className="py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="eyebrow">What Lumox builds</div>
          <h2 className="section-heading mt-3">A sharper path from idea to useful digital system.</h2>
          <p className="section-copy mt-5">
            The home page gives the overview. Each dedicated page carries the detail, examples, and next steps.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {previews.map(({ title, text, href, cta, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="group flex min-h-[18rem] flex-col rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-primary/45 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/70">{text}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-accent">
                {cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

