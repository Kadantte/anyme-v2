import DetailAnimeSection from '@/components/detail/DetailAnimeSection';

export default function DetailAnimePage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <div className="relative">
      <DetailAnimeSection params={params} />
    </div>
  );
}
