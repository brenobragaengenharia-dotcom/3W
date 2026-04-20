import Link from 'next/link';

export const metadata = {
  title: 'Página não encontrada',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-[#FF6600] font-black text-8xl mb-4">404</p>
      <h1 className="text-2xl font-bold text-white mb-3">Página não encontrada</h1>
      <p className="text-[#737373] mb-8 max-w-sm">
        A página que você está procurando não existe ou foi movida.
      </p>
      <div className="flex items-center gap-3 flex-wrap justify-center">
        <Link href="/" className="bg-[#FF6600] hover:bg-[#cc5200] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
          Voltar para a home
        </Link>
        <Link href="/noticias" className="bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
          Ver notícias
        </Link>
      </div>
    </div>
  );
}
