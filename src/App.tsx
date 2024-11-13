import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import CreatorProfile from './pages/CreatorProfile';
import Explore from './pages/Explore';
import MyJourney from './pages/MyJourney';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'leaderboard', element: <Leaderboard /> },
      { path: 'explore', element: <Explore /> },
      { path: 'creator/:id', element: <CreatorProfile /> },
      { path: 'my-journey', element: <MyJourney /> },
      { path: '*', element: <Navigate to="/" replace /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}