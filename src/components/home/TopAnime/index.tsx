'use client';

import AnimeGrid from '@/components/AnimeGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getTopAnime } from '@/lib/actions';
import { useQueries } from '@tanstack/react-query';

export default function TopAnimeSection() {
  const topAnimeList = [
    { data: 'allAnimeList', keyword: 'allAnime', type: '', filter: '' },
    { data: 'topAiringList', keyword: 'topAiring', type: '', filter: 'airing' },
    {
      data: 'topUpcomingList',
      keyword: 'topUpcoming',
      type: '',
      filter: 'upcoming',
    },
    { data: 'topMovieList', keyword: 'topMovie', type: 'movie', filter: '' },
    {
      data: 'topPopularList',
      keyword: 'topPopular',
      type: '',
      filter: 'bypopularity',
    },
    {
      data: 'topFavoriteList',
      keyword: 'topFavorite',
      type: '',
      filter: 'favorite',
    },
  ];

  const results = useQueries({
    queries: topAnimeList.map((item) => ({
      queryKey: [item.keyword],
      queryFn: () => getTopAnime({ type: item.type, filter: item.filter }),
    })),
  });

  // Mapping hasil queries sesuai dengan data yang dibutuhkan
  const [
    allAnimeResult,
    topAiringResult,
    topUpcomingResult,
    topMovieResult,
    topPopularResult,
    topFavoriteResult,
  ] = results;

  const tabContents = [
    { value: 'animes', data: allAnimeResult.data },
    { value: 'airing', data: topAiringResult.data },
    { value: 'upcoming', data: topUpcomingResult.data },
    { value: 'movies', data: topMovieResult.data },
    { value: 'popular', data: topPopularResult.data },
    { value: 'favorited', data: topFavoriteResult.data },
  ];

  const tabs = [
    { value: 'animes', label: 'All Anime' },
    { value: 'airing', label: 'Top Airing' },
    { value: 'upcoming', label: 'Top Upcoming' },
    { value: 'movies', label: 'Top Movies' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'favorited', label: 'Most Favorited' },
  ];

  // Cek loading state
  const isLoading = results.some((result) => result.isLoading);

  // Cek error state
  const isError = results.some((result) => result.isError);
  const errors = results.map((result) => result.error).filter(Boolean);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {errors.join(', ')}</div>;
  }

  return (
    <section className="bg-neutral-950 pb-8 md:pb-12 text-white">
      <div className="wrapper">
        <h1 className="text-neutral-50 text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold border-l-4 border-violet-500 pl-2 md:pl-3 lg:pl-4">
          Top Anime
        </h1>
        <Tabs defaultValue="animes" className="mt-2 md:mt-4 lg:mt-5">
          <TabsList className="mb-2">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabContents.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <AnimeGrid data={tab.data} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
