'use client';

import AnimeGrid from '@/components/AnimeGrid';
import TopHeroSection from '@/components/top/TopHeroSection';
import { getTopAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export default function TopAnimeByTypePage({
  params,
}: {
  params: {
    type: string;
  };
}) {
  const {
    data: topAnimeTypeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topAnime', params.type],
    queryFn: () => getTopAnime({ type: params.type }),
  });

  return (
    <div>
      <TopHeroSection
        topHeroImage={`${params.type === 'movie' && '/top-movies.jpg'}`}
        heroTitle={`Top ${params.type === 'movie' && 'Movies'}`}
        heroSubtitle={`${
          params.type === 'movie' && 'Best Anime Movies to Watch'
        }`}
      />
      <section className="bg-neutral-950 pb-4">
        <div className="wrapper">
          <AnimeGrid data={topAnimeTypeList} />
        </div>
      </section>
    </div>
  );
}
