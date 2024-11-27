// components/FloatingMenu.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { FloatingMenuProps } from '../types/artwork';

export const FloatingMenu: React.FC<FloatingMenuProps> = ({ years, selectedYear, onYearSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay to allow for easier interaction
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleYearClick = (e: React.MouseEvent, year: number) => {
    e.preventDefault();
    onYearSelect(selectedYear === year ? null : year);

    // Clear timeout if it exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="absolute top-4 right-4 z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 cursor-pointer">
        <Bars3Icon className="w-6 h-6" />
      </div>
      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden 
                      animate-fade-in-down"
        >
          {years.map((year) => (
            <button
              key={year}
              onClick={(e) => handleYearClick(e, year)}
              className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 
                ${selectedYear === year
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              {year}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FloatingMenu;