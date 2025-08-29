import React from 'react';
import { WaitlistForm } from './components/WaitlistForm';
import { ScienceIcon } from './components/icons';
import { Analytics } from '@vercel/analytics/react';
import FeaturesGridMockup from './components/landing/FeaturesGridMockup';
import {
  AcademicCapIcon,
  BeakerIcon,
  MegaphoneIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

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
              Stop Collecting Ideas. Start Shipping Assets.
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-brand-text-body leading-relaxed">
              The AI Hustle Lab is a private Skool community and digital product studio. We provide the guided process and proprietary AI tools to help busy operators like you systematically turn your weekend ideas into a portfolio of cash-flowing micro-apps.
            </p>
          </div>
        </div>

        <div className="w-full max-w-2xl p-8 bg-brand-card rounded-xl border border-brand-border shadow-lg shadow-black/25 text-left space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-brand-text-primary mb-2 text-center">The Problem</h2>
                <p className="text-brand-text-body">
                    Your Notion is a graveyard of good ideas. You know AI is the ultimate leverage, but you're stuck in the gap between concept and cash flow. You don't have time for a 6-month dev cycle, and you're tired of "guru" courses that deliver theory instead of a shippable product.
                </p>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-brand-text-primary mb-2 text-center">The Solution</h2>
                <p className="text-brand-text-body">
                    This is not a course. <span className="font-bold">It's a production system.</span> Inside, you'll learn to operate like a lean digital product studio using my process and tools.
                </p>
            </div>
        </div>

        <div className="w-full max-w-2xl text-left">
            <h3 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">A LOOK INSIDE: YOUR PRODUCTION WORKFLOW</h3>
            <p className="text-brand-text-body mb-8 text-center">When you join, you get access to the entire operational playbook and the AI apps we use to execute it:</p>
            <FeaturesGridMockup
              tilt={false}
              features={[
                {
                  icon: AcademicCapIcon,
                  title: 'THE PROCESS',
                  description: 'Learn the "Vibe Coding" methodology, a rapid-fire system for building and launching micro-apps in a single weekend.',
                },
                {
                  icon: BeakerIcon,
                  title: 'SPECFORGE APP',
                  description: 'Use my proprietary app to turn your raw idea into a comprehensive technical spec and PRD, ready for any AI code generation platform.',
                },
                {
                  icon: MegaphoneIcon,
                  title: 'SIGNAL APP',
                  description: 'Grow your personal brand on X/Twitter using my custom-built tool for creating high-engagement, strategic AI-powered comments.',
                },
                {
                  icon: SparklesIcon,
                  title: 'CONTENTGENIUS AI',
                  description: 'Install a complete content engine. Use my flagship app to find your niche, define your content strategy, and generate a full workflow of blogs, newsletters, and tweets.',
                },
              ]}
            />
        </div>

        <div className="w-full max-w-2xl p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border-2 border-brand-green shadow-2xl shadow-green-500/30 text-left space-y-4 text-white">
            <h3 className="text-2xl font-bold text-center">THE FOUNDING MEMBER OFFER (THIS WILL NOT BE REPEATED)</h3>
            <p className="text-center">I'm limiting the initial launch to <span className="font-semibold text-brand-green">50 Founding Members</span> to ensure I can give everyone my full attention. By joining the waitlist today, you are securing your spot to get this one-time-only Grand Slam Offer:</p>
            <div className="space-y-4 pt-4">
                <div>
                    <h4 className="font-semibold">LIFETIME DISCOUNT</h4>
                    <p className="text-gray-300">You will lock in a rate of $19/month, forever. The price will increase to $39/month for the public after the launch window closes.</p>
                </div>
                <div>
                    <h4 className="font-semibold">IMMEDIATE FULL ACCESS</h4>
                    <p className="text-gray-300">Get access to all modules from day one, including the flagship AI ContentGenius app. This is my top-tier content creation engine, integrating all my knowledge on content strategy and AI generation, which will only be available to regular members who reach Level 9.</p>
                </div>
                <div>
                    <h4 className="font-semibold">FIRST ACCESS</h4>
                    <p className="text-gray-300">You'll be the first to know when the doors open.</p>
                </div>
            </div>
        </div>

        <div className="w-full max-w-md p-8 bg-brand-card rounded-xl border border-brand-border shadow-lg shadow-black/25">
          <WaitlistForm />
        </div>

        <footer className="text-center text-brand-text-secondary text-sm mt-8">
            <p>&copy; {new Date().getFullYear()} The AI Hustle Lab. All rights reserved.</p>
        </footer>

      </main>
      <Analytics />
    </div>
  );
};

export default App;
