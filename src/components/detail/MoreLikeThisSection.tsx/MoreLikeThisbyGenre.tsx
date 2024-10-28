'use client';

import { getMoreLikeThisbyGenre } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

export default function MoreLikeThisbyGenre({
  params,
}: {
  params: { id: number };
}) {
  const {
    data: moreByGenre,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['moreLikeThisbyGenre', params.id],
    queryFn: () => getMoreLikeThisbyGenre(params.id),
  });
  return (
    <>
      {moreByGenre?.data.map((moreLikeGenre: any) => (
        <div key={moreLikeGenre.mal_id} className="flex flex-col gap-y-2">
          <Image
            src={moreLikeGenre.images.webp.large_image_url}
            alt={moreLikeGenre.title}
            height={5000}
            width={5000}
            className="h-[320px] w-full rounded-lg object-cover"
          />
          <h2>{moreLikeGenre.title.substring(0, 20)}</h2>
        </div>
      ))}
    </>
  );
}
