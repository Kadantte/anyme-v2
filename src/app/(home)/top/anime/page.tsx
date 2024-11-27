import TopAllAnimeContentSection from '@/components/top/TopAllAnimeContentSection';
import TopHeroSection from '@/components/top/TopHeroSection';

export const metadata = {
  title: 'Top Anime',
  description: 'Top Ranked Anime of All Time',
  openGraph: {
    description: 'Top Ranked Anime of All Time',
  },
};

export default function TopAllAnimePage() {
  return (
    <div>
      <TopHeroSection
        topHeroImage="/top-anime.webp"
        heroTitle="Top Anime"
        heroSubtitle="Top Ranked Anime of All Time"
      />
      <TopAllAnimeContentSection />
    </div>
  );
}
