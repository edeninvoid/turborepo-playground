/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  transpilePackages: ['@workspace/ui', '@repo/shared'],
};

module.exports = nextConfig;
