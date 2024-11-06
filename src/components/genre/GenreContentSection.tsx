'use client';

import AnimeGrid from '@/components/AnimeGrid';
import { getAnimeByGenres } from '@/lib/actions';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import AnimeGridLoading from '../AnimeGridLoading';
import { useState } from 'react';
import Pagination from '../Pagination';
import { notFound } from 'next/navigation';

export default function GenreContentSection({
  params,
}: {
  params: { id: string };
}) {
  const [page, setPage] = useState(1);
  const {
    data: animeByGenreList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['animeByGenre', params.id, page],
    queryFn: () => getAnimeByGenres(params.id, page),
    placeholderData: keepPreviousData,
  });

  const totalPages = animeByGenreList?.totalPage || 1;
  const currentPage = animeByGenreList?.currentPage || 1;

  if (animeByGenreList?.data.length === 0) {
    notFound();
  }

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
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
        <AnimeGrid data={animeByGenreList} showIndex={false} />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={setPage}
        margin="mt-4"
      />
    </>
  );
}
