'use client';

import AnimeGrid from '@/components/AnimeGrid';
import AnimeGridLoading from '@/components/AnimeGridLoading';
import Pagination from '@/components/Pagination';
import { getAnimeSearch } from '@/lib/actions';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function SearchContent({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const [page, setPage] = useState(1);
  const {
    data: searchResultsList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['search', searchParams.q, page],
    queryFn: () => getAnimeSearch({ q: searchParams.q, page: page }),
    placeholderData: keepPreviousData,
  });
  const totalPages = searchResultsList?.totalPage || 1;
  const currentPage = searchResultsList?.currentPage || 1;
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
        <AnimeGrid data={searchResultsList} showIndex={false} />
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
