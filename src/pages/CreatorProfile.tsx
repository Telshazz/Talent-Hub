import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Star, Award, Users, Share2, Palette, Layout, Image, Music, Video, Grid, Columns } from 'lucide-react';
import { creators } from '../data/creators';
import ThemeCustomizer from '../components/creator/ThemeCustomizer';
import ContentGrid from '../components/creator/ContentGrid';
import ProfileStats from '../components/creator/ProfileStats';
import EngagementPanel from '../components/creator/EngagementPanel';

export default function CreatorProfile() {
  const { id } = useParams();
  const creator = creators.find(c => c.id === Number(id));
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [layout, setLayout] = useState<'grid' | 'masonry' | 'carousel'>('grid');

  if (!creator) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-80 bg-gray-900 mt-[-4rem]">
        <img
          src={creator.coverImage}
          alt="Cover"
          className="w-full h-full object-cover opacity-60"
        />
        {creator.id === 1 && ( // Only show for the user's own profile
          <button
            onClick={() => setShowCustomizer(!showCustomizer)}
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-white transition-colors"
          >
            <Palette className="h-4 w-4" />
            <span>Customize Space</span>
          </button>
        )}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-32 pb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={creator.image}
                alt={creator.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-md"
              />
              
              <div className="flex-1">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{creator.name}</h1>
                    <p className="text-lg text-gray-600">{creator.category}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                      Follow
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-700">{creator.bio}</p>
                
                <ProfileStats stats={creator.stats} />
              </div>
            </div>

            {/* Content Layout Controls */}
            <div className="mt-8 border-t pt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Creator Space</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLayout('grid')}
                    className={`p-2 rounded-lg ${layout === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setLayout('masonry')}
                    className={`p-2 rounded-lg ${layout === 'masonry' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <Columns className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Content Categories */}
              <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                <CategoryButton icon={<Image />} text="Photos" count={12} />
                <CategoryButton icon={<Video />} text="Videos" count={8} />
                <CategoryButton icon={<Music />} text="Audio" count={15} />
              </div>

              {/* Content Grid */}
              <ContentGrid layout={layout} content={creator.content} />
            </div>
          </div>

          {/* Engagement Panel */}
          <div className="mt-6">
            <EngagementPanel creatorId={creator.id} />
          </div>
        </div>
      </div>

      {/* Theme Customizer Modal */}
      {showCustomizer && (
        <ThemeCustomizer onClose={() => setShowCustomizer(false)} />
      )}
    </div>
  );
}

function CategoryButton({ icon, text, count }: { icon: React.ReactNode; text: string; count: number }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
      {React.cloneElement(icon as React.ReactElement, { className: 'h-4 w-4 text-gray-600' })}
      <span className="text-gray-900">{text}</span>
      <span className="text-sm text-gray-500">({count})</span>
    </button>
  );
}