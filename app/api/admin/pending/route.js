import { NextResponse } from 'next/server';
import { getFile, putFile } from '@/lib/github-api';

async function readPending() {
  const file = await getFile('pending-news.json');
  if (!file) return { articles: [], sha: null };
  return { articles: JSON.parse(file.content), sha: file.sha };
}

export async function GET() {
  try {
    const { articles } = await readPending();
    return NextResponse.json(articles);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const { articles, sha } = await readPending();
    const filtered = articles.filter(a => a.id !== id);
    if (filtered.length === articles.length) {
      return NextResponse.json({ error: 'Artigo não encontrado' }, { status: 404 });
    }
    await putFile(
      'pending-news.json',
      JSON.stringify(filtered, null, 2),
      `admin: rejeita artigo ${id}`,
      sha,
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
