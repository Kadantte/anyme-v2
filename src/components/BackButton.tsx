'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'nextjs-toploader/app';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-x-2 self-start py-2 md:py-4 lg:py-6 text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] group"
    >
      <ChevronLeft className="text-neutral-50 group-hover:-translate-x-2 transition-transform duration-300 ease-in-out" />{' '}
      <span className="text-neutral-50 group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
        Back
      </span>
    </button>
  );
}
