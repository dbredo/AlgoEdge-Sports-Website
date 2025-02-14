/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/images/favicon.ico",
      },
    ]
  },
}

module.exports = nextConfig