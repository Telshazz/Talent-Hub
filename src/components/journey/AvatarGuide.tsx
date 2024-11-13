import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

interface AvatarGuideProps {
  onClose: () => void;
  currentRoom: string;
}

export default function AvatarGuide({ onClose, currentRoom }: AvatarGuideProps) {
  const getMessage = () => {
    switch (currentRoom) {
      case 'welcome':
        return "Welcome to your journey! I'll guide you through your story.";
      case 'first-song':
        return "This is where it all began - your first musical creation.";
      case 'inspiration':
        return "Let's explore what inspired your musical journey.";
      case 'latest':
        return "Check out your latest project and upcoming releases!";
      default:
        return "Click on any milestone to explore that part of your journey.";
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-32 right-8 z-30"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-xs">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Journey Guide</h4>
              <p className="text-sm text-gray-600">{getMessage()}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}