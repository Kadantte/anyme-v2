'use client';

import { getTopAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export default function TopAllAnimePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['topAnime'],
    queryFn: () => getTopAnime({ type: '', filter: '' }),
  });
  return (
    <div>
      {data?.data?.map((item: any) => (
        <div key={item.mal_id}>{item.title}</div>
      ))}
    </div>
  );
}
