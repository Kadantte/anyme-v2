'use client';

import AnimeGrid from '@/components/AnimeGrid';
import { getTopMovies } from '@/lib/actions';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import AnimeGridLoading from '../AnimeGridLoading';
import Pagination from '../Pagination';

export default function TopMovieContentSection() {
  const [page, setPage] = useState(1);

  const {
    data: topAnimeTypeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topMovie', page],
    queryFn: () => getTopMovies(page),
    placeholderData: keepPreviousData,
  });

  const totalPages = topAnimeTypeList?.totalPage || 1;
  const currentPage = topAnimeTypeList?.currentPage || 1;

  return (
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
          <AnimeGrid data={topAnimeTypeList} showIndex={false} />
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={setPage}
          margin="mt-4"
        />
      </div>
    </section>
  );
}
