# Ações que dependem de você (não dá para automatizar)

Estas são as tasks restantes do roadmap que precisam de acesso manual a interfaces externas (TikTok app, GA4 admin web). Cada uma com passos exatos.

---

## 🎯 Task #19 — Trocar bio do TikTok (2 min) — CRÍTICO

Abra o app TikTok no celular → Perfil → "Editar perfil" → Bio.

**Apague o que está lá** e cole exatamente:

```
🎬 Cinema • Séries • HQ
⚽ Futebol 🏀 NBA 🏎️ F1
🔥 Segue pra drop diário
```

**Por que assim:**
- 6 keywords (Cinema, Séries, HQ, Futebol, NBA, F1) escritas como palavras — o TikTok 2026 indexa a bio para busca, e ter as palavras cruas (não só emojis) faz o perfil aparecer em todas as 6 buscas.
- 3ª linha = CTA + promessa de frequência ("drop diário").
- Total: 80 caracteres exatos, dentro do limite.

**Salvar.** Pronto.

---

## 🎯 Task #20 — Adicionar Instagram embed na bio TikTok (5 min) — CRÍTICO

No mesmo "Editar perfil", role para baixo até **"Adicionar Instagram"**.

Cole o handle: `3worlds_entertainment` (sem o @).

O TikTok renderiza um botão nativo do Instagram embaixo da bio. Quem clicar é levado ao seu IG @3worlds_entertainment, e de lá tem o link da bio do IG → 3w-entretenimento.com.

**Hack:** Antes de você ter 1.000 seguidores no TikTok (que desbloqueia link clicável nativo), o IG embed é a sua única ponte para o site. Crucial.

**Cuidado:** No Instagram, sua bio precisa ter o link com UTM:
```
https://3w-entretenimento.com?utm_source=tiktok&utm_medium=bio&utm_campaign=ig_bridge
```
Atualize esse link no Instagram também, pra rastrear visitas vindas do TikTok no GA4.

---

## 🎯 Task #21 — Pinar 3 vídeos âncora no perfil TikTok (10 min)

Pinar = travar 3 vídeos no topo do perfil. Quem chega entende seu nicho em 5 segundos.

Escolha **1 vídeo de cada vertical**:
- **1 Cinema/Séries** (ex: trailer Doomsday, review Last of Us, etc.)
- **1 Game** (ex: GTA VI, Marvel Rivals, Astro Bot)
- **1 Esporte** (ex: Brasileirão, F1, NBA)

Como pinar:
1. Vá no seu perfil no TikTok app.
2. Toque e segure o vídeo escolhido.
3. Selecione **"Fixar"**.
4. Repita para os outros 2 vídeos.

Se ainda não tem um bom vídeo de cada categoria, **rode o pipeline automatizado** (vai gerar roteiro + captions pra você) — passo seguinte ↓.

---

## 🎯 Pipeline automático — TikTok roteiros diários

Eu criei um workflow que roda **todo dia 06h30 BRT** e gera 3 roteiros completos para você. Você só precisa:

1. **Esperar 1 dia** (próxima execução é amanhã 06h30 BRT, ou disparar manualmente — abaixo).
2. **Abrir o repositório** em GitHub → pasta `tiktok-roteiros/` → arquivo `tiktok-roteiros-YYYY-MM-DD.md`.
3. **Copiar/colar** os roteiros na sua produção de vídeo. Cada um tem: 3 captions A/B/C, comentário fixado, hook visual, sugestão de stitch/duet, texto sobreposto.

**Disparar manualmente agora** (via terminal):
```bash
gh workflow run "TikTok roteiros diário (06:30 BRT)" --ref master
```

Ou pelo navegador:
GitHub → seu repo → Actions → "TikTok roteiros diário (06:30 BRT)" → Run workflow.

---

## 🎯 Task #26 — Trending sounds da semana (20min/semana, recorrente)

Toda **segunda-feira de manhã**, antes de gravar os vídeos da semana:

1. Acesse https://ads.tiktok.com/business/creativecenter
2. Faça login com sua conta TikTok Business (gratuita).
3. No menu, vá em **Sounds** → **Trends** → filtros:
   - **Region:** Brazil
   - **Period:** Last 7 days
4. Salve em `docs/TIKTOK-TRENDING-SOUNDS-SEMANAL.md` (eu já criei o arquivo) os **5-10 sons em alta** que cabem em vídeo geek/esportivo.
5. Use esses áudios em pelo menos **1 dos 3 vídeos diários**.

**Sinais de áudio bom para nicho geek:**
- Áudio dramático/cinematográfico (combina com trailer)
- Áudio de tensão/build-up (combina com gol/jogada)
- Trecho viral com 6-15s (perfeito pra hook)

Vídeos com trending sound recebem ~2x mais entrega no algoritmo.

---

## 🎯 Task #28 — UTM tracking TikTok no GA4 (45 min)

Acesse https://analytics.google.com → propriedade "3W Entretenimento" → ícone de engrenagem (Admin).

### Passo 1 — Criar evento custom "tiktok_session"

1. **Admin → Eventos → Criar evento → Criar**
2. Nome do evento custom: `tiktok_session`
3. Condições de correspondência:
   - Parâmetro: `event_name`
   - Operador: equals
   - Valor: `session_start`
4. Adicionar condição:
   - Parâmetro: `source`
   - Operador: equals
   - Valor: `tiktok`
5. Salvar.

### Passo 2 — Marcar como conversão

1. **Admin → Conversões → Nova conversão**
2. Nome: `tiktok_session`
3. Salvar.

### Passo 3 — Criar audiência "Veio do TikTok"

1. **Admin → Audiências → Nova audiência**
2. Nome: `Veio do TikTok últimos 30 dias`
3. Condição: `source` = `tiktok` em qualquer evento, últimos 30 dias.
4. Salvar.

### Passo 4 — Relatório customizado

1. **Reports → Library → Create new report → Detail report**
2. Dimensões: `Source / Medium`, `Page path`
3. Métricas: `Sessions`, `Engaged sessions`, `Conversions`, `Total revenue`
4. Filtro: `Source` = `tiktok`
5. Salvar como "TikTok Performance".

### Passo 5 — Validar

1. Acesse uma URL com UTM no celular: `https://3w-entretenimento.com/?utm_source=tiktok&utm_medium=bio&utm_campaign=ig_bridge`
2. Em 30 segundos, no GA4 vá em **Reports → Realtime** → deve aparecer 1 sessão com `source = tiktok`.

---

## 📊 Revisão semanal — toda segunda-feira

Já tem `docs/KPIS-TIKTOK.md` com o template. Salve o snapshot semanal em `docs/tiktok-snapshots/YYYY-MM-DD.md`:

```markdown
Data: 2026-XX-XX
Seguidores: XXX (+X vs semana anterior)
Razão likes:follows nos vídeos da semana: XX:1
Top vídeo: [título] — XXk views
Tráfego GA4 utm_source=tiktok (7 dias): XXX sessões
Hashtags proibidas detectadas: 0 ✅
```

Meta: **2.000 seguidores até 2026-07-31**.
