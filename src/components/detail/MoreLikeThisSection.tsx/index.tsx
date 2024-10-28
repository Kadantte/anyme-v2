'use client';

import { getMoreLikeThis } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import MoreLikeThisContent from './MoreLikeThisContent';
import MoreLikeThisbyGenre from './MoreLikeThisbyGenre';
import MoreLikeLoading from './MoreLikeLoading';

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

  if (isLoading) return <MoreLikeLoading />;
  if (error) return <p>{error.message}</p>;

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
            <MoreLikeThisContent moreLikeThisList={moreLikeThisList} />
          )}
        </div>
      </div>
    </section>
  );
}
