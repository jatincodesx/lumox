export function Timeline() {
  const items = [
    { date: "2024", title: "Foundations", text: "Established Lumox to focus on reliable software and networks." },
    { date: "2025", title: "SafeView pilot", text: "Privacy-first childcare video pilot with audit trails." },
    { date: "2025", title: "Kipla MVP", text: "Launched AU home-services MVP with free-first stack." },
    { date: "2025", title: "SpotlightPlus", text: "Smart framing prototype with local controls." }
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
