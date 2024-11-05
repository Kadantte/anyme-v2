'use client';

import AnimeGrid from '@/components/AnimeGrid';
import AnimeGridLoading from '@/components/AnimeGridLoading';
import Pagination from '@/components/Pagination';
import { getAnimeSearch } from '@/lib/actions';
import { toTitleCase } from '@/lib/utils';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function SearchPage({
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
    <div className="bg-neutral-950 pb-4 pt-[70px]">
      <div className="wrapper">
        <div>
          <h1 className="text-neutral-50 font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] mb-4">
            Show results for {toTitleCase(searchParams.q)}:
          </h1>
        </div>
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
      </div>
    </div>
  );
}
