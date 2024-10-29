import HoverCardEffect from '@/components/HoverCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function SeasonalAnimeContent({ seasonalList }: any) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
          <div
            onClick={() => router.push(`/detail/${seasonal.mal_id}`)}
            key={seasonal.mal_id}
            className="flex-shrink-0 snap-always snap-end relative rounded-xl overflow-hidden group"
          >
            <HoverCardEffect data={seasonal} />
            <Image
              src={seasonal.images.webp.large_image_url}
              alt={seasonal.title}
              width={5000}
              height={5000}
              className="w-[220px] h-[320px] object-cover"
              priority
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
          </div>
        ))}
      </div>
    </div>
  );
}
