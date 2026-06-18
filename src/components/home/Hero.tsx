'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STATS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#10b981">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    bgColor: '#ecfdf5',
    borderColor: '#a7f3d0',
    title: '5.0 ★ Fiverr Rating',
    subtitle: 'Level 2 Seller',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    bgColor: '#f0fdf4',
    borderColor: '#bbf7d0',
    title: 'Top Rated Upwork',
    subtitle: '98% Job Success Score',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    bgColor: 'var(--color-accent-light)',
    borderColor: 'rgba(47, 111, 237, 0.2)',
    title: '15+ Shipped Projects',
    subtitle: '100% On-Time Delivery',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.5">
        <rect x="2" y="4" width="20" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    bgColor: '#f5f3ff',
    borderColor: '#ddd6fe',
    title: '3+ Years Experience',
    subtitle: 'MERN & Next.js Expert',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
        <circle cx="12" cy="10" r="3" fill="#fca5a5" />
      </svg>
    ),
    bgColor: '#fef2f2',
    borderColor: '#fca5a5',
    title: 'Colombo, Sri Lanka 🇱🇰',
    subtitle: 'Serving Clients Worldwide',
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STATS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5.5rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
      {/* ── Background decorations ── */}
      <div
        className="bg-grid-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        className="hero-blob"
        style={{
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #2F6FED 0%, transparent 70%)',
        }}
      />
      <div
        className="hero-blob"
        style={{
          bottom: '-15%',
          left: '-8%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #5B9EFF 0%, transparent 70%)',
          opacity: 0.07,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* ── Left Column: Copy ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Eyebrow */}
            <div
              className="animate-fade-in-up"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: 'fit-content',
                background: 'var(--color-accent-light)',
                border: '1px solid rgba(47,111,237,0.2)',
                borderRadius: '100px',
                padding: '0.35rem 0.95rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
                  animation: 'floatPulse 2s ease-in-out infinite',
                }}
              />
              Available for new projects
            </div>

            {/* Headline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <h1
                className="animate-fade-in-up animate-fade-in-up-delay-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-foreground)',
                  margin: 0,
                }}
              >
                MERN Stack & <br />
                <span className="gradient-text">Next.js Developer</span>
              </h1>
              <span
                className="animate-fade-in-up animate-fade-in-up-delay-1"
                style={{
                  display: 'block',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  fontWeight: 600,
                  color: 'var(--color-foreground-2)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '-0.01em',
                }}
              >
                Crafting High-Performance Apps for Startups & Businesses
              </span>
            </div>

            {/* Subheading */}
            <p
              className="animate-fade-in-up animate-fade-in-up-delay-2"
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                color: 'var(--color-muted)',
                lineHeight: 1.75,
                maxWidth: '500px',
                margin: 0,
              }}
            >
              I build scalable, production-quality web applications - from landing pages to
              full-stack platforms - delivered on time and on budget.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-in-up animate-fade-in-up-delay-3"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}
            >
              <Link
                href="/quote"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  height: '3.25rem',
                  padding: '0 2rem',
                  backgroundColor: 'var(--color-accent)',
                  color: '#ffffff',
                  borderRadius: '0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  letterSpacing: '0.01em',
                  boxShadow: '0 4px 18px rgba(47,111,237,0.25)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = 'var(--color-accent-hover)';
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = '0 8px 24px rgba(47,111,237,0.35)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = 'var(--color-accent)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 18px rgba(47,111,237,0.25)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Get a Free Quote
              </Link>

              <Link
                href="/portfolio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  height: '3.25rem',
                  padding: '0 2rem',
                  backgroundColor: 'transparent',
                  color: 'var(--color-foreground)',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: '0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = 'var(--color-accent)';
                  el.style.color = 'var(--color-accent)';
                  el.style.backgroundColor = 'var(--color-accent-light)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = 'var(--color-border)';
                  el.style.color = 'var(--color-foreground)';
                  el.style.backgroundColor = 'transparent';
                }}
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Animated Ticker Card */}
            <div
              className="animate-fade-in-up animate-fade-in-up-delay-4"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                marginTop: '0.5rem',
                maxWidth: '380px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-accent)',
                    animation: 'floatPulse 1.5s infinite',
                  }}
                />
                Verified Professional Stats
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.875rem 1.25rem',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  height: '74px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {STATS.map((stat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      position: 'absolute',
                      left: '1.25rem',
                      right: '1.25rem',
                      opacity: idx === activeIdx ? 1 : 0,
                      transform: idx === activeIdx
                        ? 'translateY(0)'
                        : idx < activeIdx
                          ? 'translateY(-20px)'
                          : 'translateY(20px)',
                      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      pointerEvents: idx === activeIdx ? 'auto' : 'none',
                    }}
                  >
                    {/* Icon Container */}
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: stat.bgColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${stat.borderColor}`,
                        flexShrink: 0,
                      }}
                    >
                      {stat.icon}
                    </div>

                    {/* Text content */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-foreground)' }}>
                        {stat.title}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>
                        {stat.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots Indicator */}
              <div style={{ display: 'flex', gap: '0.35rem', paddingLeft: '0.25rem' }}>
                {STATS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    style={{
                      width: idx === activeIdx ? '16px' : '6px',
                      height: '6px',
                      borderRadius: '3px',
                      backgroundColor: idx === activeIdx ? 'var(--color-accent)' : 'var(--color-border)',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    aria-label={`Go to metric ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column: Developer Illustration ── */}
          <div
            className="animate-fade-in-up animate-float animate-fade-in-up-delay-2"
            style={{ width: '100%', maxWidth: '540px', justifySelf: 'center', position: 'relative' }}
          >
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <img
                src="/images/hero-illustration.png"
                alt="Web development and design illustration"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '460px',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Floating stat card */}
            <div
              style={{
                position: 'absolute',
                bottom: '0.5rem',
                right: '-1rem',
                background: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '0.875rem',
                padding: '0.875rem 1.25rem',
                boxShadow: '0 8px 30px rgba(47,111,237,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-accent-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                }}
              >
                🚀
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
                  15+
                </p>
                <p style={{ margin: 0, fontSize: '0.72rem', color: 'var(--color-muted)' }}>
                  Projects Shipped
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div
          style={{
            position: 'absolute',
            bottom: '-3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            opacity: 0.5,
            animation: 'floatPulse 2.5s ease-in-out infinite',
          }}
        >
          <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>
            scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="var(--color-border)" strokeWidth="1.5" />
            <circle cx="8" cy="7" r="2.5" fill="var(--color-accent)" style={{ animation: 'floatPulse 2s ease-in-out infinite' }} />
          </svg>
        </div>
      </div>
    </section>
  );
}
