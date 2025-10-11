import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional(), // honeypot (must be empty)
  context: z.string().optional()
});

export async function POST(req: Request) {
  try {
    const parsed = Schema.parse(await req.json());
    const { name, email, company, message, website, context } = parsed;

    // Honeypot: if filled, treat as bot
    if (website && website.trim().length > 0) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    // --- Primary: Resend ---
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const to = process.env.RESEND_TO_EMAIL || "jatin@jatinvohra.com";
      const from =
        process.env.RESEND_FROM || "Lumox <noreply@lumox.au>"; // use a verified domain in Resend

      await resend.emails.send({
        from,
        to: [to],
        subject: `New ${context ?? "website"} message from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          company ? `Company: ${company}` : "",
          "",
          message
        ]
          .filter(Boolean)
          .join("\n")
      });

      return NextResponse.json({ ok: true });
    }

    // --- Fallback: Formspree (recipient set in Formspree dashboard) ---
    const formId = process.env.FORMSPREE_FORM_ID;
    if (formId) {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
          context,
          _subject: `New ${context ?? "website"} message from ${name}`
        })
      });
      if (!res.ok) return NextResponse.json({ ok: false }, { status: 500 });
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: false, error: "Form not configured" }, { status: 500 });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
  }
}