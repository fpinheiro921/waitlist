import React, { memo } from 'react';

interface SectionShellProps {
  className?: string;
  tilt?: boolean;
}

interface CredibilityProps extends SectionShellProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

const Credibility: React.FC<CredibilityProps> = ({
  className = '',
  tilt = true,
  name,
  title,
  bio,
  imageUrl,
}) => {
  return (
    <div
      className={`bg-brand-card rounded-2xl border border-brand-border shadow-2xl shadow-black/25 ${
        tilt ? 'rotate-3' : ''
      } transition-transform duration-300 ease-in-out hover:rotate-0 ${className}`}
    >
      <div className="p-6 bg-brand-background rounded-xl text-center">
        <h3 className="text-2xl font-bold text-brand-text-primary mb-4">About the Creator</h3>
        <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h4 className="text-xl font-bold text-brand-text-primary">{name}</h4>
        <p className="text-brand-text-secondary mb-4">{title}</p>
        <p className="text-brand-text-body">{bio}</p>
      </div>
    </div>
  );
};

export default memo(Credibility);
