import HeroSection from '@/components/HeroSection';
import TrendingSection from '@/components/TrendingSection';
import CategoriesGrid from '@/components/CategoriesGrid';
import ContentRow from '@/components/ContentRow';
import NewsGrid from '@/components/NewsGrid';
import NewsletterBanner from '@/components/NewsletterBanner';
import { FILMES, SERIES, MUSICA, JOGOS, COMICS } from '@/lib/mock-data';

export const metadata = {
  title: '3W Entretenimento | Seu Universo de Entretenimento',
  description: 'Descubra o melhor do entretenimento: filmes, séries, música, jogos e eventos. Tudo em um só lugar.',
  alternates: { canonical: 'https://3w-entretenimento.com' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrendingSection />
      <CategoriesGrid />
      <ContentRow title="Filmes em Cartaz"    items={FILMES}  basePath="/filmes"   tipo="vertical" />
      <ContentRow title="Séries Imperdíveis" items={SERIES}  basePath="/series"   tipo="vertical" />
      <ContentRow title="Comics em Destaque" items={COMICS}  basePath="/comics"   tipo="vertical" />
      <NewsGrid limit={6} />
      <ContentRow title="Música em Alta"     items={MUSICA}  basePath="/musica"   tipo="vertical" />
      <ContentRow title="Jogos do Momento"   items={JOGOS}   basePath="/jogos"    tipo="vertical" />
      <NewsletterBanner />
    </>
  );
}
