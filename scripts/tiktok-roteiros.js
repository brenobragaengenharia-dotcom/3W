// Gera roteiros + captions de TikTok para as top notícias do dia.
// Uso: npm run tiktok-roteiros (precisa ANTHROPIC_API_KEY no .env.local)
// Output: out/tiktok-roteiros-YYYY-MM-DD.json

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const ROOT       = path.resolve(__dirname, '..');

// ─── env loader simples ───────────────────────────────────────────────────────
async function loadEnv() {
  const envPath = path.join(ROOT, '.env.local');
  try {
    const raw = await fs.readFile(envPath, 'utf8');
    raw.split('\n').forEach(line => {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
    });
  } catch {/* ok, vars já podem estar setadas */}
}

// ─── Heurística de "pop appeal" ───────────────────────────────────────────────
const POP_KEYWORDS = [
  'trailer','estreia','teaser','reveal','retorno','volta','confirma',
  'gol','recorde','vitória','derrota','clássico','virada','final',
  'polêmica','briga','treta','exclusivo','vazou','vaza',
  'lançamento','anúncio','novidade','primeira imagem',
  'doomsday','marvel','dc','gta','playstation','xbox','f1','nba',
];

function popScore(noticia) {
  const txt = `${noticia.titulo} ${noticia.descricao || ''}`.toLowerCase();
  let score = 0;
  for (const kw of POP_KEYWORDS) {
    if (txt.includes(kw)) score += 1;
  }
  // Boost por categoria — entretenimento puro tem mais apelo TikTok
  if (['Cinema','Séries','Games','Comics'].includes(noticia.categoria)) score += 2;
  if (['Futebol','NBA','Fórmula 1'].includes(noticia.categoria))         score += 1;
  // Boost de freshness — notícia do dia
  const hoje = new Date().toISOString().slice(0,10);
  if (noticia.data === hoje) score += 3;
  // Boost de destaque editorial
  if (noticia.destaque) score += 2;
  return score;
}

// ─── Prompt-mestre TikTok (versão sintética para Claude) ──────────────────────
const SYSTEM_PROMPT = `Você é o copywriter-chefe do TikTok da 3W Entretenimento (3w-entretenimento.com). Português BR. KPI: crescimento de seguidores.

REGRAS DURAS:
- Caption 80-220 chars, keyword principal nos primeiros 80.
- 5 hashtags: 3 nicho + 1 sub-fandom + #3worlds. NUNCA #fyp #foryou #parati #viral #trend #explore #beleza #dance #animais #comida #comedia #amor #motivacao.
- Emojis máx 2, temáticos (🎬🎮⚽🏀🏎️📖🎵).
- Tom geek descolado. NUNCA jornalês, clickbait raso, guru-coach.
- Legenda 3 termina com CTA de seguir nicho-específico.

OUTPUT em markdown:
**Tema:** {1 frase}
**Vertical:** {Cinema|Séries|Games|Comics|Futebol|NBA|F1}
**Keyword:** {1-3 palavras}

**Legenda 1 — opinião divisiva (PICO 19h-23h)**
{caption}
{5 hashtags}

**Legenda 2 — pergunta/curiosidade (OFF-PEAK)**
{caption}
{5 hashtags}

**Legenda 3 — CTA follow**
{caption — termina com follow nicho}
{5 hashtags}

**💬 Comentário fixado:** {1 frase provocadora}
**🪝 Hook 3s iniciais:** {o que aparece na tela}
**📣 Texto sobreposto final:** "Matéria completa no link da bio."
**🎬 Stitch/duet bait sugerido:** {qual conta grande dá pra stitchar}`;

// ─── Chamada Claude ───────────────────────────────────────────────────────────
async function gerarRoteiro(noticia) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.warn('[tiktok-roteiros] ANTHROPIC_API_KEY não definida — pulando.');
    return null;
  }
  const userMsg = `INPUT DO VÍDEO:
TEMA: ${noticia.titulo}. ${noticia.descricao || ''}
VERTICAL: ${noticia.categoria}
LINK DA MATÉRIA: https://3w-entretenimento.com/noticias/${noticia.slug}
DATA DA NOTÍCIA: ${noticia.data}

Gere os 3 estilos de caption, comentário fixado, hook visual, texto sobreposto e stitch bait.`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMsg }],
    }),
  });

  if (!res.ok) {
    console.error(`[tiktok-roteiros] Claude erro ${res.status}:`, await res.text());
    return null;
  }
  const data = await res.json();
  return data.content?.[0]?.text || null;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  await loadEnv();

  // Importa dinamicamente o mock-data (ESM)
  const { NOTICIAS, NOTICIAS_ESPORTES } = await import(`file://${path.join(ROOT, 'lib/mock-data.js')}`);
  const todas = [...NOTICIAS, ...NOTICIAS_ESPORTES];

  const top3 = todas
    .map(n => ({ noticia: n, score: popScore(n) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(x => x.noticia);

  console.log(`[tiktok-roteiros] Gerando para top 3:`);
  top3.forEach((n, i) => console.log(`  ${i + 1}. ${n.titulo} (score=${popScore(n)})`));

  const out = [];
  for (const noticia of top3) {
    const roteiro = await gerarRoteiro(noticia);
    out.push({
      slug: noticia.slug,
      titulo: noticia.titulo,
      categoria: noticia.categoria,
      data: noticia.data,
      url_materia: `https://3w-entretenimento.com/noticias/${noticia.slug}`,
      roteiro: roteiro || '[falha — sem ANTHROPIC_API_KEY ou erro Claude]',
    });
  }

  const outDir  = path.join(ROOT, 'tiktok-roteiros');
  await fs.mkdir(outDir, { recursive: true });
  const stamp   = new Date().toISOString().slice(0, 10);
  const outPath = path.join(outDir, `tiktok-roteiros-${stamp}.json`);
  await fs.writeFile(outPath, JSON.stringify(out, null, 2));

  // Também salva versão markdown legível
  const mdPath  = path.join(outDir, `tiktok-roteiros-${stamp}.md`);
  const md = out.map(item => `# ${item.titulo}\n\n_Categoria: ${item.categoria} · ${item.data}_\n\nLink: ${item.url_materia}\n\n---\n\n${item.roteiro}\n\n`).join('\n\n');
  await fs.writeFile(mdPath, md);

  console.log(`[tiktok-roteiros] ✅ Salvo em:`);
  console.log(`  ${outPath}`);
  console.log(`  ${mdPath}`);
}

main().catch(err => {
  console.error('[tiktok-roteiros] erro:', err);
  process.exit(1);
});
