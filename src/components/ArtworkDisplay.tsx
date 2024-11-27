// components/ArtworkDisplay.tsx
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { Artwork, ArtworkDisplayType } from '@/types/artwork';

interface ArtworkDisplayProps {
  artwork: Artwork;
}

const ArtworkDisplay: React.FC<ArtworkDisplayProps> = ({ artwork }) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    // Fetch markdown content if description path exists
    const fetchMarkdownContent = async () => {
      if (artwork.descriptionPath) {
        try {
          const response = await fetch(artwork.descriptionPath);
          const text = await response.text();
          setMarkdownContent(text);
        } catch (error) {
          console.error('Error fetching markdown content:', error);
          setMarkdownContent('');
        }
      }
    };

    fetchMarkdownContent();
  }, [artwork.descriptionPath]);

  const renderFullScreen = () => (
    <div className="w-full h-full relative">
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

  const renderSplitScreenTextLeft = () => (
    <div className="flex w-full h-full">
      <div className="w-1/2 bg-gray-100 p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{artwork.title} ({artwork.year})</h2>
        <Markdown className="prose">{markdownContent}</Markdown>
      </div>
      <div className="w-1/2">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  const renderFullScreenWithOverlay = () => (
    <div className="w-full h-full relative">
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-8 bg-black bg-opacity-50 rounded-lg">
          <div className="text-white max-w-xl">
            <h2 className="text-3xl font-bold mb-4">{artwork.title} ({artwork.year})</h2>
            <Markdown className="prose prose-invert">{markdownContent}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFullScreenWithWhiteText = () => (
    <div className="w-full h-full relative">
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-4">{artwork.title} ({artwork.year})</h2>
          <Markdown className="prose text-white">{markdownContent}</Markdown>
        </div>
      </div>
    </div>
  );

  const renderFullScreenWithBlackText = () => (
    <div className="w-full h-full relative">
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center text-black">
        <div className="max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-4">{artwork.title} ({artwork.year})</h2>
          <Markdown className="prose text-black">{markdownContent}</Markdown>
        </div>
      </div>
    </div>
  );

  switch (artwork.type) {
    case ArtworkDisplayType.FullScreen:
      return renderFullScreen();
    case ArtworkDisplayType.SplitScreenTextLeft:
      return renderSplitScreenTextLeft();
    case ArtworkDisplayType.FullScreenWithOverlay:
      return renderFullScreenWithOverlay();
    case ArtworkDisplayType.FullScreenWithWhiteText:
      return renderFullScreenWithWhiteText();
    case ArtworkDisplayType.FullScreenWithBlackText:
      return renderFullScreenWithBlackText();
    default:
      return renderFullScreen();
  }
};

export default ArtworkDisplay;