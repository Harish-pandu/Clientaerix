/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  images: {
    formats: ['image/webp'],
  },
  devIndicators: {
    buildActivity: false,
  },
  // this disables all dev indicators including the Vercel toolbar
  devIndicators: false,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.module.rules.push({
      test: /\.mjs$/,
      enforce: 'pre',
      use: ['source-map-loader'],
    });

    return config;
  },
};

module.exports = nextConfig;