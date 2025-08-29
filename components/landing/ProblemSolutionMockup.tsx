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

        <div className="flex flex-col md:flex-row gap-6 md:gap-0">
          {/* Problem Section */}
          <div className="flex-1 flex flex-col items-start text-left p-6">
            <div className="flex items-center gap-3 mb-3">
              <FireIcon className="w-7 h-7 text-red-500" />
              <h3 className="text-2xl font-bold text-brand-text-primary">{problem.title}</h3>
            </div>
            <p className="text-brand-text-body opacity-90">{problem.description}</p>
          </div>

          {/* Divider */}
          <div className="w-full md:w-px bg-brand-border/50"></div>

          {/* Solution Section */}
          <div className="flex-1 flex flex-col items-start text-left p-6">
            <div className="flex items-center gap-3 mb-3">
              <SparklesIcon className="w-7 h-7 text-brand-green" />
              <h3 className="text-2xl font-bold text-brand-text-primary">{solution.title}</h3>
            </div>
            <p className="text-brand-text-body opacity-90">{solution.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProblemSolutionMockup);
