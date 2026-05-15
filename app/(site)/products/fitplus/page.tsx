import Link from "next/link";
import { Activity, ArrowRight, Dumbbell, LineChart, Utensils } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { buttonVariants } from "@/components/ui/button";

const FITPLUS_URL = "https://fitplus-app.jatin-a2c.workers.dev";

export const metadata = {
  title: "FitPlus",
  description:
    "FitPlus is a Lumox-built fitness and nutrition platform for workout planning, meal tracking, progress visibility, and consistency.",
};

const benefits: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Workout planning",
    text: "Plan training with enough structure to stay consistent and enough flexibility to keep improving.",
    icon: Dumbbell,
  },
  {
    title: "Meal tracking",
    text: "Organise nutrition activity in one place so health work is easier to review and maintain.",
    icon: Utensils,
  },
  {
    title: "Progress visibility",
    text: "Keep progress signals visible over time instead of relying on memory or scattered notes.",
    icon: LineChart,
  },
];

export default function FitPlusPage() {
  return (
    <div className="relative isolate">
      <PageHero
        eyebrow="FitPlus"
        title="Fitness and nutrition planning, built as a focused Lumox product."
        description="FitPlus is designed for structured workout planning, meal tracking, progress visibility, and long-term consistency."
        primaryCta={{ href: FITPLUS_URL, label: "Open FitPlus" }}
        secondaryCta={{ href: "/products", label: "Products overview" }}
      >
        <div className="rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 shadow-soft backdrop-blur">
          <Activity className="h-8 w-8 text-accent" aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-semibold">Product focus</h2>
          <p className="mt-3 text-sm leading-6 text-ink/70">
            A practical health tool shaped around planning, tracking, and consistent review.
          </p>
        </div>
      </PageHero>
      <SiteContainer className="py-20 md:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map(({ title, text, icon: Icon }) => (
            <article key={title} className="rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 shadow-soft backdrop-blur">
              <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/70">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Who it helps</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              FitPlus is positioned for people who want a more organised way to manage workouts, nutrition activity, and health progress over time.
            </p>
          </div>
          <div className="rounded-lg border border-primary/24 bg-primary/10 p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Built by Lumox</h2>
            <p className="mt-3 text-sm leading-6 text-ink/74">
              FitPlus also demonstrates Lumox product thinking: clean interfaces, practical workflows, and software foundations that can keep improving.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={FITPLUS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                View FitPlus
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Build a product
              </Link>
            </div>
          </div>
        </div>
      </SiteContainer>
      <CTASection
        title="Need a focused product like this?"
        text="Lumox can help turn a useful product idea into a scoped, buildable first version."
      />
    </div>
  );
}
