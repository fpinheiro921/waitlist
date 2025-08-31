import React from 'react';
import { WaitlistForm } from './components/WaitlistForm';
import { ScienceIcon } from './components/icons';
import { Analytics } from '@vercel/analytics/react';
import AudienceProfiles from './components/landing/AudienceProfiles';
import TestimonialsMockup from './components/landing/TestimonialsMockup';
import PainPoints from './components/landing/PainPoints';
import BenefitsUnlocked from './components/landing/BenefitsUnlocked';
import HowItWorks from './components/landing/HowItWorks';
import SneakPeek from './components/landing/SneakPeek';
import Credibility from './components/landing/Credibility';
import WhatYouGet from './components/landing/WhatYouGet';
import Bonuses from './components/landing/Bonuses';
import Pricing from './components/landing/Pricing';
import FAQ from './components/landing/FAQ';
import RefundPolicy from './components/landing/RefundPolicy';
import {
  AcademicCapIcon,
  BeakerIcon,
  MegaphoneIcon,
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

        <AudienceProfiles />

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

        <PainPoints
          tilt={false}
          painPoints={[
            {
              title: 'Idea Overload',
              description: "Your Notion is a graveyard of good ideas. You're stuck in the gap between concept and cash flow.",
            },
            {
              title: 'Slow Dev Cycles',
              description: "You don't have time for a 6-month development cycle. You need to ship faster.",
            },
            {
              title: 'Theory Overload',
              description: "You're tired of 'guru' courses that deliver theory instead of a shippable product.",
            },
          ]}
        />

        <BenefitsUnlocked
          tilt={false}
          benefits={[
            {
              title: 'Ship Faster',
              description: 'Go from idea to shippable product in a weekend.',
            },
            {
              title: 'Build a Portfolio',
              description: 'Turn your ideas into a portfolio of profitable micro-apps.',
            },
            {
              title: 'Actionable System',
              description: 'Get a production system, not just another course.',
            },
            {
              title: 'Leverage AI',
              description: 'Use AI as the ultimate leverage to build and grow.',
            },
          ]}
        />

        <HowItWorks
          tilt={false}
          steps={[
            {
              icon: AcademicCapIcon,
              title: 'Learn the Process',
              description: 'Master the "Vibe Coding" methodology for rapid building.',
            },
            {
              icon: BeakerIcon,
              title: 'Forge Your Spec',
              description: 'Use our app to turn your idea into a technical spec.',
            },
            {
              icon: MegaphoneIcon,
              title: 'Grow Your Brand',
              description: 'Use our tools to grow your personal brand on social media.',
            },
          ]}
        />

        <SneakPeek
          tilt={false}
          items={[
            {
              title: 'The Vibe Coding Methodology',
              description: 'A rapid-fire system for building and launching micro-apps.',
            },
            {
              title: 'SpecForge App',
              description: 'Turn your raw idea into a comprehensive technical spec.',
            },
            {
              title: 'Signal App',
              description: 'Grow your personal brand on X/Twitter.',
            },
            {
              title: 'ContentGenius AI',
              description: 'Install a complete content engine for your niche.',
            },
          ]}
        />

        <Credibility
          tilt={false}
          name="Your Name"
          title="Creator of The AI Hustle Lab"
          bio="I'm a builder who loves to ship. I've built a portfolio of profitable micro-apps and now I'm sharing my system with you."
          imageUrl="https://via.placeholder.com/150"
        />

        <WhatYouGet
          tilt={false}
          items={[
            'The complete "Vibe Coding" methodology.',
            'Access to the SpecForge App.',
            'Access to the Signal App.',
            'Access to the ContentGenius AI.',
            'A community of builders.',
          ]}
        />

        <Bonuses
          tilt={false}
          bonuses={[
            {
              title: 'Lifetime Discount',
              description: 'Lock in a special price forever as a founding member.',
            },
            {
              title: 'Immediate Full Access',
              description: 'Get all tools from day one.',
            },
            {
              title: 'First Access',
              description: 'Be the first to know when the doors open.',
            },
          ]}
        />

        <Pricing
          tilt={false}
          price={19}
          originalPrice={39}
          features={[
            'Full Access to all tools',
            'Community Access',
            'Lifetime Discount',
          ]}
        />

        <FAQ
          tilt={false}
          faqs={[
            {
              question: 'Is this a course?',
              answer: 'No, this is a production system. You will learn by doing.',
            },
            {
              question: 'What if I have no coding experience?',
              answer: 'The system is designed for operators, not just developers. We leverage AI to do the heavy lifting.',
            },
            {
              question: 'What is the time commitment?',
              answer: 'You can go from idea to shippable product in a weekend.',
            },
          ]}
        />

        <RefundPolicy
          tilt={false}
          policy="If you don't ship a product within 30 days, you get a full refund. No questions asked."
        />

        <div className="w-full max-w-2xl p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border-2 border-brand-green shadow-2xl shadow-green-500/30 text-center space-y-6 text-white">
            <h3 className="text-3xl font-bold">Claim Your Founding Member Grand Slam Offer</h3>
            <p className="text-lg">This will not be repeated. The first <span className="font-semibold text-brand-green">50 Founding Members</span> lock in an insane deal. By entering your email, you secure your spot.</p>
            
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
