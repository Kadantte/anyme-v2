import { Bookmark, CirclePlay } from 'lucide-react';
import Image from 'next/image';

export default function InfoContent({ detailAnimeList }: any) {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-4 lg:gap-x-6 xl:gap-x-8 py-4 md:py-8 lg:py-10 xl:py-12">
      <Image
        src={detailAnimeList?.data.images.webp.large_image_url}
        alt={detailAnimeList?.data.title}
        width={5000}
        height={5000}
        priority
        className="w-[220px] h-[320px] mx-auto object-cover rounded-xl mb-2 md:mb-0"
      />
      <div>
        <h1 className="text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem] font-bold text-neutral-50 mb-1 md:mb-2">
          {detailAnimeList?.data.title}
        </h1>
        <div className="flex items-center gap-x-2">
          <span className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] text-neutral-100 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-2 rounded-lg">
            {detailAnimeList?.data.type}
          </span>
          <span className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] text-neutral-100 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-2 rounded-lg">
            Eps{' '}
            {detailAnimeList?.data.episodes === null
              ? '??'
              : detailAnimeList?.data.episodes}
          </span>
          <span className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] text-neutral-100 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-2 rounded-lg">
            {detailAnimeList?.data.duration}
          </span>
        </div>
        <div className="flex items-center gap-x-4 text-neutral-100 mt-4 md:mt-5">
          <button className="flex items-center gap-x-2 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] border border-neutral-100 px-2 py-1 rounded-lg">
            <CirclePlay /> Watch Trailer
          </button>
          <button className="flex items-center gap-x-2 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem]">
            <Bookmark /> Bookmark
          </button>
        </div>
        <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] text-neutral-200 mt-4 md:mt-6 text-balance">
          {detailAnimeList?.data.synopsis}
        </p>
        <div className="flex flex-wrap gap-x-2 mt-4">
          {detailAnimeList?.data.genres.map((genre: any) => (
            <span
              key={genre.mal_id}
              className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] text-neutral-200 bg-violet-950/50 border border-violet-900 bg-clip-padding backdrop-filter  backdrop-blur  backdrop-saturate-100 backdrop-contrast-100 px-2 py-1 rounded-lg"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
