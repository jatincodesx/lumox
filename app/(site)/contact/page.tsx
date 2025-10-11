import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="section">
      <SectionHeader eyebrow="Contact" title="Tell us what you need"
        sub="We’ll respond with a practical next step and a clear path to delivery." />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="card p-6">
          <ContactForm />
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-2">Details</h3>
          <p className="text-sm text-ink/80">Canberra, ACT</p>
          <p className="text-sm text-ink/80 mt-1">
            <a className="hover:text-secondary" href="mailto:hello@lumox.au">hello@lumox.au</a>
          </p>
          <img src="/map-placeholder.svg" alt="Map placeholder" className="mt-6 w-full rounded-xl border border-muted/60" />
        </div>
      </div>
    </div>
  );
}
