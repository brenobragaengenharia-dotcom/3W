import { NextResponse } from 'next/server';
import { getFile, putFile } from '@/lib/github-api';
import { rateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';

// Limites de tamanho — protegem contra payloads abusivos.
const LIMITS = {
  bodyMaxBytes: 50_000,         // ~50 KB de JSON
  tituloMaxLen: 200,
  descricaoMaxLen: 500,
  paragrafoMaxLen: 2000,
  paragrafosMax: 10,
  manchete: 250,
  fraseDestaque: 500,
  conclusao: 2000,
  fonteUrlMaxLen: 500,
  submetidoPorMaxLen: 100,
};

const CATEGORIAS_VALIDAS = new Set([
  'Cinema', 'Séries', 'Games', 'Comics', 'Cultura Pop',
  'Futebol', 'NBA', 'Fórmula 1', 'Esportes', 'Xadrez',
]);

function timingSafeEqualStr(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
}

function slugify(str) {
  return String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
    .replace(/^-+|-+$/g, '') || 'noticia';
}

// Validação leve do payload submetido. Retorna string com erro ou null.
function validarPayload(data) {
  if (!data || typeof data !== 'object') return 'Payload inválido';

  const reqs = ['titulo', 'descricao', 'categoria', 'fonte_url'];
  for (const f of reqs) {
    if (typeof data[f] !== 'string' || data[f].trim().length === 0) {
      return `Campo obrigatório ausente: ${f}`;
    }
  }

  if (data.titulo.length > LIMITS.tituloMaxLen) return 'Título muito longo';
  if (data.descricao.length > LIMITS.descricaoMaxLen) return 'Descrição muito longa';
  if (typeof data.manchete === 'string' && data.manchete.length > LIMITS.manchete) return 'Manchete muito longa';
  if (typeof data.frase_destaque === 'string' && data.frase_destaque.length > LIMITS.fraseDestaque) return 'Frase de destaque muito longa';
  if (typeof data.conclusao === 'string' && data.conclusao.length > LIMITS.conclusao) return 'Conclusão muito longa';
  if (data.fonte_url.length > LIMITS.fonteUrlMaxLen) return 'URL da fonte muito longa';
  if (typeof data.submetido_por === 'string' && data.submetido_por.length > LIMITS.submetidoPorMaxLen) return 'Nome do redator muito longo';

  if (!CATEGORIAS_VALIDAS.has(data.categoria)) return 'Categoria inválida';

  if (Array.isArray(data.paragrafos)) {
    if (data.paragrafos.length > LIMITS.paragrafosMax) return `Máximo de ${LIMITS.paragrafosMax} parágrafos`;
    for (const p of data.paragrafos) {
      if (typeof p !== 'string') return 'Parágrafo inválido';
      if (p.length > LIMITS.paragrafoMaxLen) return 'Parágrafo muito longo';
    }
  }

  // URL da fonte precisa ser http(s) — evita javascript:, data:, file:.
  try {
    const u = new URL(data.fonte_url);
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return 'URL da fonte deve ser http(s)';
  } catch {
    return 'URL da fonte inválida';
  }

  return null;
}

export async function POST(req) {
  // 1) Rate-limit por IP — 10 submits por hora.
  // Para defesa real contra spam distribuído, integre Cloudflare Turnstile:
  //   - Adicionar componente <Turnstile siteKey={...} /> em app/admin/enviar/page.js
  //   - Receber data.cf_turnstile aqui e validar via fetch para
  //     https://challenges.cloudflare.com/turnstile/v0/siteverify
  //   - Setar TURNSTILE_SECRET no Vercel.
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const rl = rateLimit(`admin-submit:${ip}`, { max: 10, windowMs: 60 * 60 * 1000 });
  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'Muitos envios em pouco tempo. Tente novamente em alguns minutos.' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil(rl.retryAfterMs / 1000)) } },
    );
  }

  // 2) Limita o tamanho do body antes de fazer JSON.parse.
  const contentLength = parseInt(req.headers.get('content-length') || '0', 10);
  if (contentLength > LIMITS.bodyMaxBytes) {
    return NextResponse.json({ error: 'Payload muito grande' }, { status: 413 });
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 });
  }

  // 3) Valida senha da equipe em tempo constante.
  if (
    !process.env.TEAM_SECRET ||
    typeof data?.teamSecret !== 'string' ||
    !timingSafeEqualStr(data.teamSecret, process.env.TEAM_SECRET)
  ) {
    return NextResponse.json({ error: 'Senha da equipe incorreta' }, { status: 401 });
  }

  // 4) Valida shape e tamanhos.
  const erro = validarPayload(data);
  if (erro) {
    return NextResponse.json({ error: erro }, { status: 400 });
  }

  // 5) Persiste no GitHub.
  try {
    const { teamSecret, ...article } = data;
    const slug = slugify(article.titulo);
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const pending = { id, slug, submetido_em: new Date().toISOString(), ...article };

    const file = await getFile('pending-news.json');
    const articles = file ? JSON.parse(file.content) : [];

    // Limite de tamanho da fila — evita pending crescer indefinidamente.
    if (articles.length >= 200) {
      return NextResponse.json(
        { error: 'Fila de aprovação cheia. Tente novamente depois.' },
        { status: 503 },
      );
    }

    articles.push(pending);

    await putFile(
      'pending-news.json',
      JSON.stringify(articles, null, 2),
      `submit: ${article.titulo.slice(0, 60)}`,
      file?.sha,
    );

    return NextResponse.json({ ok: true, slug });
  } catch (err) {
    // Não vaza err.message direto — pode conter detalhes da API do GitHub.
    console.error('[submit] erro persistindo:', err);
    return NextResponse.json({ error: 'Erro ao salvar. Tente novamente.' }, { status: 500 });
  }
}
