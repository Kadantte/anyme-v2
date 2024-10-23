import DetailAnime from '@/components/Info';

export default async function DetailAnimePage({
  params,
}: {
  params: { id: number };
}) {
  return <DetailAnime params={params} />;
}
