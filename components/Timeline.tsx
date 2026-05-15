export function Timeline() {
  const items = [
    { date: "2024", title: "Foundations", text: "Established Lumox to focus on practical digital delivery." },
    { date: "2025", title: "FitPlus", text: "Fitness and nutrition platform under Products by Lumox." },
    { date: "Now", title: "Focused delivery", text: "Websites, AI-enabled tools, automations, dashboards, and product MVPs." }
  ];
  return (
    <ol className="relative border-s border-muted/60 pl-6 space-y-6">
      {items.map((i) => (
        <li key={i.title}>
          <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-secondary" />
          <div className="text-xs text-ink/60">{i.date}</div>
          <div className="font-semibold">{i.title}</div>
          <p className="text-sm text-ink/80">{i.text}</p>
        </li>
      ))}
    </ol>
  );
}
