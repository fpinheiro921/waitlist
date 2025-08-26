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
            <h3 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">HERE'S EXACTLY WHAT YOU'LL GET INSIDE</h3>
            <p className="text-brand-text-body mb-4 text-center">As a member, you get full access to our studio's operational playbook in the Classroom:</p>
            <ul className="space-y-3">
                <li className="flex items-start"><span className="text-brand-green mr-2">✅</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">MODULE: THE STUDIO TOOLKIT:</span> A suite of specialized AI agents for debugging code, optimizing sales pages, and accelerating your entire workflow.</span></li>
                <li className="flex items-start"><span className="text-brand-green mr-2">✅</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">MODULE 1: THE PROMPT ENGINEERING PRIMER:</span> The foundational course on how to command AI to get production-ready output.</span></li>
                <li className="flex items-start"><span className="text-brand-green mr-2">✅</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">MODULE 2: STUDIO OPS: MINDSET & STACK:</span> The complete A-Z playbook for the "Idea -> Build -> Ship -> Monetize" loop.</span></li>
                <li className="flex items-start"><span className="text-brand-green mr-2">✅</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">MODULE 3: AI HUSTLE WRITER:</span> A production blueprint for building a high-value content generation app.</span></li>
                <li className="flex items-start"><span className="text-brand-green mr-2">✅</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">MODULE 4: SPECFORGE:</span> The blueprint for building a more complex, SaaS-style micro-app with a freemium model.</span></li>
                <li className="flex items-start"><span className="text-brand-green mr-2">✅</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">MODULE 5: THE SIGNAL BAY:</span> The playbook for the Signal AI co-pilot, for mastering strategic engagement on X.</span></li>
            </ul>
        </div>

        <div className="w-full max-w-2xl p-8 bg-brand-card rounded-xl border border-brand-border shadow-lg shadow-black/25 text-left">
            <h3 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">THE OFFER, ENGINEERED FOR YOU</h3>
            <p className="text-brand-text-body mb-4 text-center">We've structured this offer to maximize your results while eliminating the things you can't afford to waste: time and effort.</p>
            <ul className="space-y-3">
                <li className="flex items-start"><span className="text-brand-green mr-2 text-2xl">📈</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">THE PROOF:</span> We increase your likelihood of achievement with transparent build logs and public revenue dashboards. We show you what works.</span></li>
                <li className="flex items-start"><span className="text-brand-green mr-2 text-2xl">⏳</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">THE SPEED:</span> We crush the time delay from months to a single weekend. Our blueprints are designed for rapid execution.</span></li>
                <li className="flex items-start"><span className="text-brand-green mr-2 text-2xl">🛠️</span><span className="text-brand-text-body"><span className="font-semibold text-brand-text-primary">THE LEVERAGE:</span> We eliminate guesswork with copy-paste starter repos, proven SOPs, and powerful AI prompts.</span></li>
            </ul>
        </div>

        <div className="w-full max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-brand-text-primary">THE FOUNDING MEMBER DEAL</h3>
            <p className="text-brand-text-body mt-2">I'm limiting the initial launch to <span className="font-semibold text-brand-green">50 Founding Members</span> to ensure I can give everyone my full attention. By joining the waitlist, you are securing your spot to get this one-time-only offer:</p>
            <ul className="list-disc list-inside text-brand-text-body space-y-1 mt-2 inline-block text-left">
                <li>A lifetime discount on your membership.</li>
                <li>A permanent "Founding Member" badge in the community.</li>
            </ul>
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
