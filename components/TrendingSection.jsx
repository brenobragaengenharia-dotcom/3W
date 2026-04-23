import Link from 'next/link';
import { NOTICIAS, NOTICIAS_ESPORTES } from '@/lib/mock-data';

const CATEGORIA_TIPO = {
  'Séries':      'Série',
  'Cinema':      'Filme',
  'Futebol':     'Esporte',
  'NBA':         'Esporte',
  'Fórmula 1':   'F1',
  'Games':       'Jogo',
  'Música':      'Música',
  'Comics':      'Comics',
};

const TYPE_COLORS = {
  'Série':   'bg-blue-900/40 text-blue-300',
  'Filme':   'bg-red-900/40 text-red-300',
  'Notícia': 'bg-zinc-700/40 text-zinc-300',
  'Jogo':    'bg-green-900/40 text-green-300',
  'Música':  'bg-purple-900/40 text-purple-300',
  'Esporte': 'bg-emerald-900/40 text-emerald-300',
  'F1':      'bg-red-900/40 text-red-300',
  'Comics':  'bg-yellow-900/40 text-yellow-300',
};

// Calcula automaticamente as 5 notícias mais recentes de todos os arrays
const TRENDING_DINAMICO = [...NOTICIAS, ...NOTICIAS_ESPORTES]
  .sort((a, b) => new Date(b.data) - new Date(a.data))
  .slice(0, 5)
  .map((n, i) => ({
    posicao: i + 1,
    titulo: n.titulo,
    tipo: CATEGORIA_TIPO[n.categoria] || 'Notícia',
    url: `/noticias/${n.slug}`,
    imagem: n.imagem,
  }));

export default function TrendingSection() {
  return (
    <section aria-labelledby="trending-title" className="py-8 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="trending-title" className="text-lg md:text-xl font-bold text-white mb-5 flex items-center gap-2">
          <span className="text-[#FF6600]" aria-hidden="true">🔥</span>
          Em Alta Agora
        </h2>

        <ol
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
          aria-label="Lista de conteúdos em alta"
        >
          {TRENDING_DINAMICO.map(({ posicao, titulo, tipo, url, imagem }) => (
            <li key={posicao}>
              <Link
                href={url}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#141414] hover:bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#404040] transition-all group"
              >
                {imagem ? (
                  <div className="flex-shrink-0 w-10 h-14 rounded overflow-hidden bg-[#2a2a2a]">
                    <img
                      src={imagem}
                      alt={titulo}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <span
                    aria-label={`Posição ${posicao}`}
                    className="flex-shrink-0 text-4xl font-black text-[#2a2a2a] group-hover:text-[#FF6600]/20 transition-colors leading-none w-10 text-center"
                  >
                    {posicao}
                  </span>
                )}

                <div className="min-w-0">
                  <span className={`inline-block text-xs px-1.5 py-0.5 rounded mb-1 font-medium ${TYPE_COLORS[tipo] || 'bg-zinc-700/40 text-zinc-300'}`}>
                    {tipo}
                  </span>
                  <p className="text-white text-sm font-semibold leading-tight truncate group-hover:text-[#FF6600] transition-colors">
                    {titulo}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
