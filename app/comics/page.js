import Link from 'next/link';
import Image from 'next/image';
import { HQS_PANINI, LIVROS_PANINI, NOTICIAS } from '@/lib/mock-data';
import { schemaBreadcrumb } from '@/lib/structured-data';
import ElfsightFeed, { ELFSIGHT_IDS } from '@/components/ElfsightFeed';
import NewsletterBanner from '@/components/NewsletterBanner';

export const metadata = {
  title: 'Comics',
  description: 'Quadrinhos, Animes, Filmes & Séries. Notícias, curiosidades e bastidores do universo geek — Marvel, HQs e livros.',
  alternates: { canonical: 'https://3w-entretenimento.com/comics' },
  openGraph: {
    title: 'Comics | 3W Entretenimento',
    description: 'Marvel, HQs, livros e tudo do universo geek.',
  },
};

const noticiasComics = NOTICIAS.filter(n => n.categoria === 'Comics');

export default function ComicsPage() {
  const breadcrumb = schemaBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Comics', url: '/comics' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Comics</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl" role="img" aria-label="Comics">📚</span>
            <h1 className="text-3xl font-black text-white">Comics</h1>
          </div>
          <p className="text-[#9ca3af]">Quadrinhos, Animes, Filmes & Séries — notícias, curiosidades e bastidores do universo geek.</p>
          <a
            href="https://instagram.com/3wcomics_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm text-[#9ca3af] hover:text-[#FF6600] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Siga @3wcomics_ no Instagram
          </a>
        </div>

        {/* Notícias de Comics */}
        {noticiasComics.length > 0 && (
          <section aria-labelledby="noticias-comics-title" className="mb-12">
            <h2 id="noticias-comics-title" className="text-xl font-bold text-white mb-5">Notícias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {noticiasComics.map(n => (
                <article key={n.id} className="card-hover rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a]">
                  <Link href={`/noticias/${n.slug}`} className="block">
                    <div className="relative aspect-video overflow-hidden bg-[#1a1a1a]">
                      <Image src={n.imagem} alt={n.titulo} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold text-sm line-clamp-2 hover:text-yellow-400 transition-colors">{n.titulo}</h3>
                      <p className="text-[#9ca3af] text-xs mt-2">{n.autor} · {n.tempo_leitura} min</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* HQs Panini */}
        <section aria-labelledby="hqs-panini-title" className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 id="hqs-panini-title" className="text-xl font-bold text-white flex items-center gap-2">
              🛒 HQs Panini
              <span className="text-xs font-normal bg-[#FF6600]/20 border border-[#FF6600]/40 text-[#FF6600] px-2 py-0.5 rounded-full">Parceiro Oficial</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {HQS_PANINI.map(hq => (
              <article key={hq.id} className="card-hover">
                <Link href={`/comics/${hq.slug}`} className="block">
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#1a1a1a] mb-2">
                    <Image src={hq.imagem} alt={`Capa: ${hq.titulo}`} fill sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw" className="object-cover" />
                    <div className="absolute top-2 left-2 z-10">
                      <span className="text-xs bg-yellow-600/90 text-white px-1.5 py-0.5 rounded font-medium">{hq.categoria}</span>
                    </div>
                    <div className="absolute bottom-2 right-2 z-10">
                      <span className="text-xs bg-[#FF6600] text-white px-1.5 py-0.5 rounded font-bold">Panini</span>
                    </div>
                  </div>
                  <h3 className="text-white text-xs font-semibold leading-snug line-clamp-2 mb-1">{hq.titulo}</h3>
                  <p className="text-[#9ca3af] text-xs">{hq.editora}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Mangás Panini */}
        <section aria-labelledby="manga-panini-title" className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 id="manga-panini-title" className="text-xl font-bold text-white flex items-center gap-2">
              🎌 Mangás Panini
              <span className="text-xs font-normal bg-[#FF6600]/20 border border-[#FF6600]/40 text-[#FF6600] px-2 py-0.5 rounded-full">Parceiro Oficial</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {LIVROS_PANINI.map(manga => (
              <article key={manga.id} className="card-hover">
                <Link href={`/comics/${manga.slug}`} className="block">
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#1a1a1a] mb-2">
                    <Image src={manga.imagem} alt={`Capa: ${manga.titulo}`} fill sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw" className="object-cover" />
                    <div className="absolute bottom-2 right-2 z-10">
                      <span className="text-xs bg-[#FF6600] text-white px-1.5 py-0.5 rounded font-bold">Panini</span>
                    </div>
                  </div>
                  <h3 className="text-white text-xs font-semibold leading-snug line-clamp-2 mb-1">{manga.titulo}</h3>
                  <p className="text-[#9ca3af] text-xs">{manga.autor} · {manga.genero}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Posts reais do Instagram @3wcomics_ via Elfsight */}
      <ElfsightFeed
        appId={ELFSIGHT_IDS.comics}
        title="Últimos Posts — @3wcomics_"
        perfil="@3wcomics_"
        href="https://instagram.com/3wcomics_"
      />
      <NewsletterBanner />
    </>
  );
}
