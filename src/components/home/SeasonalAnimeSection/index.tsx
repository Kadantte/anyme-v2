'use client';

import { getSeasonalAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import { ChevronsRight } from 'lucide-react';
import Link from 'next/link';
import SeasonalAnimeContent from './SeasonalAnimeContent';
import SeasonalLoading from './SeasonalLoading';

export default function SeasonalAnimeSection() {
  const {
    data: seasonalList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['seasonalAnime'],
    queryFn: () => getSeasonalAnime(),
  });

  if (isLoading) return <SeasonalLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="bg-neutral-950 py-8 md:py-12">
      <div className="wrapper">
        <div className="flex justify-between items-end mb-2 md:mb-4 lg:mb-5">
          <div className="flex flex-col gap-y-1 md:gap-y-2 lg:gap-y-3">
            <h1 className="text-neutral-50 text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold border-l-4 border-violet-500 pl-2 md:pl-3 lg:pl-4">
              Seasonal Anime
            </h1>
            <span className="text-neutral-200 text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]">
              Fall 2024
            </span>
          </div>
          <Link
            href="/"
            className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-violet-500 hidden md:flex items-center gap-x-1"
          >
            <span>View More</span>
            <ChevronsRight />
          </Link>
        </div>
        <SeasonalAnimeContent seasonalList={seasonalList} />
        <Link
          href={'/'}
          className="flex items-center gap-x-1 justify-center mt-2 text-[1rem] text-violet-500 md:hidden"
        >
          <span>View More</span>
          <ChevronsRight />
        </Link>
      </div>
    </section>
  );
}
