export interface Artwork {
  id: string;
  year: number;
  imageUrl: string;
  title: string;
}

export interface ArtworkState {
  artworks: Artwork[];
  currentIndex: number;
  selectedYear: number | null;
}

export interface ArtworkHookReturn {
  artworks: Artwork[];
  currentIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
  currentArtwork: Artwork | undefined;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface FloatingMenuProps {
  years: number[];
  selectedYear: number | null;
  onYearSelect: (year: number | null) => void;
}

export interface NavigationArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  showPrev: boolean;
  showNext: boolean;
}

export interface HeroSectionProps {
  artwork: Artwork;
}