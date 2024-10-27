import DetailAnimeSection from '@/components/detail/DetailAnimeSection';
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
    </div>
  );
}
