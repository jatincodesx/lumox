import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";

export default function CareersPage() {
  return (
    <div className="section">
      <SectionHeader eyebrow="Careers" title="Register your interest"
        sub="Tell us about your skills and the kind of work you enjoy." />
      <div className="card p-6">
        <ContactForm context="careers" />
      </div>
    </div>
  );
}
