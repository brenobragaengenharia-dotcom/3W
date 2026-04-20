# Melhorias — Fase 1 (Abr/2026)

Documenta o que mudou nesta entrega e o que **você (Breno) precisa fazer** depois do merge para tudo funcionar de fato.

---

## 1. Automação diária do conteúdo (GitHub Actions)

**Arquivo:** `.github/workflows/atualiza-conteudo-diario.yml`

- Roda todo dia às **09:00 UTC (06:00 BRT)** automaticamente.
- Também pode ser disparado manualmente em **Actions → Atualiza conteúdo (diário 6h BRT) → Run workflow** (com opção de `--force`).
- Faz: `npm ci` → `sync-all` (TMDB) → `update-content` (Claude) → commit + push.
- Vercel detecta o push em `master` e faz redeploy automático.

### O que VOCÊ precisa fazer no GitHub:

1. Vá em https://github.com/brenobragaengenharia-dotcom/3W/settings/secrets/actions
2. Adicione dois **Repository secrets**:
   - `TMDB_API_KEY` — sua chave do TheMovieDB
   - `ANTHROPIC_API_KEY` — sua chave da Anthropic
3. Vá em **Settings → Actions → General → Workflow permissions** e marque **"Read and write permissions"** (necessário para o bot commitar de volta).

> **Custo estimado**: 1 execução/dia × ~10 itens novos × ~2.000 tokens = ~20k tokens/dia em Claude Sonnet. Aproximadamente **US$ 0,06/dia** ou **~US$ 1,80/mês** em API. TMDB é gratuito.

---

## 2. Analytics: GA4 + Meta Pixel + tracking de afiliados

**Arquivos novos:**
- `components/Analytics.jsx` — injeta GA4 e Meta Pixel via `next/script`
- `components/AffiliateLink.jsx` — wrapper que dispara evento ao clicar
- `lib/analytics.js` — helpers `trackEvent` e `trackAffiliateClick`

**Arquivos modificados:**
- `app/layout.js` — renderiza `<Analytics />`
- `components/PaniniPromo.jsx`, `IngressoPromo.jsx`, `NetshoesePromo.jsx` — CTAs principais e cards de produto Netshoes agora usam `<AffiliateLink>`

### O que VOCÊ precisa fazer:

#### A) Criar conta no Google Analytics 4 (~3 minutos)

1. Vá em https://analytics.google.com → **Admin** → **Criar propriedade**
2. Nome: `3W Entretenimento` | País: Brasil | Moeda: BRL
3. Em **Streams de dados** → **Web** → coloque `https://3w-entretenimento.com`
4. Copie o **Measurement ID** (formato `G-XXXXXXXXXX`)

#### B) Criar Meta Pixel (~3 minutos)

1. Vá em https://business.facebook.com/events_manager
2. **+ Conectar fontes de dados** → **Web** → **Meta Pixel**
3. Nome: `3W Entretenimento Pixel` | URL do site: `https://3w-entretenimento.com`
4. Copie o **Pixel ID** (numérico, ~16 dígitos)

#### C) Adicionar as variáveis em 2 lugares

**Vercel** (produção):
1. https://vercel.com/[seu-projeto]/settings/environment-variables
2. Adicione, marcando todos os ambientes (Production, Preview, Development):
   - `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`
   - `NEXT_PUBLIC_META_PIXEL_ID` = `1234567890123456`
3. Faça um redeploy para aplicar

**Local** (`.env.local`):
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=1234567890123456
```

> Sem essas variáveis, os componentes não renderizam nada (zero overhead). Sem risco em mergear antes de criar as contas.

#### D) Validar que está tudo funcionando

- Abra o site em produção, abra o DevTools → Network → filtre por `gtag` e `facebook` → deve ver requests
- Em GA4 vá em **Relatórios → Tempo real** → você mesmo deve aparecer
- Em **Meta Events Manager** → Test Events → use a URL de produção
- Clique em qualquer botão "Comprar na Panini/Ingresso/Netshoes" → o evento `click_afiliado` deve aparecer no GA4 em ~1 minuto

---

## 3. SEO técnico

### a) `next/image` no Hero (LCP-crítico)

**Arquivo:** `components/HeroSection.jsx`

Substituí o `<img>` cru por `<Image fill priority sizes="100vw" />` — Next.js agora serve WebP/AVIF automaticamente, com tamanhos responsivos. Ganho esperado em **LCP** e **CLS**.

> **Não migrei** os ~28 outros `<img>` em cards de scroll horizontal (PaniniPromo, IngressoPromo, ContentRow, etc.) — esses são `loading="lazy"` e o ganho é marginal vs. risco de quebrar layout. Recomendo migrar gradualmente em uma Fase 2.

### b) JSON-LD expandido

**Arquivo:** `lib/structured-data.js` — adicionei 3 helpers novos:

- `schemaTVSeries({ ... })` — séries (`/series/[slug]`)
- `schemaBook({ ... })` — livros tradicionais (`/comics/[slug]` quando há `autor`)
- `schemaProduct({ ... })` — HQs/mangás Panini com link de compra (rich snippet de oferta no Google)

**Aplicados em:**
- `app/filmes/[slug]/page.js` — agora renderiza `schemaMovie`
- `app/series/[slug]/page.js` — agora renderiza `schemaTVSeries`
- `app/comics/[slug]/page.js` — escolhe `schemaProduct` se houver `link_compra`, senão `schemaBook`

### Validação após deploy:

Cole qualquer URL de filme/série em https://search.google.com/test/rich-results — deve detectar Movie/TVSeries/Product/Book.

---

## 4. Refinamento do prompt do Claude

**Arquivo:** `scripts/lib/claude.js`

Adicionei `DIRETRIZES_EDITORIAIS` aplicadas a **todos** os geradores (filme, série, notícia, esporte, comic, livro). As diretrizes proíbem palavras-muleta ("Descubra", "Explore", "Imerja", "Imperdível"), forçam variação de abertura de parágrafos e exigem detalhes concretos.

Aumentei `max_tokens` para 2000 (as diretrizes consomem ~300 tokens extras).

### Para regenerar tudo com o novo prompt:

```bash
npm run update-content:force
```

Custo único: ~US$ 1-2 dependendo do volume.

---

## 5. Outras peças adicionadas

- `.env.local.example` — template das variáveis (TMDB, Anthropic, GA, Pixel) com links para criar cada chave.

---

## Checklist final do que VOCÊ precisa fazer (na ordem)

- [ ] Adicionar `TMDB_API_KEY` e `ANTHROPIC_API_KEY` em **GitHub → Settings → Secrets → Actions**
- [ ] Habilitar "Read and write permissions" em **GitHub → Settings → Actions → General**
- [ ] Criar conta GA4 e copiar `G-XXXXXXXXXX`
- [ ] Criar Meta Pixel e copiar o ID numérico
- [ ] Adicionar `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_META_PIXEL_ID` na **Vercel**
- [ ] Adicionar as mesmas variáveis no `.env.local` local
- [ ] Fazer redeploy na Vercel
- [ ] Disparar o workflow manualmente uma vez para validar (Actions → Run workflow)
- [ ] Rodar `npm run update-content:force` localmente para regenerar com prompt refinado e commitar
- [ ] Validar Rich Results: cole URL de `/filmes/[qualquer-slug]` em https://search.google.com/test/rich-results
- [ ] Revogar o Personal Access Token usado para abrir este PR

---

## O que NÃO foi tocado (ficou para Fase 2)

- Migração dos demais `<img>` para `<Image>` (cards de scroll horizontal)
- Auditoria de contraste WCAG AA do tema escuro
- Adição de Movie/Product schema em listagens (não só páginas de detalhe)
- Sitemap dinâmico que reflita os itens em `lib/content.json`
- Newsletter (componente `NewsletterBanner.jsx` existe mas sem backend)
- Ativar de fato o widget Elfsight no DOM em produção (script já carregado, mas widget não aparece — verificar configuração no painel Elfsight)
