/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alandouglasphotography.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      { hostname: 'cdn.sanity.io' },
    ],
  },
}

module.exports = nextConfig
