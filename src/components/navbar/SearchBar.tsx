import { Command, CommandInput, CommandList } from '@/components/ui/command';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Search } from 'lucide-react';
import Image from 'next/image';

export default function SearchBar() {
  return (
    <Dialog>
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
          />
          <CommandList className="border-t border-neutral-700 px-2 max-h-[400px] overflow-y-auto pb-2">
            <div>
              <span className="text-[0.7rem] text-neutral-600">
                Search results for
              </span>
              <div className="flex flex-col gap-y-1">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-x-2">
                    <Image
                      src="/img.jpg"
                      alt="anime"
                      width={100}
                      height={100}
                      className="h-[50px] w-[80px] object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-[0.9rem] text-neutral-300">
                        Jujutsu Kaisen
                      </h2>
                      <h3 className="text-[0.7rem] text-neutral-400">
                        (TV, 2024)
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
