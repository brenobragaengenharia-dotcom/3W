import Link from 'next/link';
import { schemaBreadcrumb } from '@/lib/structured-data';

export const metadata = {
  title: 'Sobre nós',
  description: 'Conheça o 3W Entretenimento, o seu portal de referência para filmes, séries, música, jogos e eventos.',
  alternates: { canonical: 'https://3w-entretenimento.com/sobre' },
};

export default function SobrePage() {
  const breadcrumb = schemaBreadcrumb([{ name: 'Home', url: '/' }, { name: 'Sobre nós', url: '/sobre' }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav aria-label="Caminho de navegação" className="breadcrumb mb-6">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Sobre nós</span>
        </nav>

        <h1 className="text-4xl font-black text-white mb-4">Sobre o 3W Entretenimento</h1>
        <p className="text-[#e50914] font-semibold mb-8">Seu Universo de Entretenimento</p>

        <div className="space-y-6 text-[#b3b3b3] leading-relaxed">
          <p>
            O <strong className="text-white">3W Entretenimento</strong> é um portal brasileiro dedicado a cobrir
            o melhor do mundo do entretenimento: filmes, séries, música, jogos e eventos.
          </p>
          <p>
            Nossa missão é ser a referência número um para quem quer saber o que está em alta no cinema,
            nas plataformas de streaming, nas paradas musicais, no mundo dos games e nos palcos do Brasil e do mundo.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">O que fazemos</h2>
          <ul className="space-y-2 list-none">
            {[
              '🎬 Cobertura completa de lançamentos e estreias de filmes',
              '📺 Reviews e análises das séries mais badaladas do streaming',
              '🎵 Notícias do mundo da música com análises de álbuns',
              '🎮 Reviews e cobertura dos melhores jogos de todas as plataformas',
              '🎪 Agenda completa de shows, festivais e eventos culturais no Brasil',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-white pt-4">Nossa equipe</h2>
          <p>
            Somos um time apaixonado por cultura pop, cinema, música e tecnologia. Cada conteúdo é produzido
            com cuidado e rigor editorial para trazer a você a melhor experiência de informação e entretenimento.
          </p>

          <div className="pt-4">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-[#e50914] hover:bg-[#b30710] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Fale com a gente
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
