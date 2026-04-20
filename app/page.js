import HeroSection from '@/components/HeroSection';
import TrendingSection from '@/components/TrendingSection';
import CategoriesGrid from '@/components/CategoriesGrid';
import ContentRow from '@/components/ContentRow';
import PaniniPromo from '@/components/PaniniPromo';
import IngressoPromo from '@/components/IngressoPromo';
import NetshoesePromo from '@/components/NetshoesePromo';
import NewsletterBanner from '@/components/NewsletterBanner';
import ElfsightFeed, { ELFSIGHT_IDS } from '@/components/ElfsightFeed';
import { SERIES } from '@/lib/mock-data';

export const metadata = {
  title: '3W Entretenimento | Seu Universo de Entretenimento',
  description: 'Descubra o melhor do entretenimento: filmes, séries, comics, esportes e eventos. Tudo em um só lugar.',
  alternates: { canonical: 'https://3w-entretenimento.com' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrendingSection />
      <CategoriesGrid />
      <IngressoPromo />
      <ContentRow title="Séries Imperdíveis"  items={SERIES}  basePath="/series"  viewAllPath="/filmes-e-series" tipo="vertical" />
      <PaniniPromo />

      <NetshoesePromo />

      {/* Posts reais do Instagram @3worlds_entertainment via Elfsight */}
      <ElfsightFeed
        appId={ELFSIGHT_IDS.entretenimento}
        title="Últimos Posts — @3worlds_entertainment"
        perfil="@3worlds_entertainment"
        href="https://instagram.com/3worlds_entertainment"
      />

      <NewsletterBanner />
    </>
  );
}
