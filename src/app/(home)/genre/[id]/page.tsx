'use client';

import { getAnimeByGenres } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export default function AnimeByGenrePage({
  params,
}: {
  params: { id: string };
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['animeByGenre', params.id],
    queryFn: () => getAnimeByGenres(params.id),
  });

  return (
    <div>
      {data?.data?.map((item: any) => (
        <div key={item.mal_id}>{item.title}</div>
      ))}
    </div>
  );
}
