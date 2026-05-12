import Link from "next/link";
import { ArrowRight, CircleDot, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  AnimatedSection,
  MotionButton,
  MotionCard,
  StaggerContainer,
} from "@/components/motion-primitives";
import { FITPLUS_URL, fitPlusFeatures } from "@/lib/site-content";

export const metadata = {
  title: "FitPlus",
  description:
    "FitPlus is a Lumox Technologies fitness and nutrition platform for workout planning, meal management, progress tracking, and consistency.",
  alternates: {
    canonical: "https://lumoxtech.com.au/fitplus",
  },
};

export default function FitPlusPage() {
  return (
    <>
      <AnimatedSection className="section pb-12 pt-14">
        <div className="max-w-4xl">
          <div className="eyebrow">FitPlus</div>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight md:text-6xl">
            A fitness and nutrition platform designed around planning and consistency.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">
            FitPlus helps users plan workouts, manage meals, track progress, and stay
            consistent with their health goals through a practical product experience.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MotionButton>
              <Link href={FITPLUS_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
                View FitPlus
                <ExternalLink size={17} aria-hidden="true" />
              </Link>
            </MotionButton>
            <MotionButton>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Talk to Lumox
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </MotionButton>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-band">
        <div className="section">
          <div className="max-w-3xl">
            <div className="eyebrow">Product focus</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Designed for the habits people repeat every week.
            </h2>
          </div>
          <StaggerContainer className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {fitPlusFeatures.map((feature) => (
              <MotionCard key={feature}>
                <CircleDot className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold">{feature}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/75">
                  A clear interface for planning, reviewing, and staying organised without
                  adding avoidable friction.
                </p>
              </MotionCard>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>
    </>
  );
}
