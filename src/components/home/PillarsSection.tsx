'use client';

/* Hallmark · genre: modern-minimal · theme: Midnight-Indigo · macrostructure: Asymmetric Studio · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import Image from 'next/image';
import { Layout, Server, Gauge, ArrowUpRight } from 'lucide-react';

const PILLARS = [
  {
    icon: <Layout className="w-5 h-5 text-[var(--color-accent)]" />,
    title: 'Modern Frontend & UX',
    description: 'Hyper-responsive, fluid user experiences built with Next.js 16 and React 19. Server-rendered components for absolute speed and physics-based micro-interactions.',
    image: '/images/illustrations/frontend.png',
    tags: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind', 'Motion'],
  },
  {
    icon: <Server className="w-5 h-5 text-cyan-400" />,
    title: 'Robust Full-Stack Power',
    description: 'Resilient backend architectures with Node.js, Express, MongoDB, and PostgreSQL. Strict schema validation, rate-limited edge endpoints, and fault-tolerant auth pipelines.',
    image: '/images/illustrations/backend.png',
    tags: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST & GraphQL'],
  },
  {
    icon: <Gauge className="w-5 h-5 text-emerald-400" />,
    title: 'SEO & Performance Core',
    description: 'Meticulously crafted for search engines and real-world users. Automated dynamic sitemaps, structured JSON-LD schemas, and guaranteed sub-second load times worldwide.',
    image: '/images/illustrations/performance.png',
    tags: ['100/100 Vitals', 'Sub-1s Load', 'JSON-LD', 'Semantic HTML'],
  },
];

export default function PillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-paper)] relative border-b border-[var(--color-rule)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Left-Biased Header */}
        <div className="max-w-2xl text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--color-paper-2)] border border-[var(--color-rule)] text-[var(--color-muted)] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>CORE PILLARS // SYSTEM STANDARDS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] tracking-tight mb-4">
            Three Disciplines of Modern Software Engineering.
          </h2>
          <p className="text-[var(--color-muted)] text-base sm:text-lg leading-relaxed font-normal">
            Every application is constructed with architectural precision, optical balance, and commercial speed.
          </p>
        </div>

        {/* 3-Column Grid with Lightness Elevation & Hairlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-xl overflow-hidden bg-[var(--color-paper-2)] border border-[var(--color-rule)] hover:border-[var(--color-rule-strong)] transition-colors duration-200 flex flex-col shadow-sm"
            >
              {/* Illustration Canvas */}
              <div className="relative h-52 w-full flex items-center justify-center p-6 border-b border-[var(--color-rule)] bg-[var(--color-paper)]">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    width={200}
                    height={150}
                    className="object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Clean Floating Icon */}
                <div className="absolute top-4 left-4 p-2 rounded-md bg-[var(--color-paper-2)] border border-[var(--color-rule)]">
                  {pillar.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                <div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-2 flex items-center justify-between">
                    <span>{pillar.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-ink)] transition-colors" />
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--color-rule)]">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--color-paper-3)] text-[var(--color-muted)] border border-[var(--color-rule)]"
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
