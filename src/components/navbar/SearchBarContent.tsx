import Image from 'next/image';
import Link from 'next/link';

export default function SearchBarContent({
  isLoading,
  error,
  query,
  searchAnimeList,
}: {
  isLoading: boolean;
  error: any;
  query: string;
  searchAnimeList: any;
}) {
  return (
    <div className="flex flex-col gap-y-1 pt-1">
      {isLoading && (
        <span className="text-[0.9rem] text-neutral-300">loading...</span>
      )}
      {error && (
        <span className="text-[0.9rem] text-neutral-300">{error.message}</span>
      )}
      {query === '' ? (
        <span className="text-[0.9rem] text-neutral-300">
          Type something to search
        </span>
      ) : searchAnimeList?.data.length === 0 ? (
        <span className="text-[0.9rem] text-neutral-300">no results</span>
      ) : (
        searchAnimeList?.data.map((search: any) => (
          <Link
            href={`/detail/${search.mal_id}`}
            key={search.mal_id}
            className="flex items-center gap-x-2"
          >
            <Image
              src={search.images.webp.large_image_url}
              alt={search.title}
              width={1000}
              height={1000}
              className="min-h-[50px] min-w-[50px] w-[50px] h-[50px] object-cover rounded-lg"
            />
            <div>
              <h2 className="text-[0.9rem] text-neutral-300">{search.title}</h2>
              <h3 className="text-[0.7rem] text-neutral-400">
                ({search.type}, {search.year === null ? '??' : search.year})
              </h3>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
