'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NOTICIAS, NOTICIAS_ESPORTES } from '@/lib/mock-data';

const FALLBACK = {
  titulo: 'Avengers: Doomsday',
  descricao: 'O MCU chega ao seu ponto mais ambicioso: o Doutor Destino reúne os heróis mais poderosos do universo num confronto épico que vai redefinir tudo.',
  categoria: '🔥 Em Alta — @3worlds_entertainment',
  url: '/noticias/avengers-doomsday-elenco-completo',
  imagem: 'https://image.tmdb.org/t/p/w1280/3eOINbgRs8WiWfQfViXeuZ3enrs.jpg',
};

const TODAS = [...NOTICIAS, ...NOTICIAS_ESPORTES];
const DESTAQUES = TODAS
  .filter(n => n.destaque || n.imagem)
  .sort((a, b) => {
    if (a.destaque && !b.destaque) return -1;
    if (!a.destaque && b.destaque) return 1;
    return new Date(b.data) - new Date(a.data);
  })
  .slice(0, 5);

const ITEMS = DESTAQUES.length > 0
  ? DESTAQUES.map(n => ({
      titulo: n.titulo,
      descricao: n.descricao,
      categoria: `🔥 ${n.categoria}`,
      url: `/noticias/${n.slug}`,
      imagem: n.imagem,
    }))
  : [FALLBACK];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (ITEMS.length <= 1) return;
    const id = setInterval(() => {
      setIndex(i => (i + 1) % ITEMS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const item = ITEMS[index];

  return (
    <section
      aria-label="Conteúdo em destaque"
      className="relative min-h-[480px] md:min-h-[560px] flex items-end overflow-hidden bg-[#141414]"
    >
      {item.imagem && (
        <Image
          key={item.imagem}
          src={item.imagem}
          alt={item.titulo}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover object-center transition-opacity duration-700"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="max-w-xl animate-fade-in-up" key={item.url}>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FF6600] mb-3 border border-[#FF6600]/40 px-2 py-0.5 rounded">
            {item.categoria}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            {item.titulo}
          </h1>
          <p className="text-[#b3b3b3] text-sm md:text-base leading-relaxed mb-6 max-w-md line-clamp-3">
            {item.descricao}
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href={item.url}
              className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#cc5200] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
              </svg>
              Ler agora
            </Link>
          </div>
        </div>

        {ITEMS.length > 1 && (
          <div className="absolute bottom-6 right-4 md:right-8 flex gap-2 z-20" role="tablist" aria-label="Selecionar destaque">
            {ITEMS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Destaque ${i + 1}`}
                aria-selected={i === index}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-[#FF6600]' : 'w-2 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
