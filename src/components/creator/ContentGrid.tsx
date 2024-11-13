import React from 'react';
import { Play, Music, Image as ImageIcon } from 'lucide-react';

interface ContentGridProps {
  layout: 'grid' | 'masonry' | 'carousel';
  content: Array<{
    id: number;
    type: 'image' | 'video' | 'audio';
    thumbnail: string;
    title: string;
    likes: number;
  }>;
}

export default function ContentGrid({ layout, content }: ContentGridProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="h-5 w-5" />;
      case 'audio':
        return <Music className="h-5 w-5" />;
      default:
        return <ImageIcon className="h-5 w-5" />;
    }
  };

  return (
    <div className={`grid gap-4 ${
      layout === 'masonry' 
        ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    }`}>
      {content.map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-2 text-white mb-2">
                {getTypeIcon(item.type)}
                <span className="text-sm font-medium">{item.type}</span>
              </div>
              <h3 className="text-white font-medium mb-1">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.likes.toLocaleString()} likes</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}