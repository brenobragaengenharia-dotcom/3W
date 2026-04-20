/**
 * Busca os posts mais recentes de uma conta via Instagram Basic Display API.
 * Requer um token de acesso válido (Instagram Basic Display ou Graph API).
 *
 * Variáveis de ambiente necessárias no Vercel:
 *   INSTAGRAM_TOKEN_ENTRETENIMENTO  → token de @3worlds_entertainment
 *   INSTAGRAM_TOKEN_COMICS          → token de @3wcomics_
 *   INSTAGRAM_TOKEN_ESPORTES        → token de @3wesports
 *
 * Como obter o token:
 *   1. Acesse https://developers.facebook.com e crie um app do tipo "Consumer"
 *   2. Adicione o produto "Instagram Basic Display"
 *   3. Adicione o perfil do Instagram como usuário de teste
 *   4. Gere um token de acesso de longa duração
 */
export async function fetchInstagramPosts(token, limit = 12) {
  if (!token) return [];
  try {
    const url = new URL('https://graph.instagram.com/me/media');
    url.searchParams.set('fields', 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp');
    url.searchParams.set('limit', String(limit));
    url.searchParams.set('access_token', token);

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 }, // revalida a cada hora
    });

    if (!res.ok) return [];
    const json = await res.json();

    return (json.data || []).filter(
      p => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM'
    );
  } catch {
    return [];
  }
}
