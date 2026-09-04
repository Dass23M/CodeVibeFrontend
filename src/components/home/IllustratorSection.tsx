'use client';

import Link from 'next/link';
import { Palette, Zap, Layers, Box, ArrowRight, CheckCircle2, Sparkles, Sliders, ShieldCheck } from 'lucide-react';

const FEATURES = [
  {
    icon: <Palette className="w-5 h-5 text-indigo-400" />,
    title: 'Pixel-Perfect UI/UX',
    description: 'Every interaction and screen is crafted with intentional micro-animations, optical balance, and fluid responsiveness.',
    color: 'from-indigo-500/20 to-indigo-500/5',
    border: 'group-hover:border-indigo-500/40',
  },
  {
    icon: <Zap className="w-5 h-5 text-cyan-400" />,
    title: 'Sub-Second Speeds',
    description: 'Engineered on Next.js 16 with optimized server components, aggressive edge caching, and perfect 100/100 Core Web Vitals.',
    color: 'from-cyan-500/20 to-cyan-500/5',
    border: 'group-hover:border-cyan-500/40',
  },
  {
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    title: 'Scalable Architecture',
    description: 'Clean, type-safe code structures with modular APIs and reusable design patterns that scale seamlessly with your growth.',
    color: 'from-purple-500/20 to-purple-500/5',
    border: 'group-hover:border-purple-500/40',
  },
  {
    icon: <Box className="w-5 h-5 text-emerald-400" />,
    title: 'Turnkey Delivery',
    description: 'Full product lifecycle handling — from interactive wireframes to automated CI/CD cloud deployment.',
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'group-hover:border-emerald-500/40',
  },
];

export default function IllustratorSection() {
  return (
    <section id="why-code-vibe" className="relative py-28 md:py-36 bg-[#08090D] overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Natural Real UI Component Anatomy Inspector on Left (Zero cartoon illustrations) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#12141F] to-[#0A0B12] p-6 md:p-7 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(99,102,241,0.15)] space-y-5">
              
              {/* Card Header with Design System Beacon */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white font-mono">DesignSystem.tokens</div>
                    <div className="text-[10px] text-slate-400 font-mono">Atomic Component Matrix</div>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-semibold border border-emerald-500/20">
                  SYSTEM READY
                </span>
              </div>

              {/* Real UI Component Element 1: Color Palette Scales */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>SEMANTIC COLOR TOKENS</span>
                  <span className="text-indigo-400">HSL Tailored</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { name: 'Indigo 500', hex: '#6366F1', bg: 'bg-[#6366F1]' },
                    { name: 'Cyan 400', hex: '#22D3EE', bg: 'bg-[#22D3EE]' },
                    { name: 'Emerald 400', hex: '#34D399', bg: 'bg-[#34D399]' },
                    { name: 'Obsidian 950', hex: '#08090D', bg: 'bg-[#08090D] border border-white/20' },
                  ].map((color) => (
                    <div key={color.name} className="p-2 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col gap-1.5">
                      <div className={`w-full h-6 rounded-lg ${color.bg} shadow-sm`} />
                      <div className="text-[10px] font-mono text-white font-medium truncate">{color.name}</div>
                      <div className="text-[9px] font-mono text-slate-500">{color.hex}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real UI Component Element 2: Interactive Button & State Inspector */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>INTERACTIVE ELEMENT STATES</span>
                  <span className="text-cyan-400">Framer Motion</span>
                </div>
                
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-medium">Spring Magnetic CTA</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300">
                      Hover: scale(1.03)
                    </span>
                  </div>
                  
                  {/* Real Live Mini Interactive Buttons Showcase */}
                  <div className="flex items-center gap-2.5">
                    <div className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold text-xs text-center shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-white/20">
                      Primary Action
                    </div>
                    <div className="flex-1 py-2 px-3 rounded-xl bg-white/[0.05] border border-white/15 text-slate-200 text-xs font-medium text-center">
                      Glass Secondary
                    </div>
                  </div>
                </div>
              </div>

              {/* Real UI Component Element 3: Verified Performance Score */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-xs font-bold text-white font-mono">100% Optical Consistency</div>
                    <div className="text-[10px] text-slate-400 font-mono">Mobile, Tablet &amp; 4K Display Optimized</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-emerald-400 font-mono">AAA+</div>
                  <div className="text-[9px] text-slate-500 font-mono">ACCESSIBLE</div>
                </div>
              </div>

            </div>
          </div>

          {/* Features Grid on Right */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
                THE CODE VIBE ADVANTAGE
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                Engineered with purpose.{' '}
                <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  Designed to inspire.
                </span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                We bridge the gap between creative visual artistry and mission-critical engineering. No cartoon placeholders or generic AI templates — only tailored, bespoke digital systems built to win.
              </p>
            </div>

            {/* 2x2 Feature Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className={`group relative rounded-2xl p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.07] ${feature.border} transition-all duration-300 flex flex-col gap-3 backdrop-blur-md`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/services" className="btn-primary">
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio" className="btn-outline">
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
