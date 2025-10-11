import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  const items = [
    {
      title: "SafeView",
      summary:
        "Privacy-first childcare video with per-child secure streams and audit trails.",
      details:
        "Per-child streams visible only to approved guardians. On-prem or private cloud. Optional face-masking for bystanders, admin-friendly audit logs, and educator-friendly controls.",
    },
    {
      title: "Kipla",
      summary:
        "Home-services marketplace MVP for AU: bookings, provider onboarding, reviews.",
      details:
        "Providers list services and availability. Customers book, review, and rebook. Built on a free-first stack with pragmatic guardrails for growth.",
    },
    {
      title: "SpotlightPlus",
      summary:
        "Intelligent camera spotlighting: auto-frame the subject, blur bystanders.",
      details:
        "Local control and clear on-device UX. Smart framing that reduces distraction while respecting privacy.",
    },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((i) => <ProjectCard key={i.title} {...i} />)}
    </div>
  );
}
