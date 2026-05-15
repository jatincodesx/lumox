import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FAQ } from "@/components/FAQ";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Services",
  description:
    "Websites, web applications, AI-powered tools, workflow automation, technical consulting, and digital product development from Lumox Technologies.",
};

export default function ServicesPage() {
  return (
    <div className="relative isolate">
      <PageHero
        eyebrow="Services"
        title="Digital services for practical business outcomes."
        description="Lumox builds websites, web applications, AI-enabled tools, automations, dashboards, and product MVPs with clear delivery and maintainable engineering."
        primaryCta={{ href: "/contact", label: "Start a Project" }}
        secondaryCta={{ href: "/work", label: "See work" }}
      />
      <SiteContainer className="py-20 md:py-28">
        <ServicesGrid />
        <div className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow">Delivery shape</div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Clear steps, fewer surprises.
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink/70">
              Every engagement starts by clarifying the business problem, the people using the system, and the shortest useful path to launch.
            </p>
          </div>
          <ol className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-5">
            {["Discover", "Design", "Build", "Validate", "Handover"].map((step, index) => (
              <li key={step} className="rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-4">
                <div className="font-semibold text-secondary">0{index + 1}. {step}</div>
                <p className="mt-3 leading-6 text-ink/72">
                  {index === 0 && "Context, constraints, and the fastest route to useful value."}
                  {index === 1 && "Interfaces, content, architecture, and decisions you can review."}
                  {index === 2 && "Incremental implementation with visible progress and practical tradeoffs."}
                  {index === 3 && "Functional checks, responsive testing, and focused launch readiness."}
                  {index === 4 && "Documentation, handover, and support options where they are needed."}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-12 rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Need a product, dashboard, AI tool, or rebuild?</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/70">
                Share the current state and the business outcome. Lumox can help scope the right first version before you commit to unnecessary complexity.
              </p>
            </div>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Discuss scope
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-3 text-3xl font-semibold">Straight answers</h2>
          <div className="mt-8">
            <FAQ />
          </div>
        </div>
      </SiteContainer>
      <CTASection
        title="Start with the business outcome."
        text="Tell Lumox what you need the website, product, AI workflow, or internal system to achieve."
      />
    </div>
  );
}
