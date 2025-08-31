import React from 'react';
import { WaitlistForm } from './components/WaitlistForm';
import { ScienceIcon } from './components/icons';
import { Analytics } from '@vercel/analytics/react';
import AudienceProfiles from './components/landing/AudienceProfiles';
import TestimonialsMockup from './components/landing/TestimonialsMockup';
import PainPoints from './components/landing/PainPoints';
import BenefitsUnlocked from './components/landing/BenefitsUnlocked';
import FeaturesGridMockup from './components/landing/FeaturesGridMockup';
import SneakPeek from './components/landing/SneakPeek';
import WhatYouGet from './components/landing/WhatYouGet';
import Bonuses from './components/landing/Bonuses';
import Pricing from './components/landing/Pricing';
import FAQ from './components/landing/FAQ';
import RefundPolicy from './components/landing/RefundPolicy';
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
              title: 'Struggling to Start',
              description: "You're feeling overwhelmed, uncertain, or unsure about how to take the first step.",
            },
            {
              title: 'Getting Lost in the Process',
              description: "You've started down this path before, but got lost along the way.",
            },
            {
              title: 'Spinning Your Wheels',
              description: "You're putting in the effort, but not seeing the results you want. You're working hard, not smart.",
            },
          ]}
        />

        <BenefitsUnlocked
          tilt={false}
          benefits={[
            {
              title: 'Stop Publishing Into the Void',
              description: 'And start building a loyal audience.',
            },
            {
              title: 'Stop Lurking, Start Creating',
              description: 'And become a recognized voice in your niche.',
            },
            {
              title: 'No More Blinking Cursor',
              description: 'Just a clear path to a finished product.',
            },
            {
              title: 'Ship, Don\'t Just Dream',
              description: 'Launch a real product in a weekend.',
            },
            {
              title: 'Build Your Empire',
              description: 'Create a portfolio of cash-flowing micro-apps.',
            },
          ]}
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
              description: 'Master the "Vibe Coding" methodology, a rapid-fire system for building and launching micro-apps in a single weekend.',
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


        <WhatYouGet
          tilt={false}
          items={[
            'Unlock the AI Hustle Lab Production System and start building profitable micro-apps.',
            'Get lifetime access to the SpecForge App and turn your ideas into actionable specs.',
            'Use the Signal App to build your personal brand and attract opportunities.',
            'Deploy the ContentGenius AI to create a content engine for your niche.',
            'Join a community of ambitious builders and get the support you need to succeed.',
            'Access a library of exclusive content to accelerate your growth.',
          ]}
        />

        <Bonuses
          tilt={false}
          bonuses={[
            {
              title: 'Access to Bonus Apps',
              description: 'Get exclusive access to new apps as they are developed.',
            },
            {
              title: 'Lifetime Updates',
              description: 'Receive all future updates to the system and tools for free.',
            },
            {
              title: 'Founding Member Status',
              description: 'Be recognized as a founding member of The AI Hustle Lab.',
            },
          ]}
        />

        <Pricing
          tilt={false}
          price={19}
          originalPrice={39}
          features={[
            'The AI Hustle Lab Production System',
            'SpecForge App',
            'Signal App',
            'ContentGenius AI',
            'Community Access',
            'Exclusive Content',
            'Access to Bonus Apps',
            'Lifetime Updates',
            'Founding Member Status',
          ]}
        />

        <FAQ
          tilt={false}
          faqs={[
            {
              question: 'How much does this cost?',
              answer: 'The founding member price is $19/month. This is a lifetime discount.',
            },
            {
              question: 'How much time should I dedicate to this?',
              answer: 'You can go from idea to shippable product in a weekend.',
            },
            {
              question: 'Is this for people with no coding experience?',
              answer: 'Yes, the system is designed for operators, not just developers. We leverage AI to do the heavy lifting.',
            },
            {
              question: 'If I don’t like it, can I request a refund?',
              answer: "Yes, if you don't ship a product within 30 days, you get a full refund.",
            },
            {
              question: 'How long will it take for me to see results?',
              answer: 'You can see results in as little as a weekend by shipping your first micro-app.',
            },
          ]}
        />

        <RefundPolicy
          tilt={false}
          policy="This is a subscription service. You can cancel your subscription at any time. No questions asked."
        />

        <div className="w-full max-w-2xl p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border-2 border-brand-green shadow-2xl shadow-green-500/30 text-center space-y-6 text-white">
            <h3 className="text-3xl font-bold">Claim Your Founding Member Grand Slam Offer</h3>
            <p className="text-lg">This will not be repeated. The first <span className="font-semibold text-brand-green">50 Founding Members</span> lock in an insane deal. By entering your email, you secure your spot.</p>
            
            <div className="w-full max-w-md mx-auto pt-4">
                <WaitlistForm />
                <p className="text-sm text-white/60 mt-4">Join the waitlist and get our free guide to building your first micro-app.</p>
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
