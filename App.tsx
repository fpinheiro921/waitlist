import React from 'react';
import { WaitlistForm } from './components/WaitlistForm';
import { ScienceIcon } from './components/icons';
import { Analytics } from '@vercel/analytics/react';
import FeaturesGridMockup from './components/landing/FeaturesGridMockup';
import ProblemSolutionMockup from './components/landing/ProblemSolutionMockup';
import TestimonialsMockup from './components/landing/TestimonialsMockup';
import ProductRatingsMockup from './components/landing/ProductRatingsMockup';
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
              For Busy Operators: The Blueprint to Launch a Cash-Flowing Micro-App
            </h1>
            <p className="text-lg md:text-xl max-w-xl text-brand-text-body leading-relaxed">
              Stop collecting ideas. Start shipping assets. Join the waitlist for The AI Hustle Lab and get the system to turn your ideas into a portfolio of profitable micro-apps.
            </p>
          </div>
        </div>

        <ProblemSolutionMockup
          tilt={false}
          problem={{
            title: 'The Problem',
            description:
              "Your Notion is a graveyard of good ideas. You know AI is the ultimate leverage, but you're stuck in the gap between concept and cash flow. You don't have time for a 6-month dev cycle, and you're tired of \"guru\" courses that deliver theory instead of a shippable product.",
          }}
          solution={{
            title: 'The Solution',
            description:
              "This is not a course. It's a production system. Inside, you'll learn to operate like a lean digital product studio using my process and tools.",
          }}
        />

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

        <div className="w-full max-w-2xl text-left space-y-8">
            <h3 className="text-2xl font-bold text-brand-text-primary mb-4 text-center">Don't Just Take Our Word For It</h3>
            <TestimonialsMockup
              tilt={false}
              testimonials={[
                {
                  name: 'Dan McClellan',
                  role: 'Business Strategist',
                  quote:
                    "Defining your niche is critical... If you can get people to do that in the first part of your course they'll have a strong foundation, and be a lot more likely to see success with the rest of the course.",
                },
                {
                  name: 'Nile Gomez',
                  role: 'Content Strategist',
                  quote:
                    "Medium Muse GPT by AI Hustle Lab is a powerhouse tool you don’t want to miss. This isn’t just another AI writing assistant—it’s a strategic weapon designed to elevate your writing, boost engagement, and grow your audience.",
                },
              ]}
            />
            <ProductRatingsMockup />
        </div>

        <div className="w-full max-w-2xl p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border-2 border-brand-green shadow-2xl shadow-green-500/30 text-center space-y-6 text-white">
            <h3 className="text-3xl font-bold">Claim Your Founding Member Grand Slam Offer</h3>
            <p className="text-lg">This will not be repeated. The first <span className="font-semibold text-brand-green">50 Founding Members</span> lock in an insane deal. By entering your email, you secure your spot.</p>
            
            <div className="text-left max-w-lg mx-auto space-y-4">
                <div className="flex items-start gap-3"><span className="text-brand-green pt-1">✅</span><span><span className="font-bold">LIFETIME DISCOUNT:</span> Lock in $19/month forever (normally $39/month).</span></div>
                <div className="flex items-start gap-3"><span className="text-brand-green pt-1">✅</span><span><span className="font-bold">IMMEDIATE FULL ACCESS:</span> Get all tools, including the flagship ContentGenius AI, from day one.</span></div>
                <div className="flex items-start gap-3"><span className="text-brand-green pt-1">✅</span><span><span className="font-bold">FIRST ACCESS:</span> Be the first to know when the doors open.</span></div>
            </div>

            <div className="w-full max-w-md mx-auto pt-4">
                <WaitlistForm />
            </div>
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
