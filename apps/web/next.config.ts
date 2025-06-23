/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  transpilePackages: ['@repo/ui', '@repo/shared'],
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  experimental: {
    viewTransition: true,
  },
};

module.exports = nextConfig;
