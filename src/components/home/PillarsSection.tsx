'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import Image from 'next/image';
import { Layout, Server, Gauge, ArrowUpRight } from 'lucide-react';

const PILLARS = [
  {
    icon: <Layout className="w-6 h-6 text-indigo-400" />,
    title: 'Modern Frontend & UX',
    description: 'Hyper-responsive, fluid user experiences built with Next.js 16 and React 19. Using server-rendered components for absolute speed and physics-based micro-interactions.',
    image: '/images/illustrations/frontend.png',
    tags: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind', 'Motion'],
    gradient: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
    borderGlow: 'hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]',
  },
  {
    icon: <Server className="w-6 h-6 text-cyan-400" />,
    title: 'Robust Full-Stack Power',
    description: 'Resilient backend architectures with Node.js, Express, MongoDB, and PostgreSQL. Strict schema validation, rate-limited edge endpoints, and fault-tolerant auth pipelines.',
    image: '/images/illustrations/backend.png',
    tags: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST & GraphQL'],
    gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    borderGlow: 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
  },
  {
    icon: <Gauge className="w-6 h-6 text-emerald-400" />,
    title: 'SEO & Performance Core',
    description: 'Meticulously crafted for search engines and real-world users. Automated dynamic sitemaps, structured JSON-LD schemas, and guaranteed sub-second load times worldwide.',
    image: '/images/illustrations/performance.png',
    tags: ['100/100 Vitals', 'Sub-1s Load', 'JSON-LD', 'Semantic HTML'],
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    borderGlow: 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]',
  },
];

export default function PillarsSection() {
  return (
    <section className="py-28 md:py-36 bg-[#08090D] relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-indigo-300 text-xs font-mono mb-4 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            ENGINEERING EXCELLENCE
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Three Pillars of{' '}
            <span className="bg-gradient-to-r from-indigo-300 via-white to-cyan-300 bg-clip-text text-transparent">
              Digital Dominance
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don’t settle for average. Every application is built on cutting-edge software architecture, aesthetic refinement, and commercial speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#11131C] to-[#0A0B10] border border-white/10 ${pillar.borderGlow} transition-all duration-500 flex flex-col`}
            >
              {/* Top ambient radial gradient */}
              <div
                className={`absolute top-0 inset-x-0 h-48 bg-gradient-to-b ${pillar.gradient} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Illustration Canvas */}
              <div className="relative h-56 w-full flex items-center justify-center p-6 border-b border-white/5 overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    width={220}
                    height={160}
                    className="object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating Icon */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
                  {pillar.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-5 relative z-10">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                    <span>{pillar.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
