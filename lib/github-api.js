// lib/github-api.js — lê e escreve arquivos do repo via GitHub REST API
const BASE = 'https://api.github.com';
const OWNER = process.env.GITHUB_OWNER ?? 'brenobragaengenharia-dotcom';
const REPO  = process.env.GITHUB_REPO  ?? '3W';
const BRANCH = process.env.GITHUB_BRANCH ?? 'master';

function headers() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    'User-Agent': '3W-Admin/1.0',
  };
}

export async function getFile(path) {
  const res = await fetch(
    `${BASE}/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(path)}?ref=${BRANCH}`,
    { headers: headers(), cache: 'no-store' },
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub GET "${path}": HTTP ${res.status}`);
  const { content, sha } = await res.json();
  return { content: Buffer.from(content, 'base64').toString('utf-8'), sha };
}

export async function putFile(path, content, message, sha) {
  const body = {
    message,
    content: Buffer.from(content, 'utf-8').toString('base64'),
    branch: BRANCH,
  };
  if (sha) body.sha = sha;
  const res = await fetch(
    `${BASE}/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(path)}`,
    { method: 'PUT', headers: headers(), body: JSON.stringify(body) },
  );
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`GitHub PUT "${path}": HTTP ${res.status} — ${txt.slice(0, 300)}`);
  }
  return res.json();
}
