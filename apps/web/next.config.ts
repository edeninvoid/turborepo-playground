/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  transpilePackages: ['@repo/ui', '@repo/shared'],
};

module.exports = nextConfig;
