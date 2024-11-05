import TopHeroSection from '@/components/top/TopHeroSection';
import TopMovieContentSection from '@/components/top/TopTypeContentSection';

export default function TopAnimeMoviePage() {
  return (
    <div>
      <TopHeroSection
        topHeroImage="/top-movies.jpg"
        heroTitle="Top Movies"
        heroSubtitle="Best Anime Movies to Watch"
      />
      <TopMovieContentSection />
    </div>
  );
}
