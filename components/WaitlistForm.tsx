import React, { useState } from 'react';
import { FormStatus } from '../types';
import { CheckCircleIcon, ErrorCircleIcon, LoadingSpinnerIcon } from './icons';

export const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>(FormStatus.Idle);
  const [message, setMessage] = useState('');

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');

    if (!emailRegex.test(email)) {
      setStatus(FormStatus.Error);
      setMessage('Please enter a valid email address.');
      return;
    }

    if (!consent) {
      setStatus(FormStatus.Error);
      setMessage('You must agree to the terms to join.');
      return;
    }

    setStatus(FormStatus.Loading);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, consent }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred.' }));
        throw new Error(errorData.message || 'Failed to join the waitlist. Please try again.');
      }

      setStatus(FormStatus.Success);

    } catch (error) {
      setStatus(FormStatus.Error);
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  if (status === FormStatus.Success) {
    return (
      <div className="text-center p-8 bg-brand-background/50 rounded-lg border border-brand-border flex flex-col items-center animate-fade-in">
        <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-4 ring-8 ring-brand-green/5">
            <CheckCircleIcon className="text-4xl text-brand-green" />
        </div>
        <h3 className="text-xl font-semibold text-brand-text-primary mb-2">You're on the list!</h3>
        <p className="text-brand-text-body">We'll be in touch soon. Welcome to the community!</p>
      </div>
    );
  }

  const isLoading = status === FormStatus.Loading;

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === FormStatus.Error) {
                setStatus(FormStatus.Idle);
                setMessage('');
              }
            }}
            placeholder="elon@tesla.com"
            disabled={isLoading}
            className="w-full px-4 py-3 bg-brand-background border border-brand-border rounded-lg text-brand-text-primary placeholder-brand-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all duration-200"
            aria-label="Email address"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            id="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => {
                setConsent(e.target.checked);
                if (status === FormStatus.Error) {
                    setStatus(FormStatus.Idle);
                    setMessage('');
                }
            }}
            disabled={isLoading}
            className="w-5 h-5 bg-brand-background border-brand-border rounded text-brand-green focus:ring-brand-green cursor-pointer"
          />
          <label htmlFor="consent" className="text-sm text-brand-text-body">
            I agree to receive emails and accept the <a href="#" className="underline hover:text-brand-green transition-colors">Privacy Policy</a>.
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center px-4 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-200 disabled:bg-button-disabled-bg disabled:text-button-disabled-text disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
        >
          {isLoading ? (
            <>
              <LoadingSpinnerIcon className="-ml-1 mr-3 h-5 w-5" />
              Submitting...
            </>
          ) : (
            'Reserve My Founding Member Spot'
          )}
        </button>
      </form>
      <p className="text-center text-sm text-brand-text-secondary mt-4">It's free to join the waitlist. No commitment, no spam.</p>
      {status === FormStatus.Error && message && (
        <div className="mt-4 flex items-center text-red-500 text-sm">
            <ErrorCircleIcon className="text-xl mr-2 flex-shrink-0" />
            <p>{message}</p>
        </div>
      )}
    </div>
  );
};
