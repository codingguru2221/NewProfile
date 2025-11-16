/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix Turbopack root warning
  experimental: {
    turbopack: {
      root: '.',
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration for NewProfile repository
  basePath: '/NewProfile',
  assetPrefix: '/NewProfile',
  // Output HTML files for static hosting
  output: 'export',
}

export default nextConfig
