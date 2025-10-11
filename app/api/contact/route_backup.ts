import { NextResponse } from "next/server";

/**
 * Proxies to Formspree using a private form ID.
 * Set FORMSPREE_FORM_ID in your .env.local
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { name, email, company, message, website, context } = body || {};
  if (!name || !email || !message || website) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const formId = process.env.FORMSPREE_FORM_ID;
  if (!formId) return NextResponse.json({ ok: false, error: "Form not configured" }, { status: 500 });

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name, email, company, message, context,
      _subject: `New ${context} message from ${name}`,
    }),
  });

  if (!res.ok) return NextResponse.json({ ok: false }, { status: 500 });
  return NextResponse.json({ ok: true });
}
