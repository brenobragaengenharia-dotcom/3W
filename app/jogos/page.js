import Link from 'next/link';
import { JOGOS } from '@/lib/mock-data';
import { schemaBreadcrumb } from '@/lib/structured-data';
import NewsletterBanner from '@/components/NewsletterBanner';

export const metadata = {
  title: 'Jogos',
  description: 'Reviews, notas e novidades sobre os melhores jogos do momento para todas as plataformas.',
  alternates: { canonical: 'https://3w-entretenimento.com/jogos' },
};

export default function JogosPage() {
  const breadcrumb = schemaBreadcrumb([{ name: 'Home', url: '/' }, { name: 'Jogos', url: '/jogos' }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Jogos</span>
        </nav>

        <h1 className="text-3xl font-black text-white mb-2">Jogos</h1>
        <p className="text-[#737373] mb-8">Os melhores jogos do momento com reviews e notas.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {JOGOS.map((jogo) => (
            <article key={jogo.id} className="card-hover">
              <Link href={`/jogos/${jogo.slug}`} className="block">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#1a1a1a] mb-2">
                  <img src={jogo.imagem} alt={`Capa: ${jogo.titulo}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  {jogo.nota && <div className="absolute top-2 right-2"><span className="rating-badge">★ {jogo.nota}</span></div>}
                </div>
                <h2 className="text-white text-xs font-semibold leading-snug line-clamp-2 mb-1">{jogo.titulo}</h2>
                <p className="text-[#737373] text-xs">{jogo.plataforma} · {jogo.categoria}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
      <NewsletterBanner />
    </>
  );
}
