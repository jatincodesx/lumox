import Link from "next/link";
import { ArrowRight, Bot, LayoutDashboard, MonitorSmartphone, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SiteContainer } from "@/components/layout/SiteContainer";

export const metadata = {
  title: "Work",
  description:
    "Selected Lumox Technologies work categories and capability examples across websites, AI-enabled tools, dashboards, automation, and digital products.",
};

const categories: Array<{
  title: string;
  text: string;
  outcome: string;
  href: string;
  icon: LucideIcon;
}> = [
  {
    title: "Business website systems",
    text: "Positioning, structure, responsive UI, technical SEO, and enquiry paths for service businesses and product launches.",
    outcome: "Clearer trust, sharper messaging, and easier enquiry.",
    href: "/services",
    icon: MonitorSmartphone,
  },
  {
    title: "AI-enabled workflow tools",
    text: "Interfaces that apply AI to drafting, review, search, classification, and repeatable knowledge tasks.",
    outcome: "Faster internal work without removing human judgement.",
    href: "/services",
    icon: Bot,
  },
  {
    title: "Dashboards and internal systems",
    text: "Operational views, admin tools, integrations, and reporting surfaces that make day-to-day work easier to manage.",
    outcome: "Less manual tracking and better visibility.",
    href: "/services",
    icon: LayoutDashboard,
  },
  {
    title: "Product MVPs and iterations",
    text: "Focused first versions, product interfaces, and technical foundations for tools that need to keep improving after launch.",
    outcome: "Useful software with room to grow.",
    href: "/products",
    icon: Workflow,
  },
];

export default function WorkPage() {
  return (
    <div className="relative isolate">
      <PageHero
        eyebrow="Work"
        title="Capability examples without invented case studies."
        description="Where public client details are not ready to publish, Lumox keeps the work honest: practical examples of the systems, interfaces, and delivery categories it can build."
        primaryCta={{ href: "/contact", label: "Start a Project" }}
        secondaryCta={{ href: "/products/fitplus", label: "View FitPlus" }}
      />
      <SiteContainer className="py-20 md:py-28">
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map(({ title, text, outcome, href, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-primary/45 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/70">{text}</p>
              <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Typical outcome</p>
                <p className="mt-2 text-sm leading-6 text-ink/78">{outcome}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Explore fit
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </SiteContainer>
      <CTASection
        title="Bring the business problem, not a finished specification."
        text="Lumox can help shape the first useful version of the website, product, automation, dashboard, or AI tool."
      />
    </div>
  );
}

