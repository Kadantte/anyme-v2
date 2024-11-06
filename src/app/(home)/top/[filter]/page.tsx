import TopFilterContentSection from '@/components/top/TopFilterContentSection';
import { getTopAnime } from '@/lib/actions';
import { toTitleCase } from '@/lib/utils';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: {
    filter: string;
  };
}): Promise<Metadata | undefined> {
  const top = await getTopAnime({ filter: params.filter });

  const subtitle: { title: string; subtitle: string }[] = [
    {
      title: 'airing',
      subtitle: 'Top Picks from the Current Anime Season',
    },
    {
      title: 'upcoming',
      subtitle: 'Most Anticipated Upcoming Anime',
    },
    {
      title: 'bypopularity',
      subtitle: 'Popular Series You Will Love to Watch',
    },
    {
      title: 'favorite',
      subtitle: 'All-Time Favorite Anime Picks by Viewers',
    },
  ];

  const metadataSubtitle = subtitle.find(
    (item) => item.title === params.filter
  )?.subtitle;

  if (!top) {
    return {
      title: {
        absolute: '404 - Project not found',
      },
      description: 'Project not found',
    };
  }

  return {
    title:
      params.filter === 'bypopularity'
        ? 'Most Popular'
        : params.filter === 'favorite'
        ? 'Most Favorited'
        : 'Top ' + toTitleCase(params.filter),
    description: metadataSubtitle,
    openGraph: {
      title:
        params.filter === 'bypopularity'
          ? 'Most Popular'
          : params.filter === 'favorite'
          ? 'Most Favorited'
          : 'Top ' + toTitleCase(params.filter),
      description: metadataSubtitle,
      type: 'website',
      locale: 'id_ID',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/top/${params.filter}`,
      siteName: 'AnyMe',
    },
  };
}

export default function TopAnimeByFilterPage({
  params,
}: {
  params: {
    filter: string;
  };
}) {
  return (
    <div>
      <TopFilterContentSection params={{ filter: params.filter }} />
    </div>
  );
}
