'use client';

import Education from '@/components/profile/Education/Education';
import Experience from '@/components/profile/Experience/Experience';
import Languages from '@/components/profile/Languages/Languages';
import PersonalInfo from '@/components/profile/PersonalInfo/PersonalInfo';
import References from '@/components/profile/References/References';
import Skills from '@/components/profile/Skills/Skills';
import { useState } from 'react';

type TabType = 
  | 'personal' 
  | 'experience' 
  | 'education' 
  | 'skills' 
  | 'languages'
  | 'references' 
  | 'training' 
  | 'projects' 
  | 'voluntary' 
  | 'awards' 
  | 'featured';

interface Tab {
  id: TabType;
  label: string;
  icon: string;
  count?: number;
}

const tabs: Tab[] = [
  { id: 'personal', label: 'Personal Info', icon: '👤' },
  { id: 'experience', label: 'Experience', icon: '💼', count: 2 },
  { id: 'education', label: 'Education', icon: '🎓', count: 2 },
  { id: 'skills', label: 'Skills', icon: '⚡', count: 4 },
  { id: 'languages', label: 'Languages', icon: '🌐', count: 2 },
  { id: 'references', label: 'References', icon: '🌐', count: 2 },
  { id: 'training', label: 'Training', icon: '📚', count: 1 },
  { id: 'projects', label: 'Projects', icon: '📁', count: 2 },
  { id: 'voluntary', label: 'Voluntary', icon: '❤️', count: 1 },
  { id: 'awards', label: 'Awards', icon: '🏆', count: 1 },
  { id: 'featured', label: 'Featured', icon: '⭐' },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabType>('personal');

  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return <PersonalInfo />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'languages':
        return <Languages />;
      case 'references':
        return <References />;
    
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="max-w-355 mx-auto min-h-screen mt-20">
      {/* Navigation Tabs Section */}
      <div className="bg-[#2557A7] shadow">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap
                  transition-colors duration-200
                  ${
                    activeTab === tab.id
                      ? 'bg-[#FFFFFF33] text-white'
                      : 'text-[#FFFFFFB2] hover:bg-blue-700'
                  }
                `}
              >
                <span>{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
                {tab.count && (
                  <span className="bg-blue-400 text-white text-xs rounded-full px-2 py-1">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
