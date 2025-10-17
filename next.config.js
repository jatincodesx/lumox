/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // builds a static /out folder
  images: { unoptimized: true }, // needed if you used next/image
  trailingSlash: true,           // optional, but nice on static hosts
};
module.exports = nextConfig;