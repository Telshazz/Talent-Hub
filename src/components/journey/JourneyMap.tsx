import React from 'react';
import { motion } from 'framer-motion';

interface Milestone {
  id: string;
  title: string;
  type: string;
  content: {
    description: string;
    media: string;
  };
}

interface JourneyMapProps {
  milestones: Milestone[];
  currentRoom: string;
  onRoomChange: (roomId: string) => void;
}

export default function JourneyMap({ milestones, currentRoom, onRoomChange }: JourneyMapProps) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
      <div className="absolute inset-0" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-[600px] h-[600px]"
          initial={false}
          animate={{ scale: currentRoom === 'welcome' ? 1 : 0.8 }}
        >
          {milestones.map((milestone, index) => {
            const angle = (index * 2 * Math.PI) / milestones.length;
            const radius = 250;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={milestone.id}
                className={`absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
                  currentRoom === milestone.id ? 'z-10' : 'z-0'
                }`}
                style={{ left: '50%', top: '50%' }}
                initial={false}
                animate={{
                  x,
                  y,
                  scale: currentRoom === milestone.id ? 1.2 : 1,
                }}
                whileHover={{ scale: 1.1 }}
                onClick={() => onRoomChange(milestone.id)}
              >
                <div className={`w-full h-full rounded-full border-2 ${
                  currentRoom === milestone.id
                    ? 'border-purple-500 bg-purple-500/20'
                    : 'border-white/20 bg-white/10'
                } backdrop-blur-sm flex items-center justify-center text-white transition-colors`}>
                  <span className="text-sm font-medium text-center px-2">
                    {milestone.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}