// components/ArtworkDisplay.tsx
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Artwork, ArtworkDisplayType, ArtworkStyle } from '@/types/artwork';
import TextOverlay from './TextOverlay';

interface ArtworkDisplayProps {
  artwork: Artwork;
}

const ArtworkDisplay: React.FC<ArtworkDisplayProps> = ({ artwork }) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    if (artwork.descriptionPath) {
      fetch(artwork.descriptionPath)
        .then(response => response.text())
        .then(text => setMarkdownContent(text))
        .catch(error => {
          console.error('Error fetching markdown content:', error);
          setMarkdownContent('');
        });
    }
  }, [artwork.descriptionPath]);

  const defaultStyles: { [key in ArtworkDisplayType]: ArtworkStyle } = {
    [ArtworkDisplayType.FullScreen]: {
      textPlacement: 'bottom-left',
      textColor: 'white',
      bgOpacity: 0,
    },
    [ArtworkDisplayType.SplitScreenTextLeft]: {
      textPlacement: 'top-left',
      textColor: 'black',
      bgOpacity: 0,
    },
    [ArtworkDisplayType.FullScreenWithOverlay]: {
      textPlacement: 'bottom-left',
      textColor: 'white',
      bgOpacity: 0.5,
    },
    [ArtworkDisplayType.FullScreenWithRawText]: {
      textPlacement: 'center',
      textColor: 'white',
      bgOpacity: 0.1,
    },
  };

  const style = { ...defaultStyles[artwork.type], ...artwork.style };

  // Markdown rendering components for custom styling
  const MarkdownComponents = {
    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
    h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mb-2" {...props} />,
    p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-4" {...props} />,
    li: ({ node, ...props }) => <li className="mb-2" {...props} />,
    a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
    strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
    em: ({ node, ...props }) => <em className="italic" {...props} />,
    blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic" {...props} />,
  };

  const renderFullScreen = () => (
    <div className="w-full h-full relative">
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        className="w-full h-full object-cover"
      />
      <TextOverlay style={style}>
        <h2 className="text-2xl font-bold">{artwork.title} ({artwork.year})</h2>
      </TextOverlay>
    </div>
  );

  const renderSplitScreenTextLeft = () => (
    <div className="flex w-full h-full">
      <div className="w-1/2 bg-gray-100 p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{artwork.title} ({artwork.year})</h2>
        <ReactMarkdown
          components={MarkdownComponents}
          remarkPlugins={[remarkGfm]}
          className="prose max-w-none"
        >
          {markdownContent}
        </ReactMarkdown>
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
      <TextOverlay style={style}>
        <h2 className="text-3xl font-bold mb-4">{artwork.title} ({artwork.year})</h2>
        <ReactMarkdown
          components={MarkdownComponents}
          remarkPlugins={[remarkGfm]}
          // className="prose max-w-none"
          className="prose max-w-none"
        >
          {markdownContent}
        </ReactMarkdown>
      </TextOverlay>
    </div>
  );



  switch (artwork.type) {
    case ArtworkDisplayType.FullScreen:
      return renderFullScreen();
    case ArtworkDisplayType.SplitScreenTextLeft:
      return renderSplitScreenTextLeft();
    case ArtworkDisplayType.FullScreenWithOverlay:
      return renderFullScreenWithOverlay();

    default:
      return renderFullScreen();
  }
};

export default ArtworkDisplay;