/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['64.media.tumblr.com'],
  }
}

module.exports = nextConfig
