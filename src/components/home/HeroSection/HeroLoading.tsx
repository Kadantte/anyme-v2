import { Skeleton } from '@/components/ui/skeleton';

export default function HeroLoading() {
  return (
    <section className="bg-neutral-400 h-screen w-full animate-pulse px-4">
      <div className="flex flex-col justify-center items-center md:items-start h-full w-full gap-y-4">
        <Skeleton className="h-12 w-[50%] md:w-[25%] bg-neutral-800 rounded-lg" />
        <Skeleton className="h-16 w-[90%] md:w-[75%] bg-neutral-800 rounded-lg" />
        <Skeleton className="h-40 w-[90%] md:w-[75%] bg-neutral-800 rounded-lg" />
        <div className="flex items-center justify-center md:justify-normal gap-x-8 w-full">
          <Skeleton className="h-12 w-[50%] md:w-[25%] bg-neutral-800 rounded-lg" />
          <Skeleton className="h-12 w-[50%] md:w-[25%] bg-neutral-800 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
