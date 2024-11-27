// types/artwork.ts

// Artwork display types
export enum ArtworkDisplayType {
  FullScreen = 1,
  SplitScreenTextLeft = 2,
  FullScreenWithOverlay = 3,
  // FullScreenWithRawText = 4,
  // FullScreenWithBlackText = 5,
}

export interface Artwork {
  id: string;
  year: number;
  imageUrl: string;
  title: string;
  type: ArtworkDisplayType;
  descriptionPath?: string; // Path to markdown description
  style?: ArtworkStyle;
}

export interface ArtworkStyle {
  textPlacement?: 'top-left' | 'top-center' | 'top-right' | 'center' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  textColor?: string;
  bgOpacity?: number;
  // Add other style properties as needed
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