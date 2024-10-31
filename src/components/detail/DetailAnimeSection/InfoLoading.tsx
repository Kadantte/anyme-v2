import { Skeleton } from '../../ui/skeleton';

export default function InfoLoading() {
  return (
    <section className="bg-neutral-950">
      <div className="wrapper py-4 md:py-8">
        <div className="flex flex-col md:flex-row md:gap-x-8">
          <Skeleton className="w-[220px] h-[320px] mx-auto md:mx-0 bg-neutral-800" />
          <div className="md:w-[80%]">
            <Skeleton className="w-full h-10 bg-neutral-800 mt-4 md:mt-0" />
            <div className="flex gap-x-4 mt-4">
              <Skeleton className="w-full h-10 bg-neutral-800" />
              <Skeleton className="w-full h-10 bg-neutral-800" />
              <Skeleton className="w-full h-10 bg-neutral-800" />
            </div>
            <div className="flex gap-x-4 mt-4">
              <Skeleton className="w-full h-10 bg-neutral-800" />
              <Skeleton className="w-full h-10 bg-neutral-800" />
            </div>
            <Skeleton className="w-full h-96 bg-neutral-800 mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
