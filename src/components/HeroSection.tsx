import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          alt="Talent showcase"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Discover & Support<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Rising Stars
          </span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Join our community of creators and fans. Vote for your favorite talents,
          discover emerging artists, and be part of their journey to success.
        </p>
        <div className="flex gap-4">
          <Link 
            to="/explore"
            className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            Explore Talent
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/leaderboard" 
            className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Vote Now
          </Link>
        </div>
      </div>
    </div>
  );
}