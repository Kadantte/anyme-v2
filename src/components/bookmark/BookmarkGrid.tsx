import { BookmarkAnimeProps } from '@/lib/store';
import { toSlug } from '@/lib/utils';
import { BookmarkX } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BookmarkGrid({
  bookmarks,
  removeBookmark,
}: {
  bookmarks: BookmarkAnimeProps[];
  removeBookmark: (mal_id: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4 py-4">
      {bookmarks.map((bookmark) => (
        <div key={bookmark.mal_id} className="relative flex flex-col gap-y-2">
          <button
            onClick={() => removeBookmark(bookmark.mal_id)}
            className="absolute top-2 right-2 bg-red-800 hover:bg-red-700 p-1 rounded-lg"
          >
            <BookmarkX className="size-5 text-neutral-100" />
          </button>
          <Image
            src={bookmark.images}
            alt={bookmark.title}
            width={300}
            height={300}
            className="w-full h-[240px] object-cover rounded-xl"
          />
          <Link
            href={`/detail/${bookmark.mal_id}?title=${toSlug(bookmark.title)}`}
            className="text-neutral-100 text-[1rem] hover:underline"
          >
            {bookmark.title.length > 20
              ? bookmark.title.slice(0, 20) + '...'
              : bookmark.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
