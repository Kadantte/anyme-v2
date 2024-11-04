import GenreContentSection from '@/components/genre/GenreContentSection';
import GenreTitleSection from '@/components/genre/GenreTitleSection';

export default function AnimeByGenrePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { name: string };
}) {
  return (
    <div>
      <section className="bg-neutral-950 pb-4 pt-[70px]">
        <div className="wrapper">
          <GenreTitleSection searchParams={searchParams} />
          <GenreContentSection params={params} />
        </div>
      </section>
    </div>
  );
}
