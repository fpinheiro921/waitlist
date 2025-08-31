import React, { memo } from 'react';
import { FireIcon } from '@heroicons/react/24/outline';

interface SectionShellProps {
  className?: string;
  tilt?: boolean;
}

interface PainPointsProps extends SectionShellProps {
  painPoints: {
    title: string;
    description: string;
  }[];
}

const PainPoints: React.FC<PainPointsProps> = ({
  className = '',
  tilt = true,
  painPoints,
}) => {
  return (
    <div
      className={`bg-brand-card rounded-2xl border border-brand-border shadow-2xl shadow-black/25 ${
        tilt ? 'rotate-3' : ''
      } transition-transform duration-300 ease-in-out hover:rotate-0 ${className}`}
    >
      <div className="p-6 bg-brand-background rounded-xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2.5 h-2.5 bg-[#ff5f56] rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-[#ffbd2e] rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-[#27c93f] rounded-full"></div>
        </div>

        <div className="flex flex-col gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="flex-1 flex flex-col items-start text-left p-6">
              <div className="flex items-center gap-3 mb-3">
                <FireIcon className="w-7 h-7 text-red-500" />
                <h3 className="text-2xl font-bold text-brand-text-primary">{point.title}</h3>
              </div>
              <p className="text-brand-text-body opacity-90">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(PainPoints);
