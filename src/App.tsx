
// App.tsx
import React, { useState } from 'react';
import { mockArtworks, getUniqueYears } from './data/artworks';
import { useArtworks } from './hooks/useArtworks';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import HeroSection from './components/HeroSection';
import NavigationArrows from './components/NavigationArrows';
import FloatingMenu from './components/FloatingMenu';

const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const {
    currentArtwork,
    handlePrev,
    handleNext,
    hasPrev,
    hasNext,
  } = useArtworks(selectedYear);

  useKeyboardNavigation(handlePrev, handleNext);

  const years = getUniqueYears(mockArtworks);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {currentArtwork && (
        <>
          <HeroSection artwork={currentArtwork} />
          <NavigationArrows
            onPrev={handlePrev}
            onNext={handleNext}
            showPrev={hasPrev}
            showNext={hasNext}
          />
          <FloatingMenu
            years={years}
            selectedYear={selectedYear}
            onYearSelect={setSelectedYear}
          />
        </>
      )}
    </div>
  );
};

export default App;