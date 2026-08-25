import React, { useState } from 'react';
import { AssessmentResponse } from '../types';
import { WEBINAR_EVENT } from '../data/assessmentData';
import { ExecutivePassCard } from './ExecutivePassCard';
import { Sparkles, ArrowRight, ShieldCheck, Check, Loader2, Calendar } from 'lucide-react';

interface WebinarInvitationProps {
  data: AssessmentResponse;
  onConfirmRegistration: () => void;
}

export const WebinarInvitation: React.FC<WebinarInvitationProps> = ({
  data,
  onConfirmRegistration
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = () => {
    setIsSubmitting(true);
    // Simulate high-speed executive pass issuance
    setTimeout(() => {
      setIsSubmitting(false);
      onConfirmRegistration();
    }, 1000);
  };

  return (
    <div className="relative pt-6 pb-12">
      {/* Eyebrow & Badge */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-[10px] uppercase tracking-[0.25em] font-bold mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Exclusive Complimentary Access</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F5F5F0] font-light tracking-tight leading-tight mb-3">
          Take Your Leadership Snapshot Further
        </h2>

        {/* 1 Supporting Sentence */}
        <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
          Explore the leadership patterns behind your assessment in a live executive session.
        </p>
      </div>

      {/* Visual Centerpiece: The Executive Pass */}
      <div className="max-w-3xl mx-auto my-8">
        <ExecutivePassCard
          contact={data.contact}
          passId={data.registrationId || 'MDP-EXEC-2026-9182'}
          isRegistered={false}
        />
      </div>

      {/* What They'll Explore (3 Short Points) */}
      <div className="max-w-2xl mx-auto mb-8 p-6 rounded-md bg-[#0D182E]/90 border border-slate-700/50 shadow-sm">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
          <span>What You'll Explore in the Session</span>
        </div>
        <div className="space-y-2.5">
          {WEBINAR_EVENT.explorePoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#C5A059] stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Urgency */}
      <div className="max-w-xl mx-auto text-center mb-8">
        <div className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold mb-1">
          Upcoming Live Executive Session
        </div>
        <p className="text-xs text-slate-400 font-light">
          Complimentary access is currently available for this scheduled session.
        </p>
      </div>

      {/* ONE DOMINANT CTA */}
      <div className="max-w-md mx-auto text-center">
        <button
          type="button"
          onClick={handleConfirm}
          disabled={isSubmitting}
          className="w-full py-4.5 px-8 rounded-sm bg-[#C5A059] hover:bg-[#D6B670] text-[#080E1C] font-bold text-xs uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_15px_40px_rgba(197,160,89,0.4)] transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer active:scale-[0.99]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#080E1C]" />
              <span>Issuing Executive Pass...</span>
            </>
          ) : (
            <>
              <span>Confirm My Free Executive Pass</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Supporting Micro-copy */}
        <div className="mt-4 space-y-1">
          <div className="text-[11px] text-slate-300 font-medium flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>One tap to register • No additional form required</span>
          </div>
          <div className="text-[10px] uppercase tracking-wider text-slate-400 font-light flex items-center justify-center gap-1.5">
            <Calendar className="w-3 h-3 text-slate-400" />
            <span>Complimentary Registration • Live via Zoom</span>
          </div>
        </div>
      </div>
    </div>
  );
};

