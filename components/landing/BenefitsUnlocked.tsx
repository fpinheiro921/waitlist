import React, { memo } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface SectionShellProps {
  className?: string;
  tilt?: boolean;
}

interface BenefitsUnlockedProps extends SectionShellProps {
  benefits: {
    title: string;
    description: string;
  }[];
}

const BenefitsUnlocked: React.FC<BenefitsUnlockedProps> = ({
  className = '',
  tilt = true,
  benefits,
}) => {
  return (
    <div
      className={`bg-brand-card rounded-2xl border border-brand-border shadow-2xl shadow-black/25 ${
        tilt ? 'rotate-3' : ''
      } transition-transform duration-300 ease-in-out hover:rotate-0 ${className}`}
    >
      <div className="p-6 bg-brand-background rounded-xl">
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-brand-green mt-1" />
              <div>
                <h4 className="font-bold text-brand-text-primary">{benefit.title}</h4>
                <p className="text-brand-text-body">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(BenefitsUnlocked);
