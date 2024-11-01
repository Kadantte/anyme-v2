'use client';

import { getTopCharacter } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export default function TopCharacterPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['topCharacter'],
    queryFn: getTopCharacter,
  });

  return (
    <div>
      {data?.data?.map((item: any) => (
        <div key={item.mal_id}>{item.name}</div>
      ))}
    </div>
  );
}
