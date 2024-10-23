'use client';

import { getHeroes } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';
import { HeroContent } from './HeroContent';
import { HeroIndicator } from './HeroIndicator';
import HeroLoading from './HeroLoading';

export default function HeroSection() {
  const [currentHero, setCurrentHero] = useState(0);

  const { data, isLoading, error } = useQuery({
    queryKey: ['heroes'],
    queryFn: getHeroes,
  });

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
              <HeroContent hero={hero} currentHero={currentHero} />
            </div>
          ))}
          <HeroIndicator
            data={data}
            currentHero={currentHero}
            setCurrentHero={setCurrentHero}
          />
        </div>
      )}
    </section>
  );
}
