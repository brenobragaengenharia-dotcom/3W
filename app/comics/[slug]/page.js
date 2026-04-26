import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COMICS, LIVROS_RECOMENDADOS, HQS_PANINI, LIVROS_PANINI } from '@/lib/mock-data';
import { schemaBreadcrumb, schemaBook, schemaProduct } from '@/lib/structured-data';
import content from '@/lib/content.json';
import NewsletterBanner from '@/components/NewsletterBanner';

const TODOS_COMICS = [...COMICS, ...LIVROS_RECOMENDADOS, ...HQS_PANINI, ...LIVROS_PANINI];

export async function generateStaticParams() {
  return TODOS_COMICS.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item   = TODOS_COMICS.find(c => c.slug === slug);
  const gerado = content.comics?.[slug];
  if (!item) return {};
  return {
    title:       item.titulo,
    description: gerado?.sinopse_pt ?? item.titulo,
    alternates:  { canonical: `https://3w-entretenimento.com/comics/${slug}` },
    openGraph: {
      title:       item.titulo,
      description: gerado?.sinopse_pt ?? '',
      images: [{ url: item.imagem }],
    },
  };
}

export default async function ComicPage({ params }) {
  const { slug } = await params;
  const item = TODOS_COMICS.find(c => c.slug === slug);
  if (!item) notFound();

  const g = content.comics?.[slug];

  // Decide o melhor schema disponível com base no tipo do item:
  //   - HQ/livro com link de compra → Product (rich snippet de preço/loja)
  //   - Livro tradicional → Book
  let itemSchema;
  if (item.link_compra) {
    itemSchema = schemaProduct({
      name:        item.titulo,
      description: g?.sinopse_pt ?? item.titulo,
      image:       item.imagem,
      url:         `/comics/${slug}`,
      brand:       item.editora,
      sku:         String(item.id ?? slug),
      offers: {
        url:    item.link_compra,
        seller: item.editora?.includes('Panini') ? 'Panini Brasil' : item.editora,
      },
    });
  } else if (item.autor) {
    itemSchema = schemaBook({
      name:        item.titulo,
      description: g?.sinopse_pt ?? item.titulo,
      image:       item.imagem,
      url:         `/comics/${slug}`,
      author:      item.autor,
      publisher:   item.editora,
      datePublished: item.ano ? `${item.ano}-01-01` : undefined,
      genre:       item.genero ? [item.genero] : (item.categoria ? [item.categoria] : []),
    });
  }

  const breadcrumb = schemaBreadcrumb([
    { name: 'Home',    url: '/' },
    { name: 'Comics',  url: '/comics' },
    { name: item.titulo, url: `/comics/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {itemSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemSchema) }} />}

      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <Link href="/comics">Comics</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">{item.titulo}</span>
        </nav>

        {/* Cabeçalho */}
        <div className="flex gap-6 mb-8">
          <div className="flex-shrink-0">
            <img
              src={item.imagem}
              alt={`Capa: ${item.titulo}`}
              className="w-36 rounded-lg object-cover shadow-lg"
              fetchpriority="high"
            />
          </div>
          <div>
            {g?.manchete && (
              <p className="text-yellow-500 text-sm font-semibold uppercase tracking-widest mb-2">
                {g.manchete}
              </p>
            )}
            <h1 className="text-3xl md:text-4xl font-black text-white mb-3">{item.titulo}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#9ca3af] mb-4">
              {item.ano      && <span>{item.ano}</span>}
              {item.editora  && <><span aria-hidden="true">·</span><span>{item.editora}</span></>}
              {item.autor    && <><span aria-hidden="true">·</span><span>{item.autor}</span></>}
            </div>
            {item.categoria && (
              <span className="text-xs bg-yellow-600/20 border border-yellow-600/40 text-yellow-400 px-2 py-0.5 rounded-full">
                {item.categoria}
              </span>
            )}
            {item.genero && (
              <span className="ml-2 text-xs bg-[#1a1a1a] border border-[#2a2a2a] text-[#b3b3b3] px-2 py-0.5 rounded-full">
                {item.genero}
              </span>
            )}
            {item.link_compra && (
              <div className="mt-4">
                <a
                  href={item.link_compra}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#e65c00] text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  🛒 Comprar na Panini
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Sinopse */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Sobre</h2>
          <p className="text-[#b3b3b3] leading-relaxed border-l-2 border-yellow-500 pl-4">
            {g?.sinopse_pt ?? item.titulo}
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
          <blockquote className="border-l-4 border-yellow-500 pl-5 py-2 my-8">
            <p className="text-white font-semibold text-lg italic">"{g.frase_final}"</p>
          </blockquote>
        )}

        {!g && (
          <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 text-center">
            <p className="text-[#9ca3af] text-sm">
              Conteúdo sendo preparado. Execute{' '}
              <code className="text-[#FF6600]">npm run update-content</code> para gerar.
            </p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
          <Link href="/comics" className="text-[#9ca3af] hover:text-[#FF6600] text-sm transition-colors">
            ← Voltar para Comics
          </Link>
        </div>
      </div>
      <NewsletterBanner />
    </>
  );
}
