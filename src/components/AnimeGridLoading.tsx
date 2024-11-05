import { Skeleton } from './ui/skeleton';

export default function AnimeGridLoading() {
  return (
    <section className="bg-neutral-950">
      <div className="wrapper">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
          {Array.from({ length: 25 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-[230px] md:h-[300px] bg-neutral-800"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
