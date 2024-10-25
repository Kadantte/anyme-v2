import { useRouter } from 'next/navigation';
import { FaHeart, FaStar } from 'react-icons/fa6';
import { Bookmark, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const HeroContent = ({
  hero,
  currentIndex,
}: {
  hero: {
    mal_id: number;
    title: string;
    title_japanese: string;
    synopsis: string;
    score: number;
    scored_by: number;
    favorites: number;
  };
  currentIndex: number;
}) => {
  return (
    <div className="absolute z-20 h-full w-full flex flex-col justify-center px-4 md:px-12 lg:px-20">
      <MostFavoritedLabel currentIndex={currentIndex} />
      <HeroTitle hero={hero} />
      <HeroSynopsis hero={hero} />
      <HeroRatings hero={hero} />
      <HeroButton hero={hero} />
    </div>
  );
};

const MostFavoritedLabel = ({ currentIndex }: any) => {
  return (
    <span className="text-[13px] md:text-[17px] text-neutral-200 font-medium mb-4 md:mb-6 lg:mb-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 w-fit p-2 rounded-lg">
      #{currentIndex + 1} Most Favorited Anime
    </span>
  );
};

const HeroTitle = ({
  hero,
}: {
  hero: { title: string; title_japanese: string };
}) => {
  return (
    <div className="md:max-w-[620px] lg:max-w-[740px] mb-2 md:mb-4 lg:mb-6">
      <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-neutral-50">
        {hero.title}
      </h1>
      <span className="text-[13px] md:text-[17px] rounded-lg text-neutral-200">
        ({hero.title_japanese})
      </span>
    </div>
  );
};

const HeroSynopsis = ({
  hero,
}: {
  hero: { synopsis: string; mal_id: number };
}) => {
  return (
    <>
      {hero.synopsis.length > 200 ? (
        <p className="text-[13px] md:text-[17px] text-neutral-200 md:max-w-[650px] lg:max-w-[780px]">
          {hero.synopsis.substring(0, 200)}...&nbsp;
          <Link
            href={`/info/${hero.mal_id}`}
            className="text-violet-500 font-bold"
          >
            Read More
          </Link>
        </p>
      ) : (
        <p className="text-[13px] md:text-[17px] text-neutral-200 md:max-w-[650px] lg:max-w-[780px]">
          {hero.synopsis}
        </p>
      )}
    </>
  );
};

const HeroRatings = ({
  hero,
}: {
  hero: { score: number; scored_by: number; favorites: number };
}) => {
  return (
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
  );
};

const HeroButton = ({ hero }: { hero: { mal_id: number } }) => {
  const router = useRouter();

  return (
    <div className="flex gap-x-8 items-center mt-6 md:mt-8 lg:mt-10">
      <Button
        onClick={() => router.push(`/info/${hero.mal_id}`)}
        className="flex items-center justify-center gap-x-2 rounded-lg text-neutral-50 text-[13px] md:text-[17px] font-medium"
      >
        <span>Show Detail</span> <ChevronRight size={20} />
      </Button>
      <Button
        variant={'ghost'}
        className="flex items-center justify-center gap-x-2 border border-neutral-50 rounded-lg text-neutral-50 text-[13px] md:text-[17px] font-medium"
      >
        <Bookmark size={20} /> <span>Bookmark</span>
      </Button>
    </div>
  );
};
