/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Disable Image Optimization for static export
  },
}

module.exports = nextConfig
