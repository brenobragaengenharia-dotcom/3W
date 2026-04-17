import Link from 'next/link';
import { CATEGORIAS } from '@/lib/mock-data';

export default function CategoriesGrid() {
  return (
    <section aria-labelledby="categorias-title" className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="categorias-title" className="text-lg md:text-xl font-bold text-white mb-5">
          Explore por Categoria
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIAS.map(({ slug, titulo, icone, descricao, cor }) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className={`relative overflow-hidden rounded-xl p-4 bg-gradient-to-br ${cor} border border-white/5 hover:border-white/20 hover:scale-105 transition-all group text-center`}
            >
              <span className="text-3xl block mb-2" role="img" aria-label={titulo}>
                {icone}
              </span>
              <h3 className="text-white font-bold text-sm">{titulo}</h3>
              <p className="text-white/60 text-xs mt-0.5 hidden sm:block">{descricao}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
