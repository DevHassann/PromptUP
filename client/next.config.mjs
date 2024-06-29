/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["pixner.net", "res.cloudinary.com"],
  },
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash:8].[ext]",
          outputPath: "static/media/",
          publicPath: "/_next/static/media/",
        },
      },
    });
    return config;
  },
};

export default nextConfig;
