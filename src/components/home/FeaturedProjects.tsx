'use client';

/* Hallmark · genre: modern-minimal · theme: Midnight-Indigo · macrostructure: Asymmetric Studio · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import { ArrowUpRight, FolderGit2, ArrowRight } from 'lucide-react';

export default function FeaturedProjects() {
  const projects = PORTFOLIO_PROJECTS.filter((p) => p.featured).slice(0, 3);
  const leadProject = projects[0];
  const sideProjects = projects.slice(1);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-paper)] relative border-b border-[var(--color-rule)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--color-paper-2)] border border-[var(--color-rule)] text-[var(--color-muted)] text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>CURATED WORK // SHIPPED SYSTEMS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] tracking-tight">
              Featured Case Studies
            </h2>
            <p className="text-[var(--color-muted)] text-base sm:text-lg mt-3">
              Real commercial products delivering measurable results across production environments.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-2.5 rounded-lg bg-[var(--color-paper-2)] hover:bg-[var(--color-paper-3)] text-[var(--color-ink)] border border-[var(--color-rule)] hover:border-[var(--color-rule-strong)] transition-colors text-sm font-medium"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 text-[var(--color-muted)]" />
          </Link>
        </div>

        {/* Asymmetric Cadence: Lead Project (7 cols) + Companion Stack (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Lead Project Spotlight Card (7 cols) */}
          {leadProject && (
            <article className="lg:col-span-7 rounded-xl overflow-hidden bg-[var(--color-paper-2)] border border-[var(--color-rule)] hover:border-[var(--color-rule-strong)] transition-colors duration-200 flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[var(--color-rule)] mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-[var(--color-paper-3)] border border-[var(--color-rule)] flex items-center justify-center">
                      <FolderGit2 className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-wider">
                      SPOTLIGHT PRODUCTION
                    </span>
                  </div>
                  {leadProject.liveUrl && (
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono text-emerald-400 bg-[var(--color-paper-3)] border border-[var(--color-rule)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      LIVE SYSTEM
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-ink)] mb-3">
                  {leadProject.title}
                </h3>
                <p className="text-[var(--color-muted)] text-base leading-relaxed mb-6">
                  {leadProject.summary}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {leadProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--color-paper-3)] text-[var(--color-muted)] border border-[var(--color-rule)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--color-rule)] flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--color-muted)]">
                  CATEGORY: FULL-STACK WEB APPLICATION
                </span>
                <Link
                  href={`/portfolio#${leadProject.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          )}

          {/* Companion Stacked Projects (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideProjects.map((project) => (
              <article
                key={project.slug}
                className="rounded-xl p-6 bg-[var(--color-paper-2)] border border-[var(--color-rule)] hover:border-[var(--color-rule-strong)] transition-colors duration-200 flex flex-col justify-between flex-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[var(--color-muted)] uppercase">
                      CASE SPEC // {project.slug}
                    </span>
                    {project.liveUrl && (
                      <span className="text-[11px] font-mono text-emerald-400">
                        Operational
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-xl font-bold text-[var(--color-ink)] mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4 line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--color-paper-3)] text-[var(--color-muted)] border border-[var(--color-rule)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-rule)]">
                  <Link
                    href={`/portfolio#${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span>Inspect Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
