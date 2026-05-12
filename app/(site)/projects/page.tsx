import { SectionHeader } from "@/components/SectionHeader";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export const metadata = {
  title: "Work",
  description:
    "Lumox Technologies work and capabilities across business websites, AI tools, fitness platform development, and automation dashboards.",
  alternates: {
    canonical: "https://lumoxtech.com.au/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="section">
      <SectionHeader
        eyebrow="Work"
        title="Pragmatic builds and capability areas."
        sub="A focused view of Lumox capability areas and known product work across websites, AI tools, platforms, and automation."
        level="h1"
      />
      <ProjectsGrid />
    </div>
  );
}
