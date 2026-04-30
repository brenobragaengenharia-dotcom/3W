// lib/rate-limit.js — rate-limit in-memory por chave (IP, user, etc).
//
// Estratégia: sliding window simples. Cada chave tem um array de timestamps
// das hits dentro da janela. Antes de cada checagem, expurga timestamps fora
// da janela e compara com o limite.
//
// Limitações importantes:
//   - In-memory: o estado vive APENAS dentro da instância da função serverless.
//     Em Vercel cold-start cria nova instância; warm reusa por algum tempo.
//     Atacante determinado pode contornar fazendo bursts em horários diferentes
//     ou explorando múltiplas regiões.
//   - Para defesa real contra brute-force distribuído: trocar para Vercel KV
//     ou Upstash Redis. Veja exemplo no fim do arquivo.
//
// Para o tamanho atual do projeto (~119 commits, sem ataque conhecido), o
// in-memory já é uma melhoria significativa sobre "sem rate-limit".

const buckets = new Map(); // key -> number[] (timestamps)
const MAX_KEYS = 10000;    // teto pra não vazar memória

export function rateLimit(key, { max, windowMs }) {
  const now = Date.now();
  const cutoff = now - windowMs;

  // Garbage collect chaves antigas se o map crescer demais.
  if (buckets.size > MAX_KEYS) {
    for (const [k, hits] of buckets) {
      const last = hits[hits.length - 1] || 0;
      if (last < cutoff) buckets.delete(k);
      if (buckets.size <= MAX_KEYS / 2) break;
    }
  }

  const hits = (buckets.get(key) || []).filter(t => t >= cutoff);

  if (hits.length >= max) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: hits[0] + windowMs - now,
    };
  }

  hits.push(now);
  buckets.set(key, hits);

  return {
    allowed: true,
    remaining: max - hits.length,
    retryAfterMs: 0,
  };
}

// ─── Exemplo de migração para Vercel KV / Upstash Redis ────────────────────
// Quando o tráfego justificar, troque o map in-memory por:
//
//   import { kv } from '@vercel/kv';
//   const hits = (await kv.get(key)) || [];
//   ... (mesma lógica) ...
//   await kv.set(key, hits, { ex: Math.ceil(windowMs / 1000) });
//
// Custo: $0 até 30k requests/mês no plano free do Vercel KV.
