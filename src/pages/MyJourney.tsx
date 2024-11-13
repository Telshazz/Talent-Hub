import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, Star, Music, Video, Image as ImageIcon, 
  MessageCircle, Heart, Share2, ShoppingBag, Play,
  Award, Users, Sparkles, Calendar
} from 'lucide-react';
import JourneyMap from '../components/journey/JourneyMap';
import JourneyRoom from '../components/journey/JourneyRoom';
import AvatarGuide from '../components/journey/AvatarGuide';
import EngagementPanel from '../components/journey/EngagementPanel';
import MilestoneCard from '../components/journey/MilestoneCard';
import ProfessionalDashboard from '../components/journey/ProfessionalDashboard';

export default function MyJourney() {
  const [currentRoom, setCurrentRoom] = useState('welcome');
  const [showGuide, setShowGuide] = useState(true);
  const navigate = useNavigate();

  const milestones = [
    {
      id: 'welcome',
      title: 'Welcome to My Journey',
      type: 'intro',
      content: {
        description: 'Award-winning music producer and songwriter with over 10 years of experience.',
        media: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae',
        stats: {
          followers: 125000,
          likes: 450000,
          projects: 48
        }
      }
    },
    {
      id: 'first-song',
      title: 'My First Song',
      type: 'music',
      content: {
        description: 'Where it all began - my first recorded song in my bedroom studio.',
        media: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
        audio: 'first-song.mp3',
        year: 2015,
        achievements: ['Local Radio Play', 'College Music Award']
      }
    },
    {
      id: 'inspiration',
      title: 'Biggest Inspiration',
      type: 'story',
      content: {
        description: 'The artists and moments that shaped my musical journey.',
        media: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae',
        gallery: [
          'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
          'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0'
        ]
      }
    },
    {
      id: 'latest',
      title: 'Latest Project',
      type: 'project',
      content: {
        description: 'Currently working on my upcoming album "Synthesis".',
        media: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0',
        purchaseLink: 'https://example.com/store',
        previewTracks: [
          { title: 'Track 1', duration: '3:45' },
          { title: 'Track 2', duration: '4:12' }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Interactive Journey Map */}
      <div className="fixed inset-0 z-0">
        <JourneyMap
          milestones={milestones}
          currentRoom={currentRoom}
          onRoomChange={setCurrentRoom}
        />
      </div>

      {/* Quick Stats Bar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-20 bg-white/10 backdrop-blur-md rounded-full px-8 py-2 flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-purple-400" />
          <span className="text-white/90">125k Followers</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-purple-400" />
          <span className="text-white/90">450k Likes</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-purple-400" />
          <span className="text-white/90">48 Projects</span>
        </div>
      </div>

      {/* Avatar Guide */}
      {showGuide && (
        <AvatarGuide
          onClose={() => setShowGuide(false)}
          currentRoom={currentRoom}
        />
      )}

      {/* Current Room View */}
      <div className="relative z-10 min-h-screen">
        <JourneyRoom
          milestone={milestones.find(m => m.id === currentRoom)!}
          onNavigate={(roomId) => setCurrentRoom(roomId)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <MilestoneCard
              milestone={milestones.find(m => m.id === currentRoom)!}
            />
            
            {/* Engagement Panel */}
            <div className="mt-8">
              <EngagementPanel milestoneId={currentRoom} />
            </div>

            {/* Professional Dashboard (only visible to professionals) */}
            <div className="mt-8">
              <ProfessionalDashboard milestoneId={currentRoom} />
            </div>
          </div>
        </JourneyRoom>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-4">
          {milestones.map((milestone) => (
            <button
              key={milestone.id}
              onClick={() => setCurrentRoom(milestone.id)}
              className={`p-2 rounded-full transition-colors ${
                currentRoom === milestone.id
                  ? 'bg-purple-600 text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {getIconForType(milestone.type)}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-8 right-8 z-20 flex flex-col gap-3">
        <button className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors">
          <ShoppingBag className="h-5 w-5" />
        </button>
        <button className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-colors">
          <Share2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function getIconForType(type: string) {
  switch (type) {
    case 'music':
      return <Music className="h-5 w-5" />;
    case 'video':
      return <Video className="h-5 w-5" />;
    case 'story':
      return <MessageCircle className="h-5 w-5" />;
    case 'project':
      return <Star className="h-5 w-5" />;
    default:
      return <MapPin className="h-5 w-5" />;
  }
}