'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function SeasonalAnimeSection() {
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
          className="flex overflow-auto no-scrollbar gap-x-2 md:gap-x-3 lg:gap-x-4 snap-x"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={index}
              src={'/img.jpg'}
              alt="img"
              width={500}
              height={500}
              className="h-[320px] w-[280px] object-cover snap-end"
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
