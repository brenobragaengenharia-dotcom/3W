# KPIs TikTok — @3worlds_entertainment

## Estado inicial (2026-04-26)

- **Seguidores:** 398
- **Likes acumulados:** 308.500
- **Razão likes:follows:** 775:1 ⚠️ (saudável: 5-30:1)
- **Bio status:** versão antiga (genérica)
- **Categorização TikTok:** "variedades genéricas" (problema crítico)
- **Tráfego TikTok → site:** 0% (sem UTM/medição)

---

## Metas

### Curto prazo (até 2026-05-31, ~5 semanas)
- [ ] Bio nova aplicada
- [ ] Instagram embed na bio (botão clicável antes dos 1k)
- [ ] 3 vídeos âncora pinados (1 cinema, 1 game, 1 esporte)
- [ ] Reset de categorização rodando: 3 posts/dia × 14 dias com hashtags 100% nicho
- [ ] **Seguidores:** 700+ (+302 novos = +75% sobre baseline)

### Médio prazo (até 2026-07-31, ~13 semanas)
- [ ] **Seguidores: 2.000** (de 398 → +1.602 em ~90 dias)
- [ ] Razão likes:follows nos posts NOVOS < 100:1
- [ ] Tráfego TikTok deve gerar **pelo menos 15%** das sessões mensais do site
- [ ] Pelo menos 3 vídeos > 10k views/cada
- [ ] **1.000 seguidores atingidos** → desbloquear link clicável nativo na bio

### Longo prazo (até 2026-12-31)
- [ ] **Seguidores: 10.000**
- [ ] Conversão TikTok → newsletter ≥ 2% das sessões
- [ ] Receita afiliado atribuída ao TikTok ≥ R$ 500/mês

---

## Tracking

### UTM padrão para todos os links saindo do TikTok
```
?utm_source=tiktok&utm_medium=bio&utm_campaign=ig_bridge
```
Variações:
- `utm_medium=bio` — link nativo da bio
- `utm_medium=video` — link mencionado em vídeo (via Instagram bridge)
- `utm_campaign=video_<slug>` — campanha específica por vídeo grande

### GA4 — eventos a configurar (depende task #28)
- `tiktok_session` (custom) — dispara quando `utm_source=tiktok`
- `tiktok_to_newsletter` — sessão TikTok que converteu newsletter
- `tiktok_to_affiliate` — sessão TikTok que clicou afiliado

### Audiências GA4
- "Veio do TikTok últimos 30 dias" → para remarketing
- "TikTok engajou (>2 páginas)" → para newsletter

---

## Revisão semanal — toda segunda-feira

Salvar snapshot em `docs/tiktok-snapshots/YYYY-MM-DD.md`:

```
Data: 2026-XX-XX
Seguidores: XXX (+X vs semana anterior)
Razão likes:follows (vídeos da semana): XX:1
Top vídeo da semana: [título] — XXk views, X% CTR perfil
Tráfego GA4 utm_source=tiktok (7 dias): XXX sessões, X% taxa conversão
Hashtags proibidas detectadas em vídeos próprios: 0 ✅ / X ❌
```

---

## Sinais de alarme (vermelho)

- Razão likes:follows piora em vez de melhorar nos vídeos novos → algoritmo ainda categoriza errado, manter reset por +14 dias
- Tráfego de TikTok < 5% após 60 dias → ponte TikTok→site quebrada (CTA não funciona)
- > 30% dos vídeos da semana abaixo de 500 views → conta penalizada (revisar shadowban)

## Sinais de saúde (verde)

- Crescimento ≥ 50 seguidores/semana (média)
- Pelo menos 1 vídeo > 5k views/semana
- Comentários com mention de outras contas geek BR (3wcomics_, etc.) — sinal de fandom certo
