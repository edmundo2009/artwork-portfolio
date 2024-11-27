
// data/artworks.ts
import { Artwork } from '../types/artwork';

export const mockArtworks: Artwork[] = [
  { id: '1', year: 2023, imageUrl: '/artwork/2023/2023-1.jpg', title: 'Artwork 1' },
  { id: '2', year: 2023, imageUrl: '/artwork/2023/2023-2.jpg', title: 'Artwork 2' },
  { id: '3', year: 2022, imageUrl: '/artwork/2022/2022-1.png', title: 'Artwork 3' },
  { id: '4', year: 2022, imageUrl: '/artwork/2022/2022-2.png', title: 'Artwork ZZZ' },
  { id: '5', year: 2022, imageUrl: '/artwork/2022/2022-3.jpg', title: 'Artwork YYY' },
  { id: '6', year: 2021, imageUrl: '/artwork/2022/2021-1.png', title: 'Artwork XXX' },
];

export const getUniqueYears = (artworks: Artwork[]): number[] => {
  const years = artworks.map(artwork => artwork.year);
  return [...new Set(years)].sort((a, b) => b - a);
};
