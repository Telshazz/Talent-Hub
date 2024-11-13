import React from 'react';
import { SlidersHorizontal, TrendingUp, Users, Award } from 'lucide-react';

type SortOption = 'combined' | 'fan' | 'professional';

interface SortControlsProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export default function SortControls({ currentSort, onSortChange }: SortControlsProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2 text-gray-600">
        <SlidersHorizontal className="h-4 w-4" />
        <span className="font-medium">Sort by:</span>
      </div>
      <div className="flex gap-2">
        <SortButton
          icon={<TrendingUp />}
          text="Combined Score"
          active={currentSort === 'combined'}
          onClick={() => onSortChange('combined')}
        />
        <SortButton
          icon={<Users />}
          text="Fan Score"
          active={currentSort === 'fan'}
          onClick={() => onSortChange('fan')}
        />
        <SortButton
          icon={<Award />}
          text="Professional Score"
          active={currentSort === 'professional'}
          onClick={() => onSortChange('professional')}
        />
      </div>
    </div>
  );
}

function SortButton({ icon, text, active, onClick }: {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active
          ? 'bg-purple-100 text-purple-700'
          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
      }`}
    >
      {React.cloneElement(icon as React.ReactElement, { className: 'h-4 w-4' })}
      {text}
    </button>
  );
}