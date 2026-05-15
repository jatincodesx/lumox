import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Projects",
  description:
    "Lumox Technologies projects now live under Work and Products.",
};

export default function ProjectsPage() {
  return (
    <div className="relative isolate">
      <PageHero
        eyebrow="Projects"
        title="Projects have been organised into Work and Products."
        description="Use Work for capability examples and Products for Lumox-built product pages such as FitPlus."
      />
      <SiteContainer className="py-20 md:py-28">
        <div className="grid gap-5 md:grid-cols-2">
          <Link href="/work" className="rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 transition hover:border-primary/45">
            <h2 className="text-2xl font-semibold">Work</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">Capability examples across websites, AI tools, dashboards, automations, and product delivery.</p>
            <span className={`${buttonVariants({ variant: "outline", size: "md" })} mt-6`}>
              View work
              <ArrowRight size={16} aria-hidden="true" />
            </span>
          </Link>
          <Link href="/products" className="rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 transition hover:border-primary/45">
            <h2 className="text-2xl font-semibold">Products</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">The Products by Lumox ecosystem, including the current featured product, FitPlus.</p>
            <span className={`${buttonVariants({ variant: "outline", size: "md" })} mt-6`}>
              View products
              <ArrowRight size={16} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </SiteContainer>
    </div>
  );
}
