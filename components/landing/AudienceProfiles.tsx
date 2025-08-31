import React from 'react';
import { UserCircleIcon, ArrowPathIcon, BoltIcon } from '@heroicons/react/24/outline';

const AudienceProfiles = () => {
  const profiles = [
    {
      icon: UserCircleIcon,
      description: "You have a list of ideas but feel overwhelmed about where to start. You're looking for a clear first step to turn your vision into a reality.",
    },
    {
      icon: ArrowPathIcon,
      description: "You've tried building things before, but got lost in the process. You're looking for a structured system to guide you from concept to launch without the guesswork.",
    },
    {
      icon: BoltIcon,
      description: "You're already building, but your efforts aren't leading to the results you want. You're ready to stop spinning your wheels and start shipping profitable products.",
    },
  ];

  return (
    <div className="w-full max-w-2xl text-left">
      <h3 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">Who Is This For?</h3>
      <p className="text-brand-text-body mb-8 text-center">This is for the builders, the creators, and the entrepreneurs who are ready to ship.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <div key={index} className="bg-brand-card border border-brand-border rounded-lg p-6 text-center flex flex-col items-center">
            <profile.icon className="w-12 h-12 text-brand-green mb-4" />
            <p className="text-brand-text-body text-sm">{profile.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudienceProfiles;
