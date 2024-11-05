'use client';

import AnimeGrid from '@/components/AnimeGrid';
import { getTopAnime } from '@/lib/actions';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import AnimeGridLoading from '../AnimeGridLoading';
import { useState } from 'react';
import Pagination from '../Pagination';

export default function TopAllAnimeContentSection() {
  const [page, setPage] = useState(1);
  const {
    data: topAllAnimeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topAnime', page],
    queryFn: () => getTopAnime({ type: '', filter: '', page }),
    placeholderData: keepPreviousData,
  });

  const totalPages = topAllAnimeList?.totalPage || 1;
  const currentPage = topAllAnimeList?.currentPage || 1;

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
          <AnimeGrid data={topAllAnimeList} showIndex={false} />
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
