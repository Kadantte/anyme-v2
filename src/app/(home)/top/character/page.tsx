'use client';

import TopCharacterContent from '@/components/home/TopCharacter/TopCharacterContent';
import TopHeroSection from '@/components/top/TopHeroSection';
import { getTopCharacter } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export default function TopCharacterPage() {
  const {
    data: topCharacterList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['topCharacter'],
    queryFn: getTopCharacter,
  });

  return (
    <div>
      <TopHeroSection
        topHeroImage="/top-chara.png"
        heroTitle="Top Characters"
        heroSubtitle="Fan-Favorite Anime Characters"
      />
      <section className="bg-neutral-950 pb-4">
        <div className="wrapper -mt-3 md:-mt-4">
          <TopCharacterContent topCharacterList={topCharacterList} />
        </div>
      </section>
    </div>
  );
}
