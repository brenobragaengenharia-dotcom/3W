# 3W Entretenimento

Portal brasileiro de entretenimento que cobre filmes, séries, comics, jogos, música, esportes e notícias. O conteúdo editorial (resenhas, manchetes, sinopses) é gerado por IA (Claude Sonnet) a partir de dados reais do TMDB e fontes RSS, e curado por revisão humana.

🌐 **Produção:** [3w-entretenimento.com](https://3w-entretenimento.com)

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Estilo:** Tailwind CSS v4
- **Hospedagem:** Vercel (deploy automático no push)
- **Conteúdo:** TMDB API + RSS + GNews → reescrito por Anthropic Claude
- **Automação:** GitHub Actions (cron diário às 6h BRT)
- **Monetização:** Links de afiliado (Ingresso.com, Panini, Netshoes)

## Como rodar localmente

```bash
git clone https://github.com/brenobragaengenharia-dotcom/3W.git
cd 3W
npm install
cp .env.local.example .env.local   # preencha as chaves
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Variáveis de ambiente

| Variável | Obrigatório | Onde gerar |
|---|---|---|
| `TMDB_API_KEY` | sim (sync de filmes/séries) | [themoviedb.org → Settings → API](https://www.themoviedb.org/settings/api) |
| `ANTHROPIC_API_KEY` | sim (gerar conteúdo editorial) | [console.anthropic.com → API Keys](https://console.anthropic.com/settings/keys) |
| `GNEWS_API_KEY` | opcional (RSS já cobre o básico) | [gnews.io](https://gnews.io/) |
| `ADMIN_SECRET` | sim (login da área admin) | string forte aleatória |
| `TEAM_SECRET` | sim (form de submissão de notícia) | string forte aleatória |
| `GH_REPO` / `GH_TOKEN` | sim para `/admin/enviar` | PAT com escopo `repo` |

## Comandos npm

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor local com hot-reload |
| `npm run build` | Build de produção |
| `npm run lint` | ESLint |
| `npm run sync-cartaz` | Atualiza filmes em cartaz no TMDB |
| `npm run sync-series` | Atualiza séries populares no TMDB |
| `npm run sync-all` | Os dois acima |
| `npm run fetch-news` | Busca RSS + GNews → reescreve via Claude |
| `npm run fetch-news:dry` | Lista o que seria adicionado, sem gravar |
| `npm run update-content` | Gera resenhas via Claude para itens novos |
| `npm run update-content:force` | Regera TODO o conteúdo |
| `npm run tiktok-roteiros` | Gera roteiros de TikTok do dia |

## Estrutura

```
3W/
├── app/                  # Páginas (Next.js App Router)
│   ├── admin/            # Área admin (login + dashboard)
│   ├── api/admin/        # Handlers de auth e submissão
│   ├── filmes/           # Páginas de filmes
│   ├── series/           # Páginas de séries
│   ├── comics/           # Comics e HQs
│   ├── noticias/         # Notícias
│   └── esportes/         # Esportes
├── components/           # Componentes React reutilizáveis
├── config/               # Configuração de fontes RSS, blocklist
├── lib/
│   ├── admin-auth.js     # Auth HMAC-SHA256 com TTL curto
│   ├── rate-limit.js     # Rate-limit por IP
│   ├── github-api.js     # Persistência via GitHub API
│   ├── safe-image.js     # Sanitização de URLs de imagem
│   ├── mock-data.js      # Lista de conteúdos do site
│   └── content.json      # Resenhas geradas pela IA
├── scripts/              # Scripts de automação
│   ├── fetch-news.js
│   ├── update-content.js
│   ├── repair-news-images.js
│   ├── enrich-placeholder-images.js
│   └── lib/              # Clients TMDB, Claude, RSS, etc.
├── public/               # Assets estáticos (imagens)
├── .github/workflows/    # GitHub Actions
└── middleware.js         # Auth + roteamento /admin
```

## Fluxo de conteúdo

```
[RSS / GNews / TMDB]
        ↓
   fetch-news.js → reescreve via Claude → mock-data.js + content.json
        ↓
   repair-news-images.js → baixa imagens, otimiza com sharp
        ↓
   enrich-placeholder-images.js → fallback com User-Agent de browser
        ↓
   git commit + push → Vercel deploy automático
```

Roda diariamente às 6h BRT via [`atualiza-conteudo-diario.yml`](.github/workflows/atualiza-conteudo-diario.yml).

## Submissão de notícias por redatores

Redatores podem submeter notícias via [`/admin/enviar`](https://3w-entretenimento.com/admin/enviar) usando a `TEAM_SECRET`. As submissões ficam em `pending-news.json` e são aprovadas pela área admin (`/admin`, autenticada por `ADMIN_SECRET`).

## Segurança

- **Auth admin:** token HMAC-SHA256 com payload `{sub, iat, exp, jti}`, validade 4h, rotaciona a cada login.
- **Rate-limit:** 5 tentativas de login / 15 min e 10 submits / 1h por IP.
- **Headers:** HSTS, X-Frame-Options DENY, X-Content-Type-Options nosniff, Permissions-Policy restritiva.
- **CSP de imagens:** allowlist explícita em `next.config.mjs`.

## Deploy

Push para `master` → Vercel detecta e faz deploy automático. Sem comando manual.

Para regenerar o conteúdo manualmente fora do cron diário, dispare o workflow [`atualiza-conteudo-diario`](.github/workflows/atualiza-conteudo-diario.yml) em Actions → Run workflow.

## Licença

Proprietário — todos os direitos reservados. Para uso ou distribuição, entre em contato.

<!-- chore: trigger vercel deploy -->
