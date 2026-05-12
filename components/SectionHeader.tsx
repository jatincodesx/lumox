export function SectionHeader({
  eyebrow,
  title,
  sub,
  level = "h2",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  level?: "h1" | "h2";
}) {
  const Heading = level;

  return (
    <div className="mb-10 max-w-4xl">
      <div className="eyebrow">{eyebrow}</div>
      <Heading className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">{title}</Heading>
      {sub && <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 md:text-lg">{sub}</p>}
    </div>
  );
}
