'use client';

import {
  AllAnime,
  FavoriteAnimes,
  PopularAnimes,
  TopAiring,
  TopMovies,
  TopUpcoming,
} from '@/components/home/TopAnime/TopAnime';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

export default function TopAnimeMobile() {
  const [selected, setSelected] = useState('allAnime');

  const handleSelectChange = (value: any) => {
    setSelected(value);
  };

  return (
    <div className="mt-3">
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-full flex items-center justify-between text-[1rem] text-neutral-200 border border-neutral-700 px-2 py-1 rounded-lg md:hidden">
          <SelectValue placeholder="All Anime" />
        </SelectTrigger>
        <SelectContent className="bg-neutral-950 text-neutral-200 text-[1rem] border border-neutral-700">
          <SelectGroup>
            <SelectItem value="allAnime">All Anime</SelectItem>
            <SelectItem value="topAiring">Top Airing</SelectItem>
            <SelectItem value="topUpcoming">Top Upcoming</SelectItem>
            <SelectItem value="topMovies">Top Movies</SelectItem>
            <SelectItem value="mostPopular">Most Popular</SelectItem>
            <SelectItem value="mostFavorite">Most Favorited</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="mt-3 md:hidden">
        {selected === 'allAnime' && <AllAnime />}
        {selected === 'topAiring' && <TopAiring />}
        {selected === 'topUpcoming' && <TopUpcoming />}
        {selected === 'topMovies' && <TopMovies />}
        {selected === 'mostPopular' && <PopularAnimes />}
        {selected === 'mostFavorite' && <FavoriteAnimes />}
      </div>
    </div>
  );
}
