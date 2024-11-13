import React, { useState } from 'react';
import SortControls from '../components/leaderboard/SortControls';
import CreatorCard from '../components/leaderboard/CreatorCard';
import TrendingCreators from '../components/leaderboard/TrendingCreators';
import { creators } from '../data/creators';

type SortOption = 'combined' | 'fan' | 'professional';

export default function Leaderboard() {
  const [currentSort, setCurrentSort] = useState<SortOption>('combined');
  const maxScore = 100000;

  // Sort creators based on the selected sorting option
  const sortedCreators = [...creators].sort((a, b) => {
    switch (currentSort) {
      case 'fan':
        return b.stats.followers - a.stats.followers;
      case 'professional':
        return b.stats.likes - a.stats.likes;
      default: // combined
        return (b.stats.followers + b.stats.likes) - (a.stats.followers + a.stats.likes);
    }
  });

  return (
    <main className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Creator Leaderboard</h1>
          <div className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Trending Creators Section */}
        <div className="mb-8">
          <TrendingCreators />
        </div>

        <SortControls currentSort={currentSort} onSortChange={setCurrentSort} />
        
        <div className="mt-8 space-y-6">
          {sortedCreators.map((creator, index) => (
            <CreatorCard
              key={creator.id}
              id={creator.id}
              rank={index + 1}
              previousRank={index + 1}
              name={creator.name}
              image={creator.image}
              category={creator.category}
              fanScore={creator.stats.followers}
              professionalScore={creator.stats.likes}
              maxScore={maxScore}
            />
          ))}
        </div>
      </div>
    </main>
  );
}