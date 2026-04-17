'use client';

import { useState } from 'react';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    // Substitua pela sua chamada de API real
    await new Promise(r => setTimeout(r, 1000));
    setStatus('success');
    setEmail('');
  }

  return (
    <section
      aria-labelledby="newsletter-title"
      className="py-12 bg-gradient-to-r from-[#e50914]/10 via-[#141414] to-[#e50914]/5 border-y border-[#e50914]/10"
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
              className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-[#737373] text-sm focus:border-[#e50914] focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#e50914] hover:bg-[#b30710] disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap"
            >
              {status === 'loading' ? 'Aguarde...' : 'Quero receber!'}
            </button>
          </form>
        )}

        <p className="text-[#737373] text-xs mt-4">
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
