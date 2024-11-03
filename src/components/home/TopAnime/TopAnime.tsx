'use client';

import AnimeGrid from '@/components/AnimeGrid';
import AnimeGridLoading from '@/components/AnimeGridLoading';
import ViewMoreButton from '@/components/ViewMoreButton';
import { getTopAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export function AllAnime() {
  const {
    data: allAnimeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['allAnime'],
    queryFn: () => getTopAnime({ type: '', filter: '' }),
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <AnimeGrid data={allAnimeList} />
      <ViewMoreButton href="/top/allanime" display="flex" />
    </>
  );
}

export function TopAiring() {
  const {
    data: topAiringList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topAiring'],
    queryFn: () => getTopAnime({ type: '', filter: 'airing' }),
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <AnimeGrid data={topAiringList} />
      <ViewMoreButton href="/top/filter/airing" display="flex" />
    </>
  );
}

export function TopUpcoming() {
  const {
    data: topUpcomingList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topUpcoming'],
    queryFn: () => getTopAnime({ type: '', filter: 'upcoming' }),
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <AnimeGrid data={topUpcomingList} />
      <ViewMoreButton href="/top/filter/upcoming" display="flex" />
    </>
  );
}

export function TopMovies() {
  const {
    data: topMoviesList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topMovies'],
    queryFn: () => getTopAnime({ type: 'movie', filter: '' }),
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <AnimeGrid data={topMoviesList} />
      <ViewMoreButton href="/top/type/movie" display="flex" />
    </>
  );
}

export function PopularAnimes() {
  const {
    data: popularList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['popularAnime'],
    queryFn: () => getTopAnime({ type: '', filter: 'bypopularity' }),
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <AnimeGrid data={popularList} />
      <ViewMoreButton href="/top/filter/bypopularity" display="flex" />
    </>
  );
}

export function FavoriteAnimes() {
  const {
    data: topFavoriteList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topFavorite'],
    queryFn: () => getTopAnime({ type: '', filter: 'favorite' }),
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <AnimeGrid data={topFavoriteList} />
      <ViewMoreButton href="/top/filter/favorite" display="flex" />
    </>
  );
}
