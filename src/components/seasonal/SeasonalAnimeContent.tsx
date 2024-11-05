'use client';

import { getSeasonalAnime } from '@/lib/actions';
import { toTitleCase } from '@/lib/utils';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
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

  const totalPages = seasonalAnimeList?.totalPage || 1;
  const currentPage = seasonalAnimeList?.currentPage || 1;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];

    // Case 1: total pages <= 4, show all pages
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }

    // Case 2: current page is near the start (first 3 pages)
    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, '...', totalPages);
      return pageNumbers;
    }

    // Case 3: current page is near the end (last 3 pages)
    if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      return pageNumbers;
    }

    // Case 4: current page is in the middle
    pageNumbers.push(1, '...', currentPage, currentPage + 1, '...', totalPages);
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
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`text-neutral-200 py-1 px-2 rounded-lg ${
                currentPage === 1
                  ? 'bg-violet-800/50 cursor-not-allowed'
                  : 'bg-violet-800 hover:bg-violet-700'
              }`}
            >
              <ChevronLeft className="size-6" />
            </button>
            <div className="flex items-center gap-x-2">
              {generatePageNumbers().map((pageNum, index) =>
                pageNum === '...' ? (
                  <span key={`ellipsis-${index}`} className="text-neutral-200">
                    ...
                  </span>
                ) : (
                  <button
                    key={`page-${pageNum}`}
                    onClick={() => handlePageChange(Number(pageNum))}
                    className={`text-neutral-200 py-1 px-2 rounded-lg min-w-[32px] ${
                      currentPage === pageNum
                        ? 'bg-violet-500'
                        : 'bg-violet-800 hover:bg-violet-700'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              )}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`text-neutral-200 py-1 px-2 rounded-lg ${
                currentPage === totalPages
                  ? 'bg-violet-800/50 cursor-not-allowed'
                  : 'bg-violet-800 hover:bg-violet-700'
              }`}
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
