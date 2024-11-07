// import { getProjects } from '@/lib/data';
import { getAnimes, getGenres } from '@/lib/actions';
import { topFilterList } from '@/lib/consts';
import { toSlug } from '@/lib/utils';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const detailAnime = await getAnimes();
  const detailAnimeUrl = detailAnime.data.map((detail: any) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}detail/${
      detail.mal_id
    }?title=${toSlug(detail.title)}`,
    lastModified: new Date(),
  }));

  const genres = await getGenres();
  const genresUrl = genres.data.map((genre: any) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}genre/${
      genre.mal_id
    }?name=${toSlug(genre.name)}`,
    lastModified: new Date(),
  }));

  const topFilterUrl = topFilterList.map((filter) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}top/${filter}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}seasonal`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}top/anime`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}top/character`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}top/movie`,
      lastModified: new Date(),
    },
    ...genresUrl,
    ...topFilterUrl,
    ...detailAnimeUrl,
  ];
}
