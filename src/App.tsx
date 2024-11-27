// App.tsx
import React, { useState } from 'react';
import { mockArtworks, getUniqueYears } from './data/artworks';
import { useArtworks } from './hooks/useArtworks';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import ArtworkDisplay from './components/ArtworkDisplay';
import NavigationArrows from './components/NavigationArrows';
import FloatingMenu from './components/FloatingMenu';

const ArtworkGallery: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const {
    currentArtwork,
    handlePrev,
    handleNext,
    hasPrev,
    hasNext
  } = useArtworks(selectedYear);
  useKeyboardNavigation(handlePrev, handleNext);

  // const years = getUniqueYears([]); // Import your mock artworks here
    const years = getUniqueYears(mockArtworks);

  if (!currentArtwork) return null;

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Floating Menu for Year Selection */}
      <FloatingMenu
        years={years}
        selectedYear={selectedYear}
        onYearSelect={setSelectedYear}
      />

      {/* Navigation Arrows */}
      <NavigationArrows
        onPrev={handlePrev}
        onNext={handleNext}
        showPrev={hasPrev}
        showNext={hasNext}
      />

      {/* Artwork Display with Dynamic Type */}
      <ArtworkDisplay artwork={currentArtwork} />
    </div>
  );
};

export default ArtworkGallery;