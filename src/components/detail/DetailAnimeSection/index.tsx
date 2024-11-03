'use client';

import InfoContent from '@/components/detail/DetailAnimeSection/InfoContent';
import { getDetailAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import InfoLoading from './InfoLoading';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DetailAnimeSection({
  params,
}: {
  params: { id: number };
}) {
  const {
    data: detailAnimeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['detailAnime', params.id],
    queryFn: () => getDetailAnime(params.id),
  });

  const router = useRouter();

  if (isLoading) return <InfoLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section
      role="img"
      aria-label={detailAnimeList?.data.title || 'Detail Anime'}
      style={{
        backgroundImage: `url(${
          detailAnimeList?.data.trailer.images.large_image_url || '/hero.jpg'
        })`,
      }}
      className="w-full bg-cover bg-center"
    >
      <div className="bg-neutral-950/80 bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100 pt-[70px] md:pt-[50px]">
        <div className="wrapper">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-x-2 self-start py-2 md:py-4 lg:py-6 text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] group"
          >
            <ChevronLeft className="text-neutral-50 group-hover:-translate-x-2 transition-transform duration-300 ease-in-out" />{' '}
            <span className="text-neutral-50 group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
              Back
            </span>
          </button>
          <InfoContent detailAnimeList={detailAnimeList} />
        </div>
      </div>
    </section>
  );
}
