'use client';

import { getMoreLikeThis } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import MoreLikeThisbyGenre from './MoreLikeThisbyGenre';

export default function MoreLikeThisSection({
  params,
}: {
  params: { id: number };
}) {
  const {
    data: moreLikeThisList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['moreLikeThis', params.id],
    queryFn: () => getMoreLikeThis(params.id),
  });
  return (
    <section className="bg-neutral-950 pb-8 md:pb-12">
      <div className="wrapper">
        <h1 className="text-neutral-50 text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold border-l-4 border-violet-500 pl-2 md:pl-3 lg:pl-4">
          More Like This
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 md:mt-5 lg:mt-6 text-white">
          {moreLikeThisList?.data.length === 0 ? (
            <MoreLikeThisbyGenre params={params} />
          ) : (
            moreLikeThisList?.data.map((moreLike: any) => (
              <div
                key={moreLike.entry.mal_id}
                className="flex flex-col gap-y-2"
              >
                <Image
                  src={moreLike.entry.images.webp.large_image_url}
                  alt={moreLike.title}
                  height={5000}
                  width={5000}
                  className="h-[210px] md:h-[230px] lg:h-[260px] xl:h-[320px] w-full rounded-lg object-cover"
                />
                <h2>{moreLike.entry.title.substring(0, 20)}</h2>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
