'use client';

import { getTopAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export default function TopAnimeByFilterPage({
  params,
}: {
  params: {
    filter: string;
  };
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['topAnime', params.filter],
    queryFn: () => getTopAnime({ filter: params.filter }),
  });

  return (
    <div>
      {data?.data?.map((item: any) => (
        <div key={item.mal_id}>{item.title}</div>
      ))}
    </div>
  );
}
