import React, { useState } from 'react';
import { HOOK_OPTIONS } from '../data/assessmentData';
import { ArrowRight, Check } from 'lucide-react';

interface StepHookProps {
  selectedId: string;
  customValue?: string;
  onSelect: (id: string, custom?: string) => void;
  onNext: () => void;
}

export const StepHook: React.FC<StepHookProps> = ({
  selectedId,
  customValue = '',
  onSelect,
  onNext
}) => {
  const [customText, setCustomText] = useState(customValue);

  const handleOptionClick = (id: string) => {
    if (id === 'other') {
      onSelect(id, customText);
    } else {
      onSelect(id, '');
    }
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomText(e.target.value);
    onSelect('other', e.target.value);
  };

  const isFormValid = selectedId !== '' && (selectedId !== 'other' || customText.trim().length > 0);

  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-12 px-4">
      {/* Eyebrow */}
      <div className="text-center mb-3">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">
          Stage 01 • Current Reality
        </span>
      </div>

      {/* Main Question */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-serif text-[#F5F5F0] font-light tracking-tight leading-tight mb-4">
        What's the biggest leadership challenge holding your business back right now?
      </h1>

      <p className="text-center text-sm text-white/50 max-w-xl mx-auto mb-10 font-light leading-relaxed">
        Select the single most pressing operational or management dynamic in your team.
      </p>

      {/* Selectable Options */}
      <div className="space-y-3.5 mb-10">
        {HOOK_OPTIONS.map((option) => {
          const isSelected = selectedId === option.id;
          return (
            <div
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={`group relative p-4 sm:p-5 rounded-md border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                isSelected
                  ? 'bg-[#132247] border-[#C5A059] shadow-[0_10px_30px_rgba(197,160,89,0.16)] ring-1 ring-[#C5A059]/40'
                  : 'bg-[#0D182E]/90 border-slate-700/50 hover:border-[#C5A059]/40 hover:bg-[#111F3B]'
              }`}
            >
              {/* Radio Indicator */}
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                  isSelected
                    ? 'border-[#C5A059] bg-[#C5A059] text-[#080E1C]'
                    : 'border-slate-600 group-hover:border-slate-400'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-[#080E1C] stroke-[3]" />}
              </div>

              {/* Text Content */}
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

      {/* Custom Challenge Input (if other selected) */}
      {selectedId === 'other' && (
        <div className="mb-10 p-5 rounded-md bg-[#0D182E] border border-[#C5A059]/30">
          <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-2 font-bold">
            Describe your specific challenge
          </label>
          <textarea
            value={customText}
            onChange={handleCustomChange}
            placeholder="E.g., Difficulties maintaining momentum across multi-regional divisions..."
            rows={3}
            className="w-full bg-[#081020] border border-slate-700/70 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 rounded p-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
          />
        </div>
      )}

      {/* Next Button */}
      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={onNext}
          disabled={!isFormValid}
          className={`py-4 px-8 rounded-sm uppercase tracking-[0.2em] text-xs font-bold flex items-center gap-2.5 transition-all duration-200 ${
            isFormValid
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

