import Link from 'next/link';
import Image from 'next/image';
import { FILMES, NOTICIAS } from '@/lib/mock-data';
import { schemaBreadcrumb } from '@/lib/structured-data';
import NewsletterBanner from '@/components/NewsletterBanner';

const NOTICIAS_CINEMA = NOTICIAS
  .filter((n) => n.categoria === 'Cinema')
  .sort((a, b) => new Date(b.data) - new Date(a.data));

export const metadata = {
  title: 'Filmes',
  description: 'Os melhores filmes em cartaz, lançamentos e clássicos. Notas, resenhas e tudo sobre o cinema.',
  alternates: { canonical: 'https://3w-entretenimento.com/filmes' },
  openGraph: { title: 'Filmes | 3W Entretenimento', description: 'Os melhores filmes em cartaz e lançamentos.' },
};

const breadcrumbSchema = schemaBreadcrumb([
  { name: 'Home', url: '/' },
  { name: 'Filmes', url: '/filmes' },
]);

export default function FilmesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Filmes</span>
        </nav>

        <h1 className="text-3xl font-black text-white mb-2">Filmes</h1>
        <p className="text-[#9ca3af] mb-8">Os melhores lançamentos e clássicos do cinema.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {FILMES.map((filme) => (
            <article key={filme.id} className="card-hover">
              <Link href={`/filmes/${filme.slug}`} className="block">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#1a1a1a] mb-2">
                  <Image
                    src={filme.imagem}
                    alt={`Capa: ${filme.titulo}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-cover"
                  />
                  {filme.nota && (
                    <div className="absolute top-2 right-2 z-10">
                      <span className="rating-badge">★ {filme.nota}</span>
                    </div>
                  )}
                </div>
                <h2 className="text-white text-xs font-semibold leading-snug line-clamp-2 mb-1">{filme.titulo}</h2>
                <p className="text-[#9ca3af] text-xs">{filme.ano} · {filme.categoria}</p>
              </Link>
            </article>
          ))}
        </div>

        {NOTICIAS_CINEMA.length > 0 && (
          <section aria-labelledby="noticias-cinema-title" className="mt-12">
            <div className="flex items-center justify-between mb-5">
              <h2 id="noticias-cinema-title" className="text-xl font-black text-white">Notícias de Cinema</h2>
              <Link href="/noticias" className="text-sm text-[#9ca3af] hover:text-[#FF6600] transition-colors flex items-center gap-1">
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
                    <div className="relative aspect-video overflow-hidden bg-[#1a1a1a]">
                      <Image src={n.imagem} alt={n.titulo} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-red-400">{n.categoria}</span>
                        <span className="text-[#2a2a2a]" aria-hidden="true">·</span>
                        <time dateTime={n.data} className="text-xs text-[#9ca3af]">{new Date(n.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</time>
                      </div>
                      <h3 className="text-white font-bold text-sm leading-snug mb-2 line-clamp-2 hover:text-[#FF6600] transition-colors">{n.titulo}</h3>
                      <p className="text-[#9ca3af] text-xs line-clamp-2">{n.descricao}</p>
                      <p className="text-[#9ca3af] text-xs mt-2">{n.autor} · {n.tempo_leitura} min</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
      <NewsletterBanner />
    </>
  );
}
