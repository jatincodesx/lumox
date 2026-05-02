import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, BriefcaseBusiness, Code2, Layers3, MessageSquareText, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Business websites",
    text: "Professional sites for service businesses, product launches, and clearer online positioning.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Web applications",
    text: "Custom portals, dashboards, booking flows, admin tools, and internal business systems.",
    icon: Code2,
  },
  {
    title: "AI-powered tools",
    text: "Useful AI features for drafting, search, triage, classification, and repeatable knowledge work.",
    icon: Bot,
  },
  {
    title: "Workflow automation",
    text: "Automation that connects tools, reduces manual handling, and improves operational visibility.",
    icon: Workflow,
  },
  {
    title: "Technical consulting",
    text: "Architecture, scoping, code review, integration planning, and delivery advice before you overbuild.",
    icon: MessageSquareText,
  },
  {
    title: "Digital product development",
    text: "MVPs and product iterations designed to become usable software, not just attractive mockups.",
    icon: Layers3,
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
