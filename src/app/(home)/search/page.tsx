import SearchContent from '@/components/search/SearchContent';
import { toTitleCase } from '@/lib/utils';
import { Metadata } from 'next';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { q: string };
}): Promise<Metadata | undefined> {
  return {
    title: `Search - ${toTitleCase(searchParams.q)}`,
    description: `Search results for ${toTitleCase(searchParams.q)}`,
    openGraph: {
      title: `Search - ${toTitleCase(searchParams.q)}`,
      description: `Search results for ${toTitleCase(searchParams.q)}`,
      type: 'website',
      locale: 'id_ID',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/search?q=${searchParams.q}`,
      siteName: 'AnyMe',
    },
  };
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  return (
    <div className="bg-neutral-950 pb-4 pt-[70px]">
      <div className="wrapper">
        <div>
          <h1 className="text-neutral-50 font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] mb-4">
            Show results for {toTitleCase(searchParams.q)}:
          </h1>
        </div>
        <SearchContent searchParams={searchParams} />
      </div>
    </div>
  );
}
