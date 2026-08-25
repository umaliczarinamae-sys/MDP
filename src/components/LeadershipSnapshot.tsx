import React from 'react';
import { SnapshotInsight } from '../types';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface LeadershipSnapshotProps {
  insight: SnapshotInsight;
}

export const LeadershipSnapshot: React.FC<LeadershipSnapshotProps> = ({ insight }) => {
  return (
    <div className="mb-12">
      {/* Header & Label */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-[10px] uppercase tracking-[0.25em] font-bold mb-2.5">
          <Sparkles className="w-3 h-3 text-[#C5A059]" />
          <span>Based on Your Responses</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#F5F5F0] font-light tracking-tight">
          Your Leadership Snapshot
        </h2>
      </div>

      {/* What We Observed */}
      <div className="p-6 sm:p-7 rounded-md executive-card-pattern border border-[#C5A059]/25 mb-8 relative shadow-[0_10px_30px_rgba(10,20,40,0.4)]">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
          <span>What We Observed</span>
        </div>
        <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-light">
          {insight.observation}
        </p>
      </div>

      {/* 3 Recommended Focus Areas */}
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">
          Recommended Focus Areas
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insight.focusAreas.map((focus, index) => (
            <div
              key={index}
              className="p-5 rounded-md bg-[#0D182E]/90 border border-slate-700/50 hover:border-[#C5A059]/40 hover:bg-[#111F3B] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-[10px] font-bold flex items-center justify-center font-serif">
                    {index + 1}
                  </span>
                  <h3 className="text-sm font-medium text-white leading-snug">
                    {focus.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300/80 font-light leading-relaxed">
                  {focus.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#C5A059] font-medium">
                <CheckCircle2 className="w-3 h-3" />
                <span>Priority development lever</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

