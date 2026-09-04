'use client';

/* Code Vibe · About Studio Section · Light Editorial */
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function AboutStudioSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Statement (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-mono text-[#999999] uppercase tracking-widest block mb-4">
              ABOUT THE STUDIO
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111111] leading-[1.08] mb-6">
              Small details. <br />
              Serious technology.
            </h2>
            <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed mb-6 font-normal max-w-xl">
              We started Code Vibe with a simple premise: companies shouldn&apos;t have to choose between exceptional software engineering and world-class product design.
            </p>
            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed mb-8 max-w-xl">
              Based in Colombo and working with clients globally, we operate as an elite engineering partner for founders and product teams who need web systems executed with precision, speed, and taste.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#1D4ED8] transition-colors"
            >
              <span>Learn more about our philosophy &amp; team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Approach Anchors (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-6 pt-2">
            
            <div className="p-6 sm:p-8 rounded-xl bg-[#F7F7F7] border border-[#EAEAEA]">
              <div className="flex items-center justify-between text-xs font-mono text-[#999999] mb-2">
                <span>01 // DIRECT ACCESS</span>
                <span className="text-[#1D4ED8] font-semibold">Zero Middlemen</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-[#111111] mb-2">
                You talk directly to the builders.
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                No account managers or lost-in-translation handoffs. You work directly with senior full-stack developers and interface designers on shared Slack and WhatsApp channels.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl bg-[#F7F7F7] border border-[#EAEAEA]">
              <div className="flex items-center justify-between text-xs font-mono text-[#999999] mb-2">
                <span>02 // PRODUCTION RIGOR</span>
                <span className="text-[#111111] font-semibold">Clean Code</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-[#111111] mb-2">
                Engineered for five years, not five weeks.
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                We write strict TypeScript, maintainable database schemas, and structured component trees that your internal technical team can effortlessly build upon.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl bg-[#F7F7F7] border border-[#EAEAEA]">
              <div className="flex items-center justify-between text-xs font-mono text-[#999999] mb-2">
                <span>03 // COMPLETE OWNERSHIP</span>
                <span className="text-emerald-600 font-semibold">100% IP Transfer</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-[#111111] mb-2">
                Full handover, zero vendor lock-in.
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Every single line of code, design file, and environment configuration is transferred directly to your team upon milestone completion.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
