import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import TrustBadges from '@/components/home/TrustBadges';
import IllustratorSection from '@/components/home/IllustratorSection';
import TechStackMarquee from '@/components/home/TechStackMarquee';
import PillarsSection from '@/components/home/PillarsSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Testimonials from '@/components/ui/Testimonials';
import CTASection from '@/components/home/CTASection';
import SectionHeading from '@/components/ui/SectionHeading';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  path: '/',
  keywords: [
    'MERN stack developer Sri Lanka',
    'Next.js freelancer Sri Lanka',
    'web developer Colombo',
    'full stack developer hire',
    'bespoke digital agency Sri Lanka',
    'high performance web applications',
  ],
});

export default function HomePage() {
  return (
    <div className="bg-[#08090D] min-h-screen text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Hero />
      <TrustBadges />
      <IllustratorSection />
      <TechStackMarquee />
      <PillarsSection />
      <FeaturedProjects />

      {/* Testimonials Section */}
      <section className="py-28 md:py-36 bg-[#08090D] relative overflow-hidden border-t border-white/5">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-indigo-300 text-xs font-mono mb-4 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Trusted by Founders &amp;{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-white to-cyan-300 bg-clip-text text-transparent">
                Tech Leaders
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Verified 5-star engagements from clients across Upwork, Fiverr, and direct enterprise contracts.
            </p>
          </div>

          <Testimonials maxDisplay={6} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}