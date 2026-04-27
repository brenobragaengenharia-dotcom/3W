import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { NOTICIAS, NOTICIAS_ESPORTES } from '@/lib/mock-data';
import { schemaBreadcrumb, schemaNewsArticle } from '@/lib/structured-data';
import content from '@/lib/content.json';
import NewsletterBanner from '@/components/NewsletterBanner';
import ArticleCTA from '@/components/ArticleCTA';

// Todas as notícias (gerais + esportes) compartilham este template de página
const TODAS_NOTICIAS = [...NOTICIAS, ...NOTICIAS_ESPORTES];

export async function generateStaticParams() {
  return TODAS_NOTICIAS.map(n => ({ slug: n.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const noticia = TODAS_NOTICIAS.find(n => n.slug === slug);
  if (!noticia) return {};

  const g = content.noticias?.[slug] ?? content.esportes?.[slug];

  const ogUrl = `/api/og?title=${encodeURIComponent(noticia.titulo)}&category=${encodeURIComponent(noticia.categoria)}`;

  return {
    title: noticia.titulo,
    description: noticia.descricao,
    alternates: { canonical: `https://3w-entretenimento.com/noticias/${noticia.slug}` },
    openGraph: {
      type: 'article',
      title: noticia.titulo,
      description: g?.paragrafos?.[0] ?? noticia.descricao,
      images: [
        { url: ogUrl, width: 1200, height: 630, alt: noticia.titulo },
      ],
      publishedTime: noticia.data,
      authors: [noticia.autor],
      section: noticia.categoria,
    },
    twitter: {
      card: 'summary_large_image',
      title: noticia.titulo,
      description: g?.paragrafos?.[0] ?? noticia.descricao,
      images: [ogUrl],
    },
  };
}

const CATEGORIA_COLORS = {
  Cinema: 'text-red-400', Séries: 'text-blue-400',
  Comics: 'text-yellow-400', Esportes: 'text-green-400',
  Futebol: 'text-green-400', NBA: 'text-orange-400', 'Fórmula 1': 'text-red-400',
};

export default async function NoticiaPage({ params }) {
  const { slug } = await params;
  const noticia = TODAS_NOTICIAS.find(n => n.slug === slug);
  if (!noticia) notFound();

  // Busca conteúdo gerado — pode estar em noticias ou esportes
  const g = content.noticias?.[slug] ?? content.esportes?.[slug];

  const breadcrumb = schemaBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Notícias', url: '/noticias' },
    { name: noticia.titulo, url: `/noticias/${noticia.slug}` },
  ]);

  const articleSchema = schemaNewsArticle({
    headline: noticia.titulo,
    description: noticia.descricao,
    image: noticia.imagem,
    url: `/noticias/${noticia.slug}`,
    publishedAt: noticia.data,
    author: noticia.autor,
    section: noticia.categoria,
  });

  // Notícias relacionadas (mesma categoria, excluindo a atual)
  const relacionadas = TODAS_NOTICIAS
    .filter(n => n.slug !== slug)
    .sort((a, b) => (a.categoria === noticia.categoria ? -1 : 1))
    .slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <Link href="/noticias">Notícias</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page" className="truncate max-w-[200px] inline-block align-bottom">{noticia.titulo}</span>
        </nav>

        <article itemScope itemType="https://schema.org/NewsArticle">
          {/* Categoria + Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-sm font-semibold ${CATEGORIA_COLORS[noticia.categoria] || 'text-[#9ca3af]'}`} itemProp="articleSection">
              {noticia.categoria}
            </span>
            <span className="text-[#2a2a2a]" aria-hidden="true">·</span>
            <time dateTime={noticia.data} itemProp="datePublished" className="text-sm text-[#9ca3af]">
              {new Date(noticia.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </time>
            <span className="text-[#2a2a2a]" aria-hidden="true">·</span>
            <span className="text-sm text-[#9ca3af]">{noticia.tempo_leitura} min de leitura</span>
          </div>

          {/* Título */}
          <h1 itemProp="headline" className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            {g?.manchete ?? noticia.titulo}
          </h1>

          {/* Lead */}
          <p itemProp="description" className="text-[#b3b3b3] text-lg leading-relaxed mb-6 border-l-2 border-[#FF6600] pl-4">
            {noticia.descricao}
          </p>

          {/* Autor */}
          <address rel="author" className="not-italic mb-6">
            <span className="text-sm text-[#9ca3af]">Por{' '}
              <span itemProp="author" className="text-white font-medium">{noticia.autor}</span>
            </span>
          </address>

          {/* Imagem principal */}
          <figure className="mb-8 relative w-full aspect-video rounded-xl overflow-hidden bg-[#1a1a1a]">
            <Image
              src={noticia.imagem}
              alt={noticia.titulo}
              itemProp="image"
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </figure>

          {/* Corpo do artigo */}
          <div itemProp="articleBody" className="space-y-5">
            {g?.paragrafos?.length > 0 ? (
              <>
                {g.paragrafos.slice(0, 2).map((p, i) => (
                  <p key={i} className="text-[#b3b3b3] leading-relaxed">{p}</p>
                ))}

                {/* Pull quote */}
                {g.frase_destaque && (
                  <blockquote className="border-l-4 border-[#FF6600] pl-5 py-2 my-6">
                    <p className="text-white font-semibold text-lg italic">"{g.frase_destaque}"</p>
                  </blockquote>
                )}

                {g.paragrafos.slice(2).map((p, i) => (
                  <p key={`b${i}`} className="text-[#b3b3b3] leading-relaxed">{p}</p>
                ))}

                {/* Conclusão */}
                {g.conclusao && (
                  <p className="text-[#b3b3b3] leading-relaxed border-t border-[#2a2a2a] pt-5 mt-5">
                    {g.conclusao}
                  </p>
                )}
              </>
            ) : (
              <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 text-center">
                <p className="text-[#9ca3af] text-sm">
                  Conteúdo sendo preparado. Execute{' '}
                  <code className="text-[#FF6600]">npm run update-content</code> para gerar.
                </p>
              </div>
            )}
          </div>
        </article>

        {/* CTA monetário contextual por categoria */}
        <ArticleCTA categoria={noticia.categoria} slug={noticia.slug} />

        {/* Notícias relacionadas */}
        {relacionadas.length > 0 && (
          <aside aria-label="Notícias relacionadas" className="mt-12">
            <h2 className="text-xl font-bold text-white mb-5">Veja também</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relacionadas.map(r => (
                <article key={r.id} className="card-hover rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a]">
                  <Link href={`/noticias/${r.slug}`} className="block">
                    <div className="relative aspect-video overflow-hidden bg-[#1a1a1a]">
                      <Image src={r.imagem} alt={r.titulo} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    </div>
                    <div className="p-3">
                      <span className={`text-xs font-semibold ${CATEGORIA_COLORS[r.categoria] || 'text-[#9ca3af]'}`}>{r.categoria}</span>
                      <h3 className="text-white text-xs font-semibold line-clamp-2 mt-1 hover:text-[#FF6600] transition-colors">{r.titulo}</h3>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </aside>
        )}
      </div>
      <NewsletterBanner />
    </>
  );
}
