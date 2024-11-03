import { genreList } from '@/lib/consts';

export default function GenreTitleSection({
  params,
}: {
  params: { id: string };
}) {
  const genre = genreList.find((genre) => genre.mal_id === parseInt(params.id));

  return (
    <h1 className="text-neutral-50 font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] mb-4">
      Showing Results for {genre ? genre.name : 'Unknown Genre'}:
    </h1>
  );
}
