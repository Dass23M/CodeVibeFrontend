'use client';

/* Code Vibe · Selected Work Showcase · Dominated by High-Res UI Imagery */
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    slug: 'fitsync',
    title: 'FitSync Platform',
    industry: 'Health & Fitness SaaS',
    services: 'Product Architecture, UI System, Full-Stack Web App',
    year: '2025',
    summary: 'A high-performance workout tracking and health analytics platform with responsive dashboard and sub-second progress calculation.',
    image: '/images/projects/fitsync-preview.jpg',
    highlight: '500+ active users · < 14ms query speed',
  },
  {
    slug: 'lost-found-platform',
    title: 'Campus Lost & Found Hub',
    industry: 'Civic & Institutional',
    services: 'Geo-Location Map, Next.js System, Automated Matching',
    year: '2025',
    summary: 'Centralized institutional lost-and-found system with spatial map filtering, image uploads, and automated recovery notifications.',
    image: '/images/projects/lostfound-preview.jpg',
    highlight: 'Deployed at 3 universities · 200+ resolved items',
  },
  {
    slug: 'codenews-lk',
    title: 'CodeNews LK Digital Dispatch',
    industry: 'Digital Publishing',
    services: 'High-Traffic Next.js, Headless CMS, Edge Caching',
    year: '2026',
    summary: 'Fast-loading tech editorial and news publishing portal engineered for 100/100 Core Web Vitals and dynamic SEO indexing.',
    image: '/images/projects/codenews-preview.jpg',
    highlight: 'Sub-500ms edge render · 100/100 SEO Score',
  },
];

export default function FeaturedProjects() {
  const lead = PROJECTS[0];
  const secondary = PROJECTS.slice(1);

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

        {/* Portfolio Grid */}
        <div className="space-y-12">
          
          {/* Project 01: Large Featured Case Study (High-Impact Hero Canvas) */}
          <Link
            href={`/portfolio#${lead.slug}`}
            className="group block rounded-2xl bg-[#F7F7F7] border border-[#EAEAEA] hover:border-[#D4D4D4] p-6 sm:p-10 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#999999] mb-3">
                    <span>{lead.industry}</span>
                    <span>{lead.year}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#111111] tracking-tight mb-3 group-hover:text-[#1D4ED8] transition-colors flex items-center gap-2">
                    <span>{lead.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#999999] group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
                    {lead.summary}
                  </p>
                  <div className="inline-block px-3 py-1 rounded bg-white border border-[#EAEAEA] text-xs font-mono text-[#111111]">
                    {lead.highlight}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EAEAEA] text-xs text-[#999999] font-mono">
                  {lead.services}
                </div>
              </div>

              {/* Right Dominated High-Resolution UI Image Canvas */}
              <div className="lg:col-span-8 rounded-xl overflow-hidden border border-[#EAEAEA] bg-white shadow-sm transition-all duration-500 group-hover:shadow-md">
                <div className="relative aspect-[16/10] w-full bg-[#F7F7F7] overflow-hidden">
                  <Image
                    src={lead.image}
                    alt={lead.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>
              </div>

            </div>
          </Link>

          {/* Row 2: Projects 02 & 03 (Two-Column Asymmetric Display) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {secondary.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio#${project.slug}`}
                className="group rounded-2xl bg-[#F7F7F7] border border-[#EAEAEA] hover:border-[#D4D4D4] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#999999] mb-3">
                    <span>{project.industry}</span>
                    <span>{project.year}</span>
                  </div>
                  
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#111111] tracking-tight mb-2 group-hover:text-[#1D4ED8] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#999999] group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>

                  <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* High-Resolution Project Preview Canvas */}
                  <div className="rounded-xl overflow-hidden border border-[#EAEAEA] bg-white shadow-sm mb-6 transition-all duration-500 group-hover:shadow-md">
                    <div className="relative aspect-[16/10] w-full bg-[#F7F7F7] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EAEAEA] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6B6B6B]">{project.highlight}</span>
                  <span className="text-[#111111] font-medium group-hover:text-[#1D4ED8] transition-colors">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
