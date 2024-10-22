'use client';

import { Button } from '@/components/ui/button';
import { getHeroes } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import { Bookmark, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['heroes'],
    queryFn: getHeroes,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="relative h-screen w-full">
      <div className="absolute z-10 h-full w-full bg-gradient-to-tr from-neutral-950 from-10% via-neutral-950/70 via-40% to-neutral-950/10 to-90%" />
      {data?.data?.map((hero: any) => (
        <div key={hero.mal_id}>
          <Image
            src={hero.trailer.images.maximum_image_url}
            alt={hero.title}
            width={5000}
            height={5000}
            className="absolute h-full w-full object-cover z-0"
          />
          <div className="absolute z-20 h-full w-full text-white flex flex-col justify-center items-center md:items-start px-4">
            <span className="text-[15px] md:text-[17px] font-medium mb-4 md:mb-6 bg-violet-600 w-fit p-2 rounded-lg">
              #1 Most Favorite Anime
            </span>
            <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-violet-50 text-center md:text-start md:max-w-[620px] lg:max-w-[740px]">
              {hero.title}
            </h1>
            <p className="text-[13px] md:text-[17px] text-neutral-200 text-center md:text-start md:max-w-[650px] lg:max-w-[780px]">
              {hero.synopsis.length > 200
                ? hero.synopsis.substring(0, 200) + '...'
                : hero.synopsis}
            </p>
            <div className="flex gap-x-8 items-center mt-6 md:mt-8">
              <Button className="flex items-center justify-center gap-x-2 rounded-lg text-neutral-50 text-[15px] md:text-[17px] font-medium">
                <span>Show Detail</span> <ChevronRight size={20} />
              </Button>
              <Button
                variant={'ghost'}
                className="flex items-center justify-center gap-x-2 border border-neutral-50 rounded-lg text-neutral-50 text-[15px] md:text-[17px] font-medium"
              >
                <Bookmark size={20} /> <span>Bookmark</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
