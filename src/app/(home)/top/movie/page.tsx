import TopHeroSection from '@/components/top/TopHeroSection';
import TopMovieContentSection from '@/components/top/TopTypeContentSection';

export const metadata = {
  title: 'Top Movies',
  description: 'Best Anime Movies to Watch',
  openGraph: {
    description: 'Best Anime Movies to Watch',
  },
};

export default function TopAnimeMoviePage() {
  return (
    <div>
      <TopHeroSection
        topHeroImage="/top-movies.webp"
        heroTitle="Top Movies"
        heroSubtitle="Best Anime Movies to Watch"
      />
      <TopMovieContentSection />
    </div>
  );
}
