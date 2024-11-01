'use client';

import AnimeGrid from '@/components/AnimeGrid';
import TopHeroSection from '@/components/top/TopHeroSection';
import { getTopAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export default function TopAnimeByFilterPage({
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

  const topHeroImage = topAnimeFilterList?.data.map(
    (item: any) => item.trailer.images.maximum_image_url
  )[0];

  return (
    <div>
      <TopHeroSection
        topHeroImage={topHeroImage}
        heroTitle={`${
          params.filter === 'bypopularity' || params.filter === 'favorites'
            ? 'Most'
            : 'Top'
        } ${
          params.filter === 'bypopularity'
            ? 'Popular'
            : params.filter[0].toLocaleUpperCase() + params.filter.slice(1)
        }`}
        heroSubtitle={`${heroSubtitle}`}
      />
      <section className="bg-neutral-950 pb-4">
        <div className="wrapper">
          <AnimeGrid data={topAnimeFilterList} />
        </div>
      </section>
    </div>
  );
}
