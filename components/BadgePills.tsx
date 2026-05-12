export function BadgePills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <span key={i} className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs text-primary">
          {i}
        </span>
      ))}
    </div>
  );
}
