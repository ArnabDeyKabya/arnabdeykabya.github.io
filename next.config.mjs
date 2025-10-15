/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  //basePath: '/my-portfolio',
  //assetPrefix: '/my-portfolio/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
}

export default nextConfig
