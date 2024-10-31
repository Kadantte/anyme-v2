import { Skeleton } from '@/components/ui/skeleton';

export default function TopCharacterLoading() {
  return (
    <section className="bg-neutral-950 py-8 md:py-12">
      <div className="wrapper">
        <Skeleton className="h-10 w-[70%] md:w-[40%] lg:w-[25%] bg-neutral-800 mb-3 md:mb-4 lg:mb-5" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
          <Skeleton className="w-full h-[230px] md:h-[300px] bg-neutral-800" />
          <Skeleton className="w-full h-[230px] md:h-[300px] bg-neutral-800" />
          <Skeleton className="w-full h-[230px] md:h-[300px] bg-neutral-800" />
          <Skeleton className="w-full h-[230px] md:h-[300px] bg-neutral-800" />
          <Skeleton className="w-full h-[230px] md:h-[300px] bg-neutral-800" />
          <Skeleton className="w-full h-[230px] md:h-[300px] bg-neutral-800" />
          <Skeleton className="w-full h-[230px] md:h-[300px] bg-neutral-800" />
          <Skeleton className="w-full h-[230px] md:h-[300px] bg-neutral-800" />
          <Skeleton className="w-full h-[230px] md:h-[300px] bg-neutral-800" />
          <Skeleton className="w-full h-[230px] md:h-[300px] bg-neutral-800" />
          <Skeleton className="w-full h-[230px] md:h-[300px] bg-neutral-800" />
          <Skeleton className="w-full h-[230px] md:h-[300px] bg-neutral-800" />
        </div>
      </div>
    </section>
  );
}
