//components/NavigationArrows.tsx
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface NavigationArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  showPrev: boolean;
  showNext: boolean;
}

const NavigationArrows: React.FC<NavigationArrowsProps> = ({ onPrev, onNext, showPrev, showNext }) => {
  return (
    <>
      {showPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronLeftIcon className="w-10 h-10" />
        </button>
      )}
      {showNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronRightIcon className="w-10 h-10" />
        </button>
      )}
    </>
  );
};

export default NavigationArrows;

