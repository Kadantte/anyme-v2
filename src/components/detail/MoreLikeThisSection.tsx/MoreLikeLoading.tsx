import { Skeleton } from '@/components/ui/skeleton';

export default function MoreLikeLoading() {
  return (
    <section className="bg-neutral-400 animate-pulse">
      <div className="wrapper py-4 md:py-8">
        <div className="flex flex-col">
          <Skeleton className="w-[70%] md:w-[40%] h-10 bg-neutral-800" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 md:mt-6">
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
      </div>
    </section>
  );
}
