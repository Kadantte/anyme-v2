import AnyMeSection from '@/components/AnyMeSection';
import HeroSection from '@/components/home/HeroSection';
import SeasonalAnimeSection from '@/components/home/SeasonalAnimeSection';
import TopAnimeSection from '@/components/home/TopAnime';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SeasonalAnimeSection />
      <TopAnimeSection />
      <AnyMeSection />
    </main>
  );
}
