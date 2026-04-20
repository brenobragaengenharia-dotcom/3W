import Link from 'next/link';
import { FILMES, SERIES } from '@/lib/mock-data';
import { schemaBreadcrumb } from '@/lib/structured-data';
import ElfsightFeed, { ELFSIGHT_IDS } from '@/components/ElfsightFeed';

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
        <section aria-labelledby="series-title">
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
