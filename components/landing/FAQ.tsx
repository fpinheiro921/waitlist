import React, { memo, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface SectionShellProps {
  className?: string;
  tilt?: boolean;
}

interface FAQProps extends SectionShellProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FAQ: React.FC<FAQProps> = ({
  className = '',
  tilt = true,
  faqs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`bg-brand-card rounded-2xl border border-brand-border shadow-2xl shadow-black/25 ${
        tilt ? 'rotate-3' : ''
      } transition-transform duration-300 ease-in-out hover:rotate-0 ${className}`}
    >
      <div className="p-6 bg-brand-background rounded-xl">
        <h3 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-brand-border pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-brand-text-primary">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-2 text-brand-text-body">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(FAQ);
