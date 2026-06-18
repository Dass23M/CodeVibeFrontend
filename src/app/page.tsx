import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import TrustBadges from '@/components/home/TrustBadges';
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
    'web developer Gampaha',
    'full stack developer hire',
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <TechStackMarquee />
      <PillarsSection />
      <FeaturedProjects />

      {/* Testimonials Section */}
      <section className="section bg-surface-section">
        <div className="container">
          <SectionHeading
            eyebrow="Client Reviews"
            title={<>What Clients Say About <span className="gradient-text">Code Vibe</span></>}
            subtitle="Real reviews from real clients on Fiverr, Upwork, and direct engagements."
          />
          <Testimonials maxDisplay={6} />
        </div>
      </section>

      <CTASection />
    </>
  );
}