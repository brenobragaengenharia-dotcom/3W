import { NextResponse } from 'next/server';
import { getFile, putFile } from '@/lib/github-api';

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

export async function POST(req) {
  try {
    const data = await req.json();

    if (!process.env.TEAM_SECRET || data.teamSecret !== process.env.TEAM_SECRET) {
      return NextResponse.json({ error: 'Senha da equipe incorreta' }, { status: 401 });
    }

    const { teamSecret, ...article } = data;

    const slug = slugify(article.titulo);
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;

    const pending = { id, slug, submetido_em: new Date().toISOString(), ...article };

    const file = await getFile('pending-news.json');
    const articles = file ? JSON.parse(file.content) : [];

    articles.push(pending);

    await putFile(
      'pending-news.json',
      JSON.stringify(articles, null, 2),
      `submit: ${article.titulo.slice(0, 60)}`,
      file?.sha,
    );

    return NextResponse.json({ ok: true, slug });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
