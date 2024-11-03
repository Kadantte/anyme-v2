'use client';

import AnimeGrid from '@/components/AnimeGrid';
import { getAnimeByGenres } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import AnimeGridLoading from '../AnimeGridLoading';

export default function GenreContentSection({
  params,
}: {
  params: { id: string };
}) {
  const {
    data: animeByGenreList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['animeByGenre', params.id],
    queryFn: () => getAnimeByGenres(params.id),
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return <AnimeGrid data={animeByGenreList} />;
}
