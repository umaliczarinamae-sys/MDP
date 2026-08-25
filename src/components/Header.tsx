import React from 'react';

interface HeaderProps {
  currentStep?: number;
  totalSteps?: number;
  isCompleted?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ currentStep = 1, totalSteps = 6, isCompleted }) => {
  return (
    <header className="w-full border-b border-[#C5A059]/15 bg-[#081020]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 py-5 flex items-center justify-between">
        {/* Monogram / Brand */}
        <div className="flex items-baseline space-x-2.5">
          <span className="text-xl sm:text-2xl font-serif font-bold tracking-widest text-[#C5A059] uppercase">
            MDP
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-slate-300/80 font-semibold truncate max-w-[200px] sm:max-w-none">
            Executive Leadership Assessment
          </span>
        </div>

        {/* Status / Step Indicator with Dots */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="flex items-center space-x-1.5">
            {Array.from({ length: totalSteps }).map((_, index) => {
              const stepNumber = index + 1;
              const isActive = isCompleted || (currentStep && currentStep >= stepNumber);
              return (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-[#C5A059] shadow-sm shadow-[#C5A059]/40' : 'bg-[#C5A059]/25'
                  }`}
                  title={`Stage ${stepNumber}`}
                />
              );
            })}
          </div>

          <span className="text-[10px] uppercase tracking-widest text-slate-300 font-medium hidden xs:inline-block">
            {isCompleted ? 'Assessment Complete' : `Stage ${currentStep} of ${totalSteps}`}
          </span>
        </div>
      </div>
    </header>
  );
};

