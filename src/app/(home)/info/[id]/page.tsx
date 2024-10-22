'use client';

import { getDetailAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export default function DetailAnime({ params }: { params: { id: number } }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['detailAnime', params.id],
    queryFn: () => getDetailAnime(params.id),
  });

  return (
    <div>
      <p>{data?.data?.title}</p>
    </div>
  );
}
