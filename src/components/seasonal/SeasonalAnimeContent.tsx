'use client';

import { getSeasonalAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import TopHeroSection from '../top/TopHeroSection';
import { toTitleCase } from '@/lib/utils';
import AnimeGridLoading from '../AnimeGridLoading';
import AnimeGrid from '../AnimeGrid';

export default function SeasonalAnimeContent() {
  const {
    data: seasonalAnimeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['seasonalAnime'],
    queryFn: getSeasonalAnime,
  });

  const currentSeasonData = seasonalAnimeList?.data[0];
  const seasonName = currentSeasonData?.season || '??';
  const seasonYear = currentSeasonData?.year || '??';

  const topHeroImage = currentSeasonData?.trailer.images.maximum_image_url;

  return (
    <div>
      <TopHeroSection
        topHeroImage={topHeroImage}
        heroTitle="Seasonal Spotlight"
        heroSubtitle={`Catch the most anticipated anime of the 
        ${toTitleCase(seasonName)} ${seasonYear}`}
      />
      <section className="bg-neutral-950 pb-4">
        <div className="wrapper">
          {isLoading && <AnimeGridLoading />}
          {error && <p>{error.message}</p>}
          <AnimeGrid data={seasonalAnimeList} />
        </div>
      </section>
    </div>
  );
}
