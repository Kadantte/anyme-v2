import AnyMeSection from '@/components/AnyMeSection';
import CharacterSection from '@/components/detail/CharacterSection';
import DetailAnimeSection from '@/components/detail/DetailAnimeSection';
import MoreLikeThisSection from '@/components/detail/MoreLikeThisSection.tsx';
import ReviewsSection from '@/components/detail/ReviewsSection';
import { notFound } from 'next/navigation';

export default function DetailAnimePage({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: { title: string };
}) {
  if (isNaN(Number(params.id))) return notFound();

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
