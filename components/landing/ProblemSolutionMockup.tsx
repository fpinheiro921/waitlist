import React, { memo } from 'react';
import { FireIcon, SparklesIcon } from '@heroicons/react/24/outline';

// Shared props interface for all section shells
interface SectionShellProps {
  className?: string;
  tilt?: boolean; // default true
}

// Props for the ProblemSolutionMockup component
interface ProblemSolutionMockupProps extends SectionShellProps {
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
}

/**
 * A component to display a problem and solution side-by-side.
 * It uses a "floating window" visual language for a unified look.
 */
const ProblemSolutionMockup: React.FC<ProblemSolutionMockupProps> = ({
  className = '',
  tilt = true,
  problem,
  solution,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          {/* Problem Section */}
          <div className="flex flex-col items-center gap-2 p-4 bg-brand-card/50 rounded-lg border border-brand-border">
            <FireIcon className="w-8 h-8 text-red-500 mb-2" />
            <h3 className="text-2xl font-bold text-brand-text-primary">{problem.title}</h3>
            <p className="text-brand-text-body">{problem.description}</p>
          </div>

          {/* Solution Section */}
          <div className="flex flex-col items-center gap-2 p-4 bg-brand-card/50 rounded-lg border border-brand-border">
            <SparklesIcon className="w-8 h-8 text-brand-green mb-2" />
            <h3 className="text-2xl font-bold text-brand-text-primary">{solution.title}</h3>
            <p className="text-brand-text-body">{solution.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProblemSolutionMockup);
