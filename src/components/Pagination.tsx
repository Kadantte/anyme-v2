import { generatePageNumbers } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, KeyboardEvent, ChangeEvent } from 'react';

export default function Pagination({
  currentPage,
  totalPages,
  setPage,
  margin,
}: {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
  margin?: string;
}) {
  const [jumpToPage, setJumpToPage] = useState<string>('');

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleJumpToPage = () => {
    const pageNumber = parseInt(jumpToPage);
    if (!isNaN(pageNumber)) {
      handlePageChange(pageNumber);
      setJumpToPage('');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setJumpToPage(value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleJumpToPage();
    }
  };

  return (
    <div
      className={`w-full flex flex-col md:flex-row items-center justify-center gap-y-2 gap-x-8 ${margin}`}
    >
      <div className={`flex items-center gap-x-2 md:gap-x-4`}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`text-neutral-200 size-8 md:size-9 place-items-center rounded-lg transition-all duration-300 ease-in-out ${
            currentPage === 1
              ? 'bg-violet-950'
              : 'bg-violet-700 hover:bg-violet-600'
          }`}
        >
          <ChevronLeft className="size-5 md:size-6" />
        </button>
        <div className="flex items-center gap-x-1">
          {generatePageNumbers(totalPages, currentPage).map((pageNum, index) =>
            pageNum === '...' ? (
              <span
                key={'elip' + index}
                className="text-neutral-200 text-[1.5rem] md:text-[2rem] cursor-default"
              >
                ...
              </span>
            ) : (
              <button
                key={'num' + pageNum}
                onClick={() => handlePageChange(Number(pageNum))}
                className={`text-neutral-200 text-[0.8rem] md:text-[1rem] size-8 md:size-9 place-items-center rounded-lg transition-all duration-300 ease-in-out ${
                  currentPage === Number(pageNum)
                    ? 'border border-violet-700 bg-violet-700'
                    : 'border border-violet-700 hover:bg-violet-700'
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
          className={`text-neutral-200 size-8 md:size-9 place-items-center rounded-lg transition-all duration-300 ease-in-out ${
            currentPage === totalPages
              ? 'bg-violet-950'
              : 'bg-violet-700 hover:bg-violet-600'
          }`}
        >
          <ChevronRight className="size-5 md:size-6" />
        </button>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="text"
          inputMode="numeric"
          value={jumpToPage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="size-8 md:size-9 text-[0.8rem] md:text-[1rem] text-center bg-neutral-900 text-neutral-200 rounded-lg focus:outline-none focus:border focus:border-violet-700"
          placeholder={currentPage.toString()}
        />
        <button
          onClick={handleJumpToPage}
          className="size-8 md:size-9 text-[0.8rem] md:text-[1rem] bg-violet-700 hover:bg-violet-600 text-neutral-200 rounded-lg disabled:bg-violet-950 disabled:cursor-not-allowed"
          disabled={
            !jumpToPage ||
            Number(jumpToPage) < 1 ||
            Number(jumpToPage) > totalPages
          }
        >
          Go
        </button>
      </div>
    </div>
  );
}
