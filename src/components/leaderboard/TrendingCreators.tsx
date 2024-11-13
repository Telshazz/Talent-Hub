import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { creators } from '../../data/creators';

// Get top 3 trending creators based on growth (using followers as a metric)
const trendingCreators = creators
  .slice(0, 3)
  .map(creator => ({
    id: creator.id,
    name: creator.name,
    category: creator.category,
    image: creator.image,
    growth: '+' + Math.floor(Math.random() * 100 + 140) + '%' // Simulated growth data
  }));

export default function TrendingCreators() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">Trending This Week</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {trendingCreators.map((creator) => (
          <Link
            key={creator.id}
            to={`/creator/${creator.id}`}
            className="bg-white rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-shadow group"
          >
            <img
              src={creator.image}
              alt={creator.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 truncate group-hover:text-purple-600 transition-colors">
                {creator.name}
              </h4>
              <p className="text-sm text-gray-500 truncate">{creator.category}</p>
            </div>
            <span className="text-green-600 font-medium text-sm whitespace-nowrap">
              {creator.growth}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}