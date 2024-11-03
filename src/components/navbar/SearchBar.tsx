import { Command, CommandInput, CommandList } from '@/components/ui/command';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { getAnimeSearch } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar() {
  const [query, setQuery] = useState<string>('');

  const {
    data: searchAnimeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['search', query],
    queryFn: () => getAnimeSearch(query),
  });

  const handleSearch = useDebouncedCallback((q: string) => {
    setQuery(q);
    console.log(q);
  }, 500);

  return (
    <Dialog onOpenChange={() => setQuery('')}>
      <DialogTrigger className="text-neutral-200 hover:text-neutral-50">
        <Search className="size-6" />
      </DialogTrigger>
      <DialogContent className="w-[50%] flex flex-col bg-gradient-to-tl from-neutral-900 via-neutral-900 to-neutral-800 border-none">
        <DialogHeader>
          <DialogTitle className="text-[1.5rem] font-bold text-neutral-50">
            Search
          </DialogTitle>
          <DialogDescription className="text-[1rem] text-neutral-300">
            Discover anime by title
          </DialogDescription>
        </DialogHeader>
        <Command className="bg-neutral-950 border border-neutral-700">
          <CommandInput
            placeholder="Type a command or search..."
            className="placeholder:text-neutral-400 text-neutral-200"
            onChangeCapture={(e) =>
              handleSearch((e.target as HTMLInputElement).value)
            }
          />
          <CommandList className="border-t border-neutral-700 px-2 max-h-[400px] overflow-y-auto pb-2">
            <div>
              <span className="text-[0.7rem] text-neutral-600">
                Search results for{' '}
                <span className="font-bold text-neutral-200">{query}</span>
              </span>
              <div className="flex flex-col gap-y-1 pt-1">
                {isLoading && (
                  <span className="text-[0.9rem] text-neutral-300">
                    loading...
                  </span>
                )}
                {error && (
                  <span className="text-[0.9rem] text-neutral-300">
                    {error.message}
                  </span>
                )}
                {query === '' ? (
                  <span className="text-[0.9rem] text-neutral-300">
                    Type something to search
                  </span>
                ) : searchAnimeList?.data.length === 0 ? (
                  <span className="text-[0.9rem] text-neutral-300">
                    no results
                  </span>
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
                        <h2 className="text-[0.9rem] text-neutral-300">
                          {search.title}
                        </h2>
                        <h3 className="text-[0.7rem] text-neutral-400">
                          ({search.type},{' '}
                          {search.year === null ? '??' : search.year})
                        </h3>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
