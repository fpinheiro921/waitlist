import React, { memo } from 'react';

interface SectionShellProps {
  className?: string;
  tilt?: boolean;
}

interface SneakPeekProps extends SectionShellProps {
  items: {
    title: string;
    description: string;
  }[];
}

const SneakPeek: React.FC<SneakPeekProps> = ({
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
        <h3 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">Sneak Peek</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-brand-card border border-brand-border rounded-lg p-4">
              <h4 className="font-bold text-brand-text-primary">{item.title}</h4>
              <p className="text-brand-text-body text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(SneakPeek);
