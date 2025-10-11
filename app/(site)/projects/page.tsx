import { SectionHeader } from "@/components/SectionHeader";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <div className="section">
      <SectionHeader eyebrow="Projects" title="Pragmatic builds for real teams" sub="A few highlights under the Lumox umbrella." />
      <ProjectsGrid />
    </div>
  );
}
