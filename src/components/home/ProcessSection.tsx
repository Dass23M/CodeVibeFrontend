'use client';

/* Code Vibe · Editorial Process Progression · Light Theme */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    name: 'Discover',
    duration: '1–2 Days',
    summary: 'Direct consultation with lead engineers to understand your vision, requirements, and business constraints.',
    details: [
      'Technical feasibility & stack selection',
      'User workflow & requirement mapping',
      'Integration requirements (APIs, auth, payment)',
      'High-level timeline & budget alignment',
    ],
  },
  {
    step: '02',
    name: 'Define',
    duration: '2–3 Days',
    summary: 'Concrete architectural blueprint and fixed milestone delivery schedule with zero ambiguity.',
    details: [
      'Database schema & endpoint specifications',
      'Full scope-of-work documentation',
      'Fixed-price proposal with milestone schedule',
      'Repository initialization & environment setup',
    ],
  },
  {
    step: '03',
    name: 'Design',
    duration: '3–7 Days',
    summary: 'Refined UI/UX systems and interactive prototypes demonstrating optical balance before building.',
    details: [
      'Figma wireframes & component layouts',
      'Semantic color, spacing & typography systems',
      'Desktop, tablet, and mobile state designs',
      'Interactive prototype walkthrough with your team',
    ],
  },
  {
    step: '04',
    name: 'Build',
    duration: '1–3 Weeks',
    summary: 'Type-safe, modern engineering using Next.js, React 19, and scalable database architectures.',
    details: [
      'Production code implementation with strict TypeScript',
      'Weekly staging builds for client testing',
      'Direct Slack/WhatsApp engineer access',
      'Zero unnecessary third-party dependencies',
    ],
  },
  {
    step: '05',
    name: 'Launch',
    duration: '2–3 Days',
    summary: 'Rigorous production checklist execution, edge CDN configuration, and zero-downtime deployment.',
    details: [
      '100/100 Core Web Vitals optimization',
      'Automated sitemaps & structured JSON-LD schemas',
      'SSL, DNS, and edge firewall verification',
      'Full repository & intellectual property handover',
    ],
  },
  {
    step: '06',
    name: 'Improve',
    duration: 'Ongoing',
    summary: 'Continuous telemetry monitoring, performance enhancements, and future capability sprints.',
    details: [
      '30-day post-launch warranty included',
      'Real-time error logging & analytics setup',
      'Database index & query optimizations',
      'On-demand feature sprints as your business grows',
    ],
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#EAEAEA]">
          <div>
            <span className="text-xs font-mono text-[#999999] uppercase tracking-widest block mb-3">
              HOW WE WORK
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111]">
              A disciplined, predictable process.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B6B6B] max-w-md leading-relaxed">
            No endless meetings or opaque development phases. You get direct access to builders and transparent milestone deliveries.
          </p>
        </div>

        {/* Timeline Progression System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Step Selector List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {STEPS.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? 'bg-[#F7F7F7] border-[#111111] shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
                      : 'bg-white border-transparent hover:border-[#EAEAEA] hover:bg-[#F7F7F7]/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-semibold ${isActive ? 'text-[#1D4ED8]' : 'text-[#999999]'}`}>
                      {item.step}
                    </span>
                    <span className={`font-display text-lg font-semibold tracking-tight ${isActive ? 'text-[#111111]' : 'text-[#6B6B6B]'}`}>
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#999999]">
                    {item.duration}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Inspector Canvas (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl bg-[#F7F7F7] border border-[#EAEAEA] p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              >
                <div className="flex items-center justify-between pb-6 border-b border-[#EAEAEA] mb-6">
                  <span className="text-xs font-mono text-[#1D4ED8] font-semibold">
                    PHASE {STEPS[activeStep].step} OF 06
                  </span>
                  <span className="text-xs font-mono text-[#999999]">
                    TYPICAL DURATION: {STEPS[activeStep].duration}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight mb-4">
                  {STEPS[activeStep].name}
                </h3>
                
                <p className="text-base text-[#6B6B6B] leading-relaxed mb-8">
                  {STEPS[activeStep].summary}
                </p>

                <div className="space-y-4 pt-6 border-t border-[#EAEAEA]">
                  <span className="text-xs font-mono text-[#999999] uppercase tracking-wider block">
                    STAGE DELIVERABLES &amp; ACTIONS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {STEPS[activeStep].details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#EAEAEA] text-xs text-[#111111]">
                        <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#EAEAEA] flex items-center justify-between text-xs font-mono text-[#6B6B6B]">
                  <span>Code Vibe Engineering Standard</span>
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev + 1) % STEPS.length)}
                    className="inline-flex items-center gap-1.5 text-[#111111] font-semibold hover:text-[#1D4ED8] transition-colors"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
