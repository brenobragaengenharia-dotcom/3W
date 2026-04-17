'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [status, setStatus] = useState('idle');

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    // Substitua pela sua chamada de API real
    await new Promise(r => setTimeout(r, 1200));
    setStatus('success');
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep" aria-hidden="true">/</span>
        <span aria-current="page">Contato</span>
      </nav>

      <h1 className="text-4xl font-black text-white mb-2">Fale com a gente</h1>
      <p className="text-[#737373] mb-8">Tem dúvidas, sugestões ou quer anunciar? Envie uma mensagem.</p>

      {status === 'success' ? (
        <div className="bg-green-900/30 border border-green-700/40 text-green-400 px-6 py-8 rounded-xl text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="mx-auto mb-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p className="font-semibold text-lg">Mensagem enviada com sucesso!</p>
          <p className="text-green-500 text-sm mt-1">Retornaremos em breve.</p>
          <Link href="/" className="inline-block mt-4 text-sm text-[#737373] hover:text-white transition-colors">
            ← Voltar para a home
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-[#b3b3b3] mb-1">Nome <span aria-hidden="true" className="text-[#e50914]">*</span></label>
              <input id="nome" name="nome" type="text" required value={form.nome} onChange={handleChange}
                className="w-full bg-[#141414] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-[#737373] text-sm focus:border-[#e50914] focus:outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#b3b3b3] mb-1">E-mail <span aria-hidden="true" className="text-[#e50914]">*</span></label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} autoComplete="email"
                className="w-full bg-[#141414] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-[#737373] text-sm focus:border-[#e50914] focus:outline-none" />
            </div>
          </div>

          <div>
            <label htmlFor="assunto" className="block text-sm font-medium text-[#b3b3b3] mb-1">Assunto <span aria-hidden="true" className="text-[#e50914]">*</span></label>
            <select id="assunto" name="assunto" required value={form.assunto} onChange={handleChange}
              className="w-full bg-[#141414] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#e50914] focus:outline-none">
              <option value="">Selecione um assunto</option>
              <option value="duvida">Dúvida geral</option>
              <option value="sugestao">Sugestão de conteúdo</option>
              <option value="publicidade">Publicidade e parcerias</option>
              <option value="imprensa">Imprensa</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-[#b3b3b3] mb-1">Mensagem <span aria-hidden="true" className="text-[#e50914]">*</span></label>
            <textarea id="mensagem" name="mensagem" required rows={5} value={form.mensagem} onChange={handleChange}
              placeholder="Escreva sua mensagem aqui..."
              className="w-full bg-[#141414] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-[#737373] text-sm focus:border-[#e50914] focus:outline-none resize-none" />
          </div>

          <button type="submit" disabled={status === 'loading'}
            className="w-full bg-[#e50914] hover:bg-[#b30710] disabled:opacity-60 text-white font-bold py-3 rounded-lg transition-colors text-sm">
            {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
          </button>
        </form>
      )}
    </div>
  );
}
