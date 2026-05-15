import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SiteContainer } from "@/components/layout/SiteContainer";

export const metadata = {
  title: "About",
  description:
    "Lumox Technologies is a Canberra-based technology services company building practical websites, apps, automation, and AI-powered systems.",
};

export default function AboutPage() {
  return (
    <div className="relative isolate">
      <PageHero
        eyebrow="About"
        title="A practical digital product and AI/web studio."
        description="Lumox Technologies builds real business tools: websites, web applications, automations, dashboards, AI-enabled workflows, and focused digital products."
        primaryCta={{ href: "/contact", label: "Start a Project" }}
        secondaryCta={{ href: "/services", label: "Explore services" }}
      />
      <SiteContainer className="py-20 md:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Practical outcomes",
              text: "The work starts with what the business needs the system to do, then moves into interface, data, automation, and technical choices.",
            },
            {
              title: "Client-facing delivery",
              text: "Lumox keeps scope, tradeoffs, progress, and handover clear so clients can make informed decisions throughout the build.",
            },
            {
              title: "Useful software",
              text: "The aim is not novelty for its own sake. Websites, tools, and products should be maintainable, understandable, and used.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 shadow-soft backdrop-blur">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/70">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">How Lumox works</div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Build the right version first.
            </h2>
          </div>
          <div className="rounded-lg border border-white/10 bg-[rgba(8,18,34,0.72)] p-6 md:p-8">
            <p className="text-lg leading-8 text-ink/76">
              Lumox focuses on delivery that can be explained, operated, and improved. That means careful scope, polished interfaces, responsive implementation, and technical foundations that suit the stage of the business.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-ink/72 sm:grid-cols-2">
              <li className="rounded-lg border border-white/10 bg-white/[0.03] p-4">Reliable foundations before unnecessary complexity.</li>
              <li className="rounded-lg border border-white/10 bg-white/[0.03] p-4">Clear communication to reduce rework.</li>
              <li className="rounded-lg border border-white/10 bg-white/[0.03] p-4">Security, privacy, and maintainability treated seriously.</li>
              <li className="rounded-lg border border-white/10 bg-white/[0.03] p-4">Handover and improvement considered part of delivery.</li>
            </ul>
          </div>
        </div>
      </SiteContainer>
      <CTASection
        title="Work with a studio that keeps the build practical."
        text="Bring the business goal, the current constraints, and the system you think you need. Lumox will help shape the path."
      />
    </div>
  );
}
