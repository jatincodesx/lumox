import Link from "next/link";
import { Activity, ArrowRight, Boxes, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Products by Lumox",
  description:
    "Products by Lumox is a growing ecosystem of practical digital products, starting with FitPlus.",
};

export default function ProductsPage() {
  return (
    <div className="relative isolate">
      <PageHero
        eyebrow="Products by Lumox"
        title="A growing ecosystem of practical digital products."
        description="Lumox products are built around focused problems, clear interfaces, and useful outcomes. FitPlus is the current featured product, with more tools being developed carefully over time."
        primaryCta={{ href: "/products/fitplus", label: "Explore FitPlus" }}
        secondaryCta={{ href: "/contact", label: "Build with Lumox" }}
      >
        <div className="rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 shadow-soft backdrop-blur">
          <Boxes className="h-8 w-8 text-accent" aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-semibold">Product ecosystem</h2>
          <p className="mt-3 text-sm leading-6 text-ink/70">
            Focused products first. Useful scope, maintainable foundations, and clean routes for future expansion.
          </p>
        </div>
      </PageHero>
      <SiteContainer className="py-20 md:py-28">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Link
            href="/products/fitplus"
            className="group rounded-lg border border-primary/28 bg-primary/10 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-primary/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:p-8"
          >
            <Activity className="h-7 w-7 text-accent" aria-hidden="true" />
            <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-accent">Featured product</p>
                <h2 className="mt-2 text-3xl font-semibold">FitPlus</h2>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                View product
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-6 text-ink/74">
              FitPlus is a Lumox-built fitness and nutrition platform designed around structured workout planning, meal tracking, progress visibility, and long-term consistency.
            </p>
          </Link>
          <div className="rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 md:p-8">
            <Sparkles className="h-7 w-7 text-accent" aria-hidden="true" />
            <h2 className="mt-6 text-2xl font-semibold">More products coming soon</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              New product ideas are being developed selectively. The goal is useful software with clear purpose, not a crowded catalogue.
            </p>
          </div>
        </div>
        <div className="mt-12 rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Have a product idea that needs a practical build path?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/70">
            Lumox can help shape, design, and build a focused first version before the product becomes larger than the evidence supports.
          </p>
          <Link href="/contact" className={`${buttonVariants({ variant: "outline", size: "lg" })} mt-6`}>
            Discuss a product
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </SiteContainer>
      <CTASection
        title="Build products with practical foundations."
        text="Start with the smallest useful product, then improve it with real feedback and maintainable engineering."
      />
    </div>
  );
}

