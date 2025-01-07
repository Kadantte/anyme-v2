'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import NavAnime from './NavAnime';
import SearchBar from './SearchBar';

export default function Navbar() {
  const pathname = usePathname();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={`hidden md:block fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScroll
          ? 'bg-neutral-950/60 bg-clip-padding backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100 shadow shadow-neutral-950'
          : ''
      }`}
    >
      <div className="wrapper">
        <nav
          className={`flex justify-between items-center transition-[padding] duration-300 ${
            isScroll ? 'py-4' : 'py-6'
          }`}
        >
          <div className="flex items-center gap-x-8">
            <Link href="/" className="text-[1.4rem] font-bold text-neutral-50">
              AnyMe.
            </Link>
            <Link
              href="/"
              className={`text-neutral-200 text-[1rem] font-medium hover:text-violet-500 ${
                pathname === '/' ? 'text-violet-500' : ''
              }`}
            >
              Home
            </Link>
            <NavAnime />

            <Link
              href="/bookmark"
              className={`text-neutral-200 text-[1rem] font-medium hover:text-violet-500 ${
                pathname === '/bookmark' ? 'text-violet-500' : ''
              }`}
            >
              Bookmark
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <SearchBar />
            <Link
              href={'https://github.com/rfkyalf/anyme-v2'}
              title="anyme github repo"
              className="text-neutral-200 hover:text-violet-500"
            >
              <FaGithub className="size-6" />
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}
