/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  // Replace 'your-repo-name' with your actual GitHub repository name
  basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
  assetPrefix: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
  // Output HTML files for static hosting
  output: 'export',
}

export default nextConfig
