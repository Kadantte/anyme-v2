'use client';

import { getMoreLikeThisbyGenre } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import MoreLikeLoading from './MoreLikeLoading';

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

  if (isLoading) return <MoreLikeLoading />;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      {moreByGenre?.data.map((moreLikeGenre: any) => (
        <div key={moreLikeGenre.mal_id} className="flex flex-col gap-y-2">
          <Image
            src={moreLikeGenre.images.webp.large_image_url}
            alt={moreLikeGenre.title}
            height={5000}
            width={5000}
            className="h-[320px] w-full rounded-xl object-cover"
          />
          <h2>
            {moreLikeGenre.title.length > 20
              ? `${moreLikeGenre.title.substring(0, 20)}...`
              : moreLikeGenre.title}
          </h2>
        </div>
      ))}
    </>
  );
}
