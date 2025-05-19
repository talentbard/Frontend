"use client"
import { useState } from 'react';
import ProfileCard from './ProfileCard';
import ScheduleModal from './ScheduleModal';

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    {
      name: 'Nico M',
      university: 'Cavendish University',
      experience: 9,
      rating: 5,
      rate: 20,
      skills: ['Python (4Y)'],
      image: 'https://i.pravatar.cc/150?img=3',
      dailyAvailability: '8 hours',
      linkedin: 'https://linkedin.com/in/nico-m',
    },
    {
      name: 'Jane Doe',
      university: 'Stanford University',
      experience: 6,
      rating: 4,
      rate: 25,
      skills: ['React', 'Next.js'],
      image: 'https://i.pravatar.cc/150?img=5',
      dailyAvailability: '6 hours',
      linkedin: 'https://linkedin.com/in/jane-doe',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Developers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} onInvite={setSelectedProfile} />
        ))}
      </div>
      {selectedProfile && (
        <ScheduleModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
      )}
    </div>
  );
}
