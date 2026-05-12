import { SectionHeader } from "@/components/SectionHeader";
import { MotionCard, StaggerContainer } from "@/components/motion-primitives";
import { whyLumox } from "@/lib/site-content";

export const metadata = {
  title: "About",
  description:
    "Lumox Technologies is a Canberra-based technology services company building practical websites, apps, automation, and AI-powered systems.",
  alternates: {
    canonical: "https://lumoxtech.com.au/about",
  },
};

export default function AboutPage() {
  return (
    <div className="section">
      <SectionHeader
        eyebrow="About"
        title="A practical technology partner based in Canberra."
        sub="Lumox Technologies builds digital systems that are maintainable, understandable, and useful for real business operations."
        level="h1"
      />
      <StaggerContainer className="grid gap-5 md:grid-cols-2">
        {whyLumox.map(({ title, text, icon: Icon }) => (
          <MotionCard key={title}>
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">{text}</p>
          </MotionCard>
        ))}
      </StaggerContainer>
      <div className="mt-12 rounded-lg border border-muted/60 bg-bg/90 p-6 shadow-soft">
        <h2 className="text-2xl font-semibold">Canberra, Australia, and remote-ready delivery.</h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-ink/75">
          Lumox works with local Canberra businesses and Australian teams that need websites,
          web applications, AI-powered tools, automation systems, and digital products built
          with clear priorities and maintainable technical foundations.
        </p>
      </div>
    </div>
  );
}
