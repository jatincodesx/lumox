import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  const items = [
    {
      title: "FitPlus",
      summary:
        "Fitness and nutrition platform for workout planning, meal management, progress tracking, and consistency.",
      details:
        "FitPlus is a featured Lumox product designed to help users plan workouts, manage meals, track progress, and stay consistent with their health goals.",
    },
    {
      title: "Business website systems",
      summary:
        "Positioning, page structure, responsive implementation, SEO basics, and enquiry paths.",
      details:
        "Lumox can design and build practical websites that explain the offer clearly, support trust, and guide visitors towards the next useful action.",
    },
    {
      title: "Automation dashboards",
      summary:
        "Operational views that connect workflows, reduce manual tracking, and make status easier to understand.",
      details:
        "Lumox can build dashboards and internal tools around existing business processes, integrations, and reporting needs.",
    },
    {
      title: "AI-assisted business tools",
      summary:
        "Focused AI features for drafting, search, classification, review, and repeatable knowledge work.",
      details:
        "Lumox can add useful AI to business workflows where human review, clear inputs, and practical controls remain part of the system.",
    },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((i) => <ProjectCard key={i.title} {...i} />)}
    </div>
  );
}
