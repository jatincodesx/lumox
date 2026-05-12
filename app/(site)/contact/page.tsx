import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/site-content";

export const metadata = {
  title: "Contact",
  description:
    "Contact Lumox Technologies about websites, web applications, AI-powered tools, workflow automation, or technical consulting.",
  alternates: {
    canonical: "https://lumoxtech.com.au/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="section">
      <SectionHeader
        eyebrow="Contact"
        title="Tell us what you need"
        sub="Email Lumox with what you are trying to build, what already exists, and the outcome you want."
        level="h1"
      />
      <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
        <div className="card p-6">
          <h2 className="text-xl font-semibold">Start with a short brief</h2>
          <p className="mt-3 text-sm leading-6 text-ink/75">
            Send through what you are trying to build, what already exists, and the outcome you want.
            Lumox can help with a new website, custom app, automation, AI-assisted workflow, or technical direction.
          </p>
          <a
            className={`${buttonVariants({ variant: "warm", size: "lg" })} mt-6`}
            href={`mailto:${CONTACT_EMAIL}?subject=Lumox%20Technologies%20project%20enquiry`}
          >
            <Mail size={18} aria-hidden="true" />
            Email Lumox
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold">Contact details</h2>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="font-semibold">Email</dt>
              <dd className="mt-1">
                <a className="hover:text-secondary" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Location</dt>
              <dd className="mt-1 text-ink/75">Canberra, ACT</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
