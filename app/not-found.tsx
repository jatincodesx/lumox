import Link from "next/link";
export default function NotFound() {
  return (
    <div className="section text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="text-ink/80 mt-2">Let’s get you back to something useful.</p>
      <Link className="inline-block mt-4 text-secondary underline" href="/">Go home</Link>
    </div>
  );
}
