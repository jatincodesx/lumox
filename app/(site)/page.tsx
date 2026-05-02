import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Layers3,
  MessageSquareText,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const FITPLUS_URL = "#"; // TODO: Replace with the live FitPlus URL when it is ready.

type Service = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Business websites",
    text: "Fast, clear sites that explain your offer, earn trust, and are easy to maintain.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Web applications",
    text: "Dashboards, portals, booking flows, admin tools, and custom systems built around real workflows.",
    icon: Code2,
  },
  {
    title: "AI-powered tools",
    text: "Practical AI features for search, drafting, classification, analysis, and internal productivity.",
    icon: Bot,
  },
  {
    title: "Workflow automation",
    text: "Connected tools, cleaner handoffs, fewer manual steps, and better operational visibility.",
    icon: Workflow,
  },
  {
    title: "Technical consulting",
    text: "Architecture, product scoping, code reviews, integration planning, and delivery guidance.",
    icon: MessageSquareText,
  },
  {
    title: "Digital product development",
    text: "MVPs and product iterations that move from idea to usable software without unnecessary complexity.",
    icon: Layers3,
  },
];

const projects = [
  {
    title: "FitPlus",
    label: "Fitness and nutrition platform",
    text: "A product experience for planning workouts, managing meals, tracking progress, and supporting consistency.",
  },
  {
    title: "SafeView",
    label: "Privacy-first video concept",
    text: "A childcare video platform concept focused on guardian access, audit trails, and clear privacy controls.",
  },
  {
    title: "Kipla",
    label: "Marketplace MVP",
    text: "A home-services marketplace concept covering bookings, provider onboarding, reviews, and repeat jobs.",
  },
];

const reasons = [
  "Clear scope before build work starts",
  "Simple language and visible tradeoffs",
  "Maintainable code and practical handover",
  "Static-first deployment where it suits the business",
];

const process = [
  {
    title: "Understand",
    text: "Clarify the business goal, audience, constraints, and the shortest useful version.",
  },
  {
    title: "Shape",
    text: "Turn the brief into page structure, user flows, technical choices, and a realistic delivery plan.",
  },
  {
    title: "Build",
    text: "Develop the website or application in focused iterations with review points along the way.",
  },
  {
    title: "Launch",
    text: "Prepare the build, deployment workflow, checks, documentation, and next improvements.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section grid gap-12 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <div className="eyebrow">Lumox Technologies</div>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Practical digital solutions for businesses that need reliable software.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            Lumox Technologies builds websites, web applications, automation tools, AI-powered systems,
            and technical foundations that help businesses move with less friction.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={buttonVariants({ variant: "warm", size: "lg" })}>
              Contact Lumox
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/projects" className={buttonVariants({ variant: "outline", size: "lg" })}>
              View projects
            </Link>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Websites", "Clear public sites"],
              ["Apps", "Custom business tools"],
              ["AI", "Useful automation"],
            ].map(([value, label]) => (
              <div key={value} className="border-l-2 border-secondary pl-4">
                <dt className="text-xl font-semibold">{value}</dt>
                <dd className="text-sm text-ink/70">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative overflow-hidden rounded-lg border border-muted/60 bg-bg shadow-soft">
          <img
            src="/lumox-workspace-preview.png"
            alt="Lumox Technologies project dashboard preview"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      <section className="section-band">
        <div className="section grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <div className="eyebrow">What Lumox Technologies does</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Digital delivery without the theatre.</h2>
          </div>
          <p className="text-lg leading-8 text-ink/75">
            We work with businesses that need useful technology built properly: a sharper website,
            a custom workflow, a better internal tool, an AI-assisted process, or technical advice
            before investing in a larger product.
          </p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="max-w-3xl">
          <div className="eyebrow">Services</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Focused services for practical outcomes.</h2>
          <p className="mt-4 text-ink/75">
            Lumox keeps the offer intentionally broad enough to solve the real problem, while keeping
            delivery focused enough to stay maintainable.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, icon: Icon }) => (
            <article key={title} className="card p-6">
              <Icon className="h-6 w-6 text-secondary" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/75">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band">
        <div className="section">
          <div className="max-w-3xl">
            <div className="eyebrow">Featured projects</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Products and concepts under the Lumox umbrella.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="card p-6">
                <p className="text-sm font-semibold text-secondary">{project.label}</p>
                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/75">{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fitplus" className="section grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-lg border border-muted/60 bg-bg p-3 shadow-soft">
          <div className="rounded-lg bg-soft p-6">
            <div className="flex items-center justify-between border-b border-muted/60 pb-5">
              <div>
                <p className="text-sm text-ink/65">FitPlus</p>
                <h3 className="text-2xl font-semibold">Weekly plan</h3>
              </div>
              <Sparkles className="h-7 w-7 text-warm" aria-hidden="true" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Workouts", "4 sessions planned"],
                ["Meals", "28 meals organised"],
                ["Progress", "12 week trend"],
                ["Consistency", "Next check-in ready"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-muted/60 bg-bg p-4">
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-ink/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="eyebrow">FitPlus app</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A featured Lumox product for health and consistency.</h2>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            FitPlus is a fitness and nutrition platform designed to help users plan workouts,
            manage meals, track progress, and stay consistent with their health goals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={FITPLUS_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
              View FitPlus
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Contact Lumox
            </Link>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="section grid gap-10 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Why work with Lumox</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A practical partner for modern digital work.</h2>
            <p className="mt-5 text-ink/75">
              The goal is not to make technology feel bigger than it needs to be. The goal is to
              understand the work, build the right thing, and leave you with a system you can use.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-3 rounded-lg border border-muted/60 bg-bg p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" aria-hidden="true" />
                <p className="text-sm font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="max-w-3xl">
          <div className="eyebrow">Process</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A clear path from idea to launch.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {process.map((step, index) => (
            <article key={step.title} className="card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/75">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pb-24">
        <div className="rounded-lg border border-muted/60 bg-ink p-8 text-bg shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-xs font-semibold uppercase text-bg/70">Contact CTA</div>
              <h2 className="mt-3 text-3xl font-semibold">Need a website, app, automation, or technical direction?</h2>
              <p className="mt-4 max-w-2xl text-bg/75">
                Tell Lumox what you are trying to build. You will get a practical next step,
                not a sales script.
              </p>
            </div>
            <Link href="/contact" className={buttonVariants({ variant: "warm", size: "lg" })}>
              Start a conversation
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
