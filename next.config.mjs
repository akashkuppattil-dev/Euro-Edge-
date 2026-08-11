/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/services/swimming-pool-maintenance', destination: '/services/swimming-pool', permanent: true },
      { source: '/services/floor-wall-tiling', destination: '/services/tiling-works', permanent: true },
      { source: '/services/carpentry-wood-flooring', destination: '/services/carpentry-flooring', permanent: true },
    ]
  },
}

export default nextConfig
