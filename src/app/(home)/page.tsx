import dynamic from 'next/dynamic';

const AnyMeSection = dynamic(() => import('@/components/AnyMeSection'));
const DiscoverGenreSection = dynamic(
  () => import('@/components/home/DiscoverGenreSection')
);
const HeroSection = dynamic(() => import('@/components/home/HeroSection'));
const SeasonalAnimeSection = dynamic(
  () => import('@/components/home/SeasonalAnimeSection')
);
const TopAnimeSection = dynamic(() => import('@/components/home/TopAnime'));
const TopCharacterSection = dynamic(
  () => import('@/components/home/TopCharacter')
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SeasonalAnimeSection />
      <TopAnimeSection />
      <AnyMeSection />
      <TopCharacterSection />
      <DiscoverGenreSection />
    </main>
  );
}
