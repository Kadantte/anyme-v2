'use client';

import Link from 'next/link';
import SearchBar from '../navbar/SearchBar';
import MenuBar from './MenuBar';
import { useEffect, useState } from 'react';

export default function MobileNavbar() {
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
      className={`md:hidden fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
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
          <Link href="/" className="text-neutral-50 text-[1.5rem] font-bold">
            AnyMe.
          </Link>
          <div className="flex items-center gap-x-4">
            <SearchBar />
            <MenuBar />
          </div>
        </nav>
      </div>
    </section>
  );
}
