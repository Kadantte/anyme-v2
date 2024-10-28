import AnyMeSection from '@/components/AnyMeSection';
import DetailAnimeSection from '@/components/detail/DetailAnimeSection';
import MoreLikeThisSection from '@/components/detail/MoreLikeThisSection.tsx';
import ReviewsSection from '@/components/detail/ReviewsSection';

export default function DetailAnimePage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <div className="relative">
      <DetailAnimeSection params={params} />
      <ReviewsSection params={params} />
      <MoreLikeThisSection params={params} />
      <AnyMeSection />
    </div>
  );
}
