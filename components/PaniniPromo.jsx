import Link from 'next/link';
import { HQS_PANINI, LIVROS_PANINI, PANINI_AFFILIATE_URL } from '@/lib/mock-data';
import AffiliateLink from '@/components/AffiliateLink';

// Exibe os primeiros N itens de cada lista
const HQS_DESTAQUE   = HQS_PANINI.slice(0, 9);
const MANGA_DESTAQUE = LIVROS_PANINI.slice(0, 9);

function ItemCard({ item }) {
  return (
    <article className="card-hover flex-shrink-0" style={{ width: '120px' }}>
      <Link href={`/comics/${item.slug}`} className="block">
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#1a1a1a] mb-2">
          <img
            src={item.imagem}
            alt={`Capa: ${item.titulo}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-1.5 right-1.5">
            <span className="text-[10px] bg-[#FF6600] text-white px-1.5 py-0.5 rounded font-bold">Panini</span>
          </div>
        </div>
        <h3 className="text-white text-[11px] font-semibold leading-snug line-clamp-2">{item.titulo}</h3>
      </Link>
    </article>
  );
}

export default function PaniniPromo() {
  return (
    <section
      aria-labelledby="panini-promo-title"
      className="py-10 border-y border-[#FF6600]/20 bg-gradient-to-b from-[#FF6600]/5 via-[#0a0a0a] to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Cabeçalho promocional */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6600]">Parceiro Oficial</span>
              <span className="w-1 h-1 rounded-full bg-[#FF6600]" />
              <span className="text-xs text-[#9ca3af]">Link de afiliado</span>
            </div>
            <h2 id="panini-promo-title" className="text-2xl md:text-3xl font-black text-white leading-tight">
              HQs &amp; Mangás{' '}
              <span className="text-[#FF6600]">Panini</span>
            </h2>
            <p className="text-[#9ca3af] text-sm mt-1">
              Os melhores títulos Marvel, DC e mangás — compre direto no site oficial.
            </p>
          </div>

          <AffiliateLink
            href={PANINI_AFFILIATE_URL}
            partner="Panini"
            label="Comprar na Panini"
            section="panini-promo-cta"
            className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#e65c00] active:bg-[#cc5200] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap self-start sm:self-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 19a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z"/>
            </svg>
            Comprar na Panini
          </AffiliateLink>
        </div>

        {/* HQs */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-[#FF6600]" aria-hidden="true" />
              HQs em Destaque
            </h3>
            <Link href="/comics" className="text-xs text-[#9ca3af] hover:text-[#FF6600] transition-colors">
              Ver todos →
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scroll-row">
            {HQS_DESTAQUE.map(item => <ItemCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-[#1e1e1e] mb-8" />

        {/* Mangás */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-[#FF6600]" aria-hidden="true" />
              Mangás em Destaque
            </h3>
            <Link href="/comics" className="text-xs text-[#9ca3af] hover:text-[#FF6600] transition-colors">
              Ver todos →
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scroll-row">
            {MANGA_DESTAQUE.map(item => <ItemCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* Rodapé do bloco */}
        <p className="text-[#737373] text-[11px] text-center mt-6">
          * Links de afiliado. Ao comprar você apoia o 3W Entretenimento sem custo extra.
        </p>
      </div>
    </section>
  );
}
