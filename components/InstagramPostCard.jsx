/**
 * Card que exibe um post real do Instagram (imagem + legenda).
 * Usado nas páginas Home, Comics e Esportes quando o token da API está disponível.
 */
export default function InstagramPostCard({ post, accentColor = 'hover:text-[#FF6600]' }) {
  // Usa só a primeira linha da legenda, truncada em 140 chars
  const caption = post.caption
    ? post.caption.split('\n')[0].replace(/#\S+/g, '').trim().slice(0, 140)
    : '';

  const imgSrc = post.media_url || post.thumbnail_url;

  return (
    <article className="card-hover rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a]">
      <a
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={caption || 'Ver post no Instagram'}
      >
        {/* Imagem quadrada do post */}
        <div className="aspect-square overflow-hidden bg-[#1a1a1a]">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={caption || 'Post do Instagram'}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#737373]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
              </svg>
            </div>
          )}
        </div>

        {/* Legenda + data */}
        <div className="p-4">
          {caption && (
            <p className={`text-white text-sm leading-snug line-clamp-3 ${accentColor} transition-colors`}>
              {caption}
            </p>
          )}
          <time
            dateTime={post.timestamp}
            className="text-[#737373] text-xs mt-2 block"
          >
            {new Date(post.timestamp).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </time>
        </div>
      </a>
    </article>
  );
}
