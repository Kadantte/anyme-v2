import { Skeleton } from '../../ui/skeleton';

export default function InfoLoading() {
  return (
    <>
      {/* Mobile */}
      <div className="w-full bg-neutral-400 p-4 space-y-4 animate-pulse md:hidden">
        <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
        <Skeleton className="h-[340px] w-[250px] bg-neutral-800 rounded-lg mx-auto" />
        <Skeleton className="h-20 w-full bg-neutral-800 rounded-lg" />
        <div className="grid grid-cols-3 gap-x-4">
          <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
          <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
          <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <Skeleton className="h-14 w-full bg-neutral-800 rounded-lg" />
          <Skeleton className="h-14 w-full bg-neutral-800 rounded-lg" />
        </div>
        <Skeleton className="h-96 w-full bg-neutral-800 rounded-lg" />
        <Skeleton className="h-96 w-full bg-neutral-800 rounded-lg" />
      </div>

      {/* Tablet */}
      <div className="w-full bg-neutral-400 px-12 py-8 hidden md:block lg:hidden space-y-4">
        <div className="grid grid-cols-[0.7fr_1fr]">
          <Skeleton className="h-[340px] w-[250px] bg-neutral-800 rounded-lg" />
          <div className="flex flex-col w-full gap-y-6">
            <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
            <Skeleton className="h-20 w-full bg-neutral-800 rounded-lg" />
            <div className="grid grid-cols-3 gap-x-4">
              <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
              <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
              <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
              <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
            </div>
            <Skeleton className="h-96 w-full bg-neutral-800 rounded-lg" />
          </div>
        </div>
        <Skeleton className="h-[500px] w-full bg-neutral-800 rounded-lg" />
      </div>

      {/* Desktop */}
      <div className="w-full bg-neutral-400 px-20 py-12 hidden lg:grid grid-cols-[1fr_1.5fr_1fr] gap-x-8">
        <Skeleton className="h-[340px] bg-neutral-800 rounded-lg" />
        <div className="flex flex-col w-full gap-y-6">
          <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
          <Skeleton className="h-20 w-full bg-neutral-800 rounded-lg" />
          <div className="grid grid-cols-3 gap-x-4">
            <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
            <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
            <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
            <Skeleton className="h-10 w-full bg-neutral-800 rounded-lg" />
          </div>
          <Skeleton className="h-96 w-full bg-neutral-800 rounded-lg" />
        </div>
        <Skeleton className="h-[600px] w-full bg-neutral-800 rounded-lg" />
      </div>
    </>
  );
}
