"use client"
import React, { useState } from 'react';

export default function ScheduleModal({ profile, onClose }) {
  const [email, setEmail] = useState('');
  const [link, setLink] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    alert(`Scheduled interview with ${profile.name}`);
    onClose();
  };

  if (!profile) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Schedule Interview</h2>
        <input 
          className="border p-2 mb-2 w-full" 
          placeholder="Applicant Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          className="border p-2 mb-2 w-full" 
          placeholder="Meeting Link" 
          value={link} 
          onChange={(e) => setLink(e.target.value)} 
        />
        <input 
          type="date" 
          className="border p-2 mb-2 w-full" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <input 
          type="time" 
          className="border p-2 mb-2 w-full" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />
        <div className="flex justify-between mt-4">
          <button className="bg-gray-400 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>Schedule</button>
        </div>
      </div>
    </div>
  );
}
