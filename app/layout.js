import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { schemaOrganization, schemaWebSite } from '@/lib/structured-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import CookieBanner from '@/components/CookieBanner';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

const SITE_URL = 'https://3w-entretenimento.com';

// ── Metadata global (herdada por todas as páginas) ────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '3W Entretenimento | Seu Universo de Entretenimento',
    template: '%s | 3W Entretenimento',
  },
  description: 'Descubra o melhor do entretenimento: filmes, séries, comics, esportes e eventos. Tudo em um só lugar.',
  keywords: ['entretenimento', 'filmes', 'séries', 'comics', 'hqs', 'mangás', 'esportes', 'futebol', 'nba', 'f1', 'brasil'],
  authors: [{ name: '3W Entretenimento', url: SITE_URL }],
  creator: '3W Entretenimento',
  publisher: '3W Entretenimento',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: '3W Entretenimento',
    title: '3W Entretenimento | Seu Universo de Entretenimento',
    description: 'Descubra o melhor do entretenimento: filmes, séries, comics, esportes e eventos.',
    images: [{ url: '/images/og-default.svg', width: 1200, height: 630, alt: '3W Entretenimento' }],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '3W Entretenimento | Seu Universo de Entretenimento',
    description: 'Descubra o melhor do entretenimento: filmes, séries, comics, esportes e eventos.',
    images: ['/images/og-default.svg'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },

  // Alternates / Canonical
  alternates: { canonical: SITE_URL },

  // Ícones
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/icons/icon-180x180.png',
  },

  // Verificações de propriedade (preencha com seus tokens)
  verification: {
    google: 'Lq9TgmBSqEGN-GZeWvKh5t2LgzNYT8itC0Bob7WtIH8',
    // bing: 'SEU_BING_VERIFICATION_TOKEN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0d0d] text-white antialiased">

        {/* Acessibilidade: pular para o conteúdo principal */}
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>

        {/* JSON-LD: Organization + WebSite (em todas as páginas) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
        />

        {/* GA4 + Meta Pixel — só carregam se as env vars estiverem definidas */}
        <Analytics />

        {/* Script Elfsight — carregado uma vez, ativa todos os widgets */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />

        {/* LGPD — consentimento de cookies (renderiza só na 1ª visita) */}
        <CookieBanner />
      </body>
    </html>
  );
}
