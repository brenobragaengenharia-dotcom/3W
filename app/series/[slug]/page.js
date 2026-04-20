import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERIES } from '@/lib/mock-data';
import { schemaBreadcrumb } from '@/lib/structured-data';
import content from '@/lib/content.json';

export async function generateStaticParams() {
  return SERIES.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const serie  = SERIES.find(s => s.slug === slug);
  const gerado = content.series?.[slug];
  if (!serie) return {};
  return {
    title:       serie.titulo,
    description: gerado?.sinopse_pt ?? serie.titulo,
    alternates:  { canonical: `https://3w-entretenimento.com/series/${slug}` },
    openGraph: {
      title:       serie.titulo,
      description: gerado?.sinopse_pt ?? '',
      images: [{ url: gerado?.backdrop ?? serie.imagem }],
    },
  };
}

export default async function SeriePage({ params }) {
  const { slug } = await params;
  const serie  = SERIES.find(s => s.slug === slug);
  if (!serie) notFound();

  const g = content.series?.[slug];
  const breadcrumb = schemaBreadcrumb([
    { name: 'Home',            url: '/' },
    { name: 'Filmes e Séries', url: '/filmes-e-series' },
    { name: serie.titulo,      url: `/series/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero backdrop */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden bg-[#141414]">
        <img
          src={g?.backdrop ?? serie.imagem}
          alt={serie.titulo}
          className="w-full h-full object-cover object-center"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <Link href="/filmes-e-series">Filmes e Séries</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">{serie.titulo}</span>
        </nav>

        {/* Cabeçalho */}
        <div className="flex gap-6 mb-8">
          <img
            src={g?.poster ?? serie.imagem}
            alt={`Pôster: ${serie.titulo}`}
            className="hidden sm:block w-32 rounded-lg object-cover flex-shrink-0 self-start"
          />
          <div>
            {g?.manchete && (
              <p className="text-[#FF6600] text-sm font-semibold uppercase tracking-widest mb-2">
                {g.manchete}
              </p>
            )}
            <h1 className="text-3xl md:text-4xl font-black text-white mb-3">{serie.titulo}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#737373] mb-4">
              {serie.ano        && <span>{serie.ano}</span>}
              {g?.temporadas    && <><span aria-hidden="true">·</span><span>{g.temporadas} temporada{g.temporadas > 1 ? 's' : ''}</span></>}
              {serie.nota       && <span className="rating-badge">★ {serie.nota}</span>}
              {g?.nota_tmdb     && <span className="text-xs text-[#737373]">TMDB {g.nota_tmdb}</span>}
            </div>
            {g?.generos?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {g.generos.map(gen => (
                  <span key={gen} className="text-xs bg-[#1a1a1a] border border-[#2a2a2a] text-[#b3b3b3] px-2 py-0.5 rounded-full">
                    {gen}
                  </span>
                ))}
              </div>
            )}
            {g?.redes?.length > 0 && (
              <p className="text-sm text-[#737373]">
                <span className="text-white font-medium">Plataforma:</span> {g.redes.join(', ')}
              </p>
            )}
            {g?.criadores && (
              <p className="text-sm text-[#737373] mt-1">
                <span className="text-white font-medium">Criado por:</span> {g.criadores}
              </p>
            )}
          </div>
        </div>

        {/* Sinopse */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Sinopse</h2>
          <p className="text-[#b3b3b3] leading-relaxed border-l-2 border-[#FF6600] pl-4">
            {g?.sinopse_pt ?? serie.titulo}
          </p>
        </section>

        {/* Review */}
        {g?.paragrafos_review?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4">Nossa Análise</h2>
            <div className="space-y-4">
              {g.paragrafos_review.map((p, i) => (
                <p key={i} className="text-[#b3b3b3] leading-relaxed">{p}</p>
              ))}
            </div>
          </section>
        )}

        {/* Frase final */}
        {g?.frase_final && (
          <blockquote className="border-l-4 border-[#FF6600] pl-5 py-2 my-8">
            <p className="text-white font-semibold text-lg italic">"{g.frase_final}"</p>
          </blockquote>
        )}

        {/* Elenco */}
        {g?.elenco?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold text-white mb-4">Elenco</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {g.elenco.map(ator => (
                <div key={ator.nome} className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-3 text-center">
                  {ator.foto ? (
                    <img src={ator.foto} alt={ator.nome} className="w-12 h-12 rounded-full object-cover mx-auto mb-2" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#2a2a2a] mx-auto mb-2 flex items-center justify-center text-[#737373] text-xl">
                      👤
                    </div>
                  )}
                  <p className="text-white text-xs font-semibold line-clamp-1">{ator.nome}</p>
                  <p className="text-[#737373] text-xs line-clamp-1">{ator.personagem}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {!g && (
          <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 text-center">
            <p className="text-[#737373] text-sm">
              Conteúdo sendo preparado. Execute{' '}
              <code className="text-[#FF6600]">npm run update-content</code> para gerar.
            </p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
          <Link href="/filmes-e-series" className="text-[#737373] hover:text-[#FF6600] text-sm transition-colors">
            ← Voltar para Filmes e Séries
          </Link>
        </div>
      </div>
    </>
  );
}
