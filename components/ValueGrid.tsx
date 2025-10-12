import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Workflow, FileText } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Security by design",
    text: "Least-privilege access, encrypted secrets, and reviewable changesets.",
  },
  {
    icon: Workflow,
    title: "Operational reliability",
    text: "Alerting and monitoring that match your context, not noise.",
  },
  {
    icon: FileText,
    title: "Clear documentation",
    text: "Versioned configs, diagrams, and handover packs you can maintain.",
  },
];

export function ValueGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map(({ icon: Icon, title, text }) => (
        <Card key={title}>
          <CardContent>
            <Icon className="text-secondary" />
            <CardTitle className="mt-3">{title}</CardTitle>
            <p className="text-ink/80 text-sm mt-2">{text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
