'use client';

import { getHeroes } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import HeroContent from './HeroContent';
import { IndicatorButton, SliderButton } from './HeroIndicator';
import HeroLoading from './HeroLoading';

export default function HeroSection() {
  const {
    data: heroList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['heroes'],
    queryFn: getHeroes,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex
      ? heroList?.data.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextIndex = useCallback(() => {
    const isLastIndex = currentIndex === heroList?.data.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, heroList?.data.length]);

  const handleSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextIndex();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, nextIndex]);

  if (isLoading) return <HeroLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <SliderButton prevIndex={prevIndex} nextIndex={nextIndex} />
      <IndicatorButton
        heroList={heroList}
        currentIndex={currentIndex}
        handleSlide={handleSlide}
      />
      <HeroContent heroList={heroList} currentIndex={currentIndex} />
    </section>
  );
}
