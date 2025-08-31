import React, { memo } from 'react';

interface SectionShellProps {
  className?: string;
  tilt?: boolean;
}

interface PricingProps extends SectionShellProps {
  price: number;
  originalPrice: number;
  features: string[];
}

const Pricing: React.FC<PricingProps> = ({
  className = '',
  tilt = true,
  price,
  originalPrice,
  features,
}) => {
  return (
    <div
      className={`bg-brand-card rounded-2xl border border-brand-border shadow-2xl shadow-black/25 ${
        tilt ? 'rotate-3' : ''
      } transition-transform duration-300 ease-in-out hover:rotate-0 ${className}`}
    >
      <div className="p-6 bg-brand-background rounded-xl text-center">
        <h3 className="text-2xl font-bold text-brand-text-primary mb-2">Pricing</h3>
        <p className="text-brand-text-body mb-4">Become a founding member and lock in this price forever.</p>
        <div className="mb-4">
          <span className="text-4xl font-bold text-brand-text-primary">${price}</span>
          <span className="text-lg text-brand-text-secondary">/month</span>
          <span className="ml-2 line-through text-red-500">${originalPrice}</span>
        </div>
        <ul className="text-left space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              {feature}
            </li>
          ))}
        </ul>
        <a href="#waitlist-form" className="w-full block px-4 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-200">
          Secure My Spot
        </a>
      </div>
    </div>
  );
};

export default memo(Pricing);
