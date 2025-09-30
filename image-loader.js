export default function imageLoader({ src }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/my-portfolio'
  // Remove duplicate base path if it exists in src
  const cleanSrc = src.startsWith(basePath) ? src.slice(basePath.length) : src
  return `${basePath}${cleanSrc}`
}