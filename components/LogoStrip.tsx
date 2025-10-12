export function LogoStrip() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-70">
      {["Acme", "Northwind", "Globex", "Umbrella"].map((n) => (
        <div key={n} className="h-10 rounded-lg border border-muted/60 flex items-center justify-center text-sm">
          {n}
        </div>
      ))}
    </div>
  );
}
