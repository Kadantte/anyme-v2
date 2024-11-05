import { generatePageNumbers } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div
      className={`w-full flex justify-center items-center gap-x-4 ${margin}`}
    >
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`text-neutral-200 size-9 place-items-center rounded-lg transition-all duration-300 ease-in-out ${
          currentPage === 1
            ? 'bg-violet-950'
            : 'bg-violet-700 hover:bg-violet-600'
        }`}
      >
        <ChevronLeft className="size-6" />
      </button>
      <div className="flex items-center gap-x-1">
        {generatePageNumbers(totalPages, currentPage).map((pageNum, index) =>
          pageNum === '...' ? (
            <span
              key={'elip' + index}
              className="text-neutral-200 text-[2rem] cursor-default"
            >
              ...
            </span>
          ) : (
            <button
              key={'num' + pageNum}
              onClick={() => handlePageChange(Number(pageNum))}
              className={`text-neutral-200 size-9 place-items-center rounded-lg transition-all duration-300 ease-in-out ${
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
        className={`text-neutral-200 size-9 place-items-center rounded-lg transition-all duration-300 ease-in-out ${
          currentPage === totalPages
            ? 'bg-violet-950'
            : 'bg-violet-700 hover:bg-violet-600'
        }`}
      >
        <ChevronRight className="size-6" />
      </button>
    </div>
  );
}
