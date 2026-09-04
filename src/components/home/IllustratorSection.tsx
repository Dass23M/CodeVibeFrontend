'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Palette, Zap, Layers, Box, ArrowRight } from 'lucide-react';

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
          
          {/* Visual Showcase Card on Left */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 md:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative w-full aspect-square flex items-center justify-center">
                <Image
                  src="/images/hero-illustrator-processed.png"
                  alt="Creative digital engineering illustration"
                  width={450}
                  height={450}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(99,102,241,0.25)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="mt-4 p-4 rounded-2xl bg-[#0F1117]/80 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-indigo-400">STATUS</div>
                  <div className="text-sm font-semibold text-white">Production Grade Code</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 font-mono text-xs border border-indigo-500/30">
                  VERIFIED
                </span>
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
                We bridge the gap between creative visual artistry and mission-critical engineering. No boilerplate templates — only tailored, bespoke digital systems built to win.
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
