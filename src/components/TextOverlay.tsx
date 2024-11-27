// components/TextOverlay.tsx
import { ArtworkStyle } from '@/types/artwork';
import React from 'react';

interface TextOverlayProps {
  style?: ArtworkStyle;
  children: React.ReactNode;
}

const TextOverlay: React.FC<TextOverlayProps> = ({ style, children }) => {
  const getPositionClasses = (placement?: string) => {
    switch (placement) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-center':
        return 'top-4 left-1/2 -translate-x-1/2';
      case 'top-right':
        return 'top-4 right-4';
      case 'center':
        return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-center':
        return 'bottom-4 left-1/2 -translate-x-1/2';
      case 'bottom-right':
        return 'bottom-4 right-4';
      default:
        return 'bottom-4 left-4';
    }
  };

  const getTextColorClass = (color?: string) => {
    if (!color) return 'text-white';
    if (color.startsWith('text-')) return color;
    if (color.includes('-')) return `text-${color}`;
    return `text-${color}-500`;
  };

  const getBackgroundClasses = (bgOpacity?: number) => {
    if (bgOpacity !== undefined && bgOpacity >= 0 && bgOpacity <= 1) {
      // Map continuous opacity values to predefined Tailwind classes
      const opacityMap: { [key: number]: string } = {
        0: 'bg-opacity-0',
        0.1: 'bg-opacity-10',
        0.2: 'bg-opacity-20',
        0.3: 'bg-opacity-30',
        0.4: 'bg-opacity-40',
        0.5: 'bg-opacity-50',
        0.6: 'bg-opacity-60',
        0.7: 'bg-opacity-70',
        0.8: 'bg-opacity-80',
        0.9: 'bg-opacity-90',
        1: 'bg-opacity-100'
      };

      // Find the closest predefined opacity class
      const closestOpacity = Object.keys(opacityMap)
        .map(Number)
        .reduce((prev, curr) =>
          Math.abs(curr - bgOpacity) < Math.abs(prev - bgOpacity) ? curr : prev
        );

      return `bg-black ${opacityMap[closestOpacity]}`;
    }
    return '';
  };

  const classes = [
    getPositionClasses(style?.textPlacement),
    getTextColorClass(style?.textColor),
    getBackgroundClasses(style?.bgOpacity),
    'absolute p-4' // Ensure consistent positioning
  ].join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default TextOverlay;