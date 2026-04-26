// scripts/lib/news-rewrite.js
// Reescreve uma notícia crua (vinda de RSS/GNews) no schema usado pelo 3W.
// Chama Claude via fetch direto (mesmo padrão de scripts/lib/claude.js).
//
// Retorna um objeto com DUAS partes para encaixar nos dois arquivos:
//
//   entrada_mockdata: { id, slug, titulo, descricao, categoria, autor,
//                       data, imagem, tempo_leitura }  ← vai pro array em lib/mock-data.js
//   editorial:        { manchete, paragrafos[4], frase_destaque, conclusao }
//                                                     ← vai pra content.noticias[slug]
//                                                       ou content.esportes[slug] em lib/content.json

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-sonnet-4-6';

const DIRETRIZES = `
DIRETRIZES DE ESCRITA (obrigatórias):
1. NUNCA copie frases inteiras da fonte — parafraseie sempre. Mantenha os fatos fiéis.
2. NÃO use muletas: "Descubra", "Explore", "Imperdível", "Mergulhe", "Embarque", "Surpreendente", "Revolucionário".
3. NÃO abra com "Em um mundo onde...", "Quando...", "Prepare-se para...".
4. Varie aberturas de parágrafo: fato, citação, comparação, pergunta, cena.
5. PT-BR natural, frases curtas (máx. 3 vírgulas por frase).
6. Um detalhe concreto por parágrafo — evite abstrações.
7. Tenha opinião, não fique em cima do muro.
8. Cite a fonte original uma vez com naturalidade (ex: "segundo o Omelete").
9. NUNCA invente dados, números, nomes ou declarações que não estavam no material bruto.
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
  return text.replace(/^\`\`\`(?:json)?\s*/i, '').replace(/\s*\`\`\`\s*$/, '').trim();
}

function slugify(str, fallback = '') {
  const s = String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
    .replace(/^-+|-+$/g, ''); // remove hifens de borda (pós-slice)
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
  // match case-insensitive contra lista válida
  const hit = CATEGORIAS_VALIDAS.find((c) => c.toLowerCase() === norm.toLowerCase());
  return hit || fallback;
}

export async function rewriteNoticia(raw) {
  const prompt = `Você é um jornalista do portal 3W Entretenimento (@3worlds_entertainment) cobrindo entretenimento, cultura pop e esportes.
Receba este material bruto vindo de uma fonte externa e reescreva para publicação no portal.

MATERIAL BRUTO:
- Fonte: ${raw.fonte}
- URL original: ${raw.url}
- Título original: ${raw.titulo}
- Resumo/lead original: ${raw.descricao || '(sem resumo)'}
- Corpo bruto: ${(raw.corpo_original || raw.descricao || '').slice(0, 2000)}
- Categoria sugerida: ${raw.categoria_padrao || 'Cinema'}
- Data: ${raw.data_publicacao}

${DIRETRIZES}

Categorias possíveis (escolha UMA): ${CATEGORIAS_VALIDAS.join(', ')}.

RETORNE EXATAMENTE este JSON (sem markdown, sem explicações):
{
  "titulo": "título curto (50-75 caracteres) direto e com SEO",
  "descricao": "lead em uma frase de 140-180 caracteres",
  "categoria": "uma das categorias listadas",
  "manchete": "frase de impacto de até 12 palavras (pode ser igual ou reescrita do título)",
  "paragrafos": [
    "parágrafo 1: contexto e abertura, expandindo o lead (80-100 palavras)",
    "parágrafo 2: detalhes, dados e desenvolvimento (80-100 palavras)",
    "parágrafo 3: análise ou reação do público/especialistas (70-90 palavras)",
    "parágrafo 4: perspectivas, o que vem a seguir, e citação natural da fonte original (60-80 palavras)"
  ],
  "frase_destaque": "citação ou frase marcante para pull quote (até 20 palavras)",
  "conclusao": "parágrafo conclusivo de 50-70 palavras sobre a importância da notícia",
  "tempo_leitura": 4
}`;

  const json = await callClaude(prompt);
  let parsed;
  try {
    parsed = JSON.parse(json);
  } catch (err) {
    // tenta extrair { ... } balanceado
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
  const tempo_leitura = Number.isFinite(+parsed.tempo_leitura) ? +parsed.tempo_leitura : 4;

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
      paragrafos: Array.isArray(parsed.paragrafos) ? parsed.paragrafos.map((p) => String(p).trim()).filter(Boolean) : [],
      frase_destaque: String(parsed.frase_destaque || '').trim(),
      conclusao: String(parsed.conclusao || '').trim(),
      fonte: { nome: raw.fonte, url: raw.url },
    },
  };
}
