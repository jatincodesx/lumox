import { SectionHeader } from "@/components/SectionHeader";
import { ServicesGrid } from "@/components/ServicesGrid";
import { MotionCard, StaggerContainer } from "@/components/motion-primitives";
import { processSteps } from "@/lib/site-content";

export const metadata = {
  title: "Services",
  description:
    "Websites, web applications, AI-powered tools, workflow automation, technical consulting, and digital product development from Lumox Technologies.",
  alternates: {
    canonical: "https://lumoxtech.com.au/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="section">
      <SectionHeader
        eyebrow="Services"
        title="Digital services for practical business outcomes."
        sub="Websites, applications, automation, AI tools, product development, and technical consulting for businesses that need reliable delivery."
        level="h1"
      />
      <ServicesGrid />
      <div className="mt-16">
        <SectionHeader
          eyebrow="Process"
          title="A clear four-step path."
          sub="Every engagement starts with the business problem, then moves through design, build, launch, and improvement."
        />
        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <MotionCard key={step.title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h2 className="mt-5 text-xl font-semibold">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/75">{step.text}</p>
            </MotionCard>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
