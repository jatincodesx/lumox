import { MotionCard, StaggerContainer } from "@/components/motion-primitives";
import { capabilityProjects } from "@/lib/site-content";

export function ProjectsGrid() {
  return (
    <StaggerContainer className="grid gap-6 md:grid-cols-2">
      {capabilityProjects.map((project) => (
        <MotionCard key={project.title} className="min-h-[230px]">
          <p className="text-sm font-semibold text-secondary">{project.label}</p>
          <h2 className="mt-4 text-2xl font-semibold">{project.title}</h2>
          <p className="mt-4 text-sm leading-6 text-ink/75">{project.text}</p>
        </MotionCard>
      ))}
    </StaggerContainer>
  );
}
