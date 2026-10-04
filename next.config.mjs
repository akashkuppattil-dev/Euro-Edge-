/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.5:3000', '192.168.1.5', 'localhost:3000'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/projects', destination: '/industries', permanent: true },
      { source: '/services/:slug', destination: '/services', permanent: true },
    ]
  },
}

export default nextConfig
