import { ArrowRight, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Contact",
  description:
    "Contact Lumox Technologies about websites, web applications, AI-powered tools, workflow automation, or technical consulting.",
};

export default function ContactPage() {
  return (
    <div className="relative isolate">
      <PageHero
        eyebrow="Contact"
        title="Tell Lumox what you need to build or improve."
        description="Send a short brief about the website, product, automation, AI workflow, dashboard, or internal system you want to move forward."
      />
      <SiteContainer className="py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
          <div className="rounded-lg border border-primary/24 bg-primary/10 p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Start with a short brief</h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">
              Include what you are trying to build, what already exists, the outcome you want, and any timing or budget constraints that matter.
            </p>
            <a
              className={`${buttonVariants({ variant: "warm", size: "lg" })} mt-6`}
              href="mailto:jatin@jatinvohra.com?subject=Lumox%20Technologies%20project%20enquiry"
            >
              <Mail size={18} aria-hidden="true" />
              Email Lumox
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Contact details</h2>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd className="mt-1">
                  <a className="text-ink/70 hover:text-secondary" href="mailto:jatin@jatinvohra.com">
                    jatin@jatinvohra.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Location</dt>
                <dd className="mt-1 text-ink/70">Canberra, ACT</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Best fit</dt>
                <dd className="mt-1 text-ink/70">
                  Websites, web applications, AI-enabled tools, automation, dashboards, and practical digital products.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </SiteContainer>
    </div>
  );
}
