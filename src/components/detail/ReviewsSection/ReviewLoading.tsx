import { Skeleton } from '@/components/ui/skeleton';

export default function ReviewLoading() {
  return (
    <section className="bg-neutral-400 animate-pulse">
      <div className="wrapper py-8 md:py-12">
        <Skeleton className="h-10 w-[70%] md:w-[40%] lg:w-[25%] bg-neutral-800 mb-4" />
        <Skeleton className="h-96 w-full bg-neutral-800 md:hidden" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <Skeleton className="h-[280px] w-full bg-neutral-800" />
          <Skeleton className="h-[280px] w-full bg-neutral-800" />
          <Skeleton className="h-[280px] w-full bg-neutral-800 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
