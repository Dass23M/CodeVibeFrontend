'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, ShieldCheck, Zap, Terminal, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const { scrollY } = useScroll();
  const yTranslate = useTransform(scrollY, [0, 600], [0, 100]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center bg-[#08090D]"
    >
      {/* Dynamic Background Glowing Aurora */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-center ambient violet blob */}
        <div
          className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-25"
          style={{
            background: 'radial-gradient(circle, #6366F1 0%, #A855F7 50%, transparent 80%)',
          }}
        />
        {/* Dynamic mouse-guided subtle accent glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none"
          animate={{
            x: mousePosition.x * 120 + (typeof window !== 'undefined' ? window.innerWidth / 2 - 300 : 0),
            y: mousePosition.y * 120 + 200,
          }}
          transition={{ type: 'spring', damping: 40, stiffness: 120 }}
          style={{
            background: 'radial-gradient(circle, #38BDF8 0%, #6366F1 60%, transparent 80%)',
          }}
        />
        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Agency Tag / Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(99,102,241,0.15)] group hover:border-indigo-500/40 transition-colors"
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono font-medium tracking-wide text-indigo-300">
            ELITE DIGITAL ENGINEERING &amp; DESIGN STUDIO
          </span>
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
        </motion.div>

        {/* Master Headline with Gradient Motion */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6"
        >
          Architecting high-impact <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-300 via-white to-cyan-300 bg-clip-text text-transparent">
            web applications
          </span>{' '}
          that scale.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed mb-10 font-normal"
        >
          We partner with fast-moving startups and ambitious brands to craft bespoke, high-performance digital products using Next.js, React, and robust cloud architectures.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/quote"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 bg-size-200 text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.03] shadow-[0_0_30px_rgba(99,102,241,0.45)] border border-white/20"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-white/10 hover:border-white/25 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Explore Case Studies</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
        </motion.div>

        {/* Real Proof Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl w-full border-t border-white/10 pt-8 pb-4 mb-16"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold font-display text-white">40+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-mono mt-1">Shipped Builds</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold font-display text-indigo-400">100%</div>
            <div className="text-xs sm:text-sm text-slate-400 font-mono mt-1">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold font-display text-cyan-400">&lt; 0.8s</div>
            <div className="text-xs sm:text-sm text-slate-400 font-mono mt-1">Avg Load Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold font-display text-emerald-400">5.0 ★</div>
            <div className="text-xs sm:text-sm text-slate-400 font-mono mt-1">Top Rated Agency</div>
          </div>
        </motion.div>

        {/* Interactive 3D Agency Canvas Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: yTranslate, opacity: opacityFade }}
          className="w-full max-w-5xl"
        >
          <div className="relative rounded-2xl md:rounded-3xl border border-white/15 bg-gradient-to-b from-[#12141D]/90 to-[#0B0D14]/90 backdrop-blur-2xl p-2 md:p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(99,102,241,0.2)]">
            {/* Top Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 text-xs font-mono text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>codevibe.lk/production-v2.0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-mono text-emerald-400 hidden sm:inline">99.9% UPTIME</span>
              </div>
            </div>

            {/* Split Screen Showcase (Code IDE on left, Live App Canvas on right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-xl md:rounded-2xl">
              {/* Left Side: Clean Code Snippet */}
              <div className="lg:col-span-5 bg-[#0A0B10]/95 p-5 md:p-6 text-left font-mono text-xs text-slate-300 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-white/5">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Code2 className="w-3.5 h-3.5 text-indigo-400" /> AppEngine.tsx
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">TypeScript 5</span>
                  </div>
                  <pre className="text-slate-400 leading-relaxed overflow-x-auto pt-2">
                    <code>
                      <span className="text-indigo-400">const</span> <span className="text-cyan-300">CodeVibeAgency</span> = &#123;{'\n'}
                      {'  '}mission: <span className="text-emerald-300">&apos;Excellence in Code &amp; Motion&apos;</span>,{'\n'}
                      {'  '}stack: [<span className="text-amber-300">&apos;Next.js 16&apos;</span>, <span className="text-amber-300">&apos;Tailwind&apos;</span>, <span className="text-amber-300">&apos;TypeScript&apos;</span>],{'\n'}
                      {'  '}performanceScore: <span className="text-purple-400">100</span>,{'\n'}
                      {'  '}deliveryModel: <span className="text-emerald-300">&apos;Agile Sprint Based&apos;</span>{'\n'}
                      &#125;;{'\n\n'}
                      <span className="text-indigo-400">export default async function</span> <span className="text-blue-400">LaunchProduct</span>() &#123;{'\n'}
                      {'  '}<span className="text-slate-500">// Zero lag, sub-second TTFB guaranteed</span>{'\n'}
                      {'  '}<span className="text-indigo-400">return await</span> deployToEdge();{'\n'}
                      &#125;
                    </code>
                  </pre>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                    <CheckCircle2 className="w-4 h-4" /> Production Edge Ready
                  </span>
                  <span className="font-mono text-slate-500">Node v20.x</span>
                </div>
              </div>

              {/* Right Side: Visual Canvas */}
              <div className="lg:col-span-7 relative min-h-[260px] md:min-h-[340px] bg-[#0E111A] flex items-center justify-center p-4 md:p-6 overflow-hidden">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src="/images/hero-illustration.png"
                    alt="Code Vibe High Performance Web Interface"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Micro-Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#0F1117]/80 backdrop-blur-md border border-white/15">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-semibold text-white">Lighthouse Performance</div>
                        <div className="text-[11px] text-emerald-400 font-mono">100/100 Core Web Vitals</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[11px] font-semibold border border-emerald-500/20">
                      OPTIMIZED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
