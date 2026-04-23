'use client';
import { useState } from 'react';
import Link from 'next/link';

const CATEGORIAS = ['Cinema', 'Séries', 'Games', 'Comics', 'Cultura Pop', 'Futebol', 'NBA', 'Fórmula 1', 'Esportes'];

const INITIAL = {
  submetido_por: '',
  teamSecret: '',
  titulo: '',
  descricao: '',
  manchete: '',
  paragrafos: ['', '', '', ''],
  frase_destaque: '',
  conclusao: '',
  categoria: 'Cinema',
  autor: 'Redação 3W',
  data: new Date().toISOString().slice(0, 10),
  imagem: '',
  tempo_leitura: 4,
  fonte_nome: '',
  fonte_url: '',
};

function Field({ label, hint, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#b3b3b3] mb-1.5">
        {label}
        {hint && <span className="ml-2 text-xs text-[#4a4a4a] font-normal">{hint}</span>}
      </label>
      {children}
    </div>
  );
}

function Input({ className = '', ...props }) {
  return (
    <input
      {...props}
      className={`w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white placeholder-[#4a4a4a] focus:border-[#FF6600] focus:outline-none text-sm ${className}`}
    />
  );
}

function Textarea({ rows = 4, className = '', ...props }) {
  return (
    <textarea
      {...props}
      rows={rows}
      className={`w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white placeholder-[#4a4a4a] focus:border-[#FF6600] focus:outline-none text-sm resize-y ${className}`}
    />
  );
}

export default function EnviarNoticiaPage() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const set = (field, value) => setForm(prev => ({ ...prev, [field]: value }));
  const setParag = (i, value) => setForm(prev => {
    const p = [...prev.paragrafos];
    p[i] = value;
    return { ...prev, paragrafos: p };
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    // Filtra parágrafos vazios
    const payload = { ...form, paragrafos: form.paragrafos.filter(p => p.trim()) };

    const res = await fetch('/api/admin/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus('success');
      setForm(INITIAL);
    } else {
      const { error } = await res.json();
      setErrorMsg(error || 'Erro desconhecido');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">
        <div className="max-w-sm w-full text-center bg-[#141414] border border-[#2a2a2a] rounded-2xl p-8">
          <p className="text-5xl mb-4">✅</p>
          <h1 className="text-white font-black text-xl mb-2">Notícia enviada!</h1>
          <p className="text-[#737373] text-sm mb-6">O administrador vai revisar e publicar em breve.</p>
          <button
            onClick={() => setStatus(null)}
            className="w-full bg-[#FF6600] hover:bg-[#e55c00] text-white font-bold py-2.5 rounded-lg transition-colors text-sm"
          >
            Enviar outra notícia
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Header */}
      <header className="bg-[#141414] border-b border-[#2a2a2a] sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="text-lg font-black">
            <span className="text-[#FF6600]">3W</span>
            <span className="text-white ml-1">Redação</span>
          </span>
          <Link href="/" className="text-xs text-[#737373] hover:text-white transition-colors">
            Ver site →
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-white">Submeter notícia</h1>
          <p className="text-[#737373] text-sm mt-1">
            Preencha todos os campos. O artigo ficará em revisão até a aprovação do editor.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ── Identificação ─────────────────────────────────────── */}
          <section className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 space-y-4">
            <h2 className="text-white font-bold text-sm uppercase tracking-wider text-[#FF6600]">Identificação</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Seu nome *">
                <Input
                  type="text"
                  value={form.submetido_por}
                  onChange={e => set('submetido_por', e.target.value)}
                  placeholder="Ex: João Silva"
                  required
                />
              </Field>
              <Field label="Senha da equipe *">
                <Input
                  type="password"
                  value={form.teamSecret}
                  onChange={e => set('teamSecret', e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </Field>
            </div>
          </section>

          {/* ── Informações básicas ──────────────────────────────── */}
          <section className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FF6600]">Informações básicas</h2>

            <Field label="Título *" hint="50–75 caracteres, direto e com palavras-chave">
              <Input
                type="text"
                value={form.titulo}
                onChange={e => set('titulo', e.target.value)}
                placeholder="Título da notícia"
                required
                maxLength={100}
              />
              <p className="text-[#4a4a4a] text-xs mt-1">{form.titulo.length} / 100 caracteres</p>
            </Field>

            <Field label="Lead / Descrição *" hint="140–180 caracteres — primeira frase que aparece no card">
              <Textarea
                rows={2}
                value={form.descricao}
                onChange={e => set('descricao', e.target.value)}
                placeholder="Resumo em uma frase que capture a essência da notícia..."
                required
                maxLength={220}
              />
              <p className={`text-xs mt-1 ${form.descricao.length > 180 ? 'text-yellow-400' : 'text-[#4a4a4a]'}`}>
                {form.descricao.length} / 180 caracteres recomendados
              </p>
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Field label="Categoria *">
                <select
                  value={form.categoria}
                  onChange={e => set('categoria', e.target.value)}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:border-[#FF6600] focus:outline-none text-sm"
                >
                  {CATEGORIAS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Data de publicação *">
                <Input
                  type="date"
                  value={form.data}
                  onChange={e => set('data', e.target.value)}
                  required
                />
              </Field>
              <Field label="Tempo de leitura (min)">
                <Input
                  type="number"
                  min={1}
                  max={30}
                  value={form.tempo_leitura}
                  onChange={e => set('tempo_leitura', e.target.value)}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Autor">
                <Input
                  type="text"
                  value={form.autor}
                  onChange={e => set('autor', e.target.value)}
                  placeholder="Redação 3W"
                />
              </Field>
              <Field label="URL da imagem de capa *">
                <Input
                  type="url"
                  value={form.imagem}
                  onChange={e => set('imagem', e.target.value)}
                  placeholder="https://..."
                  required
                />
              </Field>
            </div>

            {/* Preview da imagem */}
            {form.imagem && (
              <div className="aspect-video rounded-lg overflow-hidden bg-[#1a1a1a] max-w-sm">
                <img src={form.imagem} alt="preview" className="w-full h-full object-cover" onError={e => e.target.style.display = 'none'} />
              </div>
            )}
          </section>

          {/* ── Conteúdo editorial ──────────────────────────────── */}
          <section className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FF6600]">Conteúdo editorial</h2>

            <Field label="Manchete" hint="Até 12 palavras — título de impacto que aparece no topo do artigo">
              <Input
                type="text"
                value={form.manchete}
                onChange={e => set('manchete', e.target.value)}
                placeholder="Manchete de até 12 palavras (se vazio, usa o título)"
              />
            </Field>

            {['Parágrafo 1 — Contexto e abertura', 'Parágrafo 2 — Detalhes e desenvolvimento', 'Parágrafo 3 — Análise ou reação', 'Parágrafo 4 — Perspectivas e fonte'].map((label, i) => (
              <Field key={i} label={`${label}`} hint={i < 2 ? '80–100 palavras' : i === 2 ? '70–90 palavras' : '60–80 palavras'}>
                <Textarea
                  rows={4}
                  value={form.paragrafos[i]}
                  onChange={e => setParag(i, e.target.value)}
                  placeholder={`Escreva o ${i + 1}º parágrafo...`}
                />
              </Field>
            ))}

            <Field label="Frase em destaque" hint="Pull quote — frase marcante de até 20 palavras">
              <Input
                type="text"
                value={form.frase_destaque}
                onChange={e => set('frase_destaque', e.target.value)}
                placeholder="Citação ou frase de impacto que aparece destacada no artigo..."
              />
            </Field>

            <Field label="Conclusão" hint="50–70 palavras">
              <Textarea
                rows={3}
                value={form.conclusao}
                onChange={e => set('conclusao', e.target.value)}
                placeholder="Parágrafo final resumindo a importância da notícia..."
              />
            </Field>
          </section>

          {/* ── Fonte ───────────────────────────────────────────── */}
          <section className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FF6600]">Fonte original</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Nome da fonte">
                <Input
                  type="text"
                  value={form.fonte_nome}
                  onChange={e => set('fonte_nome', e.target.value)}
                  placeholder="Ex: Omelete, ESPN Brasil, G1..."
                />
              </Field>
              <Field label="URL da fonte">
                <Input
                  type="url"
                  value={form.fonte_url}
                  onChange={e => set('fonte_url', e.target.value)}
                  placeholder="https://..."
                />
              </Field>
            </div>
          </section>

          {/* Erro */}
          {status === 'error' && (
            <div className="bg-red-600/10 border border-red-600/30 rounded-lg px-4 py-3 text-red-400 text-sm">
              {errorMsg}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#FF6600] hover:bg-[#e55c00] text-white font-black py-3.5 rounded-xl text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Enviando para revisão...' : 'Enviar para revisão →'}
          </button>
        </form>
      </main>
    </div>
  );
}
