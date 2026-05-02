import { SectionHeader } from "@/components/SectionHeader";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export const metadata = {
  title: "Projects",
  description:
    "Featured Lumox Technologies projects and product concepts, including FitPlus, SafeView, Kipla, and SpotlightPlus.",
};

export default function ProjectsPage() {
  return (
    <div className="section">
      <SectionHeader
        eyebrow="Projects"
        title="Pragmatic builds and product concepts"
        sub="A few highlights under the Lumox umbrella."
        level="h1"
      />
      <ProjectsGrid />
    </div>
  );
}
