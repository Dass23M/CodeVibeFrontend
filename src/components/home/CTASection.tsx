'use client';

import Link from 'next/link';
import { CALENDLY_URL } from '@/lib/constants';
import { ArrowRight, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

const PERKS = [
  'Free Detailed Architecture & Quote in 24h',
  'Milestone-Based Transparent Invoicing',
  'Direct Developer & Designer Slack / WhatsApp Access',
  '100% Satisfaction & Handover Guarantee',
];

export default function CTASection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#08090D] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-indigo-500/20 via-purple-500/15 to-cyan-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/15 backdrop-blur-2xl text-center shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(99,102,241,0.25)] relative overflow-hidden">
          
          {/* Top light glow bar */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-80" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-6 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>LET&apos;S SHAPE THE FUTURE TOGETHER</span>
          </div>

          {/* Main Title */}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Have a project in mind? <br />
            <span className="bg-gradient-to-r from-indigo-300 via-white to-cyan-300 bg-clip-text text-transparent">
              Let&apos;s engineer something iconic.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you&apos;re building a breakthrough SaaS product, modernizing an enterprise system, or redesigning an existing web application — we bring your vision to life.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-semibold text-base shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-[1.03] border border-white/20"
            >
              <span>Estimate Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.09] text-white font-medium text-base border border-white/15 hover:border-white/30 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4 text-indigo-400" />
              <span>Book Strategy Call</span>
            </a>
          </div>

          {/* Perks list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-8 border-t border-white/10 text-left max-w-2xl mx-auto">
            {PERKS.map((perk) => (
              <div key={perk} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
