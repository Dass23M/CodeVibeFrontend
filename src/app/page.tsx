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
    <div className="bg-[var(--color-paper)] min-h-screen text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-white">
      <Hero />
      <TrustBadges />
      <IllustratorSection />
      <TechStackMarquee />
      <PillarsSection />
      <FeaturedProjects />

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-[var(--color-paper)] relative border-b border-[var(--color-rule)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--color-paper-2)] border border-[var(--color-rule)] text-[var(--color-muted)] text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>CLIENT FEEDBACK // VERIFIED ENGAGEMENTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] tracking-tight mb-4">
              Trusted by Founders and Tech Leaders Worldwide.
            </h2>
            <p className="text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
              Real reviews from direct enterprise contracts, Upwork, and long-term retainer clients.
            </p>
          </div>

          <Testimonials maxDisplay={6} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}