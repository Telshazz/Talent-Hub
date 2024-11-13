import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Star, ArrowUpRight } from 'lucide-react';
import { creators } from '../data/creators';

const topCreators = creators.slice(0, 5);

export default function LeaderboardPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Trophy className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900">Top Creators</h2>
          </div>
          <Link 
            to="/leaderboard" 
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
          >
            View Full Leaderboard
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {topCreators.map((creator, index) => (
            <Link
              key={creator.id}
              to={`/creator/${creator.id}`}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-purple-600 flex items-center gap-1">
                #{index + 1}
                <Star className="h-4 w-4 fill-current" />
              </div>
              <div className="aspect-square">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {creator.name}
                </h3>
                <p className="text-sm text-gray-500">{creator.category}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-600">
                    {creator.stats.followers.toLocaleString()} followers
                  </span>
                  <span className="text-sm text-gray-500 group-hover:text-purple-600 transition-colors">
                    View Profile →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}