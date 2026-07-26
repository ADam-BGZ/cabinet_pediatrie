import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/cabinet_pediatrie" : "",
  assetPrefix: isProd ? "/cabinet_pediatrie/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
