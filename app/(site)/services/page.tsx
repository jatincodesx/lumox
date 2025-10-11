import { SectionHeader } from "@/components/SectionHeader";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FAQ } from "@/components/FAQ";

export default function ServicesPage() {
  return (
    <div className="section">
      <SectionHeader eyebrow="Services" title="Two pillars: software and networks" sub="We ship production systems you can run with confidence." />
      <ServicesGrid />
      <div className="mt-12 card p-6">
        <h3 className="text-xl font-semibold">Our process</h3>
        <ol className="mt-4 grid gap-3 md:grid-cols-5 text-sm">
          {["Discover", "Design", "Build", "Validate", "Handover"].map((s, i) => (
            <li key={s} className="rounded-xl border border-muted/60 p-3">
              <div className="text-secondary font-semibold">{i + 1}. {s}</div>
              {i === 0 && <p className="text-ink/80">Context, constraints, and the shortest path to value.</p>}
              {i === 1 && <p className="text-ink/80">Sketches, interfaces, and decisions you can review.</p>}
              {i === 2 && <p className="text-ink/80">Incremental builds with weekly visibility.</p>}
              {i === 3 && <p className="text-ink/80">Automated checks and pragmatic testing.</p>}
              {i === 4 && <p className="text-ink/80">Runbooks, diagrams, and training where needed.</p>}
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-12">
        <SectionHeader eyebrow="FAQ" title="Straight answers" />
        <FAQ />
      </div>
    </div>
  );
}
