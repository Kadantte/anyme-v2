'use client';

import { getSeasonalAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import { ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function SeasonalAnimeSection() {
  const {
    data: seasonalList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['seasonalAnime'],
    queryFn: () => getSeasonalAnime(),
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="px-4 md:px-12 lg:px-20 py-8 md:py-12 bg-neutral-950">
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
      <div className="relative">
        <div className="absolute flex justify-between items-center w-full h-full pointer-events-none z-20">
          <div className="bg-gradient-to-r from-neutral-950 h-full flex items-center justify-start pointer-events-auto">
            <ChevronLeft
              className="size-8 text-neutral-300 cursor-pointer"
              onClick={scrollLeft}
            />
          </div>
          <div className="bg-gradient-to-l from-neutral-950 h-full flex items-center justify-end pointer-events-auto">
            <ChevronRight
              className="size-8 text-neutral-300 cursor-pointer"
              onClick={scrollRight}
            />
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex overflow-auto no-scrollbar gap-x-2 md:gap-x-3 lg:gap-x-4 snap-x snap-mandatory select-none"
        >
          {seasonalList?.data.map((seasonal: any) => (
            <Link
              href={'/'}
              key={seasonal.mal_id}
              className="flex-shrink-0 snap-always snap-end relative"
            >
              <Image
                src={seasonal.images.webp.large_image_url}
                alt={seasonal.title}
                width={5000}
                height={5000}
                className="w-[220px] h-[320px] object-cover rounded-xl"
              />
              <div className="absolute h-full w-full bg-gradient-to-t from-neutral-900 rounded-xl top-0" />
              <div className="absolute bottom-0 top-0 h-full w-full p-2 flex flex-col justify-between">
                <div className="flex justify-between">
                  <span className="bg-green-500/75 px-2 py-1 rounded-lg text-neutral-200 text-[1rem]">
                    Ep {seasonal.episodes === null ? '??' : seasonal.episodes}
                  </span>
                  <span className="bg-yellow-500/75 px-2 py-1 rounded-lg text-neutral-200 text-[1rem]">
                    &#9733; {seasonal.score}
                  </span>
                </div>
                <span className="text-neutral-200 text-[1rem]">
                  {seasonal.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link
        href={'/'}
        className="flex items-center gap-x-1 justify-center mt-2 text-[1rem] text-violet-500 md:hidden"
      >
        <span>View More</span>
        <ChevronsRight />
      </Link>
    </section>
  );
}
