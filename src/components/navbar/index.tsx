'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa6';
import NavAnime from './NavAnime';
import SearchBar from './SearchBar';

export default function Navbar() {
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
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
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
            <h1 className="text-[1.4rem] font-bold text-neutral-50">AnyMe.</h1>
            <Link
              href="/"
              className="text-neutral-200 text-[1rem] font-medium hover:text-neutral-50"
            >
              Home
            </Link>
            <NavAnime />
            <Link
              href="/seasons"
              className="text-neutral-200 text-[1rem] font-medium hover:text-neutral-50"
            >
              Seasons
            </Link>
            <Link
              href="/signin"
              className="text-neutral-200 text-[1rem] font-medium hover:text-neutral-50"
            >
              Sign In
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <SearchBar />
            <div className="text-neutral-200 hover:text-neutral-50">
              <FaGithub className="size-6" />
            </div>
            <div className="text-neutral-200 hover:text-neutral-50">
              <BsFillMoonStarsFill className="size-5" />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
