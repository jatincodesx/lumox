import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export default function AboutPage() {
  return (
    <div className="section">
      <SectionHeader eyebrow="About" title="Mission & values"
        sub="We help teams deliver software and networks that are maintainable, observable, and safe." />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-2">What we believe</h3>
          <ul className="list-disc ml-5 text-sm text-ink/80 space-y-1">
            <li>Reliability beats novelty.</li>
            <li>Security and privacy are table stakes.</li>
            <li>Clear communication prevents rework.</li>
            <li>Handover is part of delivery, not an afterthought.</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-2">Leadership</h3>
          <p className="text-sm text-ink/80">
            Led by engineers with hands-on experience shipping apps and standing up collaboration
            networks. Canberra-based, working with Australian teams.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <SectionHeader eyebrow="Road so far" title="Timeline" />
        <Timeline />
      </div>
    </div>
  );
}
