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
    <div className="mb-8">
      <div className="eyebrow">{eyebrow}</div>
      <Heading className="text-2xl md:text-3xl font-semibold mt-2">{title}</Heading>
      {sub && <p className="text-ink/80 mt-2">{sub}</p>}
    </div>
  );
}
