// IDs dos widgets Elfsight por perfil
export const ELFSIGHT_IDS = {
  entretenimento: 'elfsight-app-83ed9953-da00-4cc6-999a-af4508f63bc8',
  comics:         'elfsight-app-47ad5afc-d845-417e-8d3c-f60acfcc8288',
  esportes:       'elfsight-app-aefa0de6-54cb-44fa-a8b6-497960529d0f',
};

/**
 * ElfsightFeed — Server Component (sem 'use client')
 * Renderiza o div que o script elfsightcdn.com/platform.js encontra e ativa.
 */
export default function ElfsightFeed({ appId, title, perfil, href }) {
  return (
    <section
      aria-labelledby={title ? `elfsight-${appId}` : undefined}
      className="py-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho da seção */}
        {title && (
          <div className="flex items-center justify-between mb-5">
            <h2
              id={`elfsight-${appId}`}
              className="text-lg md:text-xl font-bold text-white flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#FF6600]"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              {title}
            </h2>

            {perfil && href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#737373] hover:text-[#FF6600] transition-colors flex items-center gap-1"
                aria-label={`Ver ${perfil} no Instagram`}
              >
                {perfil}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            )}
          </div>
        )}

        {/* Div que o Elfsight platform.js encontra pelo nome da classe */}
        <div
          className={appId}
          data-elfsight-app-lazy=""
          suppressHydrationWarning
        />
      </div>
    </section>
  );
}
