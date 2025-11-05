/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }, // hides TS errors, including missing modules
  // output: 'export', // only if you're doing a static export (no /api routes)
};
module.exports = nextConfig;