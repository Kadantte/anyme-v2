import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import { ImQuotesLeft } from 'react-icons/im';
import { TiWarning } from 'react-icons/ti';

export default function ReviewContent({ reviewsList, scrollRef }: any) {
  return (
    <div
      ref={scrollRef}
      className="mt-4 md:mt-5 lg:mt-6 flex gap-x-4 overflow-auto snap-x no-scrollbar"
    >
      {reviewsList?.data.length > 0
        ? reviewsList.data.map((review: any) => (
            <div
              key={review.mal_id}
              className="h-[400px] md:h-[250px] lg:h-[280px] xl:h-[320px] w-[250px] md:w-[350px] lg:w-[380px] xl:w-[450px] rounded-xl flex flex-col justify-between px-4 md:px-6 lg:px-8 py-2 md:py-4 lg:py-6 flex-shrink-0 bg-gradient-to-tl from-neutral-900 via-neutral-900 to-neutral-800 snap-end"
            >
              <ImQuotesLeft className="text-neutral-500 size-8 md:size-9 lg:size-10" />
              <p className="text-neutral-300 text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem]">
                {review.review.substring(0, 100)}...
              </p>
              <div className="w-full flex justify-between items-center text-neutral-300">
                <div className="flex items-center gap-x-2">
                  <Image
                    src={review.user.images.webp.image_url}
                    alt={review.user.username}
                    width={100}
                    height={100}
                    className="size-8 md:size-9 lg:size-10 rounded-full object-cover border border-neutral-50"
                  />
                  <div className="flex flex-col">
                    <span className="text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-neutral-50">
                      {review.user.username}
                    </span>
                    <span className="text-[0.6rem] md:text-[0.65rem] lg:text-[0.7rem] xl:text-[0.75rem] text-neutral-400">
                      MAL ID: {review.mal_id}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <FaStar className="text-yellow-500 size-[14px] md:size-[15px] lg:size-[16px]" />
                  <span className="text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-neutral-50">
                    {review.score}
                  </span>
                </div>
              </div>
            </div>
          ))
        : Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="h-[400px] md:h-[250px] lg:h-[280px] xl:h-[320px] w-[250px] md:w-[350px] lg:w-[380px] xl:w-[450px] rounded-xl flex flex-col justify-between px-4 md:px-6 lg:px-8 py-2 md:py-4 lg:py-6 flex-shrink-0 bg-gradient-to-tl from-neutral-900 via-neutral-900 to-neutral-800 snap-end"
            >
              <TiWarning className="text-neutral-500 size-8 md:size-9 lg:size-10" />
              <p className="text-neutral-300 text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem]">
                There are no reviews for this anime yet or this anime is still
                ongoing.
              </p>
              <div className="flex items-center gap-x-2">
                <Image
                  src="/logo.png"
                  alt="AnyMe."
                  width={100}
                  height={100}
                  className="size-8 md:size-9 lg:size-10 rounded-full object-cover border border-neutral-50"
                />
                <div className="flex flex-col">
                  <span className="text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-neutral-50">
                    AnyMe.
                  </span>
                  <span className="text-[0.6rem] md:text-[0.65rem] lg:text-[0.7rem] xl:text-[0.75rem] text-neutral-400">
                    Anything About Anime
                  </span>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
