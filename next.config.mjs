/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'i.vimeocdn.com' },
      { protocol: 'https', hostname: 'vumbnail.com' }
    ]
  },
  experimental: {
    optimizePackageImports: ['framer-motion']
  }
};

export default nextConfig;
