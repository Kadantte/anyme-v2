'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AllAnime,
  FavoriteAnimes,
  PopularAnimes,
  TopAiring,
  TopMovies,
  TopUpcoming,
} from './TopAnime';
import TopAnimeMobile from './TopAnimeMobile';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';

export default function TopAnimeSection() {
  return (
    <section className="bg-neutral-950 pb-8 md:pb-12">
      <div className="wrapper">
        <h1 className="text-neutral-50 text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold border-l-4 border-violet-500 pl-2 md:pl-3 lg:pl-4">
          Top Anime
        </h1>
        <TopAnimeMobile />
        <Tabs defaultValue="animes" className="hidden md:block md:mt-2">
          <TabsList className="mb-2 md:mb-4 lg:mb-5">
            <TabsTrigger value="animes">All Anime</TabsTrigger>
            <TabsTrigger value="airing">Top Airing</TabsTrigger>
            <TabsTrigger value="upcoming">Top Upcoming</TabsTrigger>
            <TabsTrigger value="movies">Top Movies</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="favorite">Most Favorited</TabsTrigger>
          </TabsList>
          <TabsContent value="animes">
            <AllAnime />
            <Link
              href="/top/allanime"
              className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-violet-500 flex items-center justify-center gap-x-1 mt-2 md:mt-3 lg:mt-4"
            >
              <span>View More</span>
              <ChevronsRight />
            </Link>
          </TabsContent>
          <TabsContent value="airing">
            <TopAiring />
            <Link
              href="/top/filter/airing"
              className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-violet-500 flex items-center justify-center gap-x-1 mt-2 md:mt-3 lg:mt-4"
            >
              <span>View More</span>
              <ChevronsRight />
            </Link>
          </TabsContent>
          <TabsContent value="upcoming">
            <TopUpcoming />
            <Link
              href="/top/filter/upcoming"
              className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-violet-500 flex items-center justify-center gap-x-1 mt-2 md:mt-3 lg:mt-4"
            >
              <span>View More</span>
              <ChevronsRight />
            </Link>
          </TabsContent>
          <TabsContent value="movies">
            <TopMovies />
            <Link
              href="/top/type/movies"
              className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-violet-500 flex items-center justify-center gap-x-1 mt-2 md:mt-3 lg:mt-4"
            >
              <span>View More</span>
              <ChevronsRight />
            </Link>
          </TabsContent>
          <TabsContent value="popular">
            <PopularAnimes />
            <Link
              href="/top/filter/bypopularity"
              className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-violet-500 flex items-center justify-center gap-x-1 mt-2 md:mt-3 lg:mt-4"
            >
              <span>View More</span>
              <ChevronsRight />
            </Link>
          </TabsContent>
          <TabsContent value="favorite">
            <FavoriteAnimes />
            <Link
              href="/top/filter/favorite"
              className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-violet-500 flex items-center justify-center gap-x-1 mt-2 md:mt-3 lg:mt-4"
            >
              <span>View More</span>
              <ChevronsRight />
            </Link>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
