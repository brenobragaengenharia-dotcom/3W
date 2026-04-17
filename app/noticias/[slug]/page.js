import Link from 'next/link';
import { notFound } from 'next/navigation';
import { NOTICIAS } from '@/lib/mock-data';
import { schemaBreadcrumb, schemaNewsArticle } from '@/lib/structured-data';

export async function generateStaticParams() {
  return NOTICIAS.map(n => ({ slug: n.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const noticia = NOTICIAS.find(n => n.slug === slug);
  if (!noticia) return {};

  return {
    title: noticia.titulo,
    description: noticia.descricao,
    alternates: { canonical: `https://3w-entretenimento.com/noticias/${noticia.slug}` },
    openGraph: {
      type: 'article',
      title: noticia.titulo,
      description: noticia.descricao,
      images: [{ url: noticia.imagem, width: 1200, height: 630 }],
      publishedTime: noticia.data,
      authors: [noticia.autor],
      section: noticia.categoria,
    },
  };
}

const CATEGORIA_COLORS = {
  Cinema: 'text-red-400', Séries: 'text-blue-400',
  Música: 'text-purple-400', Jogos: 'text-green-400', Eventos: 'text-yellow-400',
};

export default async function NoticiaPage({ params }) {
  const { slug } = await params;
  const noticia = NOTICIAS.find(n => n.slug === slug);

  if (!noticia) notFound();

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

  // Relacionadas (excluindo a atual)
  const relacionadas = NOTICIAS.filter(n => n.id !== noticia.id).slice(0, 3);

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
            <span className={`text-sm font-semibold ${CATEGORIA_COLORS[noticia.categoria] || 'text-[#737373]'}`} itemProp="articleSection">
              {noticia.categoria}
            </span>
            <span className="text-[#2a2a2a]" aria-hidden="true">·</span>
            <time dateTime={noticia.data} itemProp="datePublished" className="text-sm text-[#737373]">
              {new Date(noticia.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </time>
            <span className="text-[#2a2a2a]" aria-hidden="true">·</span>
            <span className="text-sm text-[#737373]">{noticia.tempo_leitura} min de leitura</span>
          </div>

          {/* Título */}
          <h1 itemProp="headline" className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            {noticia.titulo}
          </h1>

          {/* Descrição (lead) */}
          <p itemProp="description" className="text-[#b3b3b3] text-lg leading-relaxed mb-6 border-l-2 border-[#e50914] pl-4">
            {noticia.descricao}
          </p>

          {/* Autor */}
          <address rel="author" className="not-italic mb-6">
            <span className="text-sm text-[#737373]">Por{' '}
              <span itemProp="author" className="text-white font-medium">{noticia.autor}</span>
            </span>
          </address>

          {/* Imagem principal */}
          <figure className="mb-8">
            <img
              src={noticia.imagem}
              alt={noticia.titulo}
              itemProp="image"
              loading="eager"
              decoding="async"
              className="w-full rounded-xl object-cover aspect-video"
            />
          </figure>

          {/* Conteúdo do artigo (placeholder) */}
          <div itemProp="articleBody" className="prose prose-invert max-w-none">
            <p className="text-[#b3b3b3] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-[#b3b3b3] leading-relaxed mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-[#b3b3b3] leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </article>

        {/* Notícias relacionadas */}
        {relacionadas.length > 0 && (
          <aside aria-label="Notícias relacionadas" className="mt-12">
            <h2 className="text-xl font-bold text-white mb-5">Veja também</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relacionadas.map(r => (
                <article key={r.id} className="card-hover rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a]">
                  <Link href={`/noticias/${r.slug}`} className="block">
                    <div className="aspect-video overflow-hidden bg-[#1a1a1a]">
                      <img src={r.imagem} alt={r.titulo} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3">
                      <h3 className="text-white text-xs font-semibold line-clamp-2 hover:text-[#e50914] transition-colors">{r.titulo}</h3>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </aside>
        )}
      </div>
    </>
  );
}
