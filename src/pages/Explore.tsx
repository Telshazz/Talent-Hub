import React from 'react';
import { Search } from 'lucide-react';

const categories = [
  { id: 'music', name: 'Music', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d' },
  { id: 'dance', name: 'Dance', image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434' },
  { id: 'art', name: 'Digital Art', image: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07' },
  { id: 'photo', name: 'Photography', image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5' },
  { id: 'film', name: 'Film', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26' },
  { id: 'writing', name: 'Writing', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a' }
];

export default function Explore() {
  return (
    <main className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Talents</h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            Discover amazing creators across different categories and find your next favorite artist.
          </p>
          <div className="w-full max-w-xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by category, skill, or location..."
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <button className="text-sm text-white/90 hover:text-white">
                    Explore Category →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}