/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ativa o modo estrito do React para detectar problemas
  reactStrictMode: true,

  // Desativa a otimização automática de imagens (útil em ambientes de preview ou custom CDN)
  images: {
    unoptimized: true,
  },

  // Ativa transformações forçadas no compilador SWC (ajuda a evitar build cache persistente)
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
