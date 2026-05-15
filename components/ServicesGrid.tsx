import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, BriefcaseBusiness, Code2, Layers3, MessageSquareText, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Website design and rebuilds",
    text: "Clear, fast sites for service businesses, launches, and established brands that need sharper positioning.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Custom web applications",
    text: "Portals, booking flows, admin tools, internal systems, and client-facing software shaped around real workflows.",
    icon: Code2,
  },
  {
    title: "AI tools and automation",
    text: "Useful AI features for drafting, search, triage, classification, repeatable knowledge work, and workflow support.",
    icon: Bot,
  },
  {
    title: "Digital product MVPs",
    text: "Early product builds and iterations designed to become usable software, not just attractive prototypes.",
    icon: Layers3,
  },
  {
    title: "Dashboards and integrations",
    text: "Operational dashboards, connected tools, cleaner handoffs, and better visibility across business systems.",
    icon: Workflow,
  },
  {
    title: "Ongoing improvement and support",
    text: "Technical direction, refinement, maintenance, measurement, and practical support after launch.",
    icon: MessageSquareText,
  },
];

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map(({ title, text, icon: Icon }) => (
        <Card key={title}>
          <CardHeader>
            <Icon className="h-6 w-6 text-secondary" aria-hidden="true" />
            <CardTitle className="mt-4">{title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-ink/80">
            <p>{text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
