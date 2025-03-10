/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true, // Allow image optimization for local images
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader",
        exclude: [/node_modules/],
      });
      return config;
    },
  };
  
  module.exports = nextConfig;
  