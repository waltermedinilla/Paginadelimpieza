import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Compresión automática en Vercel (ya habilitada por defecto)
  compress: true,

  // Imágenes: dominios permitidos para next/image
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },

  // Headers de seguridad y caché para producción
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig
