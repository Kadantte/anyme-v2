'use client';

import { getTopAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export default function TopAnimeByTypePage({
  params,
}: {
  params: {
    type: string;
  };
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['topAnime', params.type],
    queryFn: () => getTopAnime({ type: params.type }),
  });

  return (
    <div className="h-screen w-full bg-red-800">
      {data?.data?.map((item: any) => (
        <div key={item.mal_id}>{item.title}</div>
      ))}
    </div>
  );
}
