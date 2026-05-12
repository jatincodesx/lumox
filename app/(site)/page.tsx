import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  AnimatedSection,
  FadeIn,
  HeroSystemVisual,
  MotionButton,
  MotionCard,
  StaggerContainer,
} from "@/components/motion-primitives";
import {
  CONTACT_EMAIL,
  FITPLUS_URL,
  capabilityProjects,
  fitPlusFeatures,
  processSteps,
  services,
  valueStrip,
  whyLumox,
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <section className="hero-grid section pb-16 pt-14 lg:pb-24 lg:pt-20">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="eyebrow">Lumox Technologies</div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
              Digital systems, websites, and AI tools built for real business outcomes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75 md:text-xl md:leading-9">
              Lumox Technologies helps businesses design, build, and launch modern websites,
              web applications, automation tools, and AI-powered systems that are reliable,
              scalable, and easy to use.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <MotionButton>
                <Link href="/contact" className={buttonVariants({ variant: "warm", size: "lg" })}>
                  Start a Project
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </MotionButton>
              <MotionButton>
                <Link href="/projects" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  View Work
                </Link>
              </MotionButton>
            </div>
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0">
          <HeroSystemVisual />
        </div>
      </section>

      <AnimatedSection className="border-y border-muted/60 bg-bg">
        <div className="container-prose grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-5">
          {valueStrip.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm font-medium text-ink/75">
              <CheckCircle2 className="h-4 w-4 flex-none text-accent" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="services" className="section">
        <div className="section-kicker">
          <div>
            <div className="eyebrow">Services</div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-5xl">
              Practical technology services for teams that need momentum.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-ink/70 md:text-lg">
            Lumox works across the useful middle ground between strategy and implementation:
            clear websites, custom applications, AI tools, automation, product builds, and
            technical direction.
          </p>
        </div>
        <StaggerContainer className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, icon: Icon }, index) => (
            <MotionCard
              key={title}
              className={index === 1 || index === 4 ? "md:translate-y-5" : undefined}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/70">{text}</p>
            </MotionCard>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      <AnimatedSection id="fitplus" className="section-band">
        <div className="section grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-lg border border-muted/60 bg-ink p-4 text-bg shadow-premium">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--lumox-accent)/0.24),transparent_42%,hsl(var(--lumox-warm)/0.18))]" />
            <div className="relative rounded-lg border border-white/10 bg-white/[0.05] p-5">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-bg/65">Featured product</p>
                  <h2 className="mt-1 text-3xl font-semibold">FitPlus</h2>
                </div>
                <Sparkles className="h-7 w-7 text-warm" aria-hidden="true" />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {fitPlusFeatures.map((feature) => (
                  <div key={feature} className="rounded-lg border border-white/10 bg-white/[0.07] p-4">
                    <CircleDot className="h-4 w-4 text-primary" aria-hidden="true" />
                    <p className="mt-3 font-semibold">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="eyebrow">FitPlus</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Fitness and nutrition planning designed for consistency.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/75">
              FitPlus is a fitness and nutrition platform designed to help users plan workouts,
              manage meals, track progress, and stay consistent with their health goals.
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
                </Link>
              </MotionButton>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="work" className="section">
        <div className="section-kicker">
          <div>
            <div className="eyebrow">Work</div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-5xl">
              Capability-led work for practical business systems.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-ink/70 md:text-lg">
            This section focuses on Lumox capability areas and known product work,
            keeping the emphasis on practical delivery, maintainable systems, and clear outcomes.
          </p>
        </div>
        <StaggerContainer className="mt-10 grid gap-5 md:grid-cols-2">
          {capabilityProjects.map((project) => (
            <MotionCard key={project.title} className="min-h-[230px]">
              <p className="text-sm font-semibold text-secondary">{project.label}</p>
              <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-ink/70">{project.text}</p>
            </MotionCard>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      <AnimatedSection id="process" className="section-band">
        <div className="section">
          <div className="max-w-3xl">
            <div className="eyebrow">Process</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              A clear path from first conversation to useful launch.
            </h2>
          </div>
          <StaggerContainer className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <MotionCard key={step.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{step.text}</p>
              </MotionCard>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <AnimatedSection id="about" className="section">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="eyebrow">Why Lumox</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              A practical technical partner for businesses moving faster.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/75">
              Lumox Technologies focuses on practical engineering, clear communication,
              fast iteration, modern AI and web capability, and business-first delivery.
            </p>
          </div>
          <StaggerContainer className="grid gap-4">
            {whyLumox.map(({ title, text, icon: Icon }) => (
              <MotionCard key={title} className="grid gap-4 sm:grid-cols-[auto_1fr]">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/70">{text}</p>
                </div>
              </MotionCard>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-band">
        <div className="section grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-warm/10 text-warm">
            <MapPin className="h-7 w-7" aria-hidden="true" />
          </div>
          <div>
            <div className="eyebrow">Canberra and Australia</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Local support for websites, web apps, AI tools, and automation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink/75">
              Lumox Technologies works with businesses in Canberra and across Australia to
              build websites, applications, and AI-powered systems that solve practical problems.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="section pb-24">
        <div className="overflow-hidden rounded-lg border border-muted/60 bg-ink text-bg shadow-premium">
          <div className="grid gap-8 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <div className="text-xs font-semibold uppercase text-bg/65">Start a project</div>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">
                Need a website, app, automation system, or AI-powered tool?
              </h2>
              <p className="mt-4 max-w-2xl text-bg/75">
                Send through what you are trying to build. Lumox will respond with a practical
                next step and a clear path to delivery.
              </p>
            </div>
            <MotionButton>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Lumox%20Technologies%20project%20enquiry`}
                className={buttonVariants({ variant: "warm", size: "lg" })}
              >
                Email Lumox
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </MotionButton>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
