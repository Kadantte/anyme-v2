'use client';

import TopCharacterContent from '@/components/home/TopCharacter/TopCharacterContent';
import { getTopCharacter } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import AnimeGridLoading from '../AnimeGridLoading';

export default function TopCharacterContentSection() {
  const {
    data: topCharacterList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topCharacter'],
    queryFn: getTopCharacter,
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="bg-neutral-950 pb-4">
      <div className="wrapper -mt-3 md:-mt-4">
        <TopCharacterContent topCharacterList={topCharacterList} />
      </div>
    </section>
  );
}
