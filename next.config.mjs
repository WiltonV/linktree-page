/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/linktree-page", // Comentado para desenvolvimento local
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
