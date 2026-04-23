import Link from 'next/link';
import { FILMES, SERIES, NOTICIAS } from '@/lib/mock-data';
import { schemaBreadcrumb } from '@/lib/structured-data';
import ElfsightFeed, { ELFSIGHT_IDS } from '@/components/ElfsightFeed';

const NOTICIAS_CINEMA = NOTICIAS
  .filter((n) => n.categoria === 'Cinema')
  .sort((a, b) => new Date(b.data) - new Date(a.data));

const NOTICIAS_SERIES = NOTICIAS
  .filter((n) => n.categoria === 'Séries')
  .sort((a, b) => new Date(b.data) - new Date(a.data));

export const metadata = {
  title: 'Filmes e Séries',
  description: 'Os melhores filmes em cartaz e séries para maratonar. Lançamentos, reviews e notas em um só lugar.',
  alternates: { canonical: 'https://3w-entretenimento.com/filmes-e-series' },
  openGraph: {
    title: 'Filmes e Séries | 3W Entretenimento',
    description: 'Filmes e séries em destaque — lançamentos, reviews e notas.',
  },
};

export default function FilmesESeriesPage() {
  const breadcrumb = schemaBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Filmes e Séries', url: '/filmes-e-series' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Filmes e Séries</span>
        </nav>

        <h1 className="text-3xl font-black text-white mb-2">Filmes e Séries</h1>
        <p className="text-[#737373] mb-10">Lançamentos, clássicos e maratonas imperdíveis.</p>

        {/* Filmes */}
        <section aria-labelledby="filmes-title" className="mb-12">
          <h2 id="filmes-title" className="text-xl font-bold text-white mb-5">🎬 Filmes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {FILMES.map((filme) => (
              <article key={filme.id} className="card-hover">
                <Link href={`/filmes/${filme.slug}`} className="block">
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#1a1a1a] mb-2">
                    <img
                      src={filme.imagem}
                      alt={`Capa: ${filme.titulo}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    {filme.nota && (
                      <div className="absolute top-2 right-2">
                        <span className="rating-badge">★ {filme.nota}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-white text-xs font-semibold leading-snug line-clamp-2 mb-1">{filme.titulo}</h3>
                  <p className="text-[#737373] text-xs">{filme.ano} · {filme.categoria}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Séries */}
        <section aria-labelledby="series-title" className="mb-12">
          <h2 id="series-title" className="text-xl font-bold text-white mb-5">📺 Séries</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SERIES.map((serie) => (
              <article key={serie.id} className="card-hover">
                <Link href={`/series/${serie.slug}`} className="block">
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#1a1a1a] mb-2">
                    <img
                      src={serie.imagem}
                      alt={`Capa: ${serie.titulo}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    {serie.nota && (
                      <div className="absolute top-2 right-2">
                        <span className="rating-badge">★ {serie.nota}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-white text-xs font-semibold leading-snug line-clamp-2 mb-1">{serie.titulo}</h3>
                  <p className="text-[#737373] text-xs">{serie.ano} · {serie.categoria}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Notícias de Cinema */}
        {NOTICIAS_CINEMA.length > 0 && (
          <section aria-labelledby="noticias-cinema-title" className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2 id="noticias-cinema-title" className="text-xl font-bold text-white">🎬 Notícias de Cinema</h2>
              <Link href="/noticias" className="text-sm text-[#737373] hover:text-[#FF6600] transition-colors flex items-center gap-1">
                Ver todas
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NOTICIAS_CINEMA.map((n) => (
                <article key={n.slug} className="card-hover rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a]">
                  <Link href={`/noticias/${n.slug}`} className="block">
                    <div className="aspect-video overflow-hidden bg-[#1a1a1a]">
                      <img src={n.imagem} alt={n.titulo} loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-red-400">{n.categoria}</span>
                        <span className="text-[#2a2a2a]" aria-hidden="true">·</span>
                        <time dateTime={n.data} className="text-xs text-[#737373]">{new Date(n.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</time>
                      </div>
                      <h3 className="text-white font-bold text-sm leading-snug mb-2 line-clamp-2 hover:text-[#FF6600] transition-colors">{n.titulo}</h3>
                      <p className="text-[#737373] text-xs line-clamp-2">{n.descricao}</p>
                      <p className="text-[#737373] text-xs mt-2">{n.autor} · {n.tempo_leitura} min</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Notícias de Séries */}
        {NOTICIAS_SERIES.length > 0 && (
          <section aria-labelledby="noticias-series-title">
            <div className="flex items-center justify-between mb-5">
              <h2 id="noticias-series-title" className="text-xl font-bold text-white">📺 Notícias de Séries</h2>
              <Link href="/noticias" className="text-sm text-[#737373] hover:text-[#FF6600] transition-colors flex items-center gap-1">
                Ver todas
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NOTICIAS_SERIES.map((n) => (
                <article key={n.slug} className="card-hover rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a]">
                  <Link href={`/noticias/${n.slug}`} className="block">
                    <div className="aspect-video overflow-hidden bg-[#1a1a1a]">
                      <img src={n.imagem} alt={n.titulo} loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-blue-400">{n.categoria}</span>
                        <span className="text-[#2a2a2a]" aria-hidden="true">·</span>
                        <time dateTime={n.data} className="text-xs text-[#737373]">{new Date(n.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</time>
                      </div>
                      <h3 className="text-white font-bold text-sm leading-snug mb-2 line-clamp-2 hover:text-[#FF6600] transition-colors">{n.titulo}</h3>
                      <p className="text-[#737373] text-xs line-clamp-2">{n.descricao}</p>
                      <p className="text-[#737373] text-xs mt-2">{n.autor} · {n.tempo_leitura} min</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Posts reais do Instagram @3worlds_entertainment via Elfsight */}
      <ElfsightFeed
        appId={ELFSIGHT_IDS.entretenimento}
        title="Últimos Posts — @3worlds_entertainment"
        perfil="@3worlds_entertainment"
        href="https://instagram.com/3worlds_entertainment"
      />
    </>
  );
}
