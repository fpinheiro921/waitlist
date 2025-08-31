import React, { memo } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

interface SectionShellProps {
  className?: string;
  tilt?: boolean;
}

interface WhatYouGetProps extends SectionShellProps {
  items: string[];
}

const WhatYouGet: React.FC<WhatYouGetProps> = ({
  className = '',
  tilt = true,
  items,
}) => {
  return (
    <div
      className={`bg-brand-card rounded-2xl border border-brand-border shadow-2xl shadow-black/25 ${
        tilt ? 'rotate-3' : ''
      } transition-transform duration-300 ease-in-out hover:rotate-0 ${className}`}
    >
      <div className="p-6 bg-brand-background rounded-xl">
        <h3 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">What You Get</h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" />
              <span className="text-brand-text-body">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(WhatYouGet);
