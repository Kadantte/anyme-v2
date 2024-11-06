import AnyMeSection from '@/components/AnyMeSection';
import CharacterSection from '@/components/detail/CharacterSection';
import DetailAnimeSection from '@/components/detail/DetailAnimeSection';
import MoreLikeThisSection from '@/components/detail/MoreLikeThisSection.tsx';
import ReviewsSection from '@/components/detail/ReviewsSection';
import { getDetailAnime } from '@/lib/actions';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: { title: string };
}): Promise<Metadata | undefined> {
  const detail = await getDetailAnime(params.id);

  if (detail.status === 404) {
    return {
      title: {
        absolute: '404 - Not found',
      },
      description: 'Not found',
    };
  }

  return {
    title: detail?.data.title,
    description: detail?.data.synopsis,
    openGraph: {
      title: detail?.data.title,
      description: detail?.data.synopsis,
      type: 'website',
      locale: 'id_ID',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/detail/${params.id}?title=${searchParams.title}`,
      siteName: 'AnyMe',
      images: [
        {
          url: detail?.data.trailer.images.maximum_image_url || '/hero.jpg',
        },
      ],
    },
  };
}

export default async function DetailAnimePage({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: { title: string };
}) {
  if (isNaN(Number(params.id))) return notFound();
  if (!searchParams.title) return notFound();

  return (
    <div className="relative overflow-hidden">
      <DetailAnimeSection params={params} />
      <CharacterSection params={params} />
      <ReviewsSection params={params} />
      <AnyMeSection />
      <MoreLikeThisSection params={params} />
    </div>
  );
}
