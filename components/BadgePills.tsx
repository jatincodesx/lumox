export function BadgePills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <span key={i} className="text-xs rounded-full border border-muted/60 px-2.5 py-1 bg-white dark:bg-[#0f172a]">
          {i}
        </span>
      ))}
    </div>
  );
}
