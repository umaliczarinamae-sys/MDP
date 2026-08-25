import { useState, useEffect } from 'react';
import { AssessmentResponse, ContactInfo, SnapshotInsight } from './types';
import { generateSnapshotInsight } from './data/assessmentData';
import { Header } from './components/Header';
import { StepHook } from './components/StepHook';
import { StepContact } from './components/StepContact';
import { StepOrgSize } from './components/StepOrgSize';
import { StepAutonomy } from './components/StepAutonomy';
import { StepCapability } from './components/StepCapability';
import { StepDesiredOutcome } from './components/StepDesiredOutcome';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { LeadershipSnapshot } from './components/LeadershipSnapshot';
import { CuriosityGap } from './components/CuriosityGap';
import { WebinarInvitation } from './components/WebinarInvitation';
import { ConfirmedPassView } from './components/ConfirmedPassView';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const INITIAL_CONTACT: ContactInfo = {
  name: '',
  role: '',
  organization: '',
  phone: '',
  email: ''
};

const INITIAL_ASSESSMENT: AssessmentResponse = {
  challenge: '',
  customChallenge: '',
  contact: INITIAL_CONTACT,
  orgSize: '',
  autonomyState: '',
  capabilityArea: '',
  desiredOutcome: '',
  isRegistered: false,
  registrationId: ''
};

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [assessment, setAssessment] = useState<AssessmentResponse>(INITIAL_ASSESSMENT);
  const [snapshotInsight, setSnapshotInsight] = useState<SnapshotInsight | null>(null);

  // Generate random executive pass ID when contact is filled
  useEffect(() => {
    if (!assessment.registrationId) {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setAssessment((prev) => ({
        ...prev,
        registrationId: `MDP-EXEC-2026-${randomNum}`
      }));
    }
  }, [assessment.registrationId]);

  // Scroll to top on step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleHookSelect = (id: string, custom?: string) => {
    setAssessment((prev) => ({
      ...prev,
      challenge: id,
      customChallenge: custom || ''
    }));
  };

  const handleContactChange = (field: keyof ContactInfo, value: string) => {
    setAssessment((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value
      }
    }));
  };

  const handleOrgSizeSelect = (id: string) => {
    setAssessment((prev) => ({ ...prev, orgSize: id }));
  };

  const handleAutonomySelect = (id: string) => {
    setAssessment((prev) => ({ ...prev, autonomyState: id }));
  };

  const handleCapabilitySelect = (id: string) => {
    setAssessment((prev) => ({ ...prev, capabilityArea: id }));
  };

  const handleDesiredOutcomeSelect = (id: string) => {
    setAssessment((prev) => ({ ...prev, desiredOutcome: id }));
  };

  const handleGenerateSnapshot = () => {
    const insight = generateSnapshotInsight(
      assessment.challenge,
      assessment.autonomyState,
      assessment.capabilityArea,
      assessment.orgSize
    );
    setSnapshotInsight(insight);
    setCurrentStep(7); // Results & Webinar reveal
  };

  const handleConfirmRegistration = () => {
    setAssessment((prev) => ({
      ...prev,
      isRegistered: true,
      registeredAt: new Date().toISOString()
    }));
    setCurrentStep(8); // Confirmed state
  };

  const handleRetake = () => {
    setAssessment({
      ...INITIAL_ASSESSMENT,
      registrationId: `MDP-EXEC-2026-${Math.floor(1000 + Math.random() * 9000)}`
    });
    setSnapshotInsight(null);
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen executive-bg text-[#F1F5F9] flex flex-col justify-between selection:bg-[#C5A059]/30 selection:text-[#F3E5AB]">
      {/* Executive Header */}
      <Header
        currentStep={currentStep <= 6 ? currentStep : undefined}
        totalSteps={6}
        isCompleted={currentStep >= 7}
      />

      {/* Main Content Body */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        <AnimatePresence mode="wait">
          {/* Step 1: Hook */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <StepHook
                selectedId={assessment.challenge}
                customValue={assessment.customChallenge}
                onSelect={handleHookSelect}
                onNext={() => setCurrentStep(2)}
              />
            </motion.div>
          )}

          {/* Step 2: Contact */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <StepContact
                contact={assessment.contact}
                onChange={handleContactChange}
                onNext={() => setCurrentStep(3)}
                onBack={() => setCurrentStep(1)}
              />
            </motion.div>
          )}

          {/* Step 3: Org Size */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <StepOrgSize
                selectedId={assessment.orgSize}
                onSelect={handleOrgSizeSelect}
                onNext={() => setCurrentStep(4)}
                onBack={() => setCurrentStep(2)}
              />
            </motion.div>
          )}

          {/* Step 4: Leadership Autonomy */}
          {currentStep === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <StepAutonomy
                selectedId={assessment.autonomyState}
                onSelect={handleAutonomySelect}
                onNext={() => setCurrentStep(5)}
                onBack={() => setCurrentStep(3)}
              />
            </motion.div>
          )}

          {/* Step 5: Management Capability */}
          {currentStep === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <StepCapability
                selectedId={assessment.capabilityArea}
                onSelect={handleCapabilitySelect}
                onNext={() => setCurrentStep(6)}
                onBack={() => setCurrentStep(4)}
              />
            </motion.div>
          )}

          {/* Step 6: Desired Outcome */}
          {currentStep === 6 && (
            <motion.div
              key="step-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <StepDesiredOutcome
                selectedId={assessment.desiredOutcome}
                onSelect={handleDesiredOutcomeSelect}
                onSubmit={handleGenerateSnapshot}
                onBack={() => setCurrentStep(5)}
              />
            </motion.div>
          )}

          {/* Step 7: Results Experience (Executive Summary + Leadership Snapshot + Curiosity Gap + Webinar Reveal) */}
          {currentStep === 7 && snapshotInsight && (
            <motion.div
              key="step-7"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="py-4"
            >
              {/* Top Navigation / Breadcrumb */}
              <div className="mb-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(6)}
                  className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Adjust Assessment Answers</span>
                </button>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                  Confidential Executive Briefing
                </div>
              </div>

              {/* 1. Executive Assessment Summary */}
              <ExecutiveSummary data={assessment} />

              {/* 2. Leadership Snapshot (What We Observed + 3 Recommended Focus Areas) */}
              <LeadershipSnapshot insight={snapshotInsight} />

              {/* 3. Curiosity Gap Transition */}
              <CuriosityGap />

              {/* 4. Complimentary Executive Webinar Reveal & Executive Pass Centerpiece with ONE CTA */}
              <WebinarInvitation
                data={assessment}
                onConfirmRegistration={handleConfirmRegistration}
              />
            </motion.div>
          )}

          {/* Step 8: Confirmed Registration View */}
          {currentStep === 8 && (
            <motion.div
              key="step-8"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <ConfirmedPassView
                data={assessment}
                onViewSnapshot={() => setCurrentStep(7)}
                onRetake={handleRetake}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Professional Polish Executive Footer */}
      <footer className="px-6 sm:px-12 py-6 border-t border-[#C5A059]/15 bg-[#060D1A]/90 backdrop-blur-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex space-x-6 sm:space-x-8">
          <div className="flex items-center space-x-2.5">
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-serif ${
                currentStep <= 6
                  ? 'bg-[#C5A059] text-[#080E1C] font-bold'
                  : 'border border-[#C5A059]/40 text-[#C5A059]'
              }`}
            >
              1
            </div>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] ${
                currentStep <= 6 ? 'text-white font-semibold' : 'text-slate-400'
              }`}
            >
              Assess
            </span>
          </div>
          <div className="flex items-center space-x-2.5">
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-serif ${
                currentStep === 7
                  ? 'bg-[#C5A059] text-[#080E1C] font-bold'
                  : 'border border-[#C5A059]/40 text-[#C5A059]'
              }`}
            >
              2
            </div>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] ${
                currentStep === 7 ? 'text-white font-semibold' : 'text-slate-400'
              }`}
            >
              Recognize
            </span>
          </div>
          <div className="flex items-center space-x-2.5">
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-serif ${
                currentStep === 8
                  ? 'bg-[#C5A059] text-[#080E1C] font-bold'
                  : 'border border-[#C5A059]/40 text-[#C5A059]'
              }`}
            >
              3
            </div>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] ${
                currentStep === 8 ? 'text-white font-semibold' : 'text-slate-400'
              }`}
            >
              Register
            </span>
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-light">
          MDP Executive Leadership Assessment • Confidential
        </p>
      </footer>
    </div>
  );
}
