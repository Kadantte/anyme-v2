import { Button } from '@/components/ui/button';
import { Bookmark, ChevronRight, CirclePlay } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function InfoContent({ data }: any) {
  return (
    <div className="flex flex-col bg-neutral-950/90 backdrop-blur">
      {/* Breadcrumb */}
      <MobileBreadcrumb data={data} />

      {/* Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col md:flex-row md:px-12 lg:pl-20 md:py-8 lg:py-12 md:gap-x-8 lg:gap-x-12 lg:min-w-[70%]">
          <Image
            src={data?.data.images.webp.large_image_url || '/placeholder.png'}
            alt={data?.data.title || 'No title'}
            width={500}
            height={500}
            priority
            className="w-[250px] h-[340px] object-cover mx-auto rounded-lg"
          />

          {/* Description */}
          <div className="flex flex-col px-4 pb-4 md:p-0">
            <Breadcrumb data={data} />
            <h1 className="text-[25px] md:text-[30px] font-bold text-neutral-50 mt-4 md:mt-0">
              {data?.data.title}
            </h1>
            <Information data={data} />
            <DetailAnimeButton data={data} />
            <p className="text-neutral-200 text-[13px] md:text-[15px] text-balance">
              {data?.data.synopsis}
            </p>
          </div>
        </div>

        {/* Details */}
        <DetailInformation data={data} />
      </div>
    </div>
  );
}

const MobileBreadcrumb = ({ data }: any) => {
  return (
    <div className="flex items-center gap-x-2 text-neutral-50 text-[15px] p-4 md:hidden">
      <Link
        href="/"
        className="text-neutral-50 hover:text-violet-500 transition-colors
"
      >
        Home
      </Link>
      <ChevronRight className="size-6" />
      <span className="text-violet-500 font-bold cursor-pointer">
        {data?.data.title.length > 20
          ? `${data?.data.title.substring(0, 20)}...`
          : data?.data.title}
      </span>
    </div>
  );
};

const Breadcrumb = ({ data }: any) => {
  return (
    <div className="hidden md:flex items-center gap-x-2 text-neutral-50 text-[15px] mb-2">
      <Link
        href="/"
        className="text-neutral-50 hover:text-violet-500 transition-colors"
      >
        Home
      </Link>
      <ChevronRight className="size-6" />
      <span className="text-violet-500 font-bold cursor-pointer">
        {data?.data.title.length > 40
          ? data?.data.title.substring(0, 40) + '...'
          : data?.data.title}
      </span>
    </div>
  );
};

const Information = ({ data }: any) => {
  return (
    <div className="flex items-center gap-x-2 md:gap-x-4 text-neutral-200 text-[13px] md:text-[15px] mt-2 md:mt-4 mb-4 md:mb-6">
      <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-1 md:px-2 rounded-lg">
        {data?.data.type}
      </span>
      <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-1 md:px-2 rounded-lg">
        Eps {data?.data.episodes}
      </span>
      <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-1 md:px-2 rounded-lg">
        {data?.data.duration}
      </span>
    </div>
  );
};

const DetailAnimeButton = ({ data }: any) => {
  return (
    <div className="flex items-center gap-x-2 md:gap-x-4 mb-4 md:mb-6">
      <Button
        variant={'ghost'}
        className="border border-neutral-200 rounded-lg text-neutral-200 text-[13px] md:text-[15px] font-medium"
        asChild
      >
        <Link
          href={data?.data.trailer.url || ''}
          className="flex items-center justify-center gap-x-2"
          target="_blank"
        >
          <CirclePlay /> <span>Watch Trailer</span>
        </Link>
      </Button>
      <Button
        variant={'ghost'}
        className="flex items-center justify-center gap-x-2 text-neutral-200 text-[13px] md:text-[15px] font-medium"
      >
        <Bookmark /> <span>Bookmark</span>
      </Button>
    </div>
  );
};

const DetailInformation = ({ data }: any) => {
  return (
    <div className="flex flex-col text-neutral-200 text-[13px] md:text-[15px] bg-neutral-950/50 p-4 md:px-12 lg:pr-20 md:py-8 lg:py-12">
      <div className="grid grid-cols-[0.9fr_2fr] md:grid-cols-[0.5fr_2fr] lg:grid-cols-[1.4fr_2fr] gap-y-1 md:gap-y-2 lg:gap-y-4 border-b border-neutral-800 pb-4 md:pb-8 lg:pb-12">
        <span>Japanese</span>
        <span>{data?.data.title_japanese}</span>
        <span>Synonym</span>
        <span>{data?.data.title_synonyms}</span>
        <span>Aired</span>
        <span>{data?.data.aired.string}</span>
        <span>Status</span>
        <span>{data?.data.status}</span>
        <span>Rating</span>
        <span>{data?.data.rating}</span>
        <span>MAL Score</span>
        <span>{data?.data.score}</span>
      </div>
      <div className="py-4 md:py-8 lg:py-12 grid grid-cols-[0.9fr_2fr] md:grid-cols-[0.5fr_2fr] lg:grid-cols-[1.4fr_2fr]">
        <span>Genres</span>
        <div className="flex flex-wrap gap-1 md:gap-4">
          {data?.data.genres.map((genre: any, index: number) => (
            <span
              key={index}
              className="border border-neutral-400 rounded-lg px-2 py-1"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
      <div className="pt-4 md:pt-8 lg:pt-12 border-t border-neutral-800 grid grid-cols-[0.9fr_2fr] md:grid-cols-[0.5fr_2fr] lg:grid-cols-[1.4fr_2fr]">
        <span>Studios</span>
        {data?.data.studios.map((studio: any, index: number) => (
          <span key={index}>{studio.name}</span>
        ))}
      </div>
    </div>
  );
};
