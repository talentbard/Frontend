"use client"
import { Star } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export default function ProfileCard({ profile, onInvite }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-sm transition hover:shadow-lg">
      <div className="flex items-center gap-4">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <p className="text-sm text-gray-500">{profile.university}</p>
          <div className="flex items-center mt-1 text-yellow-500">
            {Array.from({ length: profile.rating }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-700 space-y-1">
        <p><strong>${profile.rate}/h</strong> • {profile.experience} years exp</p>
        <p>{profile.skills.join(', ')}</p>
        <p>Daily availability: {profile.dailyAvailability}</p>
      </div>

      {/* LinkedIn link */}
      {profile.linkedin && (
        <div className="mt-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <FaLinkedin className="text-xl" />
            View LinkedIn
          </a>
        </div>
      )}

      <button
        className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        onClick={() => onInvite(profile)}
      >
        Invite to Interview
      </button>
    </div>
  );
}
