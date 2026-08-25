import React from 'react';
import { AssessmentResponse } from '../types';
import { HOOK_OPTIONS, AUTONOMY_OPTIONS, CAPABILITY_OPTIONS, ORG_SIZE_OPTIONS } from '../data/assessmentData';
import { Building, User, Target, Compass, Zap } from 'lucide-react';

interface ExecutiveSummaryProps {
  data: AssessmentResponse;
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ data }) => {
  // Resolve labels
  const challengeLabel =
    data.challenge === 'other'
      ? data.customChallenge || 'Specific organizational challenge'
      : HOOK_OPTIONS.find((o) => o.id === data.challenge)?.label || data.challenge;

  const autonomyLabel =
    AUTONOMY_OPTIONS.find((o) => o.id === data.autonomyState)?.label || data.autonomyState;

  const capabilityLabel =
    CAPABILITY_OPTIONS.find((o) => o.id === data.capabilityArea)?.label || data.capabilityArea;

  const orgSizeLabel =
    ORG_SIZE_OPTIONS.find((o) => o.id === data.orgSize)?.label || data.orgSize;

  return (
    <div className="border-b border-[#C5A059]/15 pb-10 mb-10">
      {/* Eyebrow & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-1">
            Factual Record
          </span>
          <h2 className="text-xl sm:text-2xl font-serif text-[#F1F5F9] font-light">
            Executive Assessment Summary
          </h2>
        </div>
        <div className="text-xs text-slate-400 font-light flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
          <span>Verified profile: {data.contact.name}</span>
        </div>
      </div>

      {/* Grid of Concise Mirrors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Executive Profile Card */}
        <div className="p-4.5 rounded-md bg-[#0D182E]/95 border border-slate-700/50 shadow-sm flex items-start gap-3">
          <div className="w-8 h-8 rounded-sm bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
            <User className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
              Leader &amp; Organization
            </div>
            <div className="text-sm font-medium text-white mt-0.5">
              {data.contact.role}
            </div>
            <div className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
              <Building className="w-3 h-3 text-[#C5A059]" />
              <span>{data.contact.organization}</span>
              <span className="text-slate-500">•</span>
              <span>{orgSizeLabel}</span>
            </div>
          </div>
        </div>

        {/* Primary Friction */}
        <div className="p-4.5 rounded-md bg-[#0D182E]/95 border border-slate-700/50 shadow-sm flex items-start gap-3">
          <div className="w-8 h-8 rounded-sm bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
              Primary Leadership Friction
            </div>
            <div className="text-xs sm:text-sm text-slate-100 mt-0.5 leading-snug">
              {challengeLabel}
            </div>
          </div>
        </div>

        {/* Current Autonomy State */}
        <div className="p-4.5 rounded-md bg-[#0D182E]/95 border border-slate-700/50 shadow-sm flex items-start gap-3">
          <div className="w-8 h-8 rounded-sm bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
              Decision Autonomy in Absence
            </div>
            <div className="text-xs sm:text-sm text-slate-100 mt-0.5 leading-snug">
              {autonomyLabel}
            </div>
          </div>
        </div>

        {/* Priority Capability Area */}
        <div className="p-4.5 rounded-md bg-[#0D182E]/95 border border-slate-700/50 shadow-sm flex items-start gap-3">
          <div className="w-8 h-8 rounded-sm bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
              Priority Capability Focus
            </div>
            <div className="text-xs sm:text-sm text-slate-100 mt-0.5 leading-snug">
              {capabilityLabel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
