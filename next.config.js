const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@import "App.scss";',
  },
  images: {
    domains: [
      'avatar-ex-swe.nixcdn.com',
      'binhnguyenCitynow.github.io',
      'localhost:3000',
      'localhost:6006',
    ],
  },
};

module.exports = nextConfig;
