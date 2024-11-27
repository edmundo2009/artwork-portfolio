// components/NavigationArrows.tsx
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { NavigationArrowsProps } from '../types/artwork';

const NavigationArrows: React.FC<NavigationArrowsProps> = ({
  onPrev,
  onNext,
  showPrev,
  showNext
}) => {
  return (
    <>
      {showPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 
            bg-black bg-opacity-50 rounded-full p-2 text-white 
            hover:bg-opacity-75 transition-colors"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>
      )}
      {showNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 
            bg-black bg-opacity-50 rounded-full p-2 text-white 
            hover:bg-opacity-75 transition-colors"
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      )}
    </>
  );
};

export default NavigationArrows;