'use client';

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
import SearchBar from '../navbar/SearchBar';
import { FaGithub } from 'react-icons/fa6';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function MobileNavbar() {
  return (
    <section className="md:hidden fixed top-0 left-0 right-0 z-40">
      <div className="wrapper">
        <nav className="flex justify-between items-center py-6">
          <Link href="/" className="text-neutral-50 text-[1.5rem] font-bold">
            AnyMe.
          </Link>
          <div className="flex items-center gap-x-4">
            <SearchBar />
            <Sheet>
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
                      Your go-to anime hub, where you can explore, discover, and
                      track your favorite shows effortlessly.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col pt-4">
                    <Link href="/" className="text-neutral-100 text-[1rem]">
                      Home
                    </Link>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger className="text-neutral-100 text-[1rem] font-normal">
                          Anime
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-y-2 bg-neutral-800 p-2 rounded-lg">
                          <Link
                            href="/"
                            className="text-neutral-100 text-[0.9rem]"
                          >
                            Top Anime
                          </Link>
                          <Link
                            href="/"
                            className="text-neutral-100 text-[0.9rem]"
                          >
                            Top Airing
                          </Link>
                          <Link
                            href="/"
                            className="text-neutral-100 text-[0.9rem]"
                          >
                            Top Upcoming
                          </Link>
                          <Link
                            href="/"
                            className="text-neutral-100 text-[0.9rem]"
                          >
                            Top Movies
                          </Link>
                          <Link
                            href="/"
                            className="text-neutral-100 text-[0.9rem]"
                          >
                            Most Popular
                          </Link>
                          <Link
                            href="/"
                            className="text-neutral-100 text-[0.9rem]"
                          >
                            Most Favorited
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Link
                      href="/"
                      className="text-neutral-100 text-[1rem] pb-1"
                    >
                      Seasons
                    </Link>
                    <Link href="/" className="text-neutral-100 text-[1rem]">
                      Sign In
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="text-neutral-200 hover:text-neutral-50">
                    <FaGithub className="size-6" />
                  </div>
                  <div className="text-neutral-200 hover:text-neutral-50">
                    <BsFillMoonStarsFill className="size-5" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </section>
  );
}
