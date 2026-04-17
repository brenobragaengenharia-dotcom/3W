import Link from 'next/link';
import { MUSICA } from '@/lib/mock-data';
import { schemaBreadcrumb } from '@/lib/structured-data';

export const metadata = {
  title: 'Música',
  description: 'Os melhores álbuns, artistas e lançamentos musicais. Fique por dentro do mundo da música.',
  alternates: { canonical: 'https://3w-entretenimento.com/musica' },
};

export default function MusicaPage() {
  const breadcrumb = schemaBreadcrumb([{ name: 'Home', url: '/' }, { name: 'Música', url: '/musica' }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Música</span>
        </nav>

        <h1 className="text-3xl font-black text-white mb-2">Música</h1>
        <p className="text-[#737373] mb-8">Os álbuns e artistas em destaque do momento.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {MUSICA.map((album) => (
            <article key={album.id} className="card-hover">
              <Link href={`/musica/${album.slug}`} className="block">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-[#1a1a1a] mb-2">
                  <img src={album.imagem} alt={`Capa: ${album.titulo}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-white text-xs font-semibold leading-snug line-clamp-2 mb-1">{album.titulo}</h2>
                <p className="text-[#737373] text-xs">{album.artista} · {album.categoria}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
