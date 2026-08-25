import React from 'react';
import { ArrowDown } from 'lucide-react';

export const CuriosityGap: React.FC = () => {
  return (
    <div className="py-10 my-8 text-center border-y border-[#C5A059]/15 relative">
      <div className="max-w-xl mx-auto px-4">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-3">
          Your Leadership Snapshot Is the Starting Point
        </span>
        <p className="text-base sm:text-lg font-serif text-white/90 leading-snug mb-3 font-light">
          Recognizing the pattern is one thing. Understanding what creates it and how stronger management capability can be developed is the next step.
        </p>
        <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mt-4">
          <span>Explore practical frameworks in the live executive session</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#C5A059] animate-bounce" />
        </div>
      </div>
    </div>
  );
};

