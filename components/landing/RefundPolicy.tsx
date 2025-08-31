import React, { memo } from 'react';

interface SectionShellProps {
  className?: string;
  tilt?: boolean;
}

interface RefundPolicyProps extends SectionShellProps {
  policy: string;
}

const RefundPolicy: React.FC<RefundPolicyProps> = ({
  className = '',
  tilt = true,
  policy,
}) => {
  return (
    <div
      className={`bg-brand-card rounded-2xl border border-brand-border shadow-2xl shadow-black/25 ${
        tilt ? 'rotate-3' : ''
      } transition-transform duration-300 ease-in-out hover:rotate-0 ${className}`}
    >
      <div className="p-6 bg-brand-background rounded-xl text-center">
        <h3 className="text-2xl font-bold text-brand-text-primary mb-4">Refund Policy</h3>
        <p className="text-brand-text-body">{policy}</p>
      </div>
    </div>
  );
};

export default memo(RefundPolicy);
