'use client';

/**
 * AffiliateLink — Wrapper para qualquer link de afiliado externo.
 *
 * - Renderiza um <a target="_blank" rel="noopener noreferrer sponsored">
 * - Dispara evento `click_afiliado` no GA4 e `AffiliateClick` no Meta Pixel
 * - Aceita todas as props padrão de <a> (className, style, etc)
 *
 * Uso:
 *   <AffiliateLink
 *     href={PANINI_AFFILIATE_URL}
 *     partner="Panini"
 *     label="Comprar na Panini"
 *     section="panini-promo-cta"
 *     className="bg-[#FF6600] ..."
 *   >
 *     Comprar na Panini
 *   </AffiliateLink>
 */

import { trackAffiliateClick } from '@/lib/analytics';

export default function AffiliateLink({
  href,
  partner,
  label,
  section,
  children,
  onClick,
  rel = 'noopener noreferrer sponsored',
  target = '_blank',
  ...rest
}) {
  function handleClick(e) {
    trackAffiliateClick({ partner, url: href, label: label || partner, section });
    if (onClick) onClick(e);
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={handleClick}
      data-affiliate-partner={partner}
      data-affiliate-section={section}
      {...rest}
    >
      {children}
    </a>
  );
}
