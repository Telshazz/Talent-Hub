import React from 'react';
import { Users, Star, Award } from 'lucide-react';

interface ProfileStatsProps {
  stats: {
    followers: number;
    likes: number;
    projects: number;
  };
}

export default function ProfileStats({ stats }: ProfileStatsProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-6">
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5 text-gray-500" />
        <span className="font-medium">{stats.followers.toLocaleString()} Followers</span>
      </div>
      <div className="flex items-center gap-2">
        <Star className="h-5 w-5 text-gray-500" />
        <span className="font-medium">{stats.likes.toLocaleString()} Likes</span>
      </div>
      <div className="flex items-center gap-2">
        <Award className="h-5 w-5 text-gray-500" />
        <span className="font-medium">{stats.projects} Projects</span>
      </div>
    </div>
  );
}