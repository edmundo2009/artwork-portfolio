import React, { useState, useRef, useEffect } from 'react';
import { FloatingMenuProps } from '@/types/artwork';

export const FloatingMenu: React.FC<FloatingMenuProps> = ({ years, selectedYear, onYearSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<number | null>(null);

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
      <button
        ref={buttonRef}
        className="flex items-center gap-2 px-3 py-2 
                   bg-gray-800 text-white 
                   rounded-lg shadow-md 
                   hover:bg-gray-700 
                   transition-colors duration-200 
                   focus:outline-none focus:ring-2 focus:ring-gray-600"
      >
        Complete Works
      </button>

      {isOpen && (
        <div
          style={{ width: buttonRef.current ? buttonRef.current.offsetWidth : 'auto' }}
          className="absolute top-full right-0 mt-2 
                     bg-gray-800 text-white 
                     rounded-lg shadow-lg 
                     overflow-hidden 
                     border border-gray-700 
                     animate-fade-in-down"
        >
          {years.map((year) => (
            <button
              key={year}
              onClick={(e) => handleYearClick(e, year)}
              className={`block w-full text-left px-3 py-2 text-sm 
                          transition-colors duration-200 
                          ${selectedYear === year
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
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