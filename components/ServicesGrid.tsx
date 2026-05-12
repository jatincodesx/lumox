import { MotionCard, StaggerContainer } from "@/components/motion-primitives";
import { services } from "@/lib/site-content";

export function ServicesGrid() {
  return (
    <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map(({ title, text, icon: Icon }) => (
        <MotionCard key={title}>
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <h2 className="mt-5 text-xl font-semibold">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-ink/75">{text}</p>
        </MotionCard>
      ))}
    </StaggerContainer>
  );
}
