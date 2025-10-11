import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Network } from "lucide-react";

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Code /> Software Development</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm text-ink/80">
          <ul className="list-disc ml-5 space-y-1">
            <li>Web apps, APIs, dashboards, and data pipelines.</li>
            <li>Auth, RBAC, auditing, and sensible rate limits.</li>
            <li>AI-adjacent integrations where they add value.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Python", "FastAPI", "Postgres", "Supabase"].map(t => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Network /> Network Engineering</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm text-ink/80">
          <ul className="list-disc ml-5 space-y-1">
            <li>Secure campus networks and collaboration devices.</li>
            <li>AV/room systems, monitoring, logging, and alerts.</li>
            <li>Runbooks, diagrams, and clean handover.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {["Cisco", "Meraki", "Webex APIs", "IaC", "Monitoring"].map(t => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
