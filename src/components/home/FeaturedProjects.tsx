'use client';

/* Code Vibe · Editorial Selected Work · Varied Proportions */
import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const PROJECT_META: Record<string, { industry: string; services: string; year: string }> = {
  fitsync: {
    industry: 'Health & Fitness SaaS',
    services: 'Product Design, Full-Stack Web App',
    year: '2025',
  },
  'lost-found-platform': {
    industry: 'Civic & Institutional',
    services: 'Geo-Location System, API Architecture',
    year: '2025',
  },
  'codenews-lk': {
    industry: 'Digital Media & Publishing',
    services: 'High-Performance Next.js, Headless CMS',
    year: '2026',
  },
};

export default function FeaturedProjects() {
  const p1 = PORTFOLIO_PROJECTS.find((p) => p.slug === 'fitsync') || PORTFOLIO_PROJECTS[0];
  const p2 = PORTFOLIO_PROJECTS.find((p) => p.slug === 'lost-found-platform') || PORTFOLIO_PROJECTS[1];
  const p3 = PORTFOLIO_PROJECTS.find((p) => p.slug === 'codenews-lk') || PORTFOLIO_PROJECTS[2];

  return (
    <section id="work" className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#EAEAEA]">
          <div>
            <span className="text-xs font-mono text-[#999999] uppercase tracking-widest block mb-3">
              SELECTED WORK
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111]">
              Recent production systems.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] hover:text-[#1D4ED8] transition-colors"
          >
            <span>View all archive projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Cadence Grid */}
        <div className="space-y-12">
          
          {/* Project 01: Large Feature Project (Split 12-col) */}
          <Link
            href={`/portfolio#${p1.slug}`}
            className="group block rounded-2xl bg-[#F7F7F7] border border-[#EAEAEA] hover:border-[#D4D4D4] p-8 sm:p-12 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Info Column */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#999999] mb-4">
                    <span>{PROJECT_META[p1.slug]?.industry ?? 'SaaS Platform'}</span>
                    <span>{PROJECT_META[p1.slug]?.year ?? '2025'}</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#111111] tracking-tight mb-3 group-hover:text-[#1D4ED8] transition-colors flex items-center gap-2">
                    <span>{p1.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#999999] group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="text-[#6B6B6B] text-base leading-relaxed mb-6">
                    {p1.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-[#EAEAEA]">
                  <div className="text-xs font-mono text-[#999999]">
                    SERVICES: {PROJECT_META[p1.slug]?.services}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p1.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-white text-[#111111] border border-[#EAEAEA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Preview Canvas */}
              <div className="lg:col-span-7 rounded-xl bg-white border border-[#EAEAEA] p-6 sm:p-8 min-h-[300px] sm:min-h-[380px] flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all">
                <div className="flex items-center justify-between pb-4 border-b border-[#EAEAEA] text-xs font-mono text-[#999999]">
                  <span>PRODUCTION RUNTIME PREVIEW</span>
                  <span className="text-emerald-600 font-medium">99.8% Core Web Vitals</span>
                </div>

                {/* Abstract Real Product Interface Representation */}
                <div className="space-y-4 py-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-2xl font-bold font-display text-[#111111]">500+ Active Members</div>
                      <div className="text-xs text-[#6B6B6B] font-mono">Real-time health telemetry synchronized</div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#EFF6FF] text-[#1D4ED8] text-xs font-mono font-medium">
                      +28.4% Growth
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="p-3 rounded-lg bg-[#F7F7F7] border border-[#EAEAEA]">
                      <span className="text-[11px] font-mono text-[#999999]">Cold Start</span>
                      <div className="text-sm font-bold text-[#111111] mt-0.5">14ms</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#F7F7F7] border border-[#EAEAEA]">
                      <span className="text-[11px] font-mono text-[#999999]">DB Latency</span>
                      <div className="text-sm font-bold text-[#111111] mt-0.5">8ms</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#F7F7F7] border border-[#EAEAEA]">
                      <span className="text-[11px] font-mono text-[#999999]">Rating</span>
                      <div className="text-sm font-bold text-[#111111] mt-0.5">4.8 / 5.0</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EAEAEA] text-xs font-mono text-[#6B6B6B] flex items-center justify-between">
                  <span>Architecture: Full-Stack MERN + Next.js</span>
                  <span className="text-[#111111] font-medium">Inspect Case Study →</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Row 2: Projects 02 & 03 (Asymmetric Proportions) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Project 02 (Medium 5 cols) */}
            {p2 && (
              <Link
                href={`/portfolio#${p2.slug}`}
                className="lg:col-span-5 group rounded-2xl bg-[#F7F7F7] border border-[#EAEAEA] hover:border-[#D4D4D4] p-8 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#999999] mb-4">
                    <span>{PROJECT_META[p2.slug]?.industry ?? 'Civic Tech'}</span>
                    <span>{PROJECT_META[p2.slug]?.year ?? '2025'}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#111111] tracking-tight mb-2 group-hover:text-[#1D4ED8] transition-colors flex items-center gap-1.5">
                    <span>{p2.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#999999] group-hover:text-[#1D4ED8] transition-colors" />
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                    {p2.summary}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[#EAEAEA]">
                  <div className="p-4 rounded-xl bg-white border border-[#EAEAEA]">
                    <div className="text-xs font-mono text-[#999999] mb-1">IMPACT</div>
                    <div className="text-sm font-medium text-[#111111]">
                      Deployed across 3 Colombo campuses, 200+ matched items.
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p2.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-white text-[#111111] border border-[#EAEAEA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )}

            {/* Project 03 (Wide 7 cols) */}
            {p3 && (
              <Link
                href={`/portfolio#${p3.slug}`}
                className="lg:col-span-7 group rounded-2xl bg-[#F7F7F7] border border-[#EAEAEA] hover:border-[#D4D4D4] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#999999] mb-4">
                    <span>{PROJECT_META[p3.slug]?.industry ?? 'Digital Publishing'}</span>
                    <span>{PROJECT_META[p3.slug]?.year ?? '2026'}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight mb-3 group-hover:text-[#1D4ED8] transition-colors flex items-center gap-1.5">
                    <span>{p3.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#999999] group-hover:text-[#1D4ED8] transition-colors" />
                  </h3>
                  <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed mb-6">
                    {p3.summary}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[#EAEAEA]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-lg bg-white border border-[#EAEAEA]">
                      <div className="text-xs font-mono text-[#999999]">PERFORMANCE</div>
                      <div className="text-sm font-semibold text-[#111111] mt-0.5">Sub-500ms Edge Render</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-white border border-[#EAEAEA]">
                      <div className="text-xs font-mono text-[#999999]">SEO METRICS</div>
                      <div className="text-sm font-semibold text-emerald-600 mt-0.5">100/100 Core Vitals</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p3.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-white text-[#111111] border border-[#EAEAEA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
