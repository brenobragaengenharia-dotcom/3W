import Link from 'next/link';

const HERO_ITEMS = [
  {
    titulo: 'Avengers: Doomsday',
    descricao: 'O MCU chega ao seu ponto mais ambicioso: o Doutor Destino reúne os heróis mais poderosos do universo num confronto épico que vai redefinir tudo que você conhece.',
    categoria: '🔥 Em Alta — @3worlds_entertainment',
    url: '/noticias/avengers-doomsday-elenco-completo',
    nota: 9.1,
    badge: 'Mais comentado agora',
    bg: 'from-[#1a0505] via-[#2a0a0a] to-transparent',
    imagem: 'https://image.tmdb.org/t/p/w1280/3eOINbgRs8WiWfQfViXeuZ3enrs.jpg',
  },
];

export default function HeroSection() {
  const item = HERO_ITEMS[0];

  return (
    <section
      aria-label="Conteúdo em destaque"
      className="relative min-h-[480px] md:min-h-[560px] flex items-end overflow-hidden bg-[#141414]"
    >
      {/* Imagem de fundo */}
      {item.imagem && (
        <img
          src={item.imagem}
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Gradiente sobre a imagem */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="max-w-xl animate-fade-in-up">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FF6600] mb-3 border border-[#FF6600]/40 px-2 py-0.5 rounded">
            {item.categoria}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            {item.titulo}
          </h1>
          <p className="text-[#b3b3b3] text-sm md:text-base leading-relaxed mb-6 max-w-md">
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
              Ver agora
            </Link>
            <Link
              href={item.url}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm border border-white/20"
            >
              Mais detalhes
            </Link>
            <span className="rating-badge ml-2" aria-label={`Nota: ${item.nota}`}>
              ★ {item.nota}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
