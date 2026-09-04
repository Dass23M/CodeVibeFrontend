'use client';

import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import { ArrowUpRight, ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';

export default function FeaturedProjects() {
  const projects = PORTFOLIO_PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-28 md:py-36 bg-[#08090D] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-indigo-300 text-xs font-mono mb-4 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              CURATED WORK
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Featured{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-white to-cyan-300 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mt-3">
              Real commercial products delivering measurable business results for clients worldwide.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 self-start md:self-auto px-6 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 hover:border-white/20 transition-all font-medium text-sm"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <article
              key={project.slug}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#11131C] to-[#0A0B10] border border-white/10 hover:border-indigo-500/50 transition-all duration-500 flex flex-col hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)]"
            >
              {/* Project Preview Canvas */}
              <div className="relative h-60 w-full bg-[#0D0F17] flex items-center justify-center overflow-hidden border-b border-white/5">
                {/* Visual Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-cyan-500/10 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Project Monogram & Tech Icon */}
                <div className="text-center relative z-10 transition-transform duration-500 group-hover:scale-110">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mx-auto mb-3 shadow-[0_10px_25px_rgba(0,0,0,0.5)] group-hover:border-indigo-500/40">
                    <FolderGit2 className="w-8 h-8 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <span className="font-mono text-xs tracking-widest uppercase text-slate-400 font-semibold">
                    {project.title}
                  </span>
                </div>

                {/* Live Beacon Badge */}
                {project.liveUrl && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-mono text-[11px] font-semibold text-emerald-400">Live Production</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack & Link */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/[0.02] text-slate-500 border border-white/5">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/portfolio#${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
