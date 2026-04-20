import { PRODUTOS_NETSHOES, NETSHOES_AFFILIATE_URL } from '@/lib/mock-data';
import AffiliateLink from '@/components/AffiliateLink';

const CATEGORIA_BADGE = {
  'Futebol':  'bg-green-600/20 border-green-600/40 text-green-400',
  'Basquete': 'bg-orange-600/20 border-orange-600/40 text-orange-400',
  'Corrida':  'bg-blue-600/20 border-blue-600/40 text-blue-400',
  'Boxe':     'bg-red-600/20 border-red-600/40 text-red-400',
  'Tênis':    'bg-yellow-600/20 border-yellow-600/40 text-yellow-400',
  'Ciclismo': 'bg-purple-600/20 border-purple-600/40 text-purple-400',
};

export default function NetshoesePromo() {
  return (
    <section
      aria-labelledby="netshoes-promo-title"
      className="py-10 border-y border-green-600/15 bg-gradient-to-b from-green-950/20 via-[#0a0a0a] to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-green-500">Parceiro Oficial</span>
              <span className="w-1 h-1 rounded-full bg-green-500" />
              <span className="text-xs text-[#737373]">Link de afiliado</span>
            </div>
            <h2 id="netshoes-promo-title" className="text-2xl md:text-3xl font-black text-white leading-tight">
              Loja de{' '}
              <span className="text-green-500">Esportes</span>{' '}
              <span className="text-white">Netshoes</span>
            </h2>
            <p className="text-[#737373] text-sm mt-1">
              Equipamentos e roupas esportivas — compre direto na Netshoes com os melhores preços.
            </p>
          </div>

          <AffiliateLink
            href={NETSHOES_AFFILIATE_URL}
            partner="Netshoes"
            label="Ver na Netshoes"
            section="netshoes-promo-cta"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap self-start sm:self-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 19a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z"/>
            </svg>
            Ver na Netshoes
          </AffiliateLink>
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {PRODUTOS_NETSHOES.map(produto => (
            <article key={produto.id} className="card-hover">
              <AffiliateLink
                href={produto.link_compra}
                partner="Netshoes"
                label={produto.titulo}
                section="netshoes-product-card"
                className="block"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#1a1a1a] mb-2">
                  <img
                    src={produto.imagem}
                    alt={produto.titulo}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <span className={`text-[10px] border px-1.5 py-0.5 rounded font-semibold ${CATEGORIA_BADGE[produto.categoria] || 'bg-[#2a2a2a] border-[#3a3a3a] text-[#b3b3b3]'}`}>
                      {produto.categoria}
                    </span>
                  </div>
                </div>
                <h3 className="text-white text-[11px] font-semibold leading-snug line-clamp-2 mb-1">
                  {produto.titulo}
                </h3>
                <span className="text-green-500 text-[10px] font-bold">Ver na Netshoes →</span>
              </AffiliateLink>
            </article>
          ))}
        </div>

        <p className="text-[#444] text-[11px] text-center mt-6">
          * Links de afiliado. Ao comprar você apoia o 3W Entretenimento sem custo extra.
        </p>
      </div>
    </section>
  );
}
