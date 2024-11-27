'use client';

import AnimeGrid from '@/components/AnimeGrid';
import { getTopAnime } from '@/lib/actions';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import TopHeroSection from './TopHeroSection';
import AnimeGridLoading from '../AnimeGridLoading';
import { useState } from 'react';
import Pagination from '../Pagination';
import { toTitleCase } from '@/lib/utils';

export default function TopFilterContentSection({
  params,
}: {
  params: {
    filter: string;
  };
}) {
  const [page, setPage] = useState(1);
  const {
    data: topAnimeFilterList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topAnime', page, params.filter],
    queryFn: () => getTopAnime({ filter: params.filter, page }),
    placeholderData: keepPreviousData,
  });

  const totalPages = topAnimeFilterList?.totalPage || 1;
  const currentPage = topAnimeFilterList?.currentPage || 1;

  const subtitle: { title: string; subtitle: string }[] = [
    {
      title: 'airing',
      subtitle: 'Top Picks from the Current Anime Season',
    },
    {
      title: 'upcoming',
      subtitle: 'Most Anticipated Upcoming Anime',
    },
    {
      title: 'bypopularity',
      subtitle: 'Popular Series You Will Love to Watch',
    },
    {
      title: 'favorite',
      subtitle: 'All-Time Favorite Anime Picks by Viewers',
    },
  ];

  const heroSubtitle = subtitle.find(
    (item) => item.title === params.filter
  )?.subtitle;

  const heroTitle =
    params.filter === 'bypopularity'
      ? 'Most Popular'
      : params.filter === 'favorite'
      ? 'Most Favorited'
      : 'Top ' + toTitleCase(params.filter);

  const topHeroImage = topAnimeFilterList?.data.map(
    (item: any) => item.trailer.images.maximum_image_url
  )[0];

  return (
    <>
      <TopHeroSection
        topHeroImage={topHeroImage === null ? '/hero.webp' : topHeroImage}
        heroTitle={`${heroTitle}`}
        heroSubtitle={`${heroSubtitle}`}
      />
      <section className="bg-neutral-950 pb-4">
        <div className="wrapper">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setPage}
            margin="mb-4"
          />
          {isLoading ? (
            <AnimeGridLoading />
          ) : error ? (
            <p>{(error as Error).message}</p>
          ) : (
            <AnimeGrid data={topAnimeFilterList} showIndex={false} />
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setPage}
            margin="mt-4"
          />
        </div>
      </section>
    </>
  );
}
