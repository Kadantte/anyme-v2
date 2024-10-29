'use client';

import AnimeGrid from '@/components/AnimeGrid';
import AnimeGridLoading from '@/components/AnimeGridLoading';
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
    gcTime: 1000,
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return <AnimeGrid data={allAnimeList} />;
}

export function TopAiring() {
  const {
    data: topAiringList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topAiring'],
    queryFn: () => getTopAnime({ type: '', filter: 'airing' }),
    gcTime: 1000,
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return <AnimeGrid data={topAiringList} />;
}

export function TopUpcoming() {
  const {
    data: topUpcomingList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topUpcoming'],
    queryFn: () => getTopAnime({ type: '', filter: 'upcoming' }),
    gcTime: 1000,
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return <AnimeGrid data={topUpcomingList} />;
}

export function TopMovies() {
  const {
    data: topMoviesList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topMovies'],
    queryFn: () => getTopAnime({ type: 'movie', filter: '' }),
    gcTime: 1000,
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return <AnimeGrid data={topMoviesList} />;
}

export function PopularAnimes() {
  const {
    data: popularList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['popularAnime'],
    queryFn: () => getTopAnime({ type: '', filter: 'bypopularity' }),
    gcTime: 1000,
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return <AnimeGrid data={popularList} />;
}

export function FavoriteAnimes() {
  const {
    data: topFavoriteList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topFavorite'],
    queryFn: () => getTopAnime({ type: '', filter: 'favorite' }),
    gcTime: 1000,
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return <AnimeGrid data={topFavoriteList} />;
}
