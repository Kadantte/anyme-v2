'use client';

import { getDetailAnimeCharacters } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import MoreLikeLoading from '../MoreLikeThisSection.tsx/MoreLikeLoading';

export default function CharacterSection({
  params,
}: {
  params: { id: number };
}) {
  const {
    data: charaList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['getDetailAnimeChara', params.id],
    queryFn: () => getDetailAnimeCharacters(params.id),
  });

  if (isLoading) return <MoreLikeLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="bg-neutral-950 pt-8 md:pt-12">
      <div className="wrapper">
        <h1 className="text-neutral-50 text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold border-l-4 border-violet-500 pl-2 md:pl-3 lg:pl-4">
          Characters
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 mt-3 md:mt-4 lg:mt-5">
          {charaList?.data.slice(0, 25).map((chara: any) => (
            <div
              key={chara.character.mal_id}
              style={{
                backgroundImage: `url(${chara.character.images.jpg.image_url})`,
              }}
              className="relative h-[220px] md:h-[320px] w-full bg-center bg-cover bg-no-repeat rounded-xl overflow-hidden"
            >
              <div className="absolute h-full w-full bg-gradient-to-t from-neutral-900 via-transparent top-0" />
              <div className="relative h-full flex flex-col justify-between p-2">
                <span
                  className={`w-fit ${
                    chara.role === 'Main'
                      ? 'bg-gradient-to-r from-green-600/90 to-lime-600/90'
                      : 'bg-gradient-to-r from-yellow-600/90 to-amber-600/90'
                  }  px-2 py-1 rounded-lg text-neutral-200 text-[1rem]`}
                >
                  {chara.role}
                </span>
                <h2 className="text-neutral-200 text-[1rem]">
                  {chara.character.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
