import React, { useState } from 'react';
import { MessageSquare, Heart, Share2 } from 'lucide-react';

interface EngagementPanelProps {
  creatorId: number;
}

export default function EngagementPanel({ creatorId }: EngagementPanelProps) {
  const [activeTab, setActiveTab] = useState<'comments' | 'likes'>('comments');

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-6 border-b pb-4">
        <button
          onClick={() => setActiveTab('comments')}
          className={`flex items-center gap-2 pb-4 -mb-4 ${
            activeTab === 'comments'
              ? 'text-purple-600 border-b-2 border-purple-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <MessageSquare className="h-5 w-5" />
          <span>Comments</span>
        </button>
        <button
          onClick={() => setActiveTab('likes')}
          className={`flex items-center gap-2 pb-4 -mb-4 ${
            activeTab === 'likes'
              ? 'text-purple-600 border-b-2 border-purple-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Heart className="h-5 w-5" />
          <span>Likes</span>
        </button>
      </div>

      <div className="mt-6">
        {activeTab === 'comments' ? (
          <CommentsList creatorId={creatorId} />
        ) : (
          <LikesList creatorId={creatorId} />
        )}
      </div>
    </div>
  );
}

function CommentsList({ creatorId }: { creatorId: number }) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <textarea
            placeholder="Leave a comment..."
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
            rows={3}
          />
          <div className="mt-2 flex justify-end">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Post Comment
            </button>
          </div>
        </div>
      </div>

      {/* Sample Comments */}
      <div className="space-y-4 mt-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4">
            <img
              src={`https://images.unsplash.com/photo-${1500000000000 + i}`}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="bg-gray-50 rounded-lg px-4 py-3">
                <p className="font-medium text-gray-900">User Name</p>
                <p className="text-gray-600 mt-1">
                  Amazing work! Love your creative style and attention to detail.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <button className="hover:text-purple-600">Like</button>
                <button className="hover:text-purple-600">Reply</button>
                <span>2h ago</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LikesList({ creatorId }: { creatorId: number }) {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`https://images.unsplash.com/photo-${1500000000000 + i}`}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900">User Name</p>
              <p className="text-sm text-gray-500">2h ago</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Share2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      ))}
    </div>
  );
}