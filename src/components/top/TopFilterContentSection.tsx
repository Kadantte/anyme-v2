'use client';

import AnimeGrid from '@/components/AnimeGrid';
import { getTopAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import TopHeroSection from './TopHeroSection';
import AnimeGridLoading from '../AnimeGridLoading';

export default function TopFilterContentSection({
  params,
}: {
  params: {
    filter: string;
  };
}) {
  const {
    data: topAnimeFilterList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topAnime', params.filter],
    queryFn: () => getTopAnime({ filter: params.filter }),
  });

  const subtitle: { title: string; subtitle: string }[] = [
    {
      title: 'airing',
      subtitle: 'Most Popular Anime Currently Airing',
    },
    {
      title: 'upcoming',
      subtitle: 'Most Anticipated Upcoming Anime',
    },
    {
      title: 'bypopularity',
      subtitle: 'Fan-Favorite Anime Hits',
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
      : 'Top ' + params.filter.charAt(0).toUpperCase() + params.filter.slice(1);

  const topHeroImage = topAnimeFilterList?.data.map(
    (item: any) => item.trailer.images.maximum_image_url
  )[0];

  return (
    <>
      <TopHeroSection
        topHeroImage={topHeroImage}
        heroTitle={`${heroTitle}`}
        heroSubtitle={`${heroSubtitle}`}
      />
      <section className="bg-neutral-950 pb-4">
        <div className="wrapper">
          {isLoading && <AnimeGridLoading />}
          {error && <p>{error.message}</p>}
          <AnimeGrid data={topAnimeFilterList} />
        </div>
      </section>
    </>
  );
}
