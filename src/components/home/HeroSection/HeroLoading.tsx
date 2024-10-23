import { Skeleton } from '@/components/ui/skeleton';

export default function HeroLoading() {
  return (
    <section className="bg-neutral-400 h-screen w-full animate-pulse px-4 md:px-12 lg:px-20">
      <div className="flex flex-col justify-center h-full w-full gap-y-4">
        <Skeleton className="h-10 w-[60%] md:w-[30%] lg:w-[15%] bg-neutral-800 rounded-lg" />
        <Skeleton className="h-16 bg-neutral-800 rounded-lg" />
        <Skeleton className="h-40 bg-neutral-800 rounded-lg" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 w-full">
          <Skeleton className="h-10 bg-neutral-800 rounded-lg" />
          <Skeleton className="h-10 bg-neutral-800 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
