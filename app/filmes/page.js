import Link from 'next/link';
import { FILMES } from '@/lib/mock-data';
import { schemaBreadcrumb } from '@/lib/structured-data';

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
        <p className="text-[#737373] mb-8">Os melhores lançamentos e clássicos do cinema.</p>

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
                <h2 className="text-white text-xs font-semibold leading-snug line-clamp-2 mb-1">{filme.titulo}</h2>
                <p className="text-[#737373] text-xs">{filme.ano} · {filme.categoria}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
