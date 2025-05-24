/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Wymagane dla statycznego eksportu
  distDir: 'out',   // Folder wynikowy
  images: {
    unoptimized: true, // Wyłącza optymalizację obrazów
  },
  trailingSlash: true, // Zalecane dla GitHub Pages
}

module.exports = nextConfig