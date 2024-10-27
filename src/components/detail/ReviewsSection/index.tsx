'use client';

import { getAnimeReviews } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import ReviewContent from './ReviewContent';
import ReviewLoading from './ReviewLoading';

export default function ReviewsSection({ params }: { params: { id: number } }) {
  const {
    data: reviewsList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['reviews', params.id],
    queryFn: () => getAnimeReviews(params.id),
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  if (isLoading) return <ReviewLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="bg-neutral-950 py-8 md:py-12">
      <div className="wrapper">
        <div className="flex items-end justify-between">
          <h1 className="text-neutral-50 text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold border-l-4 border-violet-500 pl-2 md:pl-3 lg:pl-4">
            What People Say
          </h1>
          <div className="hidden md:flex items-center gap-x-2 text-white">
            <span
              onClick={scrollLeft}
              className="bg-violet-700 p-1 rounded-full cursor-pointer"
            >
              <ChevronLeft className="size-6" />
            </span>
            <span
              onClick={scrollRight}
              className="bg-violet-700 p-1 rounded-full cursor-pointer"
            >
              <ChevronRight className="size-6" />
            </span>
          </div>
        </div>
        <ReviewContent reviewsList={reviewsList} scrollRef={scrollRef} />
      </div>
    </section>
  );
}
