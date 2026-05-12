import {
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Gauge,
  Layers3,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const SITE_URL = "https://lumoxtech.com.au";
export const CONTACT_EMAIL = "jatin@jatinvohra.com";
export const FITPLUS_URL = "#"; // TODO: Replace with the live FitPlus URL when it is ready.

export type Service = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Business websites",
    text: "Fast, polished sites for service businesses, product launches, and teams that need clearer online positioning.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Web applications",
    text: "Dashboards, portals, booking flows, admin tools, and custom systems shaped around real business workflows.",
    icon: Code2,
  },
  {
    title: "AI-powered tools",
    text: "Practical AI features for drafting, search, triage, classification, document workflows, and internal productivity.",
    icon: Bot,
  },
  {
    title: "Workflow automation",
    text: "Connected tools, cleaner handoffs, fewer manual steps, and better visibility across repeatable operations.",
    icon: Workflow,
  },
  {
    title: "Digital product development",
    text: "MVPs and product iterations that move from idea to usable software without unnecessary complexity.",
    icon: Layers3,
  },
  {
    title: "Technical consulting",
    text: "Architecture, scoping, integration planning, code review, and delivery advice before you overbuild.",
    icon: MessageSquareText,
  },
];

export const valueStrip = [
  "Business-focused builds",
  "Clean technical delivery",
  "AI and automation capability",
  "Website and app development",
  "Local support from Canberra",
];

export const capabilityProjects = [
  {
    title: "Business website delivery",
    label: "Web presence",
    text: "Clear, responsive public websites with strong messaging, practical SEO foundations, and maintainable static deployment.",
  },
  {
    title: "AI document and product tools",
    label: "AI systems",
    text: "Useful AI-assisted workflows for analysis, drafting, classification, search, and internal knowledge work.",
  },
  {
    title: "Fitness platform development",
    label: "FitPlus",
    text: "Product work around workouts, meals, progress tracking, and consistency-focused user journeys.",
  },
  {
    title: "Automation dashboards",
    label: "Operations",
    text: "Internal tools that reduce repetitive work, organise business data, and make operational status easier to see.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    text: "Clarify the business goal, audience, current systems, constraints, and the shortest useful first version.",
  },
  {
    title: "Design",
    text: "Turn the brief into page structure, user flows, technical choices, and a delivery plan you can review.",
  },
  {
    title: "Build",
    text: "Develop the website, app, automation, or AI tool in focused iterations with visible progress and practical checks.",
  },
  {
    title: "Launch and improve",
    text: "Prepare deployment, handover, documentation, and the next improvements after the first release is live.",
  },
];

export const whyLumox = [
  {
    title: "Practical engineering",
    text: "Technology choices are matched to the business problem, maintenance needs, and deployment environment.",
    icon: ShieldCheck,
  },
  {
    title: "Clear communication",
    text: "Scope, tradeoffs, timelines, and next steps are explained in plain language before work moves forward.",
    icon: MessageSquareText,
  },
  {
    title: "Fast iteration",
    text: "Small reviewable releases make it easier to correct direction early and keep useful momentum.",
    icon: Rocket,
  },
  {
    title: "Modern AI and web capability",
    text: "Lumox combines static websites, web apps, automation, AI workflows, and product thinking in one delivery path.",
    icon: Gauge,
  },
  {
    title: "Business-first delivery",
    text: "The goal is a reliable system people can understand, use, and improve after launch.",
    icon: CheckCircle2,
  },
];

export const fitPlusFeatures = [
  "Workout planning",
  "Meal management",
  "Progress tracking",
  "Consistency support",
];
