import React from 'react';
import { ContactInfo } from '../types';
import { ArrowLeft, ArrowRight, Lock, User, Briefcase, Building, Phone, Mail } from 'lucide-react';

interface StepContactProps {
  contact: ContactInfo;
  onChange: (field: keyof ContactInfo, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepContact: React.FC<StepContactProps> = ({
  contact,
  onChange,
  onNext,
  onBack
}) => {
  const isFormValid =
    contact.name.trim().length >= 2 &&
    contact.role.trim().length >= 2 &&
    contact.organization.trim().length >= 2 &&
    contact.phone.trim().length >= 6 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim());

  return (
    <div className="max-w-2xl mx-auto py-8 sm:py-12 px-4">
      {/* Eyebrow */}
      <div className="text-center mb-3">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">
          Stage 02 • Executive Profile
        </span>
      </div>

      {/* Main Question */}
      <h1 className="text-2xl sm:text-3xl text-center font-serif text-[#F5F5F0] font-light tracking-tight leading-tight mb-3">
        Where should we address your Leadership Snapshot?
      </h1>

      <p className="text-center text-xs sm:text-sm text-white/50 max-w-lg mx-auto mb-10 font-light leading-relaxed">
        Your details are strictly confidential. We personalize your briefing observations to your specific organizational role.
      </p>

      {/* Minimalist Executive Inputs */}
      <div className="space-y-4 mb-10">
        {/* Full Name */}
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Full Name</span>
            </span>
            <span className="text-slate-400 text-[10px] lowercase tracking-normal">Required</span>
          </label>
          <input
            type="text"
            value={contact.name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="e.g. Richard Vance"
            className="w-full bg-[#0D182E] border border-slate-700/70 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 rounded-sm px-3.5 py-3 text-sm text-white placeholder-slate-500 transition-colors"
          />
        </div>

        {/* 2-Column: Role & Organization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Role / Designation</span>
              </span>
              <span className="text-slate-400 text-[10px] lowercase tracking-normal">Required</span>
            </label>
            <input
              type="text"
              value={contact.role}
              onChange={(e) => onChange('role', e.target.value)}
              placeholder="e.g. Managing Director / COO"
              className="w-full bg-[#0D182E] border border-slate-700/70 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 rounded-sm px-3.5 py-3 text-sm text-white placeholder-slate-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Organization</span>
              </span>
              <span className="text-slate-400 text-[10px] lowercase tracking-normal">Required</span>
            </label>
            <input
              type="text"
              value={contact.organization}
              onChange={(e) => onChange('organization', e.target.value)}
              placeholder="e.g. Apex Meridian Group"
              className="w-full bg-[#0D182E] border border-slate-700/70 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 rounded-sm px-3.5 py-3 text-sm text-white placeholder-slate-500 transition-colors"
            />
          </div>
        </div>

        {/* 2-Column: WhatsApp & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>WhatsApp / Mobile</span>
              </span>
              <span className="text-slate-400 text-[10px] lowercase tracking-normal">Required</span>
            </label>
            <input
              type="tel"
              value={contact.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              placeholder="e.g. +65 9123 4567"
              className="w-full bg-[#0D182E] border border-slate-700/70 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 rounded-sm px-3.5 py-3 text-sm text-white placeholder-slate-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Business Email</span>
              </span>
              <span className="text-slate-400 text-[10px] lowercase tracking-normal">Required</span>
            </label>
            <input
              type="email"
              value={contact.email}
              onChange={(e) => onChange('email', e.target.value)}
              placeholder="e.g. richard@apexmeridian.com"
              className="w-full bg-[#0D182E] border border-slate-700/70 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 rounded-sm px-3.5 py-3 text-sm text-white placeholder-slate-500 transition-colors"
            />
          </div>
        </div>

        {/* Confidential note */}
        <div className="pt-2 flex items-start gap-2 text-xs text-slate-400 font-light">
          <Lock className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
          <span>
            Webinar confirmation and private Zoom access will be dispatched to this email address. We do not distribute your contact details.
          </span>
        </div>
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

