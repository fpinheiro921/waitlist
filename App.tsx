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
              Become an Asset Builder Who Ships, Without Wasting Your Weekends on Unvalidated Ideas.
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-brand-text-body leading-relaxed">
              The AI Hustle Lab is a private Skool community and digital product studio for busy operators. We provide the starter code, launch playbooks, and transparent revenue proof to help you turn weekend ideas into cash-flowing assets.
            </p>
          </div>
        </div>

        <div className="w-full max-w-2xl p-8 bg-brand-card rounded-xl border border-brand-border shadow-lg shadow-black/25 text-left">
            <h2 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">WHEN YOU JOIN, YOU GET THE ENTIRE PRODUCTION SYSTEM:</h2>
            <ul className="list-disc list-inside text-brand-text-body space-y-2">
                <li><span className="font-semibold text-brand-text-primary">The Finished Product:</span> A library of useful, AI-powered micro-apps.</li>
                <li><span className="font-semibold text-brand-text-primary">The Production Blueprint:</span> The exact build logs, starter repos, and launch checklists we use to build them.</li>
            </ul>
        </div>

        <div className="w-full max-w-2xl text-center">
            <h2 className="text-xl font-bold text-brand-text-primary">THE FOUNDING MEMBER OFFER:</h2>
            <p className="text-brand-text-body mt-1">I'm limiting the Founding Member offer to the first <span className="font-semibold text-brand-green">50 members</span> to ensure I can give everyone my full attention. By joining the waitlist, you'll be the first to get access to this one-time-only lifetime discount.</p>
        </div>

        <div className="w-full max-w-md p-8 bg-brand-card rounded-xl border border-brand-border shadow-lg shadow-black/25">
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
