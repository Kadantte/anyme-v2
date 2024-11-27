import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SliderButton = ({
  prevIndex,
  nextIndex,
}: {
  prevIndex: () => void;
  nextIndex: () => void;
}) => {
  return (
    <div className="w-full h-full absolute z-20 hidden lg:flex justify-between items-center">
      <button aria-label="prev" title="prev" onClick={prevIndex}>
        <ChevronLeft className="size-10 text-neutral-500 hover:text-neutral-200 transition-colors duration-300 ease-in-out ml-0 xl:ml-2 pointer-events-auto" />
      </button>
      <button aria-label="next" title="next" onClick={nextIndex}>
        <ChevronRight className="size-10 text-neutral-500 hover:text-neutral-200 transition-colors duration-300 ease-in-out mr-0 xl:mr-2" />
      </button>
    </div>
  );
};

export const IndicatorButton = ({
  heroList,
  currentIndex,
  handleSlide,
}: {
  heroList: any;
  currentIndex: number;
  handleSlide: (index: number) => void;
}) => {
  return (
    <div className="absolute z-30 bottom-0 left-1/2 -translate-x-1/2 flex gap-x-2 pb-6">
      {heroList?.data.map((_: any, index: number) => (
        <button
          aria-label={`indicator ${index}`}
          title={`indicator ${index}`}
          key={index}
          onClick={() => handleSlide(index)}
          className={`size-[8px] md:size-[10px] rounded-full pointer-events-auto hover:bg-neutral-200 transition-colors duration-300 ease-in-out ${
            currentIndex === index ? 'bg-neutral-200' : 'bg-neutral-500'
          }`}
        />
      ))}
    </div>
  );
};
