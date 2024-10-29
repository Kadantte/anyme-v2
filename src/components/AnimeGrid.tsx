export default function AnimeGrid({ data }: any) {
  return (
    <>
      {data?.data.map((anime: any, index: number) => (
        <div
          key={`${anime.mal_id}-${index}`}
          className="bg-red-500 h-[250px] w-full"
          style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}
        >
          {anime.title}
        </div>
      ))}
    </>
  );
}
