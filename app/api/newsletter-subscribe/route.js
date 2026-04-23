/**
 * app/api/newsletter-subscribe/route.js
 *
 * Endpoint server-side que repassa inscrição para o Beehiiv.
 * Protege a BEEHIIV_API_KEY (nunca exposta ao browser).
 *
 * Variáveis de ambiente (.env.local e Vercel):
 *   BEEHIIV_API_KEY       → gerada em beehiiv.com > Settings > Integrations > API
 *   BEEHIIV_PUBLICATION_ID        → ex: pub_xxxxxxxx-xxxx-xxxx (achar em Settings > Publication)
 *
 * Docs Beehiiv: https://developers.beehiiv.com/
 */

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const body = await request.json();
    const email = (body.email || '').trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'invalid_email' }, { status: 400 });
    }

    const API_KEY = process.env.BEEHIIV_API_KEY;
    const PUB_ID  = process.env.BEEHIIV_PUBLICATION_ID;

    if (!API_KEY || !PUB_ID) {
      console.error('[newsletter] Beehiiv não configurado. Definir BEEHIIV_API_KEY e BEEHIIV_PUBLICATION_ID');
      return Response.json({ error: 'not_configured' }, { status: 500 });
    }

    const res = await fetch(`https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: 'site',
        utm_medium: 'banner',
        utm_campaign: 'newsletter-3w',
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      console.error('[newsletter] Beehiiv erro', res.status, errText);
      return Response.json({ error: 'beehiiv_error' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('[newsletter] exceção', err);
    return Response.json({ error: 'internal' }, { status: 500 });
  }
}
