import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FILMES, INGRESSO_URL } from '@/lib/mock-data';
import { schemaBreadcrumb, schemaMovie } from '@/lib/structured-data';
import content from '@/lib/content.json';
import NewsletterBanner from '@/components/NewsletterBanner';

export async function generateStaticParams() {
  return FILMES.map(f => ({ slug: f.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const filme  = FILMES.find(f => f.slug === slug);
  const gerado = content.filmes?.[slug];
  if (!filme) return {};
  return {
    title:       filme.titulo,
    description: gerado?.sinopse_pt ?? filme.titulo,
    alternates:  { canonical: `https://3w-entretenimento.com/filmes/${slug}` },
    openGraph: {
      type:   'video.movie',
      title:   filme.titulo,
      description: gerado?.sinopse_pt ?? '',
      images: [{ url: gerado?.backdrop ?? filme.imagem }],
    },
  };
}

export default async function FilmePage({ params }) {
  const { slug } = await params;
  const filme  = FILMES.find(f => f.slug === slug);
  if (!filme) notFound();

  const g = content.filmes?.[slug];
  const movieSchema = schemaMovie({
    name:          filme.titulo,
    description:   g?.sinopse_pt ?? filme.titulo,
    image:         g?.poster ?? filme.imagem,
    url:           `/filmes/${slug}`,
    director:      g?.diretor,
    actors:        g?.elenco?.map(e => e?.nome).filter(Boolean) ?? [],
    genre:         g?.generos ?? (filme.categoria ? [filme.categoria] : []),
    datePublished: g?.lancamento ?? (filme.ano ? `${filme.ano}-01-01` : undefined),
    ratingValue:   filme.nota ?? g?.nota_tmdb,
    ratingCount:   1,
  });
  const breadcrumb = schemaBreadcrumb([
    { name: 'Home',         url: '/' },
    { name: 'Filmes e Séries', url: '/filmes-e-series' },
    { name: filme.titulo,   url: `/filmes/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }} />

      {/* Hero backdrop */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden bg-[#141414]">
        <img
          src={g?.backdrop ?? filme.imagem}
          alt={filme.titulo}
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
          <span aria-current="page">{filme.titulo}</span>
        </nav>

        {/* Cabeçalho */}
        <div className="flex gap-6 mb-8">
          <img
            src={g?.poster ?? filme.imagem}
            alt={`Pôster: ${filme.titulo}`}
            className="hidden sm:block w-32 rounded-lg object-cover flex-shrink-0 self-start"
          />
          <div>
            {g?.manchete && (
              <p className="text-[#FF6600] text-sm font-semibold uppercase tracking-widest mb-2">
                {g.manchete}
              </p>
            )}
            <h1 className="text-3xl md:text-4xl font-black text-white mb-3">{filme.titulo}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#9ca3af] mb-4">
              {filme.ano     && <span>{filme.ano}</span>}
              {g?.duracao    && <><span aria-hidden="true">·</span><span>{g.duracao} min</span></>}
              {filme.nota    && <span className="rating-badge">★ {filme.nota}</span>}
              {g?.nota_tmdb  && <span className="text-xs text-[#9ca3af]">TMDB {g.nota_tmdb}</span>}
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
            {g?.diretor && (
              <p className="text-sm text-[#9ca3af]">
                <span className="text-white font-medium">Direção:</span> {g.diretor}
              </p>
            )}
          </div>
        </div>

        {/* Botão Comprar Ingresso */}
        <div className="mb-8">
          <a
            href={INGRESSO_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 bg-[#e11d48] hover:bg-[#be123c] active:bg-[#9f1239] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
            </svg>
            Comprar Ingresso — ingresso.com
          </a>
          <p className="text-[#737373] text-[11px] mt-2">* Link patrocinado. Ao comprar você apoia o 3W Entretenimento sem custo extra.</p>
        </div>

        {/* Sinopse */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Sinopse</h2>
          <p className="text-[#b3b3b3] leading-relaxed border-l-2 border-[#FF6600] pl-4">
            {g?.sinopse_pt ?? filme.titulo}
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
                    <div className="w-12 h-12 rounded-full bg-[#2a2a2a] mx-auto mb-2 flex items-center justify-center text-[#9ca3af] text-xl">
                      👤
                    </div>
                  )}
                  <p className="text-white text-xs font-semibold line-clamp-1">{ator.nome}</p>
                  <p className="text-[#9ca3af] text-xs line-clamp-1">{ator.personagem}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sem conteúdo gerado ainda */}
        {!g && (
          <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 text-center">
            <p className="text-[#9ca3af] text-sm">
              Conteúdo sendo preparado. Execute{' '}
              <code className="text-[#FF6600]">npm run update-content</code> para gerar.
            </p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
          <Link href="/filmes-e-series" className="text-[#9ca3af] hover:text-[#FF6600] text-sm transition-colors">
            ← Voltar para Filmes e Séries
          </Link>
        </div>
      </div>
      <NewsletterBanner />
    </>
  );
}
