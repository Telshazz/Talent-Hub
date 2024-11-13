import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  const location = useLocation();
  const isJourneyPage = location.pathname === '/my-journey';

  return (
    <div className={`min-h-screen ${isJourneyPage ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header />
      <div className={isJourneyPage ? '' : 'pt-16'}>
        <Outlet />
      </div>
    </div>
  );
}