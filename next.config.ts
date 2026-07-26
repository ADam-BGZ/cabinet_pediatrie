import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/dentiste-t-touan" : "",
  assetPrefix: isProd ? "/dentiste-t-touan/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
