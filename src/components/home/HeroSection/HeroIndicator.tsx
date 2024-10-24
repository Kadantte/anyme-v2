import { useEffect } from 'react';

export const HeroIndicator = ({ data, currentHero, setCurrentHero }: any) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev: number) =>
        prev === (data.data.length || 1) - 1 ? 0 : prev + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [data]);

  const handleIndicatorClick = (index: number) => {
    setCurrentHero(index);
  };

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-30">
      {data.data.map((_: any, index: number) => (
        <span
          key={index}
          onClick={() => handleIndicatorClick(index)}
          className={`cursor-pointer size-2 rounded-full ${
            currentHero === index ? 'bg-neutral-50' : 'bg-neutral-400'
          }`}
        />
      ))}
    </div>
  );
};
