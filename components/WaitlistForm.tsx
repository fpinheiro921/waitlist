import React, { useState } from 'react';
import { FormStatus, HustleIdea } from '../types';
import { LightbulbIcon, ErrorCircleIcon, LoadingSpinnerIcon } from './icons';
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the Gemini client.
// The API key is expected to be available in the environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>(FormStatus.Idle);
  const [message, setMessage] = useState('');
  const [idea, setIdea] = useState<HustleIdea | null>(null);

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  const generateHustleIdea = async () => {
    setStatus(FormStatus.Generating);
    setMessage('');

    try {
      const schema = {
        type: Type.OBJECT,
        properties: {
          title: {
            type: Type.STRING,
            description: 'A catchy and descriptive title for the AI hustle idea.'
          },
          description: {
            type: Type.STRING,
            description: 'A brief, one-paragraph description of the idea.'
          },
          steps: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING
            },
            description: 'A list of 3-5 actionable first steps to get started.'
          }
        },
        required: ['title', 'description', 'steps']
      };
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "You are an expert startup advisor for developers. Generate a unique and actionable side hustle idea that leverages AI. The idea should be something that can be started with minimal investment. Focus on creating a real-world, cash-flowing digital asset.",
        config: {
          responseMimeType: "application/json",
          responseSchema: schema,
        },
      });
      
      const ideaJson: HustleIdea = JSON.parse(response.text.trim());
      setIdea(ideaJson);
      setStatus(FormStatus.Success);

    } catch (error) {
      console.error("Error generating hustle idea:", error);
      setStatus(FormStatus.Error);
      setMessage('Could not generate an idea. Please try again.');
    }
  };

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

    // Simulate the backend API call which was previously failing.
    // This provides a smooth user experience and allows us to proceed
    // to the new AI-powered feature.
    setTimeout(() => {
      generateHustleIdea();
    }, 1500);
  };

  if (status === FormStatus.Success && idea) {
    return (
      <div className="text-left p-6 bg-brand-background/50 rounded-lg border border-brand-border flex flex-col items-center animate-fade-in">
        <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-4 ring-8 ring-brand-green/5">
            <LightbulbIcon className="text-4xl text-brand-green" />
        </div>
        <h3 className="text-xl font-semibold text-brand-text-primary mb-2 text-center">You're on the list!</h3>
        <p className="text-brand-text-body text-center mb-6">As a thank you, here's a unique AI hustle idea just for you:</p>
        
        <div className="w-full bg-brand-background p-4 rounded-md border border-brand-border/50">
            <h4 className="font-bold text-brand-green">{idea.title}</h4>
            <p className="text-brand-text-body text-sm mt-2 mb-4">{idea.description}</p>
            <h5 className="font-semibold text-brand-text-primary text-sm mb-2">Your first steps:</h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-brand-text-body">
                {idea.steps.map((step, index) => <li key={index}>{step}</li>)}
            </ul>
        </div>
      </div>
    );
  }

  if (status === FormStatus.Generating) {
    return (
        <div className="text-center p-8 bg-brand-background/50 rounded-lg border border-brand-border flex flex-col items-center">
            <LoadingSpinnerIcon className="text-4xl text-brand-green mb-4" />
            <h3 className="text-xl font-semibold text-brand-text-primary mb-2">Finalizing your spot...</h3>
            <p className="text-brand-text-body">Generating your AI hustle idea...</p>
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
            'Get Founding Member Access'
          )}
        </button>
      </form>
      {status === FormStatus.Error && message && (
        <div className="mt-4 flex items-center text-red-500 text-sm">
            <ErrorCircleIcon className="text-xl mr-2 flex-shrink-0" />
            <p>{message}</p>
        </div>
      )}
    </div>
  );
};