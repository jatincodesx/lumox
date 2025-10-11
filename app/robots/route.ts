export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://lumox.example";
  const text = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;
  return new Response(text, { headers: { "Content-Type": "text/plain" } });
}
