'use client';

/* Code Vibe · Apple-Level Refined Minimal Hero with Live Product Showcase Image */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#FFFFFF] border-b border-[#EAEAEA]">
      {/* Precision Structural Background Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #111111 1px, transparent 1px), linear-gradient(to bottom, #111111 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Centered Headline & Statement (Spacious, Breathable, Confident) */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-12 sm:mb-16">
          

          {/* Master Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl lg:text-[72px] font-semibold tracking-tight text-[#111111] leading-[1.08] mb-6"
          >
            Digital products, <br className="hidden sm:inline" />
            built with intent.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl font-normal mb-8"
          >
            We partner with ambitious teams to design and engineer high-performance web applications, digital systems, and enduring product experiences.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/quote" className="btn-primary">
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link href="/portfolio" className="btn-secondary">
              <span>Explore our work</span>
              <ArrowUpRight className="w-4 h-4 text-[#6B6B6B]" />
            </Link>
          </motion.div>

        </div>

        {/* Hero Visual Moment: Apple-Grade Floating Interactive Product Showcase Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl md:rounded-3xl border border-[#EAEAEA] bg-white p-2.5 sm:p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08),0_0_1px_rgba(0,0,0,0.1)] overflow-hidden group">
            
            {/* Minimal Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 mb-2 border-b border-[#F0F0F0] text-xs font-mono text-[#999999]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#EAEAEA]" />
                <span className="ml-2 font-medium text-[#111111]">codevibe.systems/runtime-preview</span>
              </div>
              <span className="text-emerald-600 font-medium hidden sm:inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                EDGE OPERATIONAL (38ms)
              </span>
            </div>

            {/* High-Resolution Showcase Image */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#F7F7F7]">
              <Image
                src="/images/projects/hero-showcase.jpg"
                alt="Code Vibe High-Performance Web Application Interface"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Floating Live Architecture Pill */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10 flex items-center gap-3 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#EAEAEA] shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono text-[#999999]">BUILT ON</span>
                <span className="text-xs font-display font-semibold text-[#111111]">Next.js 16 + React 19 Engine</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
