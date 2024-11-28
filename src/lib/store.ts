import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type BookmarkAnimeProps = {
  mal_id: number;
  title: string;
  images: string;
};

type BookmarkState = {
  bookmarks: BookmarkAnimeProps[];
  addBookmark: (bookmark: BookmarkAnimeProps) => void;
  removeBookmark: (mal_id: number) => void;
};

export const useBookmarkAnime = create<BookmarkState>()(
  persist(
    (set) => ({
      bookmarks: [],
      addBookmark: (bookmark) =>
        set((state) => {
          if (state.bookmarks.some((item) => item.mal_id === bookmark.mal_id)) {
            return state;
          }
          return { bookmarks: [...state.bookmarks, bookmark] };
        }),
      removeBookmark: (mal_id) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((item) => item.mal_id !== mal_id),
        })),
    }),
    {
      name: 'bookmark',
    }
  )
);
