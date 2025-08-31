import React, { memo } from 'react';
import { GiftIcon } from '@heroicons/react/24/outline';

interface SectionShellProps {
  className?: string;
  tilt?: boolean;
}

interface BonusesProps extends SectionShellProps {
  bonuses: {
    title: string;
    description: string;
  }[];
}

const Bonuses: React.FC<BonusesProps> = ({
  className = '',
  tilt = true,
  bonuses,
}) => {
  return (
    <div
      className={`bg-brand-card rounded-2xl border border-brand-border shadow-2xl shadow-black/25 ${
        tilt ? 'rotate-3' : ''
      } transition-transform duration-300 ease-in-out hover:rotate-0 ${className}`}
    >
      <div className="p-6 bg-brand-background rounded-xl">
        <h3 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">Bonuses</h3>
        <div className="space-y-4">
          {bonuses.map((bonus, index) => (
            <div key={index} className="flex items-start gap-3">
              <GiftIcon className="w-6 h-6 text-brand-green mt-1" />
              <div>
                <h4 className="font-bold text-brand-text-primary">{bonus.title}</h4>
                <p className="text-brand-text-body">{bonus.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Bonuses);
