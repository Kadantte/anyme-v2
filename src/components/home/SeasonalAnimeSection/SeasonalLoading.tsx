import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function SeasonalLoading() {
  return (
    <section className="bg-neutral-400 py-8 md:py-12">
      <div className="wrapper gap-y-4">
        <Skeleton className="h-10 w-[70%] md:w-[40%] lg:w-[25%] bg-neutral-800" />
        <Skeleton className="h-10 w-[30%] md:w-[20%] lg:w-[10%] bg-neutral-800" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-4">
          <Skeleton className="h-80 lg:h-64 w-full bg-neutral-800" />
          <Skeleton className="h-80 lg:h-64 w-full bg-neutral-800 hidden md:block" />
          <Skeleton className="h-80 lg:h-64 w-full bg-neutral-800 hidden md:block" />
          <Skeleton className="h-80 lg:h-64 w-full bg-neutral-800 hidden lg:block" />
          <Skeleton className="h-80 lg:h-64 w-full bg-neutral-800 hidden lg:block" />
          <Skeleton className="h-80 lg:h-64 w-full bg-neutral-800 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
