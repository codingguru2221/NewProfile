# Portfolio Deployment Guide

## GitHub Pages Deployment

To deploy your portfolio to GitHub Pages, you have two options:

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys your site to GitHub Pages whenever you push to the `main` branch.

1. Make sure your repository is hosted on GitHub
2. Go to your repository settings on GitHub
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. Push changes to the `main` branch to trigger automatic deployment

### Option 2: Manual Deployment

If you prefer to deploy manually, you can use the deploy script:

```bash
pnpm run deploy
```

## Troubleshooting CSS Issues

If you're experiencing CSS loading issues on GitHub Pages:

1. Ensure your `next.config.mjs` has the correct basePath and assetPrefix settings
2. Check that you're using the latest deployment method (GitHub Actions is recommended)
3. Verify that all CSS imports in your components are relative or properly aliased

## Custom Domain

To use a custom domain:
1. Create a `CNAME` file in the `public` directory with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages

## Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```