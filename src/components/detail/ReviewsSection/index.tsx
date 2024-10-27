'use client';

import { getAnimeReviews } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export default function ReviewsSection({ params }: { params: { id: number } }) {
  const {
    data: reviewsList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['reviews', params.id],
    queryFn: () => getAnimeReviews(params.id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <section className="my-20">
      <span>Reviews</span>
      {reviewsList?.data.map((review) => (
        <div key={review.mal_id}>
          <p>{review.review}</p>
        </div>
      ))}
    </section>
  );
}
