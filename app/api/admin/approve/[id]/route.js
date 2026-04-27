import { NextResponse } from 'next/server';
import { getFile, putFile } from '@/lib/github-api';
import { safeImage } from '@/lib/safe-image';

function esc(s) { return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }

function formatMockEntry(e) {
  return `  {\n    id: ${e.id}, slug: '${esc(e.slug)}', titulo: '${esc(e.titulo)}',\n    descricao: '${esc(e.descricao)}',\n    categoria: '${esc(e.categoria)}', autor: '${esc(e.autor)}', data: '${esc(e.data)}',\n    imagem: '${esc(e.imagem)}', tempo_leitura: ${e.tempo_leitura},\n  }`;
}

function arrayKey(cat) {
  if (cat === 'Futebol') return 'NOTICIAS_FUTEBOL';
  if (cat === 'NBA') return 'NOTICIAS_NBA';
  if (cat === 'Fórmula 1') return 'NOTICIAS_F1';
  return 'NOTICIAS';
}

function contentSection(cat) {
  return ['Futebol', 'NBA', 'Fórmula 1'].includes(cat) ? 'esportes' : 'noticias';
}

function getNextId(src) {
  const ids = [...src.matchAll(/\bid:\s*(\d+)/g)].map(m => parseInt(m[1])).filter(n => !isNaN(n));
  return ids.length ? Math.max(...ids) + 1 : 101;
}

function insertAtTop(src, varName, entryStr) {
  const re = new RegExp(`(export const ${varName}\\s*=\\s*\\[)`);
  if (!re.test(src)) throw new Error(`Array ${varName} não encontrado em mock-data.js`);
  return src.replace(re, `$1\n${entryStr},`);
}

export async function POST(req, { params }) {
  const { id } = await params;
  try {
    // Lê os três arquivos em paralelo
    const [pendingFile, mockFile, contentFile] = await Promise.all([
      getFile('pending-news.json'),
      getFile('lib/mock-data.js'),
      getFile('lib/content.json'),
    ]);

    if (!pendingFile) return NextResponse.json({ error: 'Nenhum artigo pendente' }, { status: 404 });
    if (!mockFile) return NextResponse.json({ error: 'mock-data.js não encontrado' }, { status: 500 });

    const pending = JSON.parse(pendingFile.content);
    const article = pending.find(a => a.id === id);
    if (!article) return NextResponse.json({ error: 'Artigo não encontrado' }, { status: 404 });

    // Monta a entrada do mock-data.js
    const nextId = getNextId(mockFile.content);
    const slug = article.slug;
    const arrKey = arrayKey(article.categoria);

    const mockEntry = formatMockEntry({
      id: nextId,
      slug,
      titulo: article.titulo,
      descricao: article.descricao,
      categoria: article.categoria,
      autor: article.autor || 'Redação 3W',
      data: article.data,
      imagem: safeImage(article.imagem, { categoria: article.categoria, slug: article.slug, titulo: article.titulo }),
      tempo_leitura: Number(article.tempo_leitura) || 4,
    });

    const newMockSrc = insertAtTop(mockFile.content, arrKey, mockEntry);

    // Monta o conteúdo editorial
    const contentObj = contentFile
      ? JSON.parse(contentFile.content)
      : { filmes: {}, series: {}, comics: {}, noticias: {}, esportes: {} };

    const section = contentSection(article.categoria);
    contentObj[section] = contentObj[section] ?? {};
    contentObj[section][slug] = {
      titulo: article.titulo,
      descricao: article.descricao,
      categoria: article.categoria,
      autor: article.autor || 'Redação 3W',
      data: article.data,
      imagem: safeImage(article.imagem, { categoria: article.categoria, slug: article.slug, titulo: article.titulo }),
      tempo_leitura: Number(article.tempo_leitura) || 4,
      manchete: article.manchete || article.titulo,
      paragrafos: article.paragrafos || [],
      frase_destaque: article.frase_destaque || '',
      conclusao: article.conclusao || '',
      fonte: { nome: article.fonte_nome || '', url: article.fonte_url || '' },
      gerado_em: new Date().toISOString(),
    };

    // Remove da fila de pendentes
    const newPending = pending.filter(a => a.id !== id);

    // Comita os três arquivos sequencialmente
    await putFile('lib/mock-data.js', newMockSrc, `publish: ${article.titulo.slice(0, 60)}`, mockFile.sha);
    await putFile('lib/content.json', JSON.stringify(contentObj, null, 2), `publish content: ${slug}`, contentFile?.sha);
    await putFile('pending-news.json', JSON.stringify(newPending, null, 2), `admin: aprova ${slug}`, pendingFile.sha);

    return NextResponse.json({ ok: true, slug });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
