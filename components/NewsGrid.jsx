import Link from 'next/link';
import { NOTICIAS } from '@/lib/mock-data';

const CATEGORIA_COLORS = {
  'Cinema': 'text-red-400',
  'Séries': 'text-blue-400',
  'Música': 'text-purple-400',
  'Jogos':  'text-green-400',
  'Eventos':'text-yellow-400',
};

export default function NewsGrid({ limit = 6 }) {
  const noticias = NOTICIAS.slice(0, limit);

  return (
    <section aria-labelledby="noticias-title" className="py-8 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between mb-5">
          <h2 id="noticias-title" className="text-lg md:text-xl font-bold text-white">
            Últimas Notícias
          </h2>
          <Link href="/noticias" className="text-sm text-[#9ca3af] hover:text-[#FF6600] transition-colors flex items-center gap-1">
            Ver todas
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {noticias.map((noticia, index) => (
            <article key={noticia.id} className={`card-hover rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a] ${index === 0 ? 'md:col-span-2' : ''}`}>
              <Link href={`/noticias/${noticia.slug}`} className="block">
                {/* Imagem */}
                <div className={`relative overflow-hidden bg-[#1a1a1a] ${index === 0 ? 'aspect-video' : 'aspect-video'}`}>
                  <img
                    src={noticia.imagem}
                    alt={noticia.titulo}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold ${CATEGORIA_COLORS[noticia.categoria] || 'text-[#9ca3af]'}`}>
                      {noticia.categoria}
                    </span>
                    <span className="text-[#2a2a2a]" aria-hidden="true">·</span>
                    <time dateTime={noticia.data} className="text-xs text-[#9ca3af]">
                      {new Date(noticia.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </time>
                  </div>

                  <h3 className="text-white font-bold text-sm leading-snug mb-2 line-clamp-2 hover:text-[#FF6600] transition-colors">
                    {noticia.titulo}
                  </h3>

                  <p className="text-[#9ca3af] text-xs leading-relaxed line-clamp-2">
                    {noticia.descricao}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-xs text-[#9ca3af]">
                    <span>{noticia.autor}</span>
                    <span aria-hidden="true">·</span>
                    <span>{noticia.tempo_leitura} min de leitura</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
