import Link from 'next/link';
import { EVENTOS } from '@/lib/mock-data';
import { schemaBreadcrumb } from '@/lib/structured-data';

export const metadata = {
  title: 'Eventos',
  description: 'Shows, festivais e eventos de entretenimento no Brasil. Saiba datas, locais e como comprar ingressos.',
  alternates: { canonical: 'https://3w-entretenimento.com/eventos' },
};

export default function EventosPage() {
  const breadcrumb = schemaBreadcrumb([{ name: 'Home', url: '/' }, { name: 'Eventos', url: '/eventos' }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Eventos</span>
        </nav>

        <h1 className="text-3xl font-black text-white mb-2">Eventos</h1>
        <p className="text-[#737373] mb-8">Shows, festivais e eventos que você não pode perder.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTOS.map((evento) => (
            <article key={evento.id} className="card-hover rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a]">
              <Link href={`/eventos/${evento.slug}`} className="block">
                <div className="aspect-video overflow-hidden bg-[#1a1a1a]">
                  <img src={evento.imagem} alt={evento.titulo} loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-yellow-400 mb-2 block">{evento.categoria}</span>
                  <h2 className="text-white font-bold text-lg mb-2">{evento.titulo}</h2>
                  <div className="flex items-center gap-2 text-[#737373] text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <time dateTime={evento.data}>{new Date(evento.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</time>
                  </div>
                  <div className="flex items-center gap-2 text-[#737373] text-sm mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>{evento.local}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
