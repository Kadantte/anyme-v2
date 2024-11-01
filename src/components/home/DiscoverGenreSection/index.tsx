'use client';

import { getGenres } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function DiscoverGenreSection() {
  const {
    data: genreList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['genre'],
    queryFn: getGenres,
  });

  return (
    <section className="bg-neutral-950 pb-8 md:pb-12">
      <div className="wrapper">
        <h1 className="text-neutral-50 text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold self-center">
          Struggling to Choose? Discover Anime by Genre!
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-3 md:mt-4 lg:mt-5">
          {genreList?.data.map((genre: any) => (
            <Link
              href={`/genre/${genre.mal_id}`}
              key={genre.mal_id}
              className="text-neutral-50 text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] break-words border border-violet-500 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out hover:bg-violet-500 hover:scale-105 cursor-pointer"
            >
              {genre.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
