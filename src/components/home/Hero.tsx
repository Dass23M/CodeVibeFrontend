'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  Lock,
  TrendingUp,
  Activity,
  Globe,
  Cpu,
  Layers,
  CheckCircle2,
  Zap,
  Server,
  Code2
} from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'deployments'>('overview');
  const [activeRange, setActiveRange] = useState<'7d' | '30d' | '90d'>('30d');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const { scrollY } = useScroll();
  const yTranslate = useTransform(scrollY, [0, 600], [0, 80]);
  const opacityFade = useTransform(scrollY, [0, 450], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center bg-[#08090D]"
    >
      {/* Dynamic Background Glowing Aurora */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient violet mesh */}
        <div
          className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px] opacity-25"
          style={{
            background: 'radial-gradient(circle, #6366F1 0%, #A855F7 50%, transparent 80%)',
          }}
        />
        {/* Dynamic mouse-guided glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none"
          animate={{
            x: mousePosition.x * 120 + (typeof window !== 'undefined' ? window.innerWidth / 2 - 300 : 0),
            y: mousePosition.y * 120 + 220,
          }}
          transition={{ type: 'spring', damping: 40, stiffness: 120 }}
          style={{
            background: 'radial-gradient(circle, #38BDF8 0%, #6366F1 60%, transparent 80%)',
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Studio Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(99,102,241,0.15)] group hover:border-indigo-500/40 transition-colors"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono font-medium tracking-wide text-indigo-300">
            HIGH-PERFORMANCE FULL-STACK STUDIO
          </span>
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
        </motion.div>

        {/* Master Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6"
        >
          We engineer digital products <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-300 via-white to-cyan-300 bg-clip-text text-transparent">
            built for scale &amp; speed.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed mb-10 font-normal"
        >
          Partnering with ambitious founders and fast-moving teams to deliver bespoke SaaS applications, enterprise platforms, and lightning-fast web interfaces.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/quote"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.03] shadow-[0_0_30px_rgba(99,102,241,0.45)] border border-white/20"
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

        {/* Proof Metrics */}
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
            <div className="text-xs sm:text-sm text-slate-400 font-mono mt-1">Top Rated Studio</div>
          </div>
        </motion.div>

        {/* 100% NATURAL, REAL UI PRODUCT INTERFACE SHOWCASE (NO AI/CARTOON MODELS) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: yTranslate, opacity: opacityFade }}
          className="w-full max-w-5xl text-left"
        >
          <div className="relative rounded-2xl md:rounded-3xl border border-white/15 bg-gradient-to-b from-[#11131C] to-[#0A0B10] backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(99,102,241,0.2)] overflow-hidden">
            
            {/* Window Chrome & Top Browser Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]/90 inline-block" />
              </div>
              
              {/* URL Address Bar */}
              <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 max-w-sm w-full mx-3 sm:mx-8">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">codevibe.app/production/cloud-metrics</span>
              </div>

              {/* Edge Status */}
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-mono text-emerald-400 font-semibold hidden sm:inline">
                  EDGE LIVE
                </span>
              </div>
            </div>

            {/* In-App Navigation Bar */}
            <div className="px-4 sm:px-6 py-3.5 border-b border-white/5 bg-white/[0.01] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-mono font-bold text-xs">
                  CV
                </div>
                <div>
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>Cloud Workspace</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      v2.8.4
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">Next.js 16 • MongoDB • Redis Global</div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-1 bg-white/[0.03] border border-white/10 p-1 rounded-xl text-xs font-mono">
                {(['overview', 'metrics', 'deployments'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                      activeTab === tab
                        ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              
              {/* KPI Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Metric 1: Monthly Throughput */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-indigo-400" /> Platform Volume
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <TrendingUp className="w-3 h-3" /> +28.4%
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                    $148,290.00
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-1">Processed across active client nodes</div>
                  
                  {/* Mini visual bar */}
                  <div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full w-[82%]" />
                  </div>
                </div>

                {/* Metric 2: Edge Latency */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" /> Global Edge TTFB
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                      SUB-18MS
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                    14.2 ms
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-1">Colombo, SG, Frankfurt &amp; US PoPs</div>

                  <div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full w-[96%]" />
                  </div>
                </div>

                {/* Metric 3: Lighthouse Web Vitals */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-purple-400" /> Core Web Vitals
                    </span>
                    <span className="text-emerald-400 text-[11px] font-mono font-semibold">
                      PERFECT SCORE
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                    100 / 100
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-1">LCP: 0.5s • FID: 0ms • CLS: 0.00</div>

                  <div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-400 to-indigo-400 h-full rounded-full w-[100%]" />
                  </div>
                </div>

              </div>

              {/* Main Vector Analytics Chart (Pure Code SVG Spline) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div>
                    <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
                      <span>Traffic Velocity &amp; API Concurrency</span>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 font-mono text-[10px] border border-indigo-500/20">
                        Live Stream
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">Continuous automated telemetry from edge CDN</p>
                  </div>

                  {/* Range Pills */}
                  <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/5 text-xs font-mono">
                    {(['7d', '30d', '90d'] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setActiveRange(r)}
                        className={`px-2.5 py-1 rounded transition-colors ${
                          activeRange === r ? 'bg-white/15 text-white font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SVG Graph Graphic */}
                <div className="relative w-full h-44 sm:h-52">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 900 220" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.45" />
                        <stop offset="60%" stopColor="#06B6D4" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="splineStroke" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#818CF8" />
                        <stop offset="50%" stopColor="#C084FC" />
                        <stop offset="100%" stopColor="#38BDF8" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Grid lines */}
                    <line x1="0" y1="40" x2="900" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="95" x2="900" y2="95" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="150" x2="900" y2="150" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="205" x2="900" y2="205" stroke="rgba(255,255,255,0.06)" />

                    {/* Filled Area */}
                    <path
                      d="M 0,170 C 120,165 180,120 280,130 C 380,140 450,70 560,85 C 670,100 740,35 900,45 L 900,210 L 0,210 Z"
                      fill="url(#chartGradient)"
                    />

                    {/* Spline Stroke */}
                    <path
                      d="M 0,170 C 120,165 180,120 280,130 C 380,140 450,70 560,85 C 670,100 740,35 900,45"
                      fill="none"
                      stroke="url(#splineStroke)"
                      strokeWidth="3.5"
                    />

                    {/* Highlighted Focal Points */}
                    <circle cx="280" cy="130" r="4.5" fill="#818CF8" className="animate-pulse" />
                    <circle cx="560" cy="85" r="4.5" fill="#C084FC" className="animate-pulse" />
                    <circle cx="900" cy="45" r="5" fill="#38BDF8" />
                  </svg>

                  {/* Floating Interactive Tooltip */}
                  <div className="absolute top-4 right-16 sm:right-28 px-3 py-2 rounded-xl bg-[#0F111A]/90 backdrop-blur-md border border-white/15 shadow-xl text-left hidden sm:block">
                    <div className="text-[10px] font-mono text-slate-400">PEAK THROUGHPUT</div>
                    <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                      <span>42,800 req/sec</span>
                      <span className="text-emerald-400 font-semibold">99.98% Hit</span>
                    </div>
                  </div>
                </div>

                {/* X Axis Labels */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-3 border-t border-white/5 mt-2">
                  <span>Day 01</span>
                  <span>Day 07</span>
                  <span>Day 14</span>
                  <span>Day 21</span>
                  <span>Day 28</span>
                  <span className="text-indigo-400 font-semibold">Live (Now)</span>
                </div>
              </div>

              {/* Bottom Row: Active Production Pipeline & Deployments */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Micro Feed 1: Recent Automated Deployments */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-indigo-400" /> Active Edge Deployments
                    </span>
                    <span className="text-emerald-400">All Systems Normal</span>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { name: 'FitSync Pro Cloud Engine', stack: 'Next.js 16 • MongoDB', status: 'Deployed', time: '3m ago' },
                      { name: 'CodeNews Realtime Dispatch', stack: 'PostgreSQL • Redis', status: 'Healthy', time: '18m ago' },
                      { name: 'Lost & Found Enterprise Hub', stack: 'Express • Docker', status: 'Optimal', time: '1h ago' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-white">{item.name}</div>
                            <div className="text-[10px] font-mono text-slate-400">{item.stack}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {item.status}
                          </span>
                          <div className="text-[10px] font-mono text-slate-500 mt-0.5">{item.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Feed 2: Architectural Specs */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" /> System Architecture Matrix
                    </span>
                    <span className="text-indigo-400">Continuous CI/CD</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { spec: 'Zero Cold-Start Edge Execution', value: '< 2ms', label: 'Vercel / Cloudflare' },
                      { spec: 'Strict Type-Safety & Validation', value: '100%', label: 'TypeScript 5 + Zod' },
                      { spec: 'Automated Rate-Limiting & Security', value: 'Active', label: 'DDoS Shield Ready' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div>
                          <div className="text-xs text-slate-200 font-medium">{item.spec}</div>
                          <div className="text-[10px] font-mono text-slate-500">{item.label}</div>
                        </div>
                        <span className="font-mono text-xs font-bold text-indigo-300">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 100% Production Audit Verified
                    </span>
                    <span>Node v20.x LTS</span>
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
