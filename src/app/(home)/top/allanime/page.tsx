'use client';

import AnimeGrid from '@/components/AnimeGrid';
import TopHeroSection from '@/components/top/TopHeroSection';
import { getTopAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export default function TopAllAnimePage() {
  const {
    data: topAllAnimeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topAnime'],
    queryFn: () => getTopAnime({ type: '', filter: '' }),
  });
  return (
    <div>
      <TopHeroSection
        topHeroImage="/top-anime.jpg"
        heroTitle="Top Anime"
        heroSubtitle="Top Ranked Anime of All Time"
      />
      <section className="bg-neutral-950 pb-4">
        <div className="wrapper">
          <AnimeGrid data={topAllAnimeList} />
        </div>
      </section>
    </div>
  );
}
