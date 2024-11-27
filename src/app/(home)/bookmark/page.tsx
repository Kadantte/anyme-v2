'use client';

import { useBookmarkAnime } from '@/lib/store';
import { toSlug } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function BookmarkPage() {
  const bookmarks = useBookmarkAnime((state) => state.bookmarks);

  return (
    <main className="min-h-screen bg-neutral-950">
      <div className="wrapper py-20">
        <h1 className="text-neutral-50 font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">
          Bookmarked Animes
        </h1>
        {bookmarks.length === 0 ? (
          <p className="text-neutral-400 text-[1rem]">
            No bookmarks found, please bookmark some animes.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-4">
            {bookmarks.map((bookmark) => (
              <div key={bookmark.mal_id} className="flex flex-col gap-y-2">
                <Image
                  src={bookmark.images}
                  alt={bookmark.title}
                  width={300}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <Link
                  href={`/detail/${bookmark.mal_id}?title=${toSlug(
                    bookmark.title
                  )}`}
                  className="text-neutral-100 text-[1rem] hover:underline"
                >
                  {bookmark.title.length > 20
                    ? bookmark.title.slice(0, 20) + '...'
                    : bookmark.title}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
