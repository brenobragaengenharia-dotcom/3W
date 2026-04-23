import Link from 'next/link';
import { NOTICIAS_FUTEBOL, NOTICIAS_NBA, NOTICIAS_F1 } from '@/lib/mock-data';
import { schemaBreadcrumb } from '@/lib/structured-data';
import ElfsightFeed, { ELFSIGHT_IDS } from '@/components/ElfsightFeed';
import NetshoesePromo from '@/components/NetshoesePromo';
import NewsletterBanner from '@/components/NewsletterBanner';

export const metadata = {
  title: 'Esportes',
  description: 'Seu universo esportivo — notícias, análises e debates sobre Futebol, NBA e Fórmula 1.',
  alternates: { canonical: 'https://3w-entretenimento.com/esportes' },
  openGraph: {
    title: 'Esportes | 3W Entretenimento',
    description: 'Futebol, NBA e F1 — cobertura completa do esporte.',
  },
};

export default function EsportesPage() {
  const breadcrumb = schemaBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Esportes', url: '/esportes' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Esportes</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl" role="img" aria-label="Esportes">⚽</span>
            <h1 className="text-3xl font-black text-white">Esportes</h1>
          </div>
          <p className="text-[#737373]">Seu universo esportivo — notícias, análises e debates sobre Futebol, NBA e Fórmula 1.</p>
          <a
            href="https://instagram.com/3wesports"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm text-[#737373] hover:text-[#FF6600] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Siga @3wesports no Instagram
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        {/* Futebol */}
        <section aria-labelledby="futebol-title" className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 id="futebol-title" className="text-xl font-bold text-white flex items-center gap-2">
              <span aria-hidden="true">⚽</span> Futebol
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {NOTICIAS_FUTEBOL.map(n => (
              <NoticiaCard key={n.id} noticia={n} />
            ))}
          </div>
        </section>

        {/* NBA */}
        <section aria-labelledby="nba-title" className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 id="nba-title" className="text-xl font-bold text-white flex items-center gap-2">
              <span aria-hidden="true">🏀</span> NBA
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {NOTICIAS_NBA.map(n => (
              <NoticiaCard key={n.id} noticia={n} />
            ))}
          </div>
        </section>

        {/* Fórmula 1 */}
        <section aria-labelledby="f1-title">
          <div className="flex items-center justify-between mb-5">
            <h2 id="f1-title" className="text-xl font-bold text-white flex items-center gap-2">
              <span aria-hidden="true">🏎️</span> Fórmula 1
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {NOTICIAS_F1.map(n => (
              <NoticiaCard key={n.id} noticia={n} />
            ))}
          </div>
        </section>
      </div>

      <NetshoesePromo />

      {/* Posts reais do Instagram @3wesports via Elfsight */}
      <ElfsightFeed
        appId={ELFSIGHT_IDS.esportes}
        title="Últimos Posts — @3wesports"
        perfil="@3wesports"
        href="https://instagram.com/3wesports"
      />
    </>
  );
}

function NoticiaCard({ noticia }) {
  const CATEGORIA_COLORS = {
    'Futebol': 'text-green-400', 'NBA': 'text-orange-400', 'Fórmula 1': 'text-red-400',
  };
  return (
    <article className="card-hover rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a]">
      <Link href={`/noticias/${noticia.slug}`} className="block">
        <div className="aspect-video overflow-hidden bg-[#1a1a1a]">
          <img src={noticia.imagem} alt={noticia.titulo} loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-semibold ${CATEGORIA_COLORS[noticia.categoria] || 'text-[#737373]'}`}>{noticia.categoria}</span>
            <span className="text-[#2a2a2a]" aria-hidden="true">·</span>
            <time dateTime={noticia.data} className="text-xs text-[#737373]">
              {new Date(noticia.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
            </time>
          </div>
          <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 hover:text-green-400 transition-colors">{noticia.titulo}</h3>
          <p className="text-[#737373] text-xs mt-2 line-clamp-2">{noticia.descricao}</p>
          <p className="text-[#737373] text-xs mt-2">{noticia.tempo_leitura} min de leitura</p>
        </div>
      </Link>
    </article>
  );
}
