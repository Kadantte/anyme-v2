'use client';

import { Button } from '@/components/ui/button';
import { getDetailAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import { Bookmark, ChevronRight, CirclePlay } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DetailAnime({ params }: { params: { id: number } }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['detailAnime', params.id],
    queryFn: () => getDetailAnime(params.id),
  });

  return (
    <section className="relative">
      <Image
        src={data?.data.trailer.images.maximum_image_url || '/placeholder.png'}
        alt={data?.data.title || 'No title'}
        width={500}
        height={500}
        className="w-full h-full object-cover rounded-lg absolute -z-10"
      />
      <div className="flex flex-col bg-neutral-950/60 backdrop-blur">
        {/* Breadcrumb */}
        <div className="flex items-center gap-x-2 text-neutral-50 text-[15px] p-4">
          <Link href="/" className="text-neutral-50">
            Home
          </Link>
          <ChevronRight className="size-6" />
          <span className="text-violet-500 font-bold">
            {data?.data.title.substring(0, 20)}...
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col md:flex-row">
            <Image
              src={data?.data.images.webp.large_image_url || '/placeholder.png'}
              alt={data?.data.title || 'No title'}
              width={500}
              height={500}
              priority
              className="w-[250px] h-[340px] object-cover mx-auto rounded-lg"
            />

            {/* Description */}
            <div className="flex flex-col px-4 pb-4">
              <h1 className="text-[25px] font-bold text-neutral-50 mt-4">
                {data?.data.title}
              </h1>
              <div className="flex items-center gap-x-2 text-neutral-200 text-[15px] mt-2 mb-4">
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-1 rounded-lg">
                  {data?.data.type}
                </span>
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-1 rounded-lg">
                  Eps {data?.data.episodes}
                </span>
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-1 rounded-lg">
                  {data?.data.duration}
                </span>
              </div>
              <div className="flex items-center gap-x-2 mb-4">
                <Button
                  variant={'ghost'}
                  className="border border-neutral-200 rounded-lg text-neutral-200 text-[13px] md:text-[17px] font-medium"
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
                  className="flex items-center justify-center gap-x-2 text-neutral-200 text-[13px] md:text-[17px] font-medium"
                >
                  <Bookmark /> <span>Bookmark</span>
                </Button>
              </div>
              <p className="text-neutral-200 text-[13px]">
                {data?.data.synopsis}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col text-neutral-200 text-[13px] bg-neutral-950/95 backdrop-blur px-4 py-4">
            <div className="flex flex-col gap-y-1 border-b border-neutral-800 pb-4">
              <span>Japanese: {data?.data.title_japanese}</span>
              <span>Synonim: {data?.data.title_synonyms}</span>
              <span>Aired: {data?.data.aired.string}</span>
              <span>Status: {data?.data.status}</span>
              <span>Rating: {data?.data.rating}</span>
              <span>MAL Score: {data?.data.score}</span>
            </div>
            <div className="py-4 flex items-start gap-x-1">
              <span>Genres:</span>
              <div className="flex flex-wrap gap-1">
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
            <div className="pt-4 border-t border-neutral-800 flex items-center gap-x-1">
              <span>Studios:</span>
              {data?.data.studios.map((studio: any, index: number) => (
                <span key={index}>{studio.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
