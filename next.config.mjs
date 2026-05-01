/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for static export (GitHub Pages)
  images: {
    unoptimized: true, // required for static export
  },
};

module.exports = nextConfig;