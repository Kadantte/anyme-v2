import GenreContentSection from '@/components/genre/GenreContentSection';
import GenreTitleSection from '@/components/genre/GenreTitleSection';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { name: string };
}): Promise<Metadata | undefined> {
  return {
    title: searchParams.name,
    description: `${searchParams.name} Anime List`,
    openGraph: {
      title: searchParams.name,
      description: `${searchParams.name} Anime List`,
      type: 'website',
      locale: 'id_ID',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/genre/${params.id}?name=${searchParams.name}`,
      siteName: 'AnyMe',
    },
  };
}

export default function AnimeByGenrePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { name: string };
}) {
  if (isNaN(Number(params.id))) return notFound();
  if (!searchParams.name) return notFound();

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
