"use client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const Schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Add a bit more detail"),
  website: z.string().optional() // honeypot
});
type FormValues = z.infer<typeof Schema>;

export function ContactForm({ context = "contact" }: { context?: "contact" | "careers" }) {
  const { show } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    if (data.website) return; // bot
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, context }),
      });
      if (!res.ok) throw new Error("Failed");
      show({ title: "Thanks!", description: "We’ll be in touch shortly.", tone: "success" });
      reset();
    } catch {
      show({ title: "Something went wrong", description: "Please try again later.", tone: "error" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="hidden">
        <label>Website<input {...register("website")} className="hidden" /></label>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Name</label>
          <Input placeholder="Your name" {...register("name")} required />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="you@company.com" {...register("email")} required />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium">Company (optional)</label>
        <Input placeholder="Company" {...register("company")} />
      </div>
      <div>
        <label className="text-sm font-medium">Message</label>
        <Textarea placeholder="What do you need help with?" {...register("message")} required />
      </div>
      <Button type="submit" disabled={submitting}>{submitting ? "Sending..." : "Send message"}</Button>
    </form>
  );
}
