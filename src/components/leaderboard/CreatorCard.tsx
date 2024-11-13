import React from 'react';
import { Trophy, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScoreBar from './ScoreBar';

interface CreatorCardProps {
  rank: number;
  previousRank: number;
  name: string;
  image: string;
  category: string;
  fanScore: number;
  professionalScore: number;
  maxScore: number;
  id: number;
}

export default function CreatorCard({
  id,
  rank,
  previousRank,
  name,
  image,
  category,
  fanScore,
  professionalScore,
  maxScore,
}: CreatorCardProps) {
  const rankChange = previousRank - rank;
  
  const getRankChangeDisplay = () => {
    if (rankChange > 0) {
      return (
        <span className="flex items-center text-green-600 text-sm">
          <ArrowUp className="h-4 w-4" />
          {rankChange}
        </span>
      );
    } else if (rankChange < 0) {
      return (
        <span className="flex items-center text-red-600 text-sm">
          <ArrowDown className="h-4 w-4" />
          {Math.abs(rankChange)}
        </span>
      );
    }
    return (
      <span className="flex items-center text-gray-400 text-sm">
        <Minus className="h-4 w-4" />
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 relative">
          {rank <= 3 && (
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <Trophy className="h-3 w-3 text-white" />
            </div>
          )}
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold text-gray-900">#{rank}</span>
            {getRankChangeDisplay()}
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          </div>
          <p className="text-sm text-gray-500 mb-3">{category}</p>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 w-24">Fan Score:</span>
              <ScoreBar score={fanScore} maxScore={maxScore} type="fan" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 w-24">Pro Score:</span>
              <ScoreBar score={professionalScore} maxScore={maxScore} type="professional" />
            </div>
          </div>
        </div>
        
        <Link 
          to={`/creator/${id}`}
          className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium hover:bg-purple-50 rounded-lg transition-colors"
        >
          View Profile →
        </Link>
      </div>
    </div>
  );
}