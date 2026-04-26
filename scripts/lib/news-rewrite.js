// scripts/lib/news-rewrite.js
// Reescreve uma notícia crua (RSS/GNews) no schema do 3W via Claude.
// FILOSOFIA: fidelidade > tamanho. Notas curtas viram parágrafo único,
// matérias longas viram até 4. NUNCA inventa para encher cota.

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-sonnet-4-6';

const DIRETRIZES = `
DIRETRIZES DE ESCRITA (obrigatórias):
1. FIDELIDADE ANTES DE TUDO. Use SOMENTE fatos, números, nomes e declarações que aparecem no material bruto. NÃO invente nada — nem para "completar" um parágrafo nem para parecer mais informado.
2. Se o material bruto for curto (lead de 1-2 frases), entregue UM parágrafo curto. Se for médio, 2 parágrafos. Se for matéria completa, até 4. NUNCA estique o texto só para atingir 4 parágrafos.
3. Parafraseie em vez de copiar — mas mantenha o sentido EXATO da fonte. Em dúvida, prefira parafrasear de perto a inventar variação.
4. NÃO use muletas: "Descubra", "Explore", "Imperdível", "Mergulhe", "Embarque", "Surpreendente", "Revolucionário".
5. NÃO abra com "Em um mundo onde...", "Quando...", "Prepare-se para...".
6. PT-BR natural, frases claras. Evite floreios.
7. Um detalhe concreto por parágrafo — se não há detalhe concreto na fonte, NÃO escreva o parágrafo.
8. Cite a fonte original uma vez quando fizer sentido (ex: "segundo o Omelete"). Não force.
9. SEM editorialização especulativa: nada de "isso pode marcar uma virada" se a fonte não disse isso.
10. frase_destaque e conclusao são OPCIONAIS. Se a fonte não traz frase forte ou desfecho claro, devolva string vazia. NUNCA fabrique.
`;

const CATEGORIAS_VALIDAS = ['Cinema', 'Séries', 'Comics', 'Futebol', 'NBA', 'Fórmula 1', 'Esportes', 'Xadrez'];

async function callClaude(prompt) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error('ANTHROPIC_API_KEY não definida no .env.local');

  const res = await fetch(ANTHROPIC_API, {
    method: 'POST',
    headers: {
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Claude API → HTTP ${res.status}: ${err.slice(0, 300)}`);
  }

  const data = await res.json();
  const text = data.content?.[0]?.text ?? '';
  return text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();
}

function slugify(str, fallback = '') {
  const s = String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
    .replace(/^-+|-+$/g, '');
  return s || (fallback ? `noticia-${fallback}` : 'noticia');
}

function toIsoDate(d) {
  if (!d) return new Date().toISOString().slice(0, 10);
  const t = new Date(d);
  if (isNaN(t.getTime())) return new Date().toISOString().slice(0, 10);
  return t.toISOString().slice(0, 10);
}

function normalizaCategoria(cat, fallback = 'Cinema') {
  if (!cat) return fallback;
  const norm = String(cat).trim();
  const hit = CATEGORIAS_VALIDAS.find((c) => c.toLowerCase() === norm.toLowerCase());
  return hit || fallback;
}

// Tempo de leitura proporcional ao texto efetivamente escrito (~200 ppm).
function calcularTempoLeitura(paragrafos, conclusao) {
  const total = (paragrafos || []).join(' ') + ' ' + (conclusao || '');
  const palavras = total.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(palavras / 200));
}

export async function rewriteNoticia(raw) {
  const corpoBruto = (raw.corpo_original || raw.descricao || '').slice(0, 2500);
  const palavrasBruto = corpoBruto.trim().split(/\s+/).filter(Boolean).length;

  const prompt = `Você é um jornalista do portal 3W Entretenimento (@3worlds_entertainment) cobrindo entretenimento, cultura pop e esportes.
Receba este material bruto e reescreva para publicação no portal.

MATERIAL BRUTO (${palavrasBruto} palavras):
- Fonte: ${raw.fonte}
- URL original: ${raw.url}
- Título original: ${raw.titulo}
- Resumo/lead original: ${raw.descricao || '(sem resumo)'}
- Corpo bruto: ${corpoBruto || '(sem corpo)'}
- Categoria sugerida: ${raw.categoria_padrao || 'Cinema'}
- Data: ${raw.data_publicacao}

${DIRETRIZES}

Categorias possíveis (escolha UMA): ${CATEGORIAS_VALIDAS.join(', ')}.

REGRA DE TAMANHO (consequência, não meta):
- Menos de 50 palavras de fonte → 1 parágrafo curto.
- 50-150 palavras → 1 ou 2 parágrafos.
- 150-400 palavras → 2 ou 3 parágrafos.
- Mais de 400 palavras → 3 ou 4 parágrafos.
NUNCA escreva um parágrafo genérico só para atingir 4. É melhor entregar 1 parágrafo verdadeiro do que 4 inflados.

RETORNE EXATAMENTE este JSON (sem markdown, sem explicações):
{
  "titulo": "título curto (50-75 caracteres) direto e com SEO",
  "descricao": "lead em uma frase de até 180 caracteres",
  "categoria": "uma das categorias listadas",
  "manchete": "frase de impacto de até 12 palavras (pode ser igual ou reescrita do título)",
  "paragrafos": ["parágrafo 1", "...até 4 parágrafos baseados no material disponível"],
  "frase_destaque": "citação ou frase marcante EXTRAÍDA do material (até 20 palavras) — string vazia se a fonte não tem",
  "conclusao": "parágrafo conclusivo SE houver desfecho claro na fonte — string vazia se não houver"
}`;

  const json = await callClaude(prompt);
  let parsed;
  try {
    parsed = JSON.parse(json);
  } catch (err) {
    const first = json.indexOf('{');
    const last = json.lastIndexOf('}');
    if (first >= 0 && last > first) {
      parsed = JSON.parse(json.slice(first, last + 1));
    } else {
      throw new Error(`JSON inválido do Claude: ${err.message}`);
    }
  }

  const titulo = String(parsed.titulo || raw.titulo).trim();
  const categoria = normalizaCategoria(parsed.categoria, raw.categoria_padrao || 'Cinema');
  const data = toIsoDate(raw.data_publicacao);
  const paragrafos = Array.isArray(parsed.paragrafos)
    ? parsed.paragrafos.map((p) => String(p).trim()).filter(Boolean)
    : [];
  const conclusao = String(parsed.conclusao || '').trim();
  const tempo_leitura = calcularTempoLeitura(paragrafos, conclusao);

  return {
    slug: slugify(titulo),
    categoria,
    data,
    entrada_mockdata: {
      slug: slugify(titulo),
      titulo,
      descricao: String(parsed.descricao || '').trim(),
      categoria,
      autor: 'Redação 3W',
      data,
      imagem: raw.imagem || '/images/noticias/placeholder.jpg',
      tempo_leitura,
    },
    editorial: {
      manchete: String(parsed.manchete || titulo).trim(),
      paragrafos,
      frase_destaque: String(parsed.frase_destaque || '').trim(),
      conclusao,
      fonte: { nome: raw.fonte, url: raw.url },
    },
  };
}
