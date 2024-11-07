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
import { motion } from 'framer-motion';

export default function TopAnimeSection() {
  return (
    <section className="bg-neutral-950 pb-8 md:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="wrapper"
      >
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
          </TabsContent>
          <TabsContent value="airing">
            <TopAiring />
          </TabsContent>
          <TabsContent value="upcoming">
            <TopUpcoming />
          </TabsContent>
          <TabsContent value="movies">
            <TopMovies />
          </TabsContent>
          <TabsContent value="popular">
            <PopularAnimes />
          </TabsContent>
          <TabsContent value="favorite">
            <FavoriteAnimes />
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
