import React, { useState } from 'react';
import { X, Palette, Layout, Type, Image } from 'lucide-react';

interface ThemeCustomizerProps {
  onClose: () => void;
}

export default function ThemeCustomizer({ onClose }: ThemeCustomizerProps) {
  const [activeTab, setActiveTab] = useState<'colors' | 'layout' | 'typography' | 'background'>('colors');

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Customize Your Space</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-48 border-r">
            <nav className="p-2 space-y-1">
              <CustomizerTab
                icon={<Palette />}
                text="Colors"
                active={activeTab === 'colors'}
                onClick={() => setActiveTab('colors')}
              />
              <CustomizerTab
                icon={<Layout />}
                text="Layout"
                active={activeTab === 'layout'}
                onClick={() => setActiveTab('layout')}
              />
              <CustomizerTab
                icon={<Type />}
                text="Typography"
                active={activeTab === 'typography'}
                onClick={() => setActiveTab('typography')}
              />
              <CustomizerTab
                icon={<Image />}
                text="Background"
                active={activeTab === 'background'}
                onClick={() => setActiveTab('background')}
              />
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === 'colors' && <ColorCustomizer />}
            {activeTab === 'layout' && <LayoutCustomizer />}
            {activeTab === 'typography' && <TypographyCustomizer />}
            {activeTab === 'background' && <BackgroundCustomizer />}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

function CustomizerTab({ icon, text, active, onClick }: {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
        active ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
      <span>{text}</span>
    </button>
  );
}

function ColorCustomizer() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Primary Color</h3>
        <div className="grid grid-cols-6 gap-3">
          {['#6D28D9', '#2563EB', '#059669', '#DC2626', '#D97706', '#4F46E5'].map((color) => (
            <button
              key={color}
              className="w-10 h-10 rounded-full border-2 border-white ring-2 ring-transparent hover:ring-gray-200 transition-shadow"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Accent Color</h3>
        <div className="grid grid-cols-6 gap-3">
          {['#8B5CF6', '#3B82F6', '#10B981', '#EF4444', '#F59E0B', '#6366F1'].map((color) => (
            <button
              key={color}
              className="w-10 h-10 rounded-full border-2 border-white ring-2 ring-transparent hover:ring-gray-200 transition-shadow"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function LayoutCustomizer() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Content Layout</h3>
        <div className="grid grid-cols-3 gap-4">
          <LayoutOption name="Grid" />
          <LayoutOption name="Masonry" />
          <LayoutOption name="Carousel" />
        </div>
      </div>
    </div>
  );
}

function LayoutOption({ name }: { name: string }) {
  return (
    <button className="aspect-video bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors">
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </button>
  );
}

function TypographyCustomizer() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Heading Font</h3>
        <select className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500">
          <option>Inter</option>
          <option>Roboto</option>
          <option>Open Sans</option>
        </select>
      </div>
    </div>
  );
}

function BackgroundCustomizer() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Background Type</h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="aspect-video bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors">
            <span className="text-sm font-medium text-gray-700">Solid Color</span>
          </button>
          <button className="aspect-video bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors">
            <span className="text-sm font-medium text-gray-700">Image</span>
          </button>
        </div>
      </div>
    </div>
  );
}