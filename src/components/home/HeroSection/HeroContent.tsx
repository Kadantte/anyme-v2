'use client';

import { Button } from '@/components/ui/button';
import { AnimeProps } from '@/lib/types';
import { toSlug } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Bookmark, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'nextjs-toploader/app';
import { FaHeart, FaStar } from 'react-icons/fa6';
import { useBookmarkAnime } from '@/lib/store';
import { useShallow } from 'zustand/shallow';

export default function HeroContent({
  heroList,
  currentIndex,
}: {
  heroList: { data: AnimeProps[] };
  currentIndex: number;
}) {
  const router = useRouter();
  const { bookmarks, addBookmark, removeBookmark } = useBookmarkAnime(
    useShallow((state) => ({
      bookmarks: state.bookmarks,
      addBookmark: state.addBookmark,
      removeBookmark: state.removeBookmark,
    }))
  );

  return (
    <>
      {heroList?.data.slice(currentIndex, currentIndex + 1).map((hero) => {
        const isBookmarked = bookmarks.some(
          (item) => item.mal_id === hero.mal_id
        );

        return (
          <div
            key={hero.mal_id}
            role="img"
            aria-label={hero.title}
            className="h-full w-full bg-center bg-cover duration-500"
            style={{
              backgroundImage: `url(${
                hero.mal_id === 11061
                  ? hero.trailer.images.large_image_url
                  : hero.trailer.images.maximum_image_url
              })`,
            }}
          >
            <OverlayHero />
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-20 h-full wrapper"
            >
              {/* Most Favorited Label */}
              <span className="text-[13px] md:text-[17px] text-neutral-200 font-medium mb-4 md:mb-6 lg:mb-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 w-fit p-2 rounded-lg">
                #{currentIndex + 1} Most Favorited Anime
              </span>
              {/* Hero Title */}
              <div className="md:max-w-[620px] lg:max-w-[740px] mb-2 md:mb-4 lg:mb-6">
                <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-neutral-50">
                  {hero.title}
                </h1>
                <span className="text-[13px] md:text-[17px] rounded-lg text-neutral-200">
                  ({hero.title_japanese})
                </span>
              </div>
              {/* Hero Synopsis */}
              {hero.synopsis.length > 200 ? (
                <p className="text-[13px] md:text-[17px] text-neutral-200 md:max-w-[650px] lg:max-w-[780px]">
                  {hero.synopsis.substring(0, 200)}...&nbsp;
                  <Link
                    href={`/detail/${hero.mal_id}?title=${toSlug(hero.title)}`}
                    className="text-violet-500 hover:text-violet-600 transition-colors duration-300 ease-in-out font-bold"
                  >
                    Read More
                  </Link>
                </p>
              ) : (
                <p className="text-[13px] md:text-[17px] text-neutral-200 md:max-w-[650px] lg:max-w-[780px]">
                  {hero.synopsis}
                </p>
              )}
              {/* Hero Ratings */}
              <div className="flex items-center gap-x-4 md:gap-x-6 lg:gap-x-8 mt-2 md:mt-4 lg:mt-6">
                <span className="flex items-center gap-x-2 text-[13px] md:text-[17px] text-neutral-200">
                  <span className="flex items-center gap-x-1 text-yellow-500">
                    <FaStar className="size-5 md:size-6" />
                    {hero.score}
                  </span>
                  ({hero.scored_by.toLocaleString('id-ID')} ratings)
                </span>
                <span className="flex items-center gap-x-1 text-[13px] md:text-[17px] text-neutral-200">
                  <FaHeart className="size-5 md:size-6 text-rose-500" />
                  {hero.favorites.toLocaleString('id-ID')}
                </span>
              </div>
              {/* Hero Button */}
              <div className="flex gap-x-8 items-center mt-6 md:mt-8 lg:mt-10">
                <Button
                  onClick={() =>
                    router.push(
                      `/detail/${hero.mal_id}?title=${toSlug(hero.title)}`
                    )
                  }
                  className="flex items-center justify-center gap-x-2 rounded-lg text-neutral-50 text-[13px] md:text-[17px] font-medium"
                >
                  <span>Show Detail</span> <ChevronRight size={20} />
                </Button>
                <button
                  aria-label={isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
                  title={isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
                  onClick={
                    isBookmarked
                      ? () => removeBookmark(hero.mal_id)
                      : () =>
                          addBookmark({
                            mal_id: hero.mal_id,
                            title: hero.title,
                            images: hero.images.webp.large_image_url,
                          })
                  }
                  className={`flex items-center gap-x-2 text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] px-2 md:px-4 py-1 md:py-2 rounded-lg text-neutral-100 hover:bg-neutral-100 hover:text-neutral-950 transition-colors duration-300 ease-in-out
            ${isBookmarked ? 'bg-neutral-100 text-neutral-950' : ''}`}
                >
                  <Bookmark /> {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </button>
              </div>
            </motion.div>
          </div>
        );
      })}
    </>
  );
}

const OverlayHero = () => {
  return (
    <>
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-neutral-950 " />
      <div className="absolute z-10 h-full w-full bg-gradient-to-r from-neutral-950 via-transparent" />
      <div className="absolute z-10 h-full w-full bg-gradient-to-b from-neutral-950 via-transparent" />
    </>
  );
};
