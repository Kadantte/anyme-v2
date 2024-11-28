'use client';

import { useBookmarkAnime } from '@/lib/store';
import BookmarkGrid from './BookmarkGrid';

export default function BookmarkContent() {
  const bookmarks = useBookmarkAnime((state) => state.bookmarks);
  const removeBookmark = useBookmarkAnime((state) => state.removeBookmark);
  return (
    <>
      {bookmarks.length === 0 ? (
        <p className="text-neutral-400 text-[1rem]">
          No bookmarks found, please bookmark some animes.
        </p>
      ) : (
        <BookmarkGrid bookmarks={bookmarks} removeBookmark={removeBookmark} />
      )}
    </>
  );
}
