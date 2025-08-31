import React, { memo } from 'react';
import { BeakerIcon, AcademicCapIcon, MegaphoneIcon } from '@heroicons/react/24/outline';

interface SectionShellProps {
  className?: string;
  tilt?: boolean;
}

interface HowItWorksProps extends SectionShellProps {
  steps: {
    icon: React.ElementType;
    title: string;
    description: string;
  }[];
}

const HowItWorks: React.FC<HowItWorksProps> = ({
  className = '',
  tilt = true,
  steps,
}) => {
  return (
    <div
      className={`bg-brand-card rounded-2xl border border-brand-border shadow-2xl shadow-black/25 ${
        tilt ? 'rotate-3' : ''
      } transition-transform duration-300 ease-in-out hover:rotate-0 ${className}`}
    >
      <div className="p-6 bg-brand-background rounded-xl">
        <h3 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">How It Works</h3>
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                <step.icon className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h4 className="font-bold text-brand-text-primary">{step.title}</h4>
                <p className="text-brand-text-body">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(HowItWorks);
