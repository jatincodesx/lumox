export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-8">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="text-2xl md:text-3xl font-semibold mt-2">{title}</h2>
      {sub && <p className="text-ink/80 mt-2">{sub}</p>}
    </div>
  );
}
