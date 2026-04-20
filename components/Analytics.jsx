/**
 * Analytics.jsx — Carrega GA4 + Meta Pixel
 *
 * Renderizado uma vez em app/layout.js (Server Component).
 * Usa next/script com strategy="afterInteractive" para não bloquear LCP.
 *
 * Variáveis (definir em .env.local e na Vercel):
 *   NEXT_PUBLIC_GA_ID         → ex: G-ABC123XYZ
 *   NEXT_PUBLIC_META_PIXEL_ID → ex: 1234567890123456
 *
 * Sem as variáveis preenchidas, NADA é renderizado (zero overhead).
 */

import Script from 'next/script';

export default function Analytics() {
  const GA_ID    = process.env.NEXT_PUBLIC_GA_ID;
  const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {/* ─── Google Analytics 4 ────────────────────────────────────────── */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
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
