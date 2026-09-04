import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import TrustBadges from '@/components/home/TrustBadges';
import EditorialServices from '@/components/home/EditorialServices';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import DesignPhilosophy from '@/components/home/DesignPhilosophy';
import ProcessSection from '@/components/home/ProcessSection';
import TechStackSection from '@/components/home/TechStackSection';
import AboutStudioSection from '@/components/home/AboutStudioSection';
import Testimonials from '@/components/ui/Testimonials';
import CTASection from '@/components/home/CTASection';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  path: '/',
  keywords: [
    'MERN stack developer Sri Lanka',
    'Next.js freelancer Sri Lanka',
    'software engineering studio Colombo',
    'full stack web application development',
    'bespoke digital technology studio Sri Lanka',
    'high performance web applications',
  ],
});

export default function HomePage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#111111] selection:bg-[#111111] selection:text-white">
      {/* 01. Hero Section */}
      <Hero />

      {/* 02. Credibility Matrix */}
      <TrustBadges />

      {/* 03. Editorial Expanding Services System */}
      <EditorialServices />

      {/* 04. Selected Work with Varied Proportions */}
      <FeaturedProjects />

      {/* 05. Design Philosophy */}
      <DesignPhilosophy />

      {/* 06. Process Progression Timeline */}
      <ProcessSection />

      {/* 07. Modern Technology System */}
      <TechStackSection />

      {/* 08. About Studio Narrative */}
      <AboutStudioSection />

      {/* 09. Testimonials & Client Feedback */}
      <section className="py-24 md:py-32 bg-[#FFFFFF] relative border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-left max-w-2xl mb-16">
            <span className="text-xs font-mono text-[#999999] uppercase tracking-widest block mb-3">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] mb-4">
              Trusted by founders and product leaders.
            </h2>
            <p className="text-[#6B6B6B] text-base sm:text-lg leading-relaxed">
              Direct engagements with technology companies across North America, Europe, and Asia-Pacific.
            </p>
          </div>

          <Testimonials maxDisplay={6} />
        </div>
      </section>

      {/* 10. Final Statement CTA */}
      <CTASection />
    </div>
  );
}