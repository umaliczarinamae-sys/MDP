import React, { useState } from 'react';
import { AssessmentResponse } from '../types';
import { WEBINAR_EVENT } from '../data/assessmentData';
import { ExecutivePassCard } from './ExecutivePassCard';
import { CheckCircle2, Mail, Calendar, Download, Printer, ArrowLeft } from 'lucide-react';

interface ConfirmedPassViewProps {
  data: AssessmentResponse;
  onViewSnapshot: () => void;
  onRetake: () => void;
}

export const ConfirmedPassView: React.FC<ConfirmedPassViewProps> = ({
  data,
  onViewSnapshot,
  onRetake
}) => {
  const [copiedCalendar, setCopiedCalendar] = useState(false);

  // Generate calendar link for Google Calendar
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    WEBINAR_EVENT.title
  )}&dates=20260312T060000Z/20260312T071500Z&details=${encodeURIComponent(
    `Private Executive Session via Zoom.\nRegistered Delegate: ${data.contact.name} (${data.contact.role}, ${data.contact.organization})\nPass ID: ${data.registrationId}`
  )}&location=${encodeURIComponent('Live via Zoom')}`;

  const handleDownloadICS = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//MDP Executive Leadership//Briefing Pass//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:${WEBINAR_EVENT.title}
DESCRIPTION:Complimentary Executive Webinar for ${data.contact.name}. Pass ID: ${data.registrationId}
LOCATION:Live via Zoom
DTSTART:20260312T060000Z
DTEND:20260312T071500Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'MDP-Executive-Webinar-Pass.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCopiedCalendar(true);
    setTimeout(() => setCopiedCalendar(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {/* Top Gold Badge */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-[10px] uppercase tracking-[0.25em] font-bold mb-3 shadow-sm">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Registration Confirmed</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F5F5F0] font-light tracking-tight leading-tight mb-3">
          Your Executive Pass Is Reserved
        </h1>

        {/* Supporting Line */}
        <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto font-light leading-relaxed">
          You're now registered for the Complimentary Executive Webinar.
        </p>
      </div>

      {/* Confirmed Executive Pass Card */}
      <div className="my-8">
        <ExecutivePassCard
          contact={data.contact}
          passId={data.registrationId || 'MDP-EXEC-2026-9182'}
          isRegistered={true}
        />
      </div>

      {/* Check Your Email Section */}
      <div className="p-6 sm:p-7 rounded-md executive-card-pattern border border-[#C5A059]/35 mb-8 shadow-[0_12px_36px_rgba(10,20,40,0.5)]">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-sm bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
            <Mail className="w-5 h-5 text-[#C5A059]" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold mb-1">
              Check Your Email
            </div>
            <p className="text-sm sm:text-base text-slate-100 font-normal leading-snug mb-2">
              Your Zoom access link and webinar details have been sent to{' '}
              <span className="text-[#C5A059] font-medium underline underline-offset-2">
                {data.contact.email}
              </span>
            </p>
            <p className="text-xs text-slate-300 font-light">
              Keep the email handy. It contains your direct access credentials and calendar entry for the live session.
            </p>
          </div>
        </div>
      </div>

      {/* Success Checkpoints */}
      <div className="mb-10 p-6 rounded-md bg-[#0D182E]/90 border border-slate-700/50 shadow-sm">
        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">
          Executive Milestone Status
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="flex items-center gap-2.5 text-xs text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Assessment Complete</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Complimentary Registration Confirmed</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Executive Pass Reserved</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Zoom Access Sent to Email</span>
          </div>
        </div>
      </div>

      {/* Calendar & Print Controls */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-sm bg-[#0D182E] hover:bg-[#132247] border border-slate-700/70 text-xs text-slate-200 hover:text-white uppercase tracking-wider font-medium flex items-center gap-2 transition-colors shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Add to Google Calendar</span>
        </a>

        <button
          type="button"
          onClick={handleDownloadICS}
          className="px-5 py-3 rounded-sm bg-[#0D182E] hover:bg-[#132247] border border-slate-700/70 text-xs text-slate-200 hover:text-white uppercase tracking-wider font-medium flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
        >
          <Download className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>{copiedCalendar ? 'Downloaded .ICS' : 'Download .ICS Calendar'}</span>
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className="px-5 py-3 rounded-sm bg-[#0D182E] hover:bg-[#132247] border border-slate-700/70 text-xs text-slate-200 hover:text-white uppercase tracking-wider font-medium flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
        >
          <Printer className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Print Pass</span>
        </button>
      </div>

      {/* Review Snapshot Link & Retake */}
      <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <button
          type="button"
          onClick={onViewSnapshot}
          className="text-[#C5A059] hover:underline flex items-center gap-1.5 font-medium cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Leadership Snapshot briefing</span>
        </button>

        <button
          type="button"
          onClick={onRetake}
          className="text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          Retake Assessment
        </button>
      </div>
    </div>
  );
};

