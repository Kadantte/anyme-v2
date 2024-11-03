import TopCharacterContentSection from '@/components/top/TopCharacterContentSection';
import TopHeroSection from '@/components/top/TopHeroSection';

export default function TopCharacterPage() {
  return (
    <div>
      <TopHeroSection
        topHeroImage="/top-chara.png"
        heroTitle="Top Characters"
        heroSubtitle="Fan-Favorite Anime Characters"
      />
      <TopCharacterContentSection />
    </div>
  );
}
