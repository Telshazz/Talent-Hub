import React from 'react';

interface ScoreBarProps {
  score: number;
  maxScore: number;
  type: 'fan' | 'professional';
}

export default function ScoreBar({ score, maxScore, type }: ScoreBarProps) {
  const percentage = (score / maxScore) * 100;
  const colors = type === 'fan' 
    ? { bg: 'bg-blue-100', fill: 'bg-blue-500' }
    : { bg: 'bg-purple-100', fill: 'bg-purple-500' };

  return (
    <div className="flex items-center gap-2">
      <div className={`h-2 flex-1 rounded-full ${colors.bg}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${colors.fill}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-medium text-gray-700 min-w-[3rem]">
        {score.toLocaleString()}
      </span>
    </div>
  );
}