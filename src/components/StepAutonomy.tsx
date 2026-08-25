import React from 'react';
import { AUTONOMY_OPTIONS } from '../data/assessmentData';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface StepAutonomyProps {
  selectedId: string;
  onSelect: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepAutonomy: React.FC<StepAutonomyProps> = ({
  selectedId,
  onSelect,
  onNext,
  onBack
}) => {
  return (
    <div className="max-w-2xl mx-auto py-8 sm:py-12 px-4">
      {/* Eyebrow */}
      <div className="text-center mb-3">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">
          Stage 04 • Leadership Autonomy
        </span>
      </div>

      {/* Main Question */}
      <h1 className="text-2xl sm:text-3xl text-center font-serif text-[#F5F5F0] font-light tracking-tight leading-tight mb-3">
        When you're unavailable, what typically happens?
      </h1>

      <p className="text-center text-xs sm:text-sm text-white/50 max-w-lg mx-auto mb-10 font-light leading-relaxed">
        A behavioral look at real-world decision flow and managerial independence in your absence.
      </p>

      {/* Selectable Options */}
      <div className="space-y-3.5 mb-10">
        {AUTONOMY_OPTIONS.map((option) => {
          const isSelected = selectedId === option.id;
          return (
            <div
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`group relative p-4 sm:p-5 rounded-md border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                isSelected
                  ? 'bg-[#132247] border-[#C5A059] shadow-[0_10px_30px_rgba(197,160,89,0.16)] ring-1 ring-[#C5A059]/40'
                  : 'bg-[#0D182E]/90 border-slate-700/50 hover:border-[#C5A059]/40 hover:bg-[#111F3B]'
              }`}
            >
              {/* Radio check */}
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                  isSelected
                    ? 'border-[#C5A059] bg-[#C5A059] text-[#080E1C]'
                    : 'border-slate-600 group-hover:border-slate-400'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-[#080E1C] stroke-[3]" />}
              </div>

              {/* Text */}
              <div className="flex-1">
                <div
                  className={`text-sm sm:text-base font-medium leading-snug ${
                    isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                  }`}
                >
                  {option.label}
                </div>
                {option.description && (
                  <div className="text-xs sm:text-sm text-slate-300/70 mt-1 font-light">
                    {option.description}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-3 rounded-sm text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!selectedId}
          className={`py-4 px-8 rounded-sm uppercase tracking-[0.2em] text-xs font-bold flex items-center gap-2.5 transition-all duration-200 ${
            selectedId
              ? 'bg-[#C5A059] hover:bg-[#D6B670] text-[#080E1C] shadow-[0_10px_30px_rgba(197,160,89,0.25)] cursor-pointer active:scale-[0.99]'
              : 'bg-slate-800/40 text-slate-500 cursor-not-allowed border border-slate-800'
          }`}
        >
          <span>Continue</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

