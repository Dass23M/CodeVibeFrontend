'use client';

/* Code Vibe · Apple-Level Refined Technology Section · Light Theme */
import React, { useState } from 'react';

const TECHNOLOGIES = [
  {
    name: 'Next.js 16',
    category: 'Framework',
    description: 'Server Components, streaming SSR, and edge route handlers for zero-bundle overhead.',
  },
  {
    name: 'React 19',
    category: 'UI Engine',
    description: 'Concurrent rendering, fluid micro-interactions, and modern hook architectures.',
  },
  {
    name: 'TypeScript',
    category: 'Language',
    description: '100% strict type safety across client, server, and shared API validation schemas.',
  },
  {
    name: 'Node.js',
    category: 'Runtime',
    description: 'High-throughput asynchronous backend services with resilient error handling.',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Relational data modeling, connection pooling, and sub-10ms transactional queries.',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    description: 'Flexible document modeling and aggregation pipelines for dynamic business domains.',
  },
  {
    name: 'Python',
    category: 'Backend / Data',
    description: 'Data pipelines, background task processing, and custom AI/LLM API integrations.',
  },
  {
    name: 'Redis',
    category: 'Caching',
    description: 'Sub-millisecond in-memory caching, rate-limiting, and distributed state.',
  },
  {
    name: 'AWS & Cloudflare',
    category: 'Cloud Edge',
    description: 'Global content delivery, DDoS protection, and automated serverless scaling.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Design Tokens',
    description: 'Deterministic utility design system with strict 4pt spacing and zero runtime CSS.',
  },
];

export default function TechStackSection() {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-12 pb-6 border-b border-[#EAEAEA]">
          <div>
            <span className="text-xs font-mono text-[#999999] uppercase tracking-widest block mb-2">
              TECHNICAL STACK
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#111111]">
              Built with modern technology.
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6B6B6B]">
            Zero-bloat dependencies · Industry standards
          </span>
        </div>

        {/* Typographic Interactive Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {TECHNOLOGIES.map((tech) => {
            const isHovered = activeTech === tech.name;
            return (
              <div
                key={tech.name}
                onMouseEnter={() => setActiveTech(tech.name)}
                onMouseLeave={() => setActiveTech(null)}
                className={`p-5 rounded-xl border transition-all duration-200 cursor-default flex flex-col justify-between min-h-[140px] ${
                  isHovered
                    ? 'bg-[#F7F7F7] border-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.03)]'
                    : 'bg-[#FFFFFF] border-[#EAEAEA] hover:border-[#D4D4D4]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#999999] mb-2">
                    <span>{tech.category}</span>
                    {isHovered && <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />}
                  </div>
                  <h3 className="font-display text-base font-semibold text-[#111111] tracking-tight">
                    {tech.name}
                  </h3>
                </div>
                <p className="text-xs text-[#6B6B6B] leading-relaxed mt-3">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
