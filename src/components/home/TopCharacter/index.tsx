'use client';

import ViewMoreButton from '@/components/ViewMoreButton';
import { getTopCharacter } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import TopCharacterContent from './TopCharacterContent';
import TopCharacterLoading from './TopCharacterLoading';

export default function TopCharacterSection() {
  const {
    data: topCharacterList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topCharacter'],
    queryFn: () => getTopCharacter({ page: 1 }),
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
        <ViewMoreButton href="/top/character" display="flex" />
      </div>
    </section>
  );
}
