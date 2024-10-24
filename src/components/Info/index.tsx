'use client';

import { getDetailAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import InfoLoading from './InfoLoading';
import InfoContent from './InfoContent';

export default function DetailAnime({ params }: { params: { id: number } }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['detailAnime', params.id],
    queryFn: () => getDetailAnime(params.id),
  });

  if (isLoading) return <InfoLoading />;

  if (error) return <p>{error.message}</p>;

  return (
    <section className="relative">
      <Image
        src={data?.data.trailer.images.large_image_url}
        alt={data?.data.title || 'No title'}
        width={5000}
        height={5000}
        className="w-full h-full object-cover rounded-lg absolute -z-10"
      />
      <InfoContent data={data} />
    </section>
  );
}
