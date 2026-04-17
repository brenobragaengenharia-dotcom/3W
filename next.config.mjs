/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimização de imagens — adicione domínios externos conforme necessário
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'image.tmdb.org' },
      { protocol: 'https', hostname: 'i.scdn.co' },
      { protocol: 'https', hostname: '**.3w-entretenimento.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Compressão
  compress: true,

  // Headers de segurança para todas as rotas
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'X-Frame-Options',            value: 'DENY' },
          { key: 'X-XSS-Protection',           value: '1; mode=block' },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',         value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      // Cache agressivo para assets estáticos
      {
        source: '/icons/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },

  // Redirects úteis para SEO
  async redirects() {
    return [
      { source: '/home',    destination: '/',         permanent: true },
      { source: '/inicio',  destination: '/',         permanent: true },
      { source: '/movies',  destination: '/filmes',   permanent: true },
      { source: '/series',  destination: '/series',   permanent: false },
      { source: '/music',   destination: '/musica',   permanent: true },
      { source: '/games',   destination: '/jogos',    permanent: true },
      { source: '/news',    destination: '/noticias', permanent: true },
      { source: '/events',  destination: '/eventos',  permanent: true },
    ];
  },
};

export default nextConfig;
