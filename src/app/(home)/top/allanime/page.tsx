import TopAllAnimeContentSection from '@/components/top/TopAllAnimeContentSection';
import TopHeroSection from '@/components/top/TopHeroSection';

export default function TopAllAnimePage() {
  return (
    <div>
      <TopHeroSection
        topHeroImage="/top-anime.jpg"
        heroTitle="Top Anime"
        heroSubtitle="Top Ranked Anime of All Time"
      />
      <TopAllAnimeContentSection />
    </div>
  );
}
