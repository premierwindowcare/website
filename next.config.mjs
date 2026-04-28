/** @type {import('next').NextConfig} */

const repoName = "website"

const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },

  // 🔥 REQUIRED for GitHub Pages project repo hosting
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",
}

export default nextConfig