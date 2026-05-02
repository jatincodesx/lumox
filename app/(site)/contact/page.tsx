import { SectionHeader } from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <div className="section">
      <SectionHeader
        eyebrow="Contact"
        title="Tell us what you need"
        sub="We'll respond with a practical next step and a clear path to delivery."
      />
      <div className="card p-6">
        <p className="text-sm text-ink/80">
          For now, email <a className="hover:text-secondary" href="mailto:jatin@jatinvohra.com">jatin@jatinvohra.com</a>
        </p>
      </div>
    </div>
  );
}