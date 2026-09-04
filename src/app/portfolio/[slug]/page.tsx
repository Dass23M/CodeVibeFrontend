import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import { ArrowRight, ArrowLeft, ExternalLink, Check, Layers, Cpu, ShieldCheck } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  return generatePageMetadata({
    title: project ? `${project.title} — Case Study` : 'Project Case Study',
    description: project?.summary,
    path: `/portfolio/${slug}`,
  });
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projectIdx = PORTFOLIO_PROJECTS.findIndex((p) => p.slug === slug);
  const project = PORTFOLIO_PROJECTS[projectIdx];

  if (!project) {
    return (
      <section className="pt-36 pb-20 text-center bg-white min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <h1 className="font-display text-2xl font-semibold text-[#111111] mb-3">Project Not Found</h1>
          <p className="text-sm text-[#6B6B6B] mb-6">The requested case study could not be located in our production archive.</p>
          <Link href="/portfolio" className="btn-secondary">
            ← Return to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  const nextProject = PORTFOLIO_PROJECTS[(projectIdx + 1) % PORTFOLIO_PROJECTS.length];

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FFFFFF] text-[#111111]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#6B6B6B] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ARCHIVE</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="mb-12 pb-10 border-b border-[#EAEAEA]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#999999] uppercase tracking-wider mb-4">
            <span>PRODUCTION CASE STUDY</span>
            <span>•</span>
            <span className="text-[#1D4ED8] font-medium">VERIFIED CLIENT SYSTEM</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-3xl font-normal">
            {project.summary}
          </p>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-8 border-t border-[#EAEAEA] text-xs font-mono">
            <div>
              <span className="text-[#999999] block mb-1">DISCIPLINE</span>
              <span className="text-[#111111] font-medium">Full-Stack Application</span>
            </div>
            <div>
              <span className="text-[#999999] block mb-1">CORE STACK</span>
              <span className="text-[#111111] font-medium">Next.js / React / Node</span>
            </div>
            <div>
              <span className="text-[#999999] block mb-1">TIMELINE</span>
              <span className="text-[#111111] font-medium">3 Weeks Delivery</span>
            </div>
            <div>
              <span className="text-[#999999] block mb-1">STATUS</span>
              <span className="text-emerald-600 font-medium">Live In Production</span>
            </div>
          </div>
        </header>

        {/* Hero Visual Canvas */}
        <div className="rounded-2xl bg-[#F7F7F7] border border-[#EAEAEA] p-8 sm:p-12 mb-16 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
          <div className="flex items-center justify-between pb-4 border-b border-[#EAEAEA] text-xs font-mono text-[#999999] mb-8">
            <span>ARCHITECTURE SPECIFICATION</span>
            <span className="text-emerald-600">VERIFIED DEPLOYMENT</span>
          </div>

          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#111111] mb-3">
              Scalable product interface built for high concurrency.
            </h3>
            <p className="text-[#6B6B6B] text-sm sm:text-base leading-relaxed mb-6">
              Engineered with modern server-side rendering, deterministic client caching, and atomic component composition.
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-white border border-[#EAEAEA] text-xs font-mono text-[#111111]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Body: Challenge, Approach & Result */}
        <div className="space-y-12 max-w-3xl">
          
          {/* Challenge */}
          <section className="space-y-4">
            <span className="text-xs font-mono text-[#999999] uppercase tracking-wider block">
              01 // THE CHALLENGE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight">
              Operational bottleneck &amp; legacy fragmentation.
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed">
              {project.problem}
            </p>
          </section>

          {/* Approach */}
          <section className="space-y-4 pt-8 border-t border-[#EAEAEA]">
            <span className="text-xs font-mono text-[#999999] uppercase tracking-wider block">
              02 // OUR APPROACH
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight">
              Modular architecture and intentional interaction design.
            </h2>
            <p className="text-[#6B6B6B] text-base leading-relaxed">
              {project.solution}
            </p>
          </section>

          {/* Impact & Outcome */}
          <section className="space-y-4 pt-8 border-t border-[#EAEAEA]">
            <span className="text-xs font-mono text-[#999999] uppercase tracking-wider block">
              03 // FINAL RESULT &amp; IMPACT
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight">
              Measurable commercial outcomes.
            </h2>
            <div className="p-6 rounded-xl bg-[#F7F7F7] border border-[#EAEAEA]">
              <p className="text-[#111111] font-medium text-base sm:text-lg leading-relaxed">
                {project.result}
              </p>
            </div>
          </section>

        </div>

        {/* Actions & Next Project Footer */}
        <div className="mt-16 pt-10 border-t border-[#EAEAEA] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <span>Visit Live System</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <Link href="/quote" className="btn-secondary text-sm">
              <span>Start a Similar Project</span>
            </Link>
          </div>

          {nextProject && (
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group flex items-center gap-2 text-sm font-mono text-[#6B6B6B] hover:text-[#111111] transition-colors"
            >
              <span>NEXT CASE STUDY: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

      </div>
    </article>
  );
}
