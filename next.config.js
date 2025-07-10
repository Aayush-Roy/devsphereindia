/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com'],
  },
  trailingSlash: true,
  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;