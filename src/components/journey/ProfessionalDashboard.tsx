import React from 'react';
import { Award, Star, ThumbsUp, MessageSquare } from 'lucide-react';

interface ProfessionalDashboardProps {
  milestoneId: string;
}

export default function ProfessionalDashboard({ milestoneId }: ProfessionalDashboardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
      <div className="flex items-center gap-3 mb-6">
        <Award className="h-6 w-6 text-purple-400" />
        <h3 className="text-lg font-semibold">Professional Feedback</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="font-medium">Rating</span>
          </div>
          <div className="text-2xl font-bold">4.8/5.0</div>
          <p className="text-sm text-white/60 mt-1">Based on 24 reviews</p>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <ThumbsUp className="h-5 w-5 text-green-400" />
            <span className="font-medium">Endorsements</span>
          </div>
          <div className="text-2xl font-bold">156</div>
          <p className="text-sm text-white/60 mt-1">From industry pros</p>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="h-5 w-5 text-blue-400" />
            <span className="font-medium">Reviews</span>
          </div>
          <div className="text-2xl font-bold">38</div>
          <p className="text-sm text-white/60 mt-1">Detailed feedback</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Professional"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">John Smith</p>
              <p className="text-sm text-white/60">Music Producer, Grammy Winner</p>
            </div>
          </div>
          <p className="text-white/80">
            "Exceptional talent and creativity. The production quality and attention to detail
            in this piece is remarkable. Looking forward to future collaborations."
          </p>
        </div>
      </div>
    </div>
  );
}