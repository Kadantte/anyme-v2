'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TopAnimeSection() {
  return (
    <section className="bg-neutral-950 pb-8 md:pb-12 text-white">
      <div className="wrapper">
        <h1 className="text-neutral-50 text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold border-l-4 border-violet-500 pl-2 md:pl-3 lg:pl-4">
          Top Anime
        </h1>
        <Tabs defaultValue="animes" className="mt-2 md:mt-4 lg:mt-5">
          <TabsList>
            <TabsTrigger value="animes">All Anime</TabsTrigger>
            <TabsTrigger value="airing">Top Airing</TabsTrigger>
            <TabsTrigger value="upcoming">Top Upcoming</TabsTrigger>
            <TabsTrigger value="movies">Top Movies</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="favorited">Most Favorited</TabsTrigger>
          </TabsList>
          <TabsContent value="animes">
            Make changes to your account here.
          </TabsContent>
          <TabsContent
            value="airing"
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            <div className="bg-red-500">1</div>
            <div className="bg-red-500">1</div>
            <div className="bg-red-500">1</div>
            <div className="bg-red-500">1</div>
            <div className="bg-red-500">1</div>
            <div className="bg-red-500">1</div>
          </TabsContent>
          <TabsContent value="upcoming">Change your password here.</TabsContent>
          <TabsContent value="movies">Change your password here.</TabsContent>
          <TabsContent value="popular">Change your password here.</TabsContent>
          <TabsContent value="favorited">
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
