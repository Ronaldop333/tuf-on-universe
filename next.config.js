/** @type {import('next').NextConfig} */
const nextConfig = {
  // 'appDir' não é mais experimental no Next.js 14
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
