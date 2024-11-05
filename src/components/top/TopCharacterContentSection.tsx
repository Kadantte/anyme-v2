'use client';

import TopCharacterContent from '@/components/home/TopCharacter/TopCharacterContent';
import { getTopCharacter } from '@/lib/actions';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import AnimeGridLoading from '../AnimeGridLoading';
import { useState } from 'react';
import Pagination from '../Pagination';

export default function TopCharacterContentSection() {
  const [page, setPage] = useState(1);
  const {
    data: topCharacterList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topCharacter', page],
    queryFn: () => getTopCharacter({ page: page }),
    placeholderData: keepPreviousData,
  });

  const totalPages = topCharacterList?.totalPage || 1;
  const currentPage = topCharacterList?.currentPage || 1;

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="bg-neutral-950 pb-4">
      <div className="wrapper -mt-3 md:-mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={setPage}
          margin="mt-4"
        />
        <TopCharacterContent topCharacterList={topCharacterList} />
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
