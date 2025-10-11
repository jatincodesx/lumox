import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ValueGrid } from "@/components/ValueGrid";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { LogoStrip } from "@/components/LogoStrip";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section">
        <SectionHeader eyebrow="Why Lumox" title="Focused on outcomes" sub="Reliable build quality, clear comms, and maintainable systems." />
        <ValueGrid />
      </section>
      <section className="section">
        <SectionHeader eyebrow="What we do" title="Software & Network Engineering" />
        <ServicesGrid />
      </section>
      <section className="section">
        <SectionHeader eyebrow="Selected work" title="Recent projects" />
        <ProjectsGrid />
      </section>
      <section className="section">
        <SectionHeader eyebrow="Trusted by teams" title="Logos (placeholders)" />
        <LogoStrip />
      </section>
      <CTA />
    </>
  );
}
