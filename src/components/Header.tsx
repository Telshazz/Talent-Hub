import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Trophy, Compass, User, Upload, ArrowLeft } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButton = location.pathname !== '/';
  const isJourneyPage = location.pathname === '/my-journey';

  if (isJourneyPage) {
    return null; // Hide header on journey page
  }

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
            )}
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              TalentHub
            </Link>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search creators or content..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <NavLink to="/leaderboard" icon={<Trophy />} text="Leaderboard" />
            <NavLink to="/explore" icon={<Compass />} text="Explore" />
            <NavLink to="/my-journey" icon={<User />} text="My Journey" />
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              <Upload className="h-4 w-4" />
              <span>Submit</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-2 transition-colors ${
        isActive ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
      }`}
    >
      {React.cloneElement(icon as React.ReactElement, { className: 'h-4 w-4' })}
      <span>{text}</span>
    </Link>
  );
}