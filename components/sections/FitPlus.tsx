import Link from "next/link";
import { Activity, ArrowRight, Dumbbell, LineChart, Utensils } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const FITPLUS_URL = "#"; // TODO: Replace with the live FitPlus URL when it is available.

const chips = ["Workout planning", "Meal tracking", "Progress insights", "Consistency tools"];
const productStats: Array<[LucideIcon, string, string]> = [
  [Dumbbell, "Workouts", "4 sessions planned"],
  [Utensils, "Meals", "28 meals organised"],
  [LineChart, "Progress", "12 week trend"],
  [Activity, "Consistency", "Next check-in ready"],
];

export function FitPlus() {
  return (
    <section id="fitplus" className="section grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="relative rounded-lg border border-white/10 bg-white/[0.035] p-4 shadow-[0_0_70px_rgba(0,0,0,0.25)]">
        <div className="absolute inset-x-12 -top-10 h-24 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative rounded-lg border border-white/10 bg-bg/80 p-5 backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm text-ink/56">FitPlus</p>
              <h3 className="text-2xl font-semibold">Weekly health system</h3>
            </div>
            <Activity className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {productStats.map(([Icon, title, text]) => (
              <div key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-3 font-semibold">{title}</p>
                <p className="mt-1 text-sm text-ink/58">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="eyebrow">FitPlus product</div>
        <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">A real product focus under the Lumox umbrella.</h2>
        <p className="mt-5 text-lg leading-8 text-ink/70">
          FitPlus is a fitness and nutrition platform designed to help users plan workouts, manage meals,
          track progress, and stay consistent with their health goals.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span key={chip} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={FITPLUS_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
            View FitPlus
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link href="/#contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Talk to Lumox
          </Link>
        </div>
      </div>
    </section>
  );
}
