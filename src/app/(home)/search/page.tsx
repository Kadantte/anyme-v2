'use client';

import AnimeGrid from '@/components/AnimeGrid';
import { getAnimeSearch } from '@/lib/actions';
import { toTitleCase } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const {
    data: searchResultsList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['search', searchParams.q],
    queryFn: () => getAnimeSearch(searchParams.q),
  });
  return (
    <div className="bg-neutral-950 pb-4 pt-[70px]">
      <div className="wrapper">
        <div>
          <h1 className="text-neutral-50 font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] mb-4">
            Show results for {toTitleCase(searchParams.q)}:
          </h1>
        </div>
        <AnimeGrid data={searchResultsList} />
      </div>
    </div>
  );
}
