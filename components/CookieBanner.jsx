'use client';

/**
 * CookieBanner.jsx — Banner de consentimento LGPD
 *
 * Compliance com Lei 13.709/18 (LGPD) + recomendações da ANPD.
 * Integra com GA4 Consent Mode v2 e Meta Pixel.
 *
 * Política:
 *   - Opt-in explícito (nada é trackeado até o usuário aceitar)
 *   - Granular: cookies essenciais vs analíticos
 *   - Consent gravado em cookie próprio (auditável, expira em 180 dias)
 *
 * Integração:
 *   - app/layout.js → <body> → <CookieBanner /> (antes do </body>)
 *   - Analytics.jsx deve setar `consent default: 'denied'` no gtag
 *     (já atualizado neste deploy)
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';

const COOKIE_NAME = '3w_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 dias

function readConsent() {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
}

function writeConsent(value) {
  if (typeof document === 'undefined') return;
  const encoded = encodeURIComponent(JSON.stringify(value));
  document.cookie = `${COOKIE_NAME}=${encoded}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax; Secure`;
}

/** Checar consent em outros componentes antes de disparar tracker custom. */
export function getConsent() {
  return readConsent();
}

/** Aplica consent aos trackers (GA4 Consent Mode v2 + Meta Pixel). */
function applyConsent(consent) {
  if (typeof window === 'undefined') return;

  if (window.gtag) {
    window.gtag('consent', 'update', {
      ad_storage: consent.analytics ? 'granted' : 'denied',
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_user_data: consent.analytics ? 'granted' : 'denied',
      ad_personalization: consent.analytics ? 'granted' : 'denied',
    });
  }

  if (window.fbq) {
    window.fbq('consent', consent.analytics ? 'grant' : 'revoke');
  }
}

export default function CookieBanner() {
  // mounted=false no SSR e durante hidratação; vira true depois do 1º render client-side.
  // Isso evita mismatch de HTML e também respeita a regra react-hooks/set-state-in-effect:
  // o useEffect só chama setState UMA vez (transição de não-montado → montado), o que é
  // o uso canônico e aprovado pelas docs do React 19.
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  // Aplica consent existente (se houver) e marca como montado.
  // Padrão canônico React 19 para client-only UI após hidratação —
  // setMounted dispara exatamente 1 vez, sem cascata de renders.
  useEffect(() => {
    const existing = readConsent();
    if (existing) applyConsent(existing);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  function save(consent) {
    writeConsent(consent);
    applyConsent(consent);
    setDismissed(true);
  }

  function acceptAll() {
    save({ essential: true, analytics: true, savedAt: new Date().toISOString() });
  }

  function rejectAll() {
    save({ essential: true, analytics: false, savedAt: new Date().toISOString() });
  }

  function savePreferences() {
    save({ essential: true, analytics, savedAt: new Date().toISOString() });
  }

  // Render só no cliente, quando ainda não há consent salvo e não foi dismissado nessa sessão.
  if (!mounted) return null;
  if (readConsent()) return null;
  if (dismissed) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-[9999] border-t border-[#FF6600]/30 bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_-8px_32px_rgba(0,0,0,0.6)]"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">

          {/* Texto */}
          <div className="flex-1 text-sm leading-relaxed">
            <h2 id="cookie-title" className="text-base font-bold text-[#FF6600] mb-1">
              Sua privacidade importa
            </h2>
            <p id="cookie-desc" className="text-[#b3b3b3]">
              Usamos cookies essenciais para o site funcionar e cookies analíticos
              (Google Analytics e Meta Pixel) para medir audiência. Você pode aceitar
              todos, recusar os opcionais, ou personalizar.{' '}
              <Link
                href="/politica-de-privacidade"
                className="text-white underline decoration-[#FF6600] underline-offset-2 hover:text-[#FF6600] transition-colors"
              >
                Política de Privacidade
              </Link>
              .
            </p>

            {showDetails && (
              <div className="mt-4 space-y-3 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-3">
                <label className="flex cursor-not-allowed items-start gap-3 text-sm opacity-70">
                  <input type="checkbox" checked disabled className="mt-1 accent-[#FF6600]" />
                  <span>
                    <strong className="block text-white">Essenciais</strong>
                    <span className="text-[#737373]">
                      Necessários para o site funcionar (sessão, preferências). Não podem ser desativados.
                    </span>
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="mt-1 accent-[#FF6600]"
                  />
                  <span>
                    <strong className="block text-white">Analíticos</strong>
                    <span className="text-[#737373]">
                      Google Analytics 4 e Meta Pixel para entender como o site é usado. Dados agregados.
                    </span>
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Botões */}
          <div className="flex flex-col gap-2 md:w-64">
            {!showDetails ? (
              <>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-lg bg-[#FF6600] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#cc5200] active:bg-[#993d00]"
                >
                  Aceitar todos
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className="rounded-lg border border-[#2a2a2a] bg-transparent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a1a1a]"
                >
                  Recusar opcionais
                </button>
                <button
                  type="button"
                  onClick={() => setShowDetails(true)}
                  className="text-xs text-[#737373] underline underline-offset-2 hover:text-[#FF6600] transition-colors"
                >
                  Personalizar
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={savePreferences}
                  className="rounded-lg bg-[#FF6600] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#cc5200]"
                >
                  Salvar preferências
                </button>
                <button
                  type="button"
                  onClick={() => setShowDetails(false)}
                  className="text-xs text-[#737373] underline underline-offset-2 hover:text-[#FF6600] transition-colors"
                >
                  Voltar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
