'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { FILMES, SERIES, NOTICIAS } from '@/lib/mock-data';
import NewsletterBanner from '@/components/NewsletterBanner';

function BuscaResultados() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  if (!query.trim()) {
    return (
      <div className="text-center py-16">
        <p className="text-[#737373] text-lg">Digite algo para buscar.</p>
      </div>
    );
  }

  const q = query.toLowerCase();

  const todos = [
    ...FILMES.map(i => ({ ...i, tipo: 'Filme', url: `/filmes/${i.slug}` })),
    ...SERIES.map(i => ({ ...i, tipo: 'Série', url: `/series/${i.slug}` })),
    ...NOTICIAS.map(i => ({ ...i, tipo: 'Notícia', url: `/noticias/${i.slug}`, titulo: i.titulo })),
  ];

  const resultados = todos.filter(item =>
    item.titulo?.toLowerCase().includes(q) ||
    item.categoria?.toLowerCase().includes(q) ||
    item.artista?.toLowerCase().includes(q) ||
    item.descricao?.toLowerCase().includes(q)
  );

  return (
    <>
      <p className="text-[#737373] text-sm mb-6">
        {resultados.length === 0
          ? `Nenhum resultado para "${query}".`
          : `${resultados.length} resultado${resultados.length > 1 ? 's' : ''} para "${query}"`}
      </p>

      {resultados.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {resultados.map((item, idx) => (
            <article key={idx} className="card-hover">
              <Link href={item.url} className="block">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#1a1a1a] mb-2">
                  <img src={item.imagem} alt={item.titulo} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2">
                    <span className="text-xs bg-[#0d0d0d]/80 text-[#b3b3b3] px-1.5 py-0.5 rounded">{item.tipo}</span>
                  </div>
                </div>
                <h2 className="text-white text-xs font-semibold leading-snug line-clamp-2">{item.titulo}</h2>
              </Link>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default function BuscaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep" aria-hidden="true">/</span>
        <span aria-current="page">Busca</span>
      </nav>

      <h1 className="text-3xl font-black text-white mb-6">Resultados da Busca</h1>

      <Suspense fallback={<p className="text-[#737373]">Buscando...</p>}>
        <BuscaResultados />
      </Suspense>
    </div>
  );
}
