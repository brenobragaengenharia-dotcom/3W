import Link from 'next/link';
import { NOTICIAS } from '@/lib/mock-data';
import { schemaBreadcrumb } from '@/lib/structured-data';

export const metadata = {
  title: 'Notícias',
  description: 'As últimas notícias do mundo do entretenimento: cinema, séries, comics e esportes.',
  alternates: { canonical: 'https://3w-entretenimento.com/noticias' },
};

const CATEGORIA_COLORS = {
  Cinema:  'text-red-400', Séries: 'text-blue-400',
  Comics: 'text-yellow-400', Esportes: 'text-green-400',
};

export default function NoticiasPage() {
  const breadcrumb = schemaBreadcrumb([{ name: 'Home', url: '/' }, { name: 'Notícias', url: '/noticias' }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Notícias</span>
        </nav>

        <h1 className="text-3xl font-black text-white mb-2">Notícias</h1>
        <p className="text-[#737373] mb-8">Fique por dentro de tudo que acontece no entretenimento.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NOTICIAS.map((n) => (
            <article key={n.id} className="card-hover rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a]">
              <Link href={`/noticias/${n.slug}`} className="block">
                <div className="aspect-video overflow-hidden bg-[#1a1a1a]">
                  <img src={n.imagem} alt={n.titulo} loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold ${CATEGORIA_COLORS[n.categoria] || 'text-[#737373]'}`}>{n.categoria}</span>
                    <span className="text-[#2a2a2a]" aria-hidden="true">·</span>
                    <time dateTime={n.data} className="text-xs text-[#737373]">{new Date(n.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</time>
                  </div>
                  <h2 className="text-white font-bold text-sm leading-snug mb-2 line-clamp-2 hover:text-[#FF6600] transition-colors">{n.titulo}</h2>
                  <p className="text-[#737373] text-xs line-clamp-2">{n.descricao}</p>
                  <p className="text-[#737373] text-xs mt-2">{n.autor} · {n.tempo_leitura} min</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
