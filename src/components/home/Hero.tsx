'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = heroRef.current?.querySelectorAll('.hero-reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '7rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        backgroundColor: 'var(--color-background)',
      }}
    >
      {/* Subtle animated gradient orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,102,204,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'heroOrb 12s ease-in-out infinite alternate',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,102,204,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'heroOrb 15s ease-in-out 2s infinite alternate-reverse',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        {/* Headline */}
        <h1
          className="hero-reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.75rem, 7.5vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.045em',
            color: 'var(--color-foreground)',
            margin: '0 0 1.75rem 0',
            maxWidth: '860px',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          We build web apps<br />
          <span style={{ color: 'var(--color-accent)' }}>that move businesses forward.</span>
        </h1>

        {/* Subheading */}
        <p
          className="hero-reveal"
          style={{
            fontSize: 'clamp(1.125rem, 2.2vw, 1.375rem)',
            fontWeight: 400,
            color: 'var(--color-foreground-2)',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 0 3rem 0',
            letterSpacing: '-0.01em',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s',
          }}
        >
          Full-stack MERN &amp; Next.js development studio based in Colombo, Sri Lanka. Precision-crafted digital products for startups and enterprises.
        </p>

        {/* CTAs */}
        <div
          className="hero-reveal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s',
          }}
        >
          <Link href="/quote" className="btn-primary" style={{ height: '3.5rem', padding: '0 2.5rem', fontSize: '1.05rem' }}>
            Start a Project
          </Link>
          <Link href="/portfolio" className="link-arrow" style={{ fontSize: '1.05rem' }}>
            View Our Work ›
          </Link>
        </div>

        {/* Hero Visual — Dashboard Preview */}
        <div
          className="hero-reveal"
          style={{
            width: '100%',
            maxWidth: '1000px',
            marginTop: '5rem',
            opacity: 0,
            transform: 'translateY(60px) scale(0.97)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.45s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.45s',
          }}
        >
          <div
            style={{
              width: '100%',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 32px 64px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.04)',
            }}
          >
            {/* Browser chrome */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '14px 20px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
              <span style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: '0.75rem', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>codevibe.lk</span>
            </div>
            {/* Image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
              <Image
                src="/images/hero-illustration.png"
                alt="Code Vibe — Premium web development studio"
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Inline animation styles */}
      <style>{`
        .hero-visible {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
        @keyframes heroOrb {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-30px, 20px); }
        }
      `}</style>
    </section>
  );
}
