import Link from 'next/link';
import HoverCardEffect from './HoverCard';
import { toSlug } from '@/lib/utils';

export default function AnimeGrid({ data }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
      {data?.data.map((anime: any, index: number) => (
        <Link
          href={`/detail/${anime.mal_id}?title=${toSlug(anime.title)}`}
          key={`${anime.mal_id}-${index}`}
          className="relative h-[250px] md:h-[320px] w-full rounded-xl bg-cover overflow-hidden group cursor-pointer"
          style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}
        >
          <HoverCardEffect data={anime} />
          <div className="absolute h-full w-full bg-gradient-to-t from-neutral-900 via-transparent  top-0" />
          <div className="relative h-full p-2 flex flex-col justify-between">
            <div className="w-full flex justify-between items-center">
              <span className="w-fit bg-gradient-to-r from-violet-500/75 to-fuchsia-500/75 px-2 py-1 rounded-lg text-neutral-200 text-[1rem]">
                #{index + 1}
              </span>
              <span className="bg-yellow-500/75 px-2 py-1 rounded-lg text-neutral-200 text-[1rem]">
                &#9733; {anime.score}
              </span>
            </div>
            <h2 className="text-neutral-200 text-[1rem]">{anime.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
