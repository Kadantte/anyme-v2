'use client';

import { getSeasonalAnime } from '@/lib/actions';
import { toTitleCase } from '@/lib/utils';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import AnimeGrid from '../AnimeGrid';
import AnimeGridLoading from '../AnimeGridLoading';
import Pagination from '../Pagination';
import TopHeroSection from '../top/TopHeroSection';

export default function SeasonalAnimeContent() {
  const [page, setPage] = useState(1);

  const {
    data: seasonalAnimeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['seasonalAnime', page],
    queryFn: () => getSeasonalAnime(page),
    placeholderData: keepPreviousData,
  });

  const currentSeasonData = seasonalAnimeList?.data[0];
  const seasonName = currentSeasonData?.season || '??';
  const seasonYear = currentSeasonData?.year || '??';
  const topHeroImage = currentSeasonData?.trailer.images.maximum_image_url;

  const totalPages = seasonalAnimeList?.totalPage || 1;
  const currentPage = seasonalAnimeList?.currentPage || 1;

  return (
    <div>
      <TopHeroSection
        topHeroImage={topHeroImage === null ? '/hero.webp' : topHeroImage}
        heroTitle="Seasonal Spotlight"
        heroSubtitle={`Catch the most anticipated anime of the ${
          isLoading ? 'Loading...' : `${toTitleCase(seasonName)} ${seasonYear}`
        }`}
      />
      <section className="bg-neutral-950 pb-4">
        <div className="wrapper">
          {isLoading && <AnimeGridLoading />}
          {error && <p>{error.message}</p>}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setPage}
            margin="mb-4"
          />
          <AnimeGrid data={seasonalAnimeList} showIndex={false} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setPage}
            margin="mt-4"
          />
        </div>
      </section>
    </div>
  );
}
