'use client';

import AnimeGrid from '@/components/AnimeGrid';
import { getTopAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import AnimeGridLoading from '../AnimeGridLoading';

export default function TopAllAnimeContentSection() {
  const {
    data: topAllAnimeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topAnime'],
    queryFn: () => getTopAnime({ type: '', filter: '' }),
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="bg-neutral-950 pb-4">
      <div className="wrapper">
        <AnimeGrid data={topAllAnimeList} />
      </div>
    </section>
  );
}
