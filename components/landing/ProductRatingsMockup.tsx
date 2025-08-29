import React, { memo } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

interface Product {
  title: string;
  subtitle: string;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    title: 'Medium Muse GPT',
    subtitle: 'Elevate Your Medium Writing with AI!',
    rating: 5.0,
    reviews: 3,
  },
  {
    title: 'AI HUSTLE LAB TOOLKIT Lite',
    subtitle: '100+ ChatGPT Prompts to Streamline Your...',
    rating: 5.0,
    reviews: 2,
  },
  {
    title: 'Book Mentor',
    subtitle: 'Your Pathway to Writing Mastery',
    rating: 5.0,
    reviews: 1,
  },
  {
    title: 'Atomic Tweeter GPT',
    subtitle: 'Elevate Your Digital Game',
    rating: 5.0,
    reviews: 1,
  },
  {
    title: 'AI Hustle Lab Lesson #1',
    subtitle: 'Find Your Ikigai, Find Your Niche!',
    rating: 5.0,
    reviews: 1,
  },
];

const ProductRatingsMockup = () => {
  return (
    <div className="w-full">
      <h4 className="text-xl font-bold text-brand-text-primary mb-4 text-center">Our Suite of 5-Star Rated Tools</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-brand-card/50 rounded-lg border border-brand-border p-4 flex flex-col text-left">
            <div className="bg-gray-700/50 h-32 rounded-md mb-4 flex items-center justify-center">
              <p className="text-brand-text-secondary text-sm">Product Showcase</p>
            </div>
            <h5 className="font-semibold text-brand-text-primary">{product.title}</h5>
            <p className="text-sm text-brand-text-body flex-grow mt-1">{product.subtitle}</p>
            <div className="flex items-center gap-1 mt-2">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span className="font-bold text-brand-text-primary">{product.rating.toFixed(1)}</span>
              <span className="text-sm text-brand-text-secondary">({product.reviews} reviews)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ProductRatingsMockup);
