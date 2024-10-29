import { Skeleton } from './ui/skeleton';

export default function AnimeGridLoading() {
  return (
    <section className="animate-pulse">
      <div className="wrapper">
        <div className="bg-neutral-400 p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <Skeleton className="w-full h-[220px] bg-neutral-800" />
          <Skeleton className="w-full h-[220px] bg-neutral-800" />
          <Skeleton className="w-full h-[220px] bg-neutral-800" />
          <Skeleton className="w-full h-[220px] bg-neutral-800" />
          <Skeleton className="w-full h-[220px] bg-neutral-800" />
          <Skeleton className="w-full h-[220px] bg-neutral-800" />
          <Skeleton className="w-full h-[220px] bg-neutral-800" />
          <Skeleton className="w-full h-[220px] bg-neutral-800" />
          <Skeleton className="w-full h-[220px] bg-neutral-800" />
          <Skeleton className="w-full h-[220px] bg-neutral-800" />
          <Skeleton className="w-full h-[220px] bg-neutral-800" />
          <Skeleton className="w-full h-[220px] bg-neutral-800" />
        </div>
      </div>
    </section>
  );
}
