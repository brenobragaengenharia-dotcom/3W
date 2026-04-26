import { INGRESSO_URL, PANINI_AFFILIATE_URL, NETSHOES_AFFILIATE_URL } from '@/lib/mock-data';
import AffiliateLink from '@/components/AffiliateLink';

const CTAS = {
  Cinema: {
    title: 'Vai ao cinema?',
    subtitle: 'Garanta seu ingresso online sem fila.',
    label: 'Comprar Ingressos',
    url: INGRESSO_URL,
    partner: 'Ingresso.com',
    bg: 'from-[#e11d48]/10 via-[#0a0a0a] to-transparent',
    border: 'border-[#e11d48]/30',
    accent: 'text-[#e11d48]',
    btn: 'bg-[#e11d48] hover:bg-[#be123c] active:bg-[#9f1239]',
  },
  Séries: {
    title: 'Curtindo séries?',
    subtitle: 'Descubra HQs e mangás dos seus universos favoritos.',
    label: 'Ver na Panini',
    url: PANINI_AFFILIATE_URL,
    partner: 'Panini',
    bg: 'from-[#FF6600]/10 via-[#0a0a0a] to-transparent',
    border: 'border-[#FF6600]/30',
    accent: 'text-[#FF6600]',
    btn: 'bg-[#FF6600] hover:bg-[#e65c00] active:bg-[#cc5200]',
  },
  Comics: {
    title: 'Quer essa HQ na sua estante?',
    subtitle: 'Os melhores títulos Marvel, DC e mangás na Panini.',
    label: 'Ver na Panini',
    url: PANINI_AFFILIATE_URL,
    partner: 'Panini',
    bg: 'from-[#FF6600]/10 via-[#0a0a0a] to-transparent',
    border: 'border-[#FF6600]/30',
    accent: 'text-[#FF6600]',
    btn: 'bg-[#FF6600] hover:bg-[#e65c00] active:bg-[#cc5200]',
  },
  Futebol: {
    title: 'Vista a camisa do seu time',
    subtitle: 'Camisas, chuteiras e produtos oficiais na Netshoes.',
    label: 'Ver na Netshoes',
    url: NETSHOES_AFFILIATE_URL,
    partner: 'Netshoes',
    bg: 'from-green-950/30 via-[#0a0a0a] to-transparent',
    border: 'border-green-600/30',
    accent: 'text-green-500',
    btn: 'bg-green-600 hover:bg-green-500 active:bg-green-700',
  },
  NBA: {
    title: 'Equipamento de basquete?',
    subtitle: 'Tênis e produtos oficiais na Netshoes.',
    label: 'Ver na Netshoes',
    url: NETSHOES_AFFILIATE_URL,
    partner: 'Netshoes',
    bg: 'from-orange-950/30 via-[#0a0a0a] to-transparent',
    border: 'border-orange-600/30',
    accent: 'text-orange-400',
    btn: 'bg-green-600 hover:bg-green-500 active:bg-green-700',
  },
  'Fórmula 1': {
    title: 'Fã de F1?',
    subtitle: 'Camisas e equipamentos esportivos na Netshoes.',
    label: 'Ver na Netshoes',
    url: NETSHOES_AFFILIATE_URL,
    partner: 'Netshoes',
    bg: 'from-red-950/30 via-[#0a0a0a] to-transparent',
    border: 'border-red-600/30',
    accent: 'text-red-400',
    btn: 'bg-green-600 hover:bg-green-500 active:bg-green-700',
  },
};

export default function ArticleCTA({ categoria, slug }) {
  const cta = CTAS[categoria];
  if (!cta) return null;

  return (
    <aside
      aria-label="Conteúdo patrocinado"
      className={`mt-10 rounded-2xl border ${cta.border} bg-gradient-to-br ${cta.bg} p-6 md:p-8`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className={`text-xs font-bold uppercase tracking-widest ${cta.accent}`}>
            Parceiro Oficial · Link de afiliado
          </span>
          <h3 className="text-xl md:text-2xl font-black text-white leading-tight mt-1">
            {cta.title}
          </h3>
          <p className="text-[#9ca3af] text-sm mt-1">{cta.subtitle}</p>
        </div>

        <AffiliateLink
          href={cta.url}
          partner={cta.partner}
          label={cta.label}
          section={`article-cta-${categoria.toLowerCase().replace(/\s/g, '-')}-${slug || ''}`}
          className={`inline-flex items-center gap-2 ${cta.btn} text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap self-start md:self-auto`}
        >
          {cta.label}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </AffiliateLink>
      </div>
      <p className="text-[#737373] text-[11px] mt-4">
        * Ao comprar você apoia o 3W Entretenimento sem custo extra.
      </p>
    </aside>
  );
}
