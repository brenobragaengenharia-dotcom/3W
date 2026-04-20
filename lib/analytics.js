/**
 * analytics.js — Helpers de tracking para GA4 e Meta Pixel
 *
 * Uso:
 *   import { trackAffiliateClick, trackEvent } from '@/lib/analytics';
 *   trackAffiliateClick({ partner: 'Panini', url, label: 'Comprar na Panini', section: 'panini-promo' });
 */

// Verifica se estamos no browser e se cada lib carregou
const inBrowser = () => typeof window !== 'undefined';
const hasGA     = () => inBrowser() && typeof window.gtag === 'function';
const hasFbq    = () => inBrowser() && typeof window.fbq === 'function';

/**
 * Dispara um evento GA4 + Meta Pixel.
 * Falha silenciosamente se as libs não carregaram (ex: bloqueador de ads).
 *
 * @param {string} eventName   ex: 'click_afiliado'
 * @param {object} params      qualquer payload (será enviado para ambos)
 */
export function trackEvent(eventName, params = {}) {
  try {
    if (hasGA())  window.gtag('event', eventName, params);
    if (hasFbq()) window.fbq('trackCustom', eventName, params);
  } catch (err) {
    // não trava a UX se o tracking falhar
    if (process.env.NODE_ENV === 'development') console.warn('[analytics]', err);
  }
}

/**
 * Tracking padronizado para cliques de afiliado.
 * Dispara em GA4 como 'click_afiliado' e em Meta como 'AffiliateClick'.
 */
export function trackAffiliateClick({ partner, url, label, section }) {
  const payload = {
    partner,           // 'Panini' | 'Netshoes' | 'Ingresso.com' | etc
    affiliate_url: url,
    link_label: label,
    section: section || 'unknown',
    page_path: inBrowser() ? window.location.pathname : '',
  };

  // GA4 (evento custom)
  if (hasGA()) {
    window.gtag('event', 'click_afiliado', {
      ...payload,
      // O GA4 trata estes parâmetros como dimensões/métricas customizadas:
      event_category: 'afiliado',
      event_label:    `${partner} — ${label}`,
    });
  }

  // Meta Pixel — usa evento padrão Lead + custom para granularidade
  if (hasFbq()) {
    window.fbq('track', 'Lead', { content_name: partner, content_category: 'afiliado' });
    window.fbq('trackCustom', 'AffiliateClick', payload);
  }
}
