// data/artworks.ts
import { Artwork, ArtworkDisplayType } from '../types/artwork';

export const mockArtworks: Artwork[] = [
  {
    id: '1',
    year: 2023,
    imageUrl: '/artwork/2023/2023-1.jpg',
    title: 'Artwork 1',
    type: 1,
    // type: ArtworkDisplayType.FullScreen,
    descriptionPath: '/descriptions/1.md'
  },
  {
    id: '2',
    year: 2023,
    imageUrl: '/artwork/2023/2023-2.jpg',
    title: 'Artwork 2',
    type: 2,
    // type: ArtworkDisplayType.SplitScreenTextLeft,
    descriptionPath: '/descriptions/2.md'
  },
  {
    id: '3',
    year: 2022,
    imageUrl: '/artwork/2022/2022-1.png',
    title: 'Artwork 3',
    type: ArtworkDisplayType.FullScreenWithOverlay,
    descriptionPath: '/descriptions/3.md'
  },
  {
    id: '4',
    year: 2022,
    imageUrl: '/artwork/2022/2022-2.png',
    title: 'Artwork 4',
    type: ArtworkDisplayType.FullScreen,
    // descriptionPath: '/descriptions/4.md'
  },
  {
    id: '5',
    year: 2022,
    imageUrl: '/artwork/2022/2022-3.jpg',
    title: 'Artwork EEE',
    type: ArtworkDisplayType.FullScreen,
    // descriptionPath: '/descriptions/4.md'
  },
  {
    id: '4',
    year: 2021,
    imageUrl: '/artwork/2021//2021-1.png',
    title: 'Artwork AAA',
    type: ArtworkDisplayType.FullScreen,
    // descriptionPath: '/descriptions/4.md'
  },
];

export const getUniqueYears = (artworks: Artwork[]): number[] => {
  const years = artworks.map(artwork => artwork.year);
  return [...new Set(years)].sort((a, b) => b - a);
};