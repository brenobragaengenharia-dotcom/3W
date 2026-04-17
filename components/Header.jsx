'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/filmes',   label: 'Filmes' },
  { href: '/series',   label: 'Séries' },
  { href: '/musica',   label: 'Música' },
  { href: '/jogos',    label: 'Jogos' },
  { href: '/eventos',  label: 'Eventos' },
  { href: '/noticias', label: 'Notícias' },
];

export default function Header() {
  const pathname  = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/busca?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4">

        {/* ── Linha principal ─────────────────────────────────────────── */}
        <div className="flex items-center justify-between h-16 gap-4">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 text-2xl font-black tracking-tight">
            <span className="text-[#e50914]">3W</span>
            <span className="text-white ml-1">Entretenimento</span>
          </Link>

          {/* Nav desktop */}
          <nav role="navigation" aria-label="Navegação principal" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname?.startsWith(href) ? 'page' : undefined}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
                  ${pathname?.startsWith(href)
                    ? 'text-white bg-[#e50914]'
                    : 'text-[#b3b3b3] hover:text-white hover:bg-[#222]'
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Ações: busca + menu mobile */}
          <div className="flex items-center gap-2">
            {/* Botão de busca */}
            <button
              onClick={() => setSearchOpen(v => !v)}
              aria-label="Abrir busca"
              aria-expanded={searchOpen}
              className="p-2 rounded-md text-[#b3b3b3] hover:text-white hover:bg-[#222] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>

            {/* Menu hambúrguer mobile */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              className="md:hidden p-2 rounded-md text-[#b3b3b3] hover:text-white hover:bg-[#222] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                }
              </svg>
            </button>
          </div>
        </div>

        {/* ── Barra de busca expansível ────────────────────────────────── */}
        {searchOpen && (
          <div className="pb-3">
            <form role="search" onSubmit={handleSearchSubmit} className="relative">
              <label htmlFor="header-search" className="sr-only">Buscar filmes, séries, músicas...</label>
              <input
                id="header-search"
                name="q"
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar filmes, séries, músicas, eventos..."
                autoFocus
                autoComplete="off"
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 pr-12 text-white placeholder-[#737373] focus:border-[#e50914] focus:outline-none text-sm"
              />
              <button
                type="submit"
                aria-label="Buscar"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b3b3b3] hover:text-[#e50914] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </button>
            </form>
          </div>
        )}

        {/* ── Menu mobile dropdown ─────────────────────────────────────── */}
        {menuOpen && (
          <nav role="navigation" aria-label="Menu mobile" className="md:hidden pb-4">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={pathname?.startsWith(href) ? 'page' : undefined}
                    className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                      ${pathname?.startsWith(href)
                        ? 'text-white bg-[#e50914]'
                        : 'text-[#b3b3b3] hover:text-white hover:bg-[#222]'
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
