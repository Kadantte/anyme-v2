import TopCharacterContentSection from '@/components/top/TopCharacterContentSection';
import TopHeroSection from '@/components/top/TopHeroSection';

export const metadata = {
  title: 'Top Characters',
  description: 'Fan-Favorite Anime Characters',
  openGraph: {
    description: 'Fan-Favorite Anime Characters',
  },
};

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
