import React, { memo } from 'react';

// Shared props interface for all section shells
interface SectionShellProps {
  className?: string;
  tilt?: boolean; // default true
}

// Props for the TestimonialsMockup component
interface TestimonialsMockupProps extends SectionShellProps {
  testimonials?: {
    name: string;
    role: string;
    quote: string;
    avatarUrl?: string; // Optional avatar image URL
  }[];
}

// Default testimonials data if none are provided
const defaultTestimonials = [
  {
    name: 'Jane Doe',
    role: 'CEO, Example Inc.',
    quote: 'This is the best product I have ever used. It changed my life.',
  },
];

/**
 * A component to display social proof through customer testimonials.
 * It uses a "floating window" visual language for a unified look.
 */
const TestimonialsMockup: React.FC<TestimonialsMockupProps> = ({
  className = '',
  tilt = true,
  testimonials = defaultTestimonials,
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

        <div className="flex flex-col gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
              style={{ opacity: 1 - index * 0.2 }}
            >
              <div className="w-10 h-10 bg-brand-card/50 rounded-full flex-shrink-0 border border-brand-border">
                {/* Avatar placeholder */}
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-brand-text-primary">{testimonial.name}</p>
                <p className="text-xs text-brand-text-secondary opacity-70">{testimonial.role}</p>
                <blockquote className="mt-2 text-sm italic text-brand-text-body">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(TestimonialsMockup);
