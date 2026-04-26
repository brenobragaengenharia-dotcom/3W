'use client';

import { useState } from 'react';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    try {
      // Beehiiv: POST direto para a API pública da publication.
      // Variáveis em .env.local:
      //   NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID  → ex: pub_xxxx-xxxx-xxxx
      //   BEEHIIV_API_KEY             → server-side only (ver route abaixo)
      const res = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('subscribe failed');

      // Tracking: conversão no GA4 + Meta Pixel
      if (typeof window !== 'undefined') {
        if (window.gtag) window.gtag('event', 'newsletter_subscribe', { method: 'beehiiv' });
        if (window.fbq)  window.fbq('track', 'Lead', { content_name: 'newsletter' });
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      console.warn('[newsletter]', err);
      setStatus('error');
    }
  }

  return (
    <section
      aria-labelledby="newsletter-title"
      className="py-12 bg-gradient-to-r from-[#FF6600]/10 via-[#141414] to-[#FF6600]/5 border-y border-[#FF6600]/10"
    >
      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="text-2xl block mb-3" role="img" aria-label="Sino de notificação">🔔</span>
        <h2 id="newsletter-title" className="text-2xl font-black text-white mb-2">
          Fique por dentro de tudo!
        </h2>
        <p className="text-[#b3b3b3] text-sm mb-6">
          Receba as melhores notícias de entretenimento direto no seu e-mail. Sem spam.
        </p>

        {status === 'success' ? (
          <div className="inline-flex items-center gap-2 bg-green-900/30 border border-green-700/40 text-green-400 px-6 py-3 rounded-lg text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
            Inscrito com sucesso! Obrigado.
          </div>
        ) : status === 'error' ? (
          <div className="inline-flex items-center gap-2 bg-red-900/30 border border-red-700/40 text-red-400 px-6 py-3 rounded-lg text-sm font-semibold">
            Ops, algo deu errado. Tente novamente em alguns segundos.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Seu e-mail</label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              autoComplete="email"
              disabled={status === 'loading'}
              className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-[#9ca3af] text-sm focus:border-[#FF6600] focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#FF6600] hover:bg-[#cc5200] disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap"
            >
              {status === 'loading' ? 'Aguarde...' : 'Quero receber!'}
            </button>
          </form>
        )}

        <p className="text-[#9ca3af] text-xs mt-4">
          Ao se inscrever, você concorda com nossa{' '}
          <a href="/politica-de-privacidade" className="underline hover:text-white transition-colors">
            Política de Privacidade
          </a>
          . Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
