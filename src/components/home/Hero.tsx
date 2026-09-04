'use client';

/* Code Vibe · Apple-Level Refined Minimal Hero · Light Editorial */
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'telemetry' | 'spec'>('architecture');

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#FFFFFF] border-b border-[#EAEAEA]">
      {/* Precision Structural Grid (Subtle, Restrained, Non-Intrusive) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #111111 1px, transparent 1px), linear-gradient(to bottom, #111111 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Restrained Editorial Statement (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-2">
            
            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              <span className="text-xs font-mono font-medium tracking-widest text-[#6B6B6B] uppercase">
                CODE VIBE — DIGITAL TECHNOLOGY STUDIO
              </span>
            </motion.div>

            {/* Large Refined Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-[68px] font-semibold tracking-tight text-[#111111] leading-[1.08] mb-6 max-w-2xl"
            >
              Digital products, <br className="hidden sm:inline" />
              built with intent.
            </motion.h1>

            {/* Supporting Statement with Comfortable Reading Width */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl text-[#6B6B6B] leading-relaxed mb-10 max-w-xl font-normal"
            >
              We partner with forward-thinking companies to design and engineer high-performance web applications, digital systems, and enduring product experiences.
            </motion.p>

            {/* Clean Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <Link
                href="/quote"
                className="btn-primary"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/portfolio"
                className="btn-secondary"
              >
                <span>Explore our work</span>
                <ArrowUpRight className="w-4 h-4 text-[#6B6B6B]" />
              </Link>
            </motion.div>

            {/* Quiet Credibility Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#EAEAEA] w-full max-w-2xl"
            >
              <div>
                <div className="text-xl sm:text-2xl font-display font-semibold text-[#111111]">Next.js 16</div>
                <div className="text-xs text-[#6B6B6B] mt-0.5">Modern Architecture</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-display font-semibold text-[#111111]">&lt; 0.8s</div>
                <div className="text-xs text-[#6B6B6B] mt-0.5">Global Edge TTFB</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-display font-semibold text-[#111111]">100%</div>
                <div className="text-xs text-[#6B6B6B] mt-0.5">TypeScript Strict</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-display font-semibold text-[#111111]">5.0 ★</div>
                <div className="text-xs text-[#6B6B6B] mt-0.5">Verified Client Rating</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Refined Digital Architecture Visual (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-[#EAEAEA] bg-[#FFFFFF] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden"
            >
              {/* Visual Header — Minimal & Typographic */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#EAEAEA] bg-[#F7F7F7]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#6B6B6B]" />
                  <span className="text-xs font-mono font-medium text-[#111111] tracking-wider">
                    SYSTEM ARCHITECTURE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white border border-[#EAEAEA] text-[11px] font-mono text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>OPERATIONAL</span>
                </div>
              </div>

              {/* Interactive Navigation Tabs */}
              <div className="flex border-b border-[#EAEAEA] bg-[#FFFFFF] text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`flex-1 py-2.5 px-3 text-center border-r border-[#EAEAEA] transition-colors ${
                    activeTab === 'architecture'
                      ? 'bg-[#F7F7F7] text-[#111111] font-semibold'
                      : 'text-[#6B6B6B] hover:text-[#111111]'
                  }`}
                >
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('telemetry')}
                  className={`flex-1 py-2.5 px-3 text-center border-r border-[#EAEAEA] transition-colors ${
                    activeTab === 'telemetry'
                      ? 'bg-[#F7F7F7] text-[#111111] font-semibold'
                      : 'text-[#6B6B6B] hover:text-[#111111]'
                  }`}
                >
                  Telemetry
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('spec')}
                  className={`flex-1 py-2.5 px-3 text-center transition-colors ${
                    activeTab === 'spec'
                      ? 'bg-[#F7F7F7] text-[#111111] font-semibold'
                      : 'text-[#6B6B6B] hover:text-[#111111]'
                  }`}
                >
                  Runtime Spec
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-5 font-mono text-xs">
                {activeTab === 'architecture' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-[#F7F7F7] border border-[#EAEAEA] space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] text-[#6B6B6B]">
                        <span className="flex items-center gap-1.5 text-[#111111] font-semibold">
                          <Layers className="w-3.5 h-3.5 text-[#1D4ED8]" />
                          Application Interface Layer
                        </span>
                        <span>React 19 / Next.js 16</span>
                      </div>
                      <p className="text-xs text-[#6B6B6B] font-sans">
                        Component-driven design system with sub-second page transitions and zero unnecessary client bundles.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#F7F7F7] border border-[#EAEAEA] space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] text-[#6B6B6B]">
                        <span className="flex items-center gap-1.5 text-[#111111] font-semibold">
                          <Cpu className="w-3.5 h-3.5 text-[#111111]" />
                          Edge Engine &amp; Data Pipeline
                        </span>
                        <span>PostgreSQL / MongoDB</span>
                      </div>
                      <p className="text-xs text-[#6B6B6B] font-sans">
                        Type-safe API routes, connection pooling, and sub-15ms cold-start query execution.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#F7F7F7] border border-[#EAEAEA] space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] text-[#6B6B6B]">
                        <span className="flex items-center gap-1.5 text-[#111111] font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          Security &amp; Edge Headers
                        </span>
                        <span>TLS 1.3 / Strict CSP</span>
                      </div>
                      <p className="text-xs text-[#6B6B6B] font-sans">
                        Automated CSRF protection, rate limiting, and encrypted session handling.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'telemetry' && (
                  <div className="space-y-3 p-1">
                    <div className="flex items-center justify-between pb-2 border-b border-[#EAEAEA]">
                      <span className="text-[#6B6B6B]">Time to First Byte (TTFB)</span>
                      <span className="text-[#111111] font-bold">38 ms</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-[#EAEAEA]">
                      <span className="text-[#6B6B6B]">Largest Contentful Paint</span>
                      <span className="text-emerald-600 font-bold">0.68 s</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-[#EAEAEA]">
                      <span className="text-[#6B6B6B]">Cumulative Layout Shift</span>
                      <span className="text-emerald-600 font-bold">0.000</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-[#EAEAEA]">
                      <span className="text-[#6B6B6B]">Edge Cache Hit Ratio</span>
                      <span className="text-[#1D4ED8] font-bold">99.4%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#6B6B6B]">Core Web Vitals</span>
                      <span className="text-emerald-600 font-bold">100 / 100</span>
                    </div>
                  </div>
                )}

                {activeTab === 'spec' && (
                  <div className="rounded-lg bg-[#F7F7F7] p-3.5 border border-[#EAEAEA] overflow-x-auto text-[11px] text-[#6B6B6B] leading-relaxed">
                    <pre>
                      <code>
                        <span className="text-[#1D4ED8] font-semibold">export async function</span>{' '}
                        <span className="text-[#111111]">renderProductView</span>(id: string) &#123;{'\n'}
                        {'  '}const product = await db.query(&#123;{'\n'}
                        {'    '}where: &#123; id, published: true &#125;,{'\n'}
                        {'    '}cache: &apos;force-cache&apos;,{'\n'}
                        {'  '}&#125;);{'\n'}
                        {'\n'}
                        {'  '}return &lt;ProductCanvas data=&#123;product&#125; /&gt;;{'\n'}
                        &#125;
                      </code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3 border-t border-[#EAEAEA] bg-[#F7F7F7] flex items-center justify-between text-[11px]">
                <span className="text-[#6B6B6B] font-mono">STATUS: OPTIMAL</span>
                <span className="text-emerald-600 font-mono font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  NEXT.js 16 SERVER ENGINE
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
