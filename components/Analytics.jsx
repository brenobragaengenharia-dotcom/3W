/**
 * Analytics.jsx — Carrega GA4 + Meta Pixel em modo LGPD-compliant
 *
 * ATUALIZADO em 22/abr/2026 (Fase 1):
 *   - Consent Mode v2 do GA4 com DEFAULT = denied
 *   - Nada é trackeado até o usuário consentir via <CookieBanner />
 *   - O CookieBanner chama gtag('consent', 'update', ...) ao aceitar
 *
 * Renderizado uma vez em app/layout.js.
 *
 * Variáveis (.env.local e na Vercel):
 *   NEXT_PUBLIC_GA_ID         → ex: G-ABC123XYZ
 *   NEXT_PUBLIC_META_PIXEL_ID → ex: 1234567890123456
 */

import Script from 'next/script';

export default function Analytics() {
  const GA_ID    = process.env.NEXT_PUBLIC_GA_ID;
  const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {/* ─── Consent Mode v2 (DEFAULT = denied) ─────────────────────────
          Precisa vir ANTES de qualquer gtag('config'/'event').
          O CookieBanner fará gtag('consent','update',...) quando o
          usuário clicar Aceitar. */}
      {(GA_ID || PIXEL_ID) && (
        <Script id="consent-default" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500,
            });
          `}
        </Script>
      )}

      {/* ─── Google Analytics 4 ────────────────────────────────────────── */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure',
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* ─── Meta Pixel ────────────────────────────────────────────────── */}
      {PIXEL_ID && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('consent', 'revoke');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}
    </>
  );
}
