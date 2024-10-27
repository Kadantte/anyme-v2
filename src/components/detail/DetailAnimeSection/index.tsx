'use client';

import InfoContent from '@/components/detail/DetailAnimeSection/InfoContent';
import { getDetailAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import InfoLoading from './InfoLoading';

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

  if (isLoading) return <InfoLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section
      role="img"
      aria-label={detailAnimeList?.data.title}
      style={{
        backgroundImage: `url(${detailAnimeList?.data.trailer.images.large_image_url})`,
      }}
      className="w-full bg-cover bg-center"
    >
      <div className="bg-neutral-950/80 bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100">
        <div className="wrapper">
          <InfoContent detailAnimeList={detailAnimeList} />
        </div>
      </div>
    </section>
  );
}
