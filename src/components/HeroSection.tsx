//components/HeroSection.tsx
import React from 'react';
import { Artwork } from '../types/artwork';

interface HeroSectionProps {
  artwork: Artwork;
}

const HeroSection: React.FC<HeroSectionProps> = ({ artwork }) => {
  return (
    <div className="w-full h-full">
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
        {artwork.title} ({artwork.year})
      </div>
    </div>
  );
};

export default HeroSection;

