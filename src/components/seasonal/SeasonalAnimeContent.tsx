'use client';

import { getSeasonalAnime } from '@/lib/actions';
import { toTitleCase } from '@/lib/utils';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SetStateAction, useState } from 'react';
import AnimeGrid from '../AnimeGrid';
import AnimeGridLoading from '../AnimeGridLoading';
import TopHeroSection from '../top/TopHeroSection';

export default function SeasonalAnimeContent() {
  const [page, setPage] = useState(1);

  const {
    data: seasonalAnimeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['seasonalAnime', page],
    queryFn: () => getSeasonalAnime(page),
    placeholderData: keepPreviousData,
  });

  const currentSeasonData = seasonalAnimeList?.data[0];
  const seasonName = currentSeasonData?.season || '??';
  const seasonYear = currentSeasonData?.year || '??';

  const topHeroImage = currentSeasonData?.trailer.images.maximum_image_url;

  const totalPage = seasonalAnimeList?.totalPage || 1;

  const handlePageChange = (newPage: SetStateAction<number>) => {
    setPage(newPage);
  };

  // Generate an array of pages to display in pagination
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, page - 2); // Show 2 pages before the current page
    const endPage = Math.min(totalPage, page + 2); // Show 2 pages after the current page

    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) pageNumbers.push('...');
    }

    // Add page numbers around the current page
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Add last page and ellipsis if needed
    if (endPage < totalPage) {
      if (endPage < totalPage - 1) pageNumbers.push('...');
      pageNumbers.push(totalPage);
    }

    return pageNumbers;
  };

  return (
    <div>
      <TopHeroSection
        topHeroImage={topHeroImage}
        heroTitle="Seasonal Spotlight"
        heroSubtitle={`Catch the most anticipated anime of the 
        ${toTitleCase(seasonName)} ${seasonYear}`}
      />
      <section className="bg-neutral-950 pb-4">
        <div className="wrapper">
          {isLoading && <AnimeGridLoading />}
          {error && <p>{error.message}</p>}
          <AnimeGrid data={seasonalAnimeList} />
          <div className="w-full flex justify-between items-center mt-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="text-neutral-200 bg-violet-800 py-1 px-2 rounded-lg"
            >
              <ChevronLeft className="size-6" />
            </button>
            {/* Page Numbers */}
            <div className="flex items-center gap-x-2">
              {generatePageNumbers().map((pageNum: any, index) =>
                pageNum === '...' ? (
                  <span key={index} className="text-neutral-200">
                    ...
                  </span>
                ) : (
                  <button
                    key={index}
                    onClick={() => handlePageChange(pageNum)}
                    className={`text-neutral-200 py-1 px-2 rounded-lg ${
                      page === pageNum ? 'bg-violet-500' : 'bg-violet-800'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              )}
            </div>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="text-neutral-200 bg-violet-800 py-1 px-2 rounded-lg"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
