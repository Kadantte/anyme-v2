'use client';

import { Button } from '@/components/ui/button';
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
    <section className="px-4 md:px-12 lg:px-20 py-8 md:py-12 bg-neutral-950 text-white">
      <div className="flex justify-between items-end mb-2 md:mb-4 lg:mb-5">
        <div className="flex flex-col gap-y-1 md:gap-y-2 lg:gap-y-3">
          <h1 className="text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold border-l-4 border-violet-500 pl-2 md:pl-3 lg:pl-4">
            Seasonal Anime
          </h1>
          <span className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]">
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
        <div className="absolute flex justify-between items-center w-full h-full pointer-events-none">
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
          className="flex overflow-auto no-scrollbar gap-x-2 md:gap-x-3 lg:gap-x-4 snap-x select-none"
        >
          {seasonalList?.data.map((seasonal: any) => (
            <Image
              key={seasonal.mal_id}
              src={seasonal.images.webp.large_image_url}
              alt={seasonal.title}
              width={5000}
              height={5000}
              className="w-[280px] h-[320px] object-cover rounded-xl"
            />
          ))}
        </div>
      </div>
      <Button
        asChild
        className="w-fit mx-auto flex mt-2 text-[1rem] text-neutral-200 font-normal md:hidden"
      >
        <Link href="/">View More</Link>
      </Button>
    </section>
  );
}
