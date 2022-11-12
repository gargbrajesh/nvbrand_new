/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
    experimental: {
    images: {
    unoptimized:false,
    },
    },
}

module.exports = nextConfig
