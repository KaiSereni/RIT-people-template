import type { NextConfig } from "next";

const username = process.env.SSH_USER

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  basePath: `/${username}`,
  assetPrefix: `/${username}/`
};

export default nextConfig;
