import {
  Bot,
  BriefcaseBusiness,
  Code2,
  Layers3,
  MessageSquareText,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MotionCard } from "@/components/animations/MotionCard";

type Service = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Business websites",
    text: "Clear, fast public sites that explain your offer, build trust, and make enquiry paths obvious.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Web applications",
    text: "Portals, dashboards, booking flows, admin tools, and custom systems shaped around how your team works.",
    icon: Code2,
  },
  {
    title: "AI-powered tools",
    text: "Useful AI for drafting, search, classification, analysis, and internal productivity where it fits the workflow.",
    icon: Bot,
  },
  {
    title: "Workflow automation",
    text: "Cleaner handoffs, connected tools, fewer manual steps, and better visibility without unnecessary complexity.",
    icon: Workflow,
  },
  {
    title: "Digital product development",
    text: "MVPs and product iterations that move from idea to usable software with practical engineering decisions.",
    icon: Layers3,
  },
  {
    title: "Technical consulting",
    text: "Architecture, scoping, code reviews, integration planning, and delivery guidance before bigger investment.",
    icon: MessageSquareText,
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="max-w-3xl">
        <div className="eyebrow">Services</div>
        <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">Practical digital systems, built with focus.</h2>
        <p className="mt-5 text-lg leading-8 text-ink/68">
          Lumox works across websites, applications, automation, and AI because real business problems rarely fit into one narrow label.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, text, icon: Icon }) => (
          <MotionCard key={title}>
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink/68">{text}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
