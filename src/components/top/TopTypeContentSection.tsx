'use client';

import AnimeGrid from '@/components/AnimeGrid';
import { getTopAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import AnimeGridLoading from '../AnimeGridLoading';

export default function TopTypeContentSection({
  params,
}: {
  params: {
    type: string;
  };
}) {
  const {
    data: topAnimeTypeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topAnime', params.type],
    queryFn: () => getTopAnime({ type: params.type }),
  });

  if (isLoading) return <AnimeGridLoading />;
  if (error) return <p>{error.message}</p>;
  return (
    <section className="bg-neutral-950 pb-4">
      <div className="wrapper">
        <AnimeGrid data={topAnimeTypeList} />
      </div>
    </section>
  );
}
