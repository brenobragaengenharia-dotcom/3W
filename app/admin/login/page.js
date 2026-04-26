'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Senha incorreta. Tente novamente.');
      setPassword('');
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="text-3xl font-black">
            <span className="text-[#FF6600]">3W</span>
            <span className="text-white ml-1">Admin</span>
          </p>
          <p className="text-[#9ca3af] text-sm mt-1">Área restrita — somente administradores</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#b3b3b3] mb-1.5">
              Senha de administrador
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoFocus
              required
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white placeholder-[#9ca3af] focus:border-[#FF6600] focus:outline-none text-sm"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF6600] hover:bg-[#e55c00] text-white font-bold py-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="text-center text-[#4a4a4a] text-xs mt-6">
          Para submeter uma notícia como redator, acesse{' '}
          <a href="/admin/enviar" className="text-[#FF6600] hover:underline">/admin/enviar</a>
        </p>
      </div>
    </div>
  );
}
