import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export function ProjectCard({
  title, summary, details
}: { title: string; summary: string; details: string; }) {
  return (
    <Dialog>
      <Card>
        <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-ink/80">{summary}</p>
          <DialogTrigger className="text-secondary underline underline-offset-2">Read more</DialogTrigger>
        </CardContent>
      </Card>
      <DialogContent>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-sm text-ink/80">{details}</p>
      </DialogContent>
    </Dialog>
  );
}
