import { ROUTES } from "@/lib/seo";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://lumox.example";
  const urls = ROUTES.map(
    (p) => `<url><loc>${base}${p}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`
  ).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
