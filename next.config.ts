import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // 禁用 Next.js 热重载，由 nodemon 处理重编译
  reactStrictMode: false,
  webpack: (config, { dev }) => {
    if (dev) {
      // 禁用 webpack 的热模块替换
      config.watchOptions = {
        ignored: ['**/*'], // 忽略所有文件变化
      };
    }
    return config;
  },
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  // Enable static export for Netlify deployment
  output: 'export',
  // Images configuration for static export
  images: {
    unoptimized: true,
  },
  // Remove trailing slashes from URLs
  trailingSlash: false,
  // Generate static params for dynamic routes
  generateBuildId: async () => {
    return 'recap-app-build'
  },
};

export default nextConfig;
