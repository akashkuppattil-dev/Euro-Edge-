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
      { source: '/projects', destination: '/industries', permanent: true },
      { source: '/services/:slug', destination: '/services', permanent: true },
    ]
  },
}

export default nextConfig
