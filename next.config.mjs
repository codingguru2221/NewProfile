/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  basePath: '',
  assetPrefix: '',
  // Output HTML files for static hosting
  output: 'export',
}

export default nextConfig
