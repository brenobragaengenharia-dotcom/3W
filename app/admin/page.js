'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CATEGORIA_COLORS = {
  Cinema: 'text-red-400', Séries: 'text-blue-400', Games: 'text-purple-400',
  Comics: 'text-yellow-400', Futebol: 'text-green-400', NBA: 'text-orange-400',
  'Fórmula 1': 'text-red-400', Esportes: 'text-green-400', 'Cultura Pop': 'text-pink-400',
};

function PreviewModal({ article, onClose, onApprove, onReject, processing }) {
  const isProcessing = processing === article.id;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-8 bg-black/70 overflow-y-auto" onClick={onClose}>
      <div
        className="w-full max-w-2xl bg-[#141414] border border-[#2a2a2a] rounded-2xl shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header do modal */}
        <div className="flex items-center justify-between p-5 border-b border-[#2a2a2a]">
          <h2 className="text-white font-bold text-sm">Pré-visualização do artigo</h2>
          <button onClick={onClose} className="text-[#9ca3af] hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Meta */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-semibold ${CATEGORIA_COLORS[article.categoria] || 'text-[#9ca3af]'}`}>{article.categoria}</span>
            <span className="text-[#4a4a4a]">·</span>
            <time className="text-xs text-[#9ca3af]">{new Date(article.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</time>
            <span className="text-[#4a4a4a]">·</span>
            <span className="text-xs text-[#9ca3af]">{article.tempo_leitura} min</span>
          </div>

          {/* Manchete */}
          <h1 className="text-white text-xl font-black leading-tight">{article.manchete || article.titulo}</h1>

          {/* Lead */}
          <p className="text-[#b3b3b3] text-sm leading-relaxed border-l-2 border-[#FF6600] pl-3">{article.descricao}</p>

          {/* Imagem */}
          {article.imagem && (
            <img src={article.imagem} alt={article.titulo} className="w-full rounded-xl object-cover aspect-video" />
          )}

          {/* Parágrafos */}
          <div className="space-y-3">
            {(article.paragrafos || []).slice(0, 2).map((p, i) => (
              <p key={i} className="text-[#b3b3b3] text-sm leading-relaxed">{p}</p>
            ))}
            {article.frase_destaque && (
              <blockquote className="border-l-4 border-[#FF6600] pl-4 py-1">
                <p className="text-white font-semibold italic text-sm">"{article.frase_destaque}"</p>
              </blockquote>
            )}
            {(article.paragrafos || []).slice(2).map((p, i) => (
              <p key={`b${i}`} className="text-[#b3b3b3] text-sm leading-relaxed">{p}</p>
            ))}
            {article.conclusao && (
              <p className="text-[#b3b3b3] text-sm leading-relaxed border-t border-[#2a2a2a] pt-3">{article.conclusao}</p>
            )}
          </div>

          {/* Fonte */}
          {article.fonte_nome && (
            <p className="text-[#4a4a4a] text-xs">Fonte: {article.fonte_nome}{article.fonte_url ? ` — ${article.fonte_url}` : ''}</p>
          )}

          {/* Info de submissão */}
          <div className="bg-[#1a1a1a] rounded-lg p-3 text-xs text-[#9ca3af] space-y-1">
            <p>Submetido por: <span className="text-white">{article.submetido_por || '—'}</span></p>
            <p>Slug gerado: <span className="text-[#FF6600] font-mono">{article.slug}</span></p>
            <p>ID: <span className="font-mono">{article.id}</span></p>
            <p>Enviado em: {new Date(article.submetido_em).toLocaleString('pt-BR')}</p>
          </div>
        </div>

        {/* Ações */}
        <div className="flex gap-3 p-5 border-t border-[#2a2a2a]">
          <button
            onClick={() => onApprove(article.id)}
            disabled={isProcessing}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg transition-colors disabled:opacity-50 text-sm"
          >
            {isProcessing ? 'Publicando...' : '✓ Aprovar e publicar'}
          </button>
          <button
            onClick={() => onReject(article.id)}
            disabled={isProcessing}
            className="flex-1 bg-red-600/20 hover:bg-red-600/40 text-red-400 font-bold py-2.5 rounded-lg transition-colors border border-red-600/30 disabled:opacity-50 text-sm"
          >
            ✕ Rejeitar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [toast, setToast] = useState(null);
  const router = useRouter();

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const fetchPending = useCallback(async () => {
    const res = await fetch('/api/admin/pending');
    if (res.status === 401) { router.push('/admin/login'); return; }
    if (!res.ok) { setError('Erro ao carregar artigos.'); setLoading(false); return; }
    setArticles(await res.json());
    setLoading(false);
  }, [router]);

  useEffect(() => { fetchPending(); }, [fetchPending]);

  async function approve(id) {
    setProcessing(id);
    const res = await fetch(`/api/admin/approve/${id}`, { method: 'POST' });
    if (res.ok) {
      const { slug } = await res.json();
      setArticles(prev => prev.filter(a => a.id !== id));
      setPreview(null);
      showToast(`✓ Artigo publicado em /noticias/${slug}`);
    } else {
      const { error } = await res.json();
      showToast(`Erro: ${error}`, 'error');
    }
    setProcessing(null);
  }

  async function reject(id) {
    if (!confirm('Rejeitar este artigo? Ele será removido permanentemente da fila.')) return;
    setProcessing(id);
    const res = await fetch('/api/admin/pending', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setArticles(prev => prev.filter(a => a.id !== id));
      setPreview(null);
      showToast('Artigo rejeitado e removido da fila.');
    } else {
      const { error } = await res.json();
      showToast(`Erro: ${error}`, 'error');
    }
    setProcessing(null);
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-[60] px-5 py-3 rounded-xl shadow-lg text-sm font-medium transition-all ${toast.type === 'error' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}`}>
          {toast.msg}
        </div>
      )}

      {/* Modal de preview */}
      {preview && (
        <PreviewModal
          article={preview}
          onClose={() => setPreview(null)}
          onApprove={approve}
          onReject={reject}
          processing={processing}
        />
      )}

      {/* Header */}
      <header className="bg-[#141414] border-b border-[#2a2a2a] sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-black">
              <span className="text-[#FF6600]">3W</span>
              <span className="text-white ml-1">Admin</span>
            </span>
            <span className="text-[#4a4a4a] text-sm hidden sm:inline">— Moderação de conteúdo</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/enviar"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#b3b3b3] hover:text-white bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] px-3 py-1.5 rounded-lg transition-colors"
            >
              + Nova notícia
            </Link>
            <Link
              href="/"
              target="_blank"
              className="text-xs text-[#9ca3af] hover:text-white transition-colors px-2 py-1.5"
            >
              Ver site
            </Link>
            <button
              onClick={logout}
              className="text-xs text-[#9ca3af] hover:text-red-400 transition-colors px-2 py-1.5"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Título */}
        <div className="mb-6">
          <h1 className="text-2xl font-black text-white">
            Notícias pendentes
            {!loading && articles.length > 0 && (
              <span className="ml-2 text-base font-normal text-[#FF6600]">({articles.length})</span>
            )}
          </h1>
          <p className="text-[#9ca3af] text-sm mt-1">Revise e aprove os artigos submetidos pela equipe.</p>
        </div>

        {/* Estados */}
        {loading && (
          <div className="text-center py-16 text-[#9ca3af]">Carregando artigos...</div>
        )}
        {error && (
          <div className="text-center py-16 text-red-400">{error}</div>
        )}
        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-16 bg-[#141414] border border-[#2a2a2a] rounded-2xl">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-white font-semibold mb-1">Nenhum artigo pendente</p>
            <p className="text-[#9ca3af] text-sm">Quando a equipe submeter notícias, elas aparecerão aqui.</p>
            <Link href="/admin/enviar" className="inline-block mt-4 text-[#FF6600] text-sm hover:underline">
              Submeter uma notícia →
            </Link>
          </div>
        )}

        {/* Lista de artigos */}
        {!loading && articles.length > 0 && (
          <div className="space-y-4">
            {[...articles].reverse().map(article => (
              <div
                key={article.id}
                className="bg-[#141414] border border-[#2a2a2a] rounded-xl overflow-hidden flex flex-col sm:flex-row"
              >
                {/* Thumbnail */}
                <div className="sm:w-36 sm:flex-shrink-0 aspect-video sm:aspect-auto bg-[#1a1a1a]">
                  {article.imagem ? (
                    <img src={article.imagem} alt={article.titulo} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#4a4a4a] text-2xl">🖼</div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 p-4 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className={`text-xs font-semibold ${CATEGORIA_COLORS[article.categoria] || 'text-[#9ca3af]'}`}>{article.categoria}</span>
                    <span className="text-[#4a4a4a]">·</span>
                    <time className="text-xs text-[#9ca3af]">{new Date(article.data).toLocaleDateString('pt-BR')}</time>
                    <span className="text-[#4a4a4a]">·</span>
                    <span className="text-xs text-[#9ca3af]">por {article.submetido_por || '—'}</span>
                  </div>
                  <h2 className="text-white font-bold text-sm leading-snug mb-1 line-clamp-2">{article.titulo}</h2>
                  <p className="text-[#9ca3af] text-xs line-clamp-2">{article.descricao}</p>
                  <p className="text-[#4a4a4a] text-xs mt-2">
                    Enviado em {new Date(article.submetido_em).toLocaleString('pt-BR')}
                  </p>
                </div>

                {/* Ações */}
                <div className="flex sm:flex-col gap-2 p-4 sm:justify-center sm:w-36 sm:flex-shrink-0 border-t sm:border-t-0 sm:border-l border-[#2a2a2a]">
                  <button
                    onClick={() => setPreview(article)}
                    className="flex-1 sm:flex-none text-xs font-medium text-[#b3b3b3] hover:text-white bg-[#1a1a1a] hover:bg-[#222] px-3 py-2 rounded-lg border border-[#2a2a2a] transition-colors"
                  >
                    Ver detalhes
                  </button>
                  <button
                    onClick={() => approve(article.id)}
                    disabled={processing === article.id}
                    className="flex-1 sm:flex-none text-xs font-bold text-green-400 hover:text-white bg-green-600/10 hover:bg-green-600 px-3 py-2 rounded-lg border border-green-600/30 transition-colors disabled:opacity-50"
                  >
                    {processing === article.id ? '...' : '✓ Aprovar'}
                  </button>
                  <button
                    onClick={() => reject(article.id)}
                    disabled={processing === article.id}
                    className="flex-1 sm:flex-none text-xs font-bold text-red-400 hover:text-white bg-red-600/10 hover:bg-red-600 px-3 py-2 rounded-lg border border-red-600/30 transition-colors disabled:opacity-50"
                  >
                    ✕ Rejeitar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
