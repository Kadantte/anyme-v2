import GenreContentSection from '@/components/genre/GenreContentSection';
import GenreTitleSection from '@/components/genre/GenreTitleSection';

export default function AnimeByGenrePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <section className="bg-neutral-950 pb-4 pt-[70px]">
        <div className="wrapper">
          <GenreTitleSection params={params} />
          <GenreContentSection params={params} />
        </div>
      </section>
    </div>
  );
}
