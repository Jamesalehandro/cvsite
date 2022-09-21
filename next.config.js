/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivityPosition: 'top-left',
  },
  images: {
    domains: ['terrahq.nyc3.cdn.digitaloceanspaces.com'],
  },
};

module.exports = nextConfig;
