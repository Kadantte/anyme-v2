'use client';

import { getTopCharacter } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import TopCharacterContent from './TopCharacterContent';
import TopCharacterLoading from './TopCharacterLoading';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';

export default function TopCharacterSection() {
  const {
    data: topCharacterList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topCharacter'],
    queryFn: getTopCharacter,
  });

  if (isLoading) return <TopCharacterLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="bg-neutral-950 py-8 md:py-12">
      <div className="wrapper">
        <h1 className="text-neutral-50 text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold border-l-4 border-violet-500 pl-2 md:pl-3 lg:pl-4">
          Top Character
        </h1>
        <TopCharacterContent topCharacterList={topCharacterList} />
        <Link
          href="/top/character"
          className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-violet-500 flex items-center justify-center gap-x-1 mt-2 md:mt-3 lg:mt-4"
        >
          <span>View More</span>
          <ChevronsRight />
        </Link>
      </div>
    </section>
  );
}
