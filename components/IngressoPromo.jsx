import Link from 'next/link';
import { FILMES, INGRESSO_URL } from '@/lib/mock-data';

function FilmeCard({ filme }) {
  return (
    <article className="card-hover flex-shrink-0" style={{ width: '120px' }}>
      <Link href={`/filmes/${filme.slug}`} className="block">
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#1a1a1a] mb-2">
          <img
            src={filme.imagem}
            alt={`Pôster: ${filme.titulo}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Nota — topo direito */}
          <div className="absolute top-1.5 right-1.5">
            <span className="text-[10px] bg-black/70 text-yellow-400 px-1.5 py-0.5 rounded font-bold">
              ★ {filme.nota}
            </span>
          </div>
          {/* Badge — baixo esquerdo */}
          <div className="absolute bottom-1.5 left-1.5">
            <span className="text-[10px] bg-[#e11d48] text-white px-1.5 py-0.5 rounded font-bold">Em Cartaz</span>
          </div>
        </div>
        <h3 className="text-white text-[11px] font-semibold leading-snug line-clamp-2">{filme.titulo}</h3>
        <p className="text-[#737373] text-[10px] mt-0.5 line-clamp-1">{filme.categoria}</p>
      </Link>
    </article>
  );
}

export default function IngressoPromo() {
  return (
    <section
      aria-labelledby="ingresso-promo-title"
      className="py-10 border-y border-[#e11d48]/20 bg-gradient-to-b from-[#e11d48]/5 via-[#0a0a0a] to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Cabeçalho promocional */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e11d48]">Parceiro Oficial</span>
              <span className="w-1 h-1 rounded-full bg-[#e11d48]" />
              <span className="text-xs text-[#737373]">Link patrocinado</span>
            </div>
            <h2 id="ingresso-promo-title" className="text-2xl md:text-3xl font-black text-white leading-tight">
              Filmes em Cartaz{' '}
              <span className="text-[#e11d48]">Agora</span>
            </h2>
            <p className="text-[#737373] text-sm mt-1">
              Garanta seu ingresso online — compre com facilidade direto no ingresso.com.
            </p>
          </div>

          <a
            href={INGRESSO_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 bg-[#e11d48] hover:bg-[#be123c] active:bg-[#9f1239] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap self-start sm:self-auto"
          >
            {/* Ícone de ticket */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
            </svg>
            Comprar Ingressos
          </a>
        </div>

        {/* Scroll de filmes */}
        <div className="flex gap-4 overflow-x-auto pb-2 scroll-row">
          {FILMES.map(filme => <FilmeCard key={filme.id} filme={filme} />)}
        </div>

        {/* Rodapé do bloco */}
        <p className="text-[#444] text-[11px] text-center mt-6">
          * Link patrocinado. Ao comprar você apoia o 3W Entretenimento sem custo extra.
        </p>
      </div>
    </section>
  );
}
