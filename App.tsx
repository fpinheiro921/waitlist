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
              The AI Hustle Lab is a private Skool community and digital product studio. We provide the systems, starter code, and transparent proof to help busy operators like you turn ideas into a portfolio of cash-flowing digital assets.
            </p>
          </div>
        </div>

        <div className="w-full max-w-2xl p-8 bg-brand-card rounded-xl border border-brand-border shadow-lg shadow-black/25 text-left space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-brand-text-primary mb-2 text-center">The Problem</h2>
                <p className="text-brand-text-body">
                    Your Notion is a graveyard of good ideas. You know AI is the ultimate leverage, but you're stuck in the gap between concept and cash flow. You don't have time for a 6-month dev cycle, and you're tired of "guru" courses that deliver theory instead of shippable products.
                </p>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-brand-text-primary mb-2 text-center">The Solution</h2>
                <p className="text-brand-text-body mb-4">
                    This is not a course. <span className="font-bold">It's a production system.</span> We give you the two things you actually need to succeed:
                </p>
                <ul className="list-disc list-inside text-brand-text-body space-y-2">
                    <li><span className="font-semibold text-brand-text-primary">The Finished Product:</span> A library of useful, AI-powered micro-apps.</li>
                    <li><span className="font-semibold text-brand-text-primary">The Production Blueprint:</span> The exact build logs, starter repos, and launch checklists we use to build them.</li>
                </ul>
            </div>
        </div>

        <div className="w-full max-w-2xl p-8 bg-brand-card rounded-xl border border-brand-border shadow-lg shadow-black/25 text-left">
            <h3 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">WHAT YOU GET INSIDE THE LAB</h3>
            <p className="text-brand-text-body mb-4 text-center">As a member, you get full access to our studio's operational playbook in the Classroom:</p>
            <ul className="space-y-3">
                <li className="flex items-start"><span className="text-brand-green mr-2">✅</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">THE STUDIO TOOLKIT:</span> A suite of specialized AI agents for debugging code, optimizing sales pages, and accelerating your workflow.</span></li>
                <li className="flex items-start"><span className="text-brand-green mr-2">✅</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">THE PROMPT ENGINE:</span> The A-Z playbook for turning ideas into high-quality AI outputs.</span></li>
                <li className="flex items-start"><span className="text-brand-green mr-2">✅</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">STUDIO OPS: MINDSET & STACK:</span> The complete playbook for the "Idea -> Build -> Ship -> Monetize" loop.</span></li>
                <li className="flex items-start"><span className="text-brand-green mr-2">✅</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">PRODUCTION BLUEPRINTS:</span> Full, end-to-end breakdowns of our micro-apps like AI Hustle Writer, SpecForge, and The Signal Bay, complete with starter code and launch results.</span></li>
            </ul>
        </div>

        <div className="w-full max-w-2xl p-8 bg-brand-card rounded-xl border border-brand-border shadow-lg shadow-black/25 text-left space-y-4">
            <h3 className="text-2xl font-bold text-brand-text-primary text-center">THE FOUNDING MEMBER OFFER (THIS WILL NOT BE REPEATED)</h3>
            <p className="text-brand-text-body text-center">I'm limiting the initial launch to <span className="font-semibold text-brand-green">50 Founding Members</span> to ensure I can give everyone my full attention. By joining the waitlist today, you are securing your spot to get this one-time-only Grand Slam Offer:</p>
            <div>
                <p className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">LIFETIME DISCOUNT:</span> You will lock in a rate of $19/month, forever. The price will increase to $39/month for the public after the launch window closes.</p>
            </div>
            <div>
                <p className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">EXCLUSIVE STATUS:</span> You will receive a permanent "Founding Member" badge in the community, a public signal of your early support.</p>
            </div>
            <div>
                <p className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">FIRST ACCESS:</span> You'll be the first to know when the doors open, before anyone else.</p>
            </div>
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
