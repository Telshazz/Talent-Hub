import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface JourneyRoomProps {
  milestone: {
    id: string;
    title: string;
    type: string;
    content: {
      description: string;
      media: string;
    };
  };
  onNavigate: (roomId: string) => void;
  children: React.ReactNode;
}

export default function JourneyRoom({ milestone, onNavigate, children }: JourneyRoomProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={milestone.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen relative"
      >
        {/* Room Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
          <img
            src={milestone.content.media}
            alt={milestone.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Room Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}