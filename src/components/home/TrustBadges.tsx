'use client';

/* Code Vibe · Apple-Level Subtle Credibility Section · Light Editorial */
import { Check, ShieldCheck, Zap, Code2, Globe } from 'lucide-react';

const CREDENTIALS = [
  {
    category: 'Architecture',
    label: 'Next.js 16 & React 19',
    detail: 'Server components & edge runtime',
    icon: <Zap className="w-4 h-4 text-[#1D4ED8]" />,
  },
  {
    category: 'Reliability',
    label: '99.9% Uptime Standard',
    detail: 'Resilient cloud infrastructure',
    icon: <ShieldCheck className="w-4 h-4 text-[#111111]" />,
  },
  {
    category: 'Speed',
    label: '< 800ms Global Load',
    detail: 'Sub-second response targets',
    icon: <ActivityIcon className="w-4 h-4 text-[#111111]" />,
  },
  {
    category: 'Code Quality',
    label: '100% Strict Type Safety',
    detail: 'Automated CI/CD pipelines',
    icon: <Code2 className="w-4 h-4 text-[#111111]" />,
  },
  {
    category: 'Global Clients',
    label: 'Direct Retainer Delivery',
    detail: 'US, UK, Europe & APAC teams',
    icon: <Globe className="w-4 h-4 text-[#111111]" />,
  },
];

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

export default function TrustBadges() {
  return (
    <section className="py-16 md:py-20 border-b border-[#EAEAEA] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Subtle Credibility Headline */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-10 pb-6 border-b border-[#EAEAEA]">
          <h2 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-[#111111]">
            Built for businesses that care about the details.
          </h2>
          <span className="text-xs font-mono text-[#999999] uppercase tracking-wider">
            QUALITY BENCHMARKS // 2026
          </span>
        </div>

        {/* 5-Column Quiet Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CREDENTIALS.map((item) => (
            <div
              key={item.category}
              className="flex flex-col gap-2 p-4 rounded-lg bg-[#F7F7F7] border border-[#EAEAEA] transition-colors hover:border-[#D4D4D4]"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#999999]">
                <span>{item.category}</span>
                {item.icon}
              </div>
              <span className="font-display text-base font-semibold text-[#111111]">
                {item.label}
              </span>
              <span className="text-xs text-[#6B6B6B] leading-relaxed">
                {item.detail}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
