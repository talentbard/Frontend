/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        canvas: require.resolve('canvas'),
        encoding: false,
      };
    }
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      loader: 'source-map-loader',
      exclude: [/node_modules/],
    });
    return config;
  },
};

module.exports = nextConfig;