import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { navAnimeList } from '../navbar/NavAnime';

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={handleOpen}>
      <SheetTrigger className="text-neutral-200">
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="w-[90%] h-full flex flex-col justify-between bg-neutral-900 border-none px-4 py-6"
      >
        <div>
          <SheetHeader>
            <SheetTitle className="text-[1.5rem] font-bold text-neutral-50 text-start">
              AnyMe.
            </SheetTitle>
            <SheetDescription className="text-[0.8rem] text-neutral-300 text-start text-pretty border-b border-neutral-700 pb-4">
              Your go-to anime hub, where you can explore, discover, and track
              your favorite shows effortlessly.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col pt-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-neutral-100 text-[1rem] ${
                pathname === '/' ? 'text-violet-500' : ''
              }`}
            >
              Home
            </Link>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="text-neutral-100 text-[1rem] font-normal">
                  Anime
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-y-2 bg-neutral-800 p-2 rounded-lg">
                  {navAnimeList.map(({ href, label }, index: number) => (
                    <Link
                      key={index}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`text-neutral-100 text-[0.9rem] ${
                        pathname === href ? 'bg-violet-700 p-2 rounded-lg' : ''
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="/bookmark"
              onClick={() => setIsOpen(false)}
              className={`text-neutral-100 text-[1rem] ${
                pathname === '/bookmark' ? 'text-violet-500' : ''
              }`}
            >
              Bookmark
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Link
            onClick={() => setIsOpen(false)}
            href={'https://github.com/rfkyalf/anyme-v2'}
            title="anyme github repo"
            className="text-neutral-200 hover:text-neutral-50"
          >
            <FaGithub className="size-6" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
