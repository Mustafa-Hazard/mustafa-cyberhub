// Fix 4 — Enable Next.js compression in next.config.js:

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true, // Enable compression for faster load times
};

module.exports = nextConfig;
