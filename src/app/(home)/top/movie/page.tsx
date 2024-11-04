import TopHeroSection from '@/components/top/TopHeroSection';
import TopTypeContentSection from '@/components/top/TopTypeContentSection';

export default function TopAnimeByTypePage({
  params,
}: {
  params: {
    type: string;
  };
}) {
  return (
    <div>
      <TopHeroSection
        topHeroImage="/top-movies.jpg"
        heroTitle="Top Movies"
        heroSubtitle="Best Anime Movies to Watch"
      />
      <TopTypeContentSection params={{ type: params.type }} />
    </div>
  );
}
