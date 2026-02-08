/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/linktree-page",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
