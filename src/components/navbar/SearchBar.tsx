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
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import SearchBarContent from './SearchBarContent';
import ViewMoreButton from '../ViewMoreButton';

export default function SearchBar() {
  const [query, setQuery] = useState<string>('');

  const {
    data: searchAnimeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['search', query],
    queryFn: () => getAnimeSearch({ q: query }),
    enabled: query !== '',
  });

  const handleSearch = useDebouncedCallback((q: string) => {
    const trimmedQuery = q.trim();
    if (trimmedQuery) {
      setQuery(trimmedQuery);
    }
  }, 500);

  return (
    <Dialog onOpenChange={() => setQuery('')}>
      <DialogTrigger className="text-neutral-200 hover:text-violet-500">
        <Search className="size-5 md:size-6" />
      </DialogTrigger>
      <DialogContent className="w-[90%] md:w-[50%] flex flex-col bg-gradient-to-tl from-neutral-900 via-neutral-900 to-neutral-800 border-none rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-[1.5rem] font-bold text-neutral-50 text-start">
            Search
          </DialogTitle>
          <DialogDescription className="text-[1rem] text-neutral-300 text-start">
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
          <CommandList className="border-t border-neutral-700 px-2 no-scrollbar max-h-[300px] md:max-h-[400px] overflow-y-auto pb-2">
            <div>
              <span className="text-[0.7rem] text-neutral-600">
                Search results for{' '}
                <span className="font-bold text-neutral-200">{query}</span>
              </span>
              <SearchBarContent
                isLoading={isLoading}
                error={error}
                query={query}
                searchAnimeList={searchAnimeList}
              />
            </div>
          </CommandList>
        </Command>
        {searchAnimeList?.data.length > 0 ? (
          <ViewMoreButton
            href={`/search?q=${query}`}
            display="flex !m-0 !text-[1rem]"
            text="View All Results"
          />
        ) : (
          ''
        )}
      </DialogContent>
    </Dialog>
  );
}
