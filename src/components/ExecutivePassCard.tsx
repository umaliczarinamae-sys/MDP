import React from 'react';
import { ContactInfo } from '../types';
import { WEBINAR_EVENT } from '../data/assessmentData';
import { Video, Calendar, Clock, CheckCircle } from 'lucide-react';

interface ExecutivePassCardProps {
  contact: ContactInfo;
  passId?: string;
  isRegistered?: boolean;
}

export const ExecutivePassCard: React.FC<ExecutivePassCardProps> = ({
  contact,
  passId = 'MDP-EXEC-2026-9182',
  isRegistered = false
}) => {
  return (
    <div className="w-full bg-[#0A1326] border border-[#C5A059]/40 rounded-lg p-1.5 shadow-[0_15px_40px_rgba(8,16,35,0.6)] relative overflow-hidden text-left gold-glow">
      <div className="border border-[#C5A059]/25 rounded-md p-6 sm:p-8 relative overflow-hidden executive-pass-texture">
        {/* Ribbon Badge */}
        <div className="absolute top-0 right-0 bg-[#C5A059] text-[#080E1C] text-[9px] font-black px-4 py-1 uppercase tracking-widest shadow-sm">
          {isRegistered ? 'CONFIRMED PASS' : 'FREE PASS'}
        </div>

        {/* Watermark Monogram */}
        <div className="absolute -right-4 -bottom-6 text-[#C5A059]/[0.04] text-8xl font-serif font-black select-none pointer-events-none">
          MDP
        </div>

        {/* Top Branding */}
        <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-5 mb-6">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-serif font-bold tracking-widest text-[#C5A059]">MDP</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold">
              Management Development Programme
            </span>
          </div>
          <span className="text-xs font-mono text-[#C5A059] tracking-wider pr-16 sm:pr-20">
            {passId}
          </span>
        </div>

        {/* Event Title */}
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold mb-1">
            Exclusive Executive Briefing Session
          </p>
          <h4 className="text-xl sm:text-2xl font-serif font-light text-white leading-tight">
            {WEBINAR_EVENT.title}
          </h4>
        </div>

        {/* Pass Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-5 border-y border-[#C5A059]/20 mb-5">
          {/* Delegate */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-1">
              Delegate
            </p>
            <p className="text-sm font-semibold text-white truncate">
              {contact.name || 'Executive Delegate'}
            </p>
            <p className="text-xs text-slate-300 truncate">
              {contact.role ? `${contact.role}, ${contact.organization}` : 'Executive Leadership'}
            </p>
          </div>

          {/* Date & Time */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-1 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#C5A059]" />
              <span>Schedule</span>
            </p>
            <p className="text-sm font-medium text-white">
              {WEBINAR_EVENT.dateFormatted}
            </p>
            <p className="text-xs text-slate-300 flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{WEBINAR_EVENT.timeFormatted}</span>
            </p>
          </div>

          {/* Format */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-1 flex items-center gap-1">
              <Video className="w-3 h-3 text-[#C5A059]" />
              <span>Format</span>
            </p>
            <p className="text-sm font-medium text-[#C5A059]">
              {WEBINAR_EVENT.platform}
            </p>
            <p className="text-xs text-slate-300">
              Private Executive Room
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-wider text-slate-400">
          <span className="flex items-center gap-1.5">
            {isRegistered ? (
              <>
                <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-[#C5A059] font-semibold">Confirmed • Verified Seat</span>
              </>
            ) : (
              <span>Reserved for: <strong className="text-slate-200">{contact.email || 'your email'}</strong></span>
            )}
          </span>
          <span className="text-[#C5A059] font-medium">Complimentary Executive Invitation</span>
        </div>
      </div>
    </div>
  );
};

