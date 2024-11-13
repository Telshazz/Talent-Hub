import React from 'react';
import { Heart, MessageCircle, Share2, Play, Calendar, ShoppingBag } from 'lucide-react';

interface MilestoneCardProps {
  milestone: {
    id: string;
    title: string;
    type: string;
    content: {
      description: string;
      media: string;
      audio?: string;
      year?: number;
      achievements?: string[];
      gallery?: string[];
      purchaseLink?: string;
      previewTracks?: Array<{ title: string; duration: string; }>;
    };
  };
}

export default function MilestoneCard({ milestone }: MilestoneCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
      <div className="p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{milestone.title}</h2>
          {milestone.content.year && (
            <div className="flex items-center gap-2 text-white/60">
              <Calendar className="h-4 w-4" />
              <span>{milestone.content.year}</span>
            </div>
          )}
        </div>

        <p className="text-white/80 mb-6">{milestone.content.description}</p>

        {/* Media Content */}
        <div className="mb-6">
          {milestone.content.audio ? (
            <div className="bg-white/5 rounded-lg p-4 flex items-center gap-4">
              <button className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
                <Play className="h-5 w-5" />
              </button>
              <div>
                <div className="h-1 bg-white/20 rounded-full w-64">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: '30%' }} />
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>1:15</span>
                  <span>3:45</span>
                </div>
              </div>
            </div>
          ) : milestone.content.gallery ? (
            <div className="grid grid-cols-2 gap-4">
              {milestone.content.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="rounded-lg w-full h-48 object-cover"
                />
              ))}
            </div>
          ) : (
            <img
              src={milestone.content.media}
              alt={milestone.title}
              className="rounded-lg w-full h-64 object-cover"
            />
          )}
        </div>

        {/* Achievements */}
        {milestone.content.achievements && (
          <div className="mb-6 flex gap-2">
            {milestone.content.achievements.map((achievement, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 rounded-full text-sm"
              >
                {achievement}
              </span>
            ))}
          </div>
        )}

        {/* Preview Tracks */}
        {milestone.content.previewTracks && (
          <div className="mb-6 space-y-2">
            {milestone.content.previewTracks.map((track, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Play className="h-4 w-4" />
                  <span>{track.title}</span>
                </div>
                <span className="text-white/60">{track.duration}</span>
              </div>
            ))}
          </div>
        )}

        {/* Purchase Link */}
        {milestone.content.purchaseLink && (
          <button className="w-full mb-6 flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span>Pre-order Now</span>
          </button>
        )}
        
        {/* Engagement Actions */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Heart className="h-5 w-5" />
            <span>2.5k</span>
          </button>
          <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <MessageCircle className="h-5 w-5" />
            <span>128</span>
          </button>
          <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Share2 className="h-5 w-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}