import React from 'react';
import { WaitlistForm } from './components/WaitlistForm';
import { ScienceIcon } from './components/icons';

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 antialiased selection:bg-brand-green selection:text-white">
      <main className="max-w-2xl w-full mx-auto text-center flex flex-col items-center gap-8 md:gap-12">
        
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 bg-brand-card rounded-xl flex items-center justify-center border border-brand-border shadow-lg shadow-black/25">
            <ScienceIcon className="text-4xl text-brand-green" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text-primary">
              The AI Hustle Lab
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-brand-text-body leading-relaxed">
              Stop wasting time on hype. Join a private community of serious builders creating a portfolio of cash-flowing digital assets with AI.
            </p>
          </div>
        </div>

        <div className="w-full max-w-md p-8 bg-brand-card rounded-xl border border-brand-border shadow-lg shadow-black/25">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-brand-text-primary">Join the Waitlist</h2>
                <p className="text-brand-text-body mt-1">Secure your spot as a <span className="text-brand-green font-medium">Founding Member</span> and get lifetime benefits.</p>
            </div>
          <WaitlistForm />
        </div>

        <footer className="text-center text-brand-text-secondary text-sm mt-8">
            <p>&copy; {new Date().getFullYear()} The AI Hustle Lab. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
};

export default App;