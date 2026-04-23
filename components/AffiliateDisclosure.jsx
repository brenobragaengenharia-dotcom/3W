/**
 * AffiliateDisclosure.jsx — Avisos de afiliado (LGPD / Art. 36 CDC / Conar)
 *
 * Dois exports:
 *   <AffiliateDisclosureFooter />      → texto permanente no rodapé
 *   <AffiliateDisclosureInline variant="compact" | "full" />
 *                                       → badge em páginas com links afiliados
 *
 * Paleta alinhada ao brand: #FF6600 + #0a0a0a + #737373.
 */

export function AffiliateDisclosureFooter() {
  return (
    <div className="border-t border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <p className="text-[11px] leading-relaxed text-[#737373]">
          <strong className="text-[#b3b3b3]">Transparência:</strong> Algumas páginas deste site contêm
          links de afiliado (Amazon, Magalu, Mercado Livre, Shopee, Panini, Ingresso.com, Netshoes e outros).
          Quando você compra por esses links, o 3W pode receber uma comissão — sem custo adicional para você.
          Recomendamos só produtos que julgamos relevantes para nosso público. Conteúdo editorial, resenhas
          e notas são independentes e <strong className="text-[#b3b3b3]">não</strong> influenciados por
          parcerias comerciais. Publis e conteúdos patrocinados são sempre identificados com <em>#publi</em>{' '}
          ou <em>#parceria</em>. Dúvidas:{' '}
          <a
            href="mailto:breno.bragaengenharia@gmail.com"
            className="underline decoration-[#FF6600] underline-offset-2 hover:text-[#FF6600] transition-colors"
          >
            breno.bragaengenharia@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export function AffiliateDisclosureInline({ variant = 'compact' }) {
  if (variant === 'full') {
    return (
      <aside
        role="note"
        aria-label="Aviso de afiliado"
        className="my-4 rounded-lg border-l-4 border-[#FF6600] bg-[#FF6600]/5 px-4 py-3"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-[#FF6600] mb-1">
          Aviso de afiliado
        </p>
        <p className="text-xs leading-relaxed text-[#b3b3b3]">
          Esta página contém links de afiliado. Ao comprar através deles, o 3W
          recebe uma comissão sem custo adicional para você. Isso nos ajuda a
          manter o conteúdo gratuito. Nossa análise é independente da parceria comercial.
        </p>
      </aside>
    );
  }

  // compact
  return (
    <p className="my-2 text-[10px] uppercase tracking-widest text-[#737373]">
      <span
        aria-label="Aviso de afiliado"
        className="mr-1.5 inline-block rounded bg-[#FF6600]/15 px-1.5 py-0.5 font-bold text-[#FF6600]"
      >
        #afiliado
      </span>
      Link patrocinado — ganhamos comissão sem custo extra para você
    </p>
  );
}

export default AffiliateDisclosureFooter;
