import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formattedNumber = (number: number) =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(number);

export const toSlug = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

export const toTitleCase = (text: string) => {
  return text
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const generatePageNumbers = (
  totalPages: number,
  currentPage: number
) => {
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
