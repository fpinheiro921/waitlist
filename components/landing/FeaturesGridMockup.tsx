import React, { memo } from 'react';

// Shared props interface for all section shells
interface SectionShellProps {
  className?: string;
  tilt?: boolean; // default true
}

// Props for the FeaturesGridMockup component
interface FeaturesGridMockupProps extends SectionShellProps {
  features?: {
    icon: React.ElementType;
    title: string;
    description: string;
  }[];
}

// Default features data if none are provided
const defaultFeatures = [
  {
    icon: () => <div></div>,
    title: 'Feature One',
    description: 'This is a description for the first feature.',
  },
  {
    icon: () => <div></div>,
    title: 'Feature Two',
    description: 'This is a description for the second feature.',
  },
  {
    icon: () => <div></div>,
    title: 'Feature Three',
    description: 'This is a description for the third feature.',
  },
];

/**
 * A component to display key features in a visually appealing grid.
 * It uses a "floating window" visual language for a unified look.
 */
const FeaturesGridMockup: React.FC<FeaturesGridMockupProps> = ({
  className = '',
  tilt = true,
  features = defaultFeatures,
}) => {
  return (
    <div
      className={`bg-brand-card rounded-2xl border border-brand-border shadow-2xl shadow-black/25 ${
        tilt ? 'rotate-3' : ''
      } transition-transform duration-300 ease-in-out hover:rotate-0 ${className}`}
    >
      <div className="p-6 bg-brand-background rounded-xl">
        {/* Optional window dots */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2.5 h-2.5 bg-[#ff5f56] rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-[#ffbd2e] rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-[#27c93f] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start gap-2 p-4 bg-brand-card/50 rounded-lg border border-brand-border transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="w-8 h-8 text-brand-green mb-2" />
                <h3 className="font-semibold text-brand-text-primary">{feature.title}</h3>
                <p className="text-sm text-brand-text-body opacity-70">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(FeaturesGridMockup);
