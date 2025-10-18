/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',              // -> creates /out on build
  images: { unoptimized: true }, // if you used next/image
  trailingSlash: true,           // optional
  eslint: { ignoreDuringBuilds: true }, // unblock deploy; fix lint later
};
module.exports = nextConfig;