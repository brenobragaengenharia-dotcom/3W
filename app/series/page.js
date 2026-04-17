import Link from 'next/link';
import { SERIES } from '@/lib/mock-data';
import { schemaBreadcrumb } from '@/lib/structured-data';

export const metadata = {
  title: 'Séries',
  description: 'As melhores séries para maratonar. Reviews, notas e tudo sobre TV e streaming.',
  alternates: { canonical: 'https://3w-entretenimento.com/series' },
};

export default function SeriesPage() {
  const breadcrumb = schemaBreadcrumb([{ name: 'Home', url: '/' }, { name: 'Séries', url: '/series' }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Séries</span>
        </nav>

        <h1 className="text-3xl font-black text-white mb-2">Séries</h1>
        <p className="text-[#737373] mb-8">As melhores séries para maratonar em todas as plataformas.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SERIES.map((serie) => (
            <article key={serie.id} className="card-hover">
              <Link href={`/series/${serie.slug}`} className="block">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#1a1a1a] mb-2">
                  <img src={serie.imagem} alt={`Capa: ${serie.titulo}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  {serie.nota && <div className="absolute top-2 right-2"><span className="rating-badge">★ {serie.nota}</span></div>}
                </div>
                <h2 className="text-white text-xs font-semibold leading-snug line-clamp-2 mb-1">{serie.titulo}</h2>
                <p className="text-[#737373] text-xs">{serie.ano} · {serie.categoria}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
