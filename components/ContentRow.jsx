import Link from 'next/link';
import Image from 'next/image';

export default function ContentRow({ title, items = [], basePath, viewAllPath, tipo = 'vertical' }) {
  if (!items.length) return null;

  return (
    <section aria-labelledby={`row-${basePath?.replace('/', '')}`} className="py-6">
      <div className="max-w-7xl mx-auto px-4">

        {/* Cabeçalho da seção */}
        <div className="flex items-center justify-between mb-4">
          <h2
            id={`row-${basePath?.replace('/', '')}`}
            className="text-lg md:text-xl font-bold text-white"
          >
            {title}
          </h2>
          {(viewAllPath || basePath) && (
            <Link
              href={viewAllPath || basePath}
              className="text-sm text-[#9ca3af] hover:text-[#FF6600] transition-colors flex items-center gap-1"
              aria-label={`Ver tudo em ${title}`}
            >
              Ver tudo
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          )}
        </div>

        {/* Scroll horizontal */}
        <div
          className="scroll-row"
          role="list"
          aria-label={title}
          tabIndex={0}
        >
          {items.map((item) => (
            <article
              key={item.id}
              role="listitem"
              className="card-hover"
              style={{ width: tipo === 'vertical' ? '150px' : '280px' }}
            >
              <Link href={`${basePath}/${item.slug}`} className="block">
                {/* Thumbnail */}
                <div
                  className={`relative overflow-hidden rounded-lg bg-[#1a1a1a] ${tipo === 'vertical' ? 'aspect-[2/3]' : 'aspect-video'}`}
                >
                  <img
                    src={item.imagem}
                    alt={`Capa: ${item.titulo}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  {/* Rating badge no canto */}
                  {item.nota && (
                    <div className="absolute top-2 right-2">
                      <span className="rating-badge">★ {item.nota}</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="mt-2">
                  <h3 className="text-white text-xs font-semibold leading-snug line-clamp-2 mb-1">
                    {item.titulo}
                  </h3>
                  <div className="flex items-center gap-2 text-[#9ca3af] text-xs">
                    {item.ano && <span>{item.ano}</span>}
                    {item.categoria && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{item.categoria}</span>
                      </>
                    )}
                    {item.artista && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{item.artista}</span>
                      </>
                    )}
                    {item.plataforma && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{item.plataforma}</span>
                      </>
                    )}
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
