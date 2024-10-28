import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { FaCirclePlay } from 'react-icons/fa6';

export default function HoverCardEffect({ data }: any) {
  return (
    <HoverCard openDelay={200} closeDelay={200}>
      <HoverCardTrigger className="absolute z-10 w-full h-full inset-0 flex flex-col justify-center items-center bg-neutral-200/0 bg-clip-padding backdrop-filter backdrop-blur-sm backdrop-saturate-100 backdrop-contrast-100 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
        <FaCirclePlay className="size-[50px] md:size-[55px] lg:size-[60px] text-neutral-50" />
      </HoverCardTrigger>
      <HoverCardContent
        side="right"
        className="w-[350px] bg-neutral-950/60 bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100 border-none hidden lg:block"
      >
        <div>
          <h2 className="text-[1.2rem] font-bold text-neutral-50">
            {data.title}
          </h2>
          <div className="flex gap-x-2 items-center mt-1">
            <span className="bg-gradient-to-r from-red-600 to-red-500 p-1 rounded-lg text-[0.9rem] text-neutral-200">
              {data.rating.substring(0, 6)}
            </span>
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-1 rounded-lg text-[0.9rem] text-neutral-200">
              {data.type}
            </span>
            <span className="bg-gradient-to-r from-pink-600 to-pink-500 p-1 rounded-lg text-[0.9rem] text-neutral-200">
              ❤ {data.favorites}
            </span>
          </div>
          <p className="text-[0.9rem] text-neutral-200 pb-2 pt-2 text-pretty">
            {data.synopsis.length > 120
              ? data.synopsis.substring(0, 120) + '...'
              : data.synopsis}
          </p>
          <div className="text-[0.9rem] text-neutral-200 flex flex-col pb-2 pt-2 border-t border-neutral-500">
            <span>Japanese: {data.title_japanese}</span>
            <span>Aired: {data.aired.string}</span>
            <span>Status: {data.status}</span>
          </div>
          <div className="text-[0.9rem] text-neutral-200 flex gap-x-2 pt-2 border-t border-neutral-500">
            <span>Genres:</span>
            <div className="flex flex-wrap gap-1">
              {data.genres.map((genre: any, index: number) => (
                <span key={genre.mal_id}>
                  {genre.name}
                  {index < data.genres.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
