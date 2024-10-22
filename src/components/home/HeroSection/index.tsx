'use client';

import { Button } from '@/components/ui/button';
import { getHeroes } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import { Bookmark, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import HeroLoading from './HeroLoading';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ['heroes'],
    queryFn: getHeroes,
  });

  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) =>
        prev === (data.data.length || 1) - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  const handleIndicatorClick = (index: number) => {
    setCurrentHero(index);
  };

  if (isLoading) return <HeroLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="relative h-screen w-full">
      <div className="absolute z-10 h-full w-full bg-gradient-to-tr from-neutral-950 from-10% via-neutral-950/70 via-40% to-neutral-950/10 to-90%" />
      {data?.data && data.data.length > 0 && (
        <div>
          {data.data.slice(currentHero, currentHero + 1).map((hero: any) => (
            <div key={hero.mal_id}>
              <Image
                src={
                  hero.mal_id === 11061
                    ? hero.trailer.images.large_image_url
                    : hero.trailer.images.maximum_image_url
                }
                alt={hero.title}
                width={5000}
                height={5000}
                className="absolute h-full w-full object-cover z-0"
              />
              <div className="absolute z-20 h-full w-full text-white flex flex-col justify-center px-4 md:px-12 lg:px-20">
                <span className="text-[13px] md:text-[17px] font-medium mb-4 md:mb-6 lg:mb-8 bg-violet-600 w-fit p-2 rounded-lg">
                  #{currentHero + 1} Most Favorite Anime
                </span>
                <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-violet-50 md:max-w-[620px] lg:max-w-[740px] md:mb-2 lg:mb-4">
                  {hero.title}{' '}
                  <span className="hidden md:block text-[17px] text-violet-500">
                    ({hero.title_japanese})
                  </span>
                </h1>
                <p className="text-[13px] md:text-[17px] text-neutral-200 md:max-w-[650px] lg:max-w-[780px]">
                  {hero.synopsis.length > 200
                    ? hero.synopsis.substring(0, 200) + '...'
                    : hero.synopsis}
                </p>
                <div className="flex gap-x-8 items-center mt-6 md:mt-8 lg:mt-10">
                  <Button
                    onClick={() => router.push(`/info/${hero.mal_id}`)}
                    className="flex items-center justify-center gap-x-2 rounded-lg text-neutral-50 text-[13px] md:text-[17px] font-medium"
                  >
                    <span>Show Detail</span> <ChevronRight size={20} />
                  </Button>
                  <Button
                    variant={'ghost'}
                    className="flex items-center justify-center gap-x-2 border border-neutral-50 rounded-lg text-neutral-50 text-[13px] md:text-[17px] font-medium"
                  >
                    <Bookmark size={20} /> <span>Bookmark</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <Indicator
            data={data}
            handleIndicatorClick={handleIndicatorClick}
            currentHero={currentHero}
          />
        </div>
      )}
    </section>
  );
}

const Indicator = ({ data, handleIndicatorClick, currentHero }: any) => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-30">
      {data.data.map((_: any, index: number) => (
        <span
          key={index}
          onClick={() => handleIndicatorClick(index)}
          className={`cursor-pointer size-2 rounded-full ${
            currentHero === index ? 'bg-neutral-50' : 'bg-neutral-400'
          }`}
        />
      ))}
    </div>
  );
};
