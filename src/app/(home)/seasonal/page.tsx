import SeasonalAnimeContent from '@/components/seasonal/SeasonalAnimeContent';

export const metadata = {
  title: 'Seasonal Anime',
  description: 'Must-Watch Anime of the Current Season',
  openGraph: {
    description: 'Must-Watch Anime of the Current Season',
  },
};

export default function SeasonalAnimePage() {
  return (
    <>
      <SeasonalAnimeContent />
    </>
  );
}
