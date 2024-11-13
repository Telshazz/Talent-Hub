import React, { useState } from 'react';
import { MessageCircle, Heart, Share2 } from 'lucide-react';

interface EngagementPanelProps {
  milestoneId: string;
}

export default function EngagementPanel({ milestoneId }: EngagementPanelProps) {
  const [comment, setComment] = useState('');

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
      <div className="flex items-center gap-4 mb-6">
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-white/10 transition-colors">
          <Heart className="h-5 w-5" />
          <span>Like</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-white/10 transition-colors">
          <MessageCircle className="h-5 w-5" />
          <span>Comment</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-white/10 transition-colors">
          <Share2 className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              rows={3}
            />
            <div className="mt-2 flex justify-end">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Post
              </button>
            </div>
          </div>
        </div>

        {/* Sample Comments */}
        <div className="space-y-4 mt-6">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-4">
              <img
                src={`https://images.unsplash.com/photo-${1500000000000 + i}`}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="bg-white/10 rounded-lg px-4 py-3">
                  <p className="font-medium">User Name</p>
                  <p className="text-white/80 mt-1">
                    This is incredible! Love seeing your journey unfold.
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-white/60">
                  <button className="hover:text-purple-400">Like</button>
                  <button className="hover:text-purple-400">Reply</button>
                  <span>2h ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}