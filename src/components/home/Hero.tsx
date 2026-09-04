'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
        backgroundColor: 'var(--color-background)',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Eyebrow */}
        <div
          className="animate-fade-in-up"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            background: 'var(--color-surface)',
            borderRadius: '999px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
            color: 'var(--color-muted)',
            marginBottom: '2rem',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#34C759', /* Apple Green */
            }}
          />
          Available for new projects
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-in-up animate-fade-in-up-delay-1"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            color: 'var(--color-foreground)',
            margin: '0 0 1.5rem 0',
            maxWidth: '900px',
          }}
        >
          Code Vibe.<br />
          <span style={{ color: 'var(--color-muted)' }}>Next level web apps.</span>
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-in-up animate-fade-in-up-delay-2"
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            fontWeight: 400,
            color: 'var(--color-foreground-2)',
            lineHeight: 1.5,
            maxWidth: '640px',
            margin: '0 0 3rem 0',
            letterSpacing: '-0.01em',
          }}
        >
          Premium MERN Stack & Next.js development for startups and visionaries. Built with precision in Sri Lanka.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-in-up animate-fade-in-up-delay-3"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}
        >
          <Link href="/quote" className="btn-primary" style={{ height: '3.5rem', padding: '0 2.5rem', fontSize: '1.1rem' }}>
            Get a Quote
          </Link>
          <Link href="/portfolio" className="link-arrow" style={{ fontSize: '1.1rem' }}>
            View Portfolio &rsaquo;
          </Link>
        </div>

        {/* Hero Illustration / Graphic */}
        <div
          className="animate-fade-in-up animate-scale-in animate-fade-in-up-delay-4"
          style={{ width: '100%', maxWidth: '960px', marginTop: '5rem', position: 'relative' }}
        >
          <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', justifyContent: 'center' }}>
             {/* We use a placeholder clean layout since we don't have the explicit SVG, 
                 but we'll keep the image tag in case the user has it, but framed nicely in a glass card */}
             <div className="glass-card" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '2rem' }}>
                <Image
                  src="/images/hero-illustration.png"
                  alt="Premium web development"
                  width={800}
                  height={400}
                  priority
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    opacity: 0.9,
                  }}
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
