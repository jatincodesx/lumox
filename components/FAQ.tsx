import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="slo">
        <AccordionTrigger>What does delivery look like?</AccordionTrigger>
        <AccordionContent>
          Short sprints with visible increments. You’ll see progress weekly, not just at milestones.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="security">
        <AccordionTrigger>How do you approach security?</AccordionTrigger>
        <AccordionContent>
          Threat-aware defaults, secrets hygiene, and peer review. We document trade-offs clearly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="handover">
        <AccordionTrigger>Will we get proper handover?</AccordionTrigger>
        <AccordionContent>
          Yes—runbooks, diagrams, and versioned configs so you’re not locked to us.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
