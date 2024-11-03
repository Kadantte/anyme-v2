import TopFilterContentSection from '@/components/top/TopFilterContentSection';

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
