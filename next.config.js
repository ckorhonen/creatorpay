/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimized for Cloudflare Workers/Vercel
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig