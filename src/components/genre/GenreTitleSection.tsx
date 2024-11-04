import { toTitleCase } from '@/lib/utils';

export default function GenreTitleSection({
  searchParams,
}: {
  searchParams: { name: string };
}) {
  return (
    <h1 className="text-neutral-50 font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] mb-4">
      Showing Results for {toTitleCase(searchParams.name) || '??'}:
    </h1>
  );
}
