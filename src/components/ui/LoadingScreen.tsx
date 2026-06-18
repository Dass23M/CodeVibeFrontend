'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const STATUS_MESSAGES = [
  { max: 20, text: 'Connecting to server...' },
  { max: 45, text: 'Loading design tokens...' },
  { max: 70, text: 'Fetching layout modules...' },
  { max: 90, text: 'Rendering components...' },
  { max: 100, text: 'Starting experience...' },
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading screen
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // 1. Simulate fast initial loading progress
    let timer: NodeJS.Timeout;
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 85) {
          return prev; // Stop at 85% until window 'load' event fires
        }
        // Increment by smaller random values to feel natural and slower
        const next = prev + Math.floor(Math.random() * 5) + 2;
        return Math.min(next, 85);
      });
      // Wider random delay = slower, more gradual fill
      timer = setTimeout(updateProgress, Math.random() * 280 + 160);
    };

    updateProgress();

    // 2. Set completion when page fully loads
    const handleLoadComplete = () => {
      clearTimeout(timer);
      setProgress(100);
      
      // Delay before starting the transition to let user see 100% complete
      setTimeout(() => {
        setIsLoaded(true);
        // Restore scroll after fade out finishes
        setTimeout(() => {
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
          setShouldRender(false);
        }, 850); // Matches transition-duration
      }, 700); // Hold at 100% for longer before fading out
    };

    // If document is already loaded, trigger completion
    if (document.readyState === 'complete') {
      handleLoadComplete();
    } else {
      window.addEventListener('load', handleLoadComplete);
    }

    // 3. Fallback loader to prevent page being stuck if an asset hangs
    const fallbackTimer = setTimeout(() => {
      handleLoadComplete();
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
      window.removeEventListener('load', handleLoadComplete);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  if (!shouldRender) return null;

  // Find status text matching current progress
  const statusText = STATUS_MESSAGES.find((m) => progress <= m.max)?.text || 'Ready!';

  // SVG Progress Ring calculations
  const radius = 58;
  const stroke = 3.5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isLoaded ? 0 : 1,
        transform: isLoaded ? 'scale(1.04)' : 'scale(1)',
        pointerEvents: isLoaded ? 'none' : 'auto',
      }}
    >
      {/* ── Ambient Radial Glow ── */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(47, 111, 237, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* ── Center Content Wrapper ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          zIndex: 2,
          position: 'relative',
        }}
      >
        {/* ── Logo & SVG Progress Ring Wrapper ── */}
        <div style={{ position: 'relative', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
          {/* Logo Frame */}
          <div
            style={{
              width: '108px',
              height: '108px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 16px 36px rgba(47, 111, 237, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
              border: '1.5px solid var(--color-border, #EBF1FD)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              animation: 'pulseLogo 2.5s ease-in-out infinite',
              position: 'relative',
              zIndex: 3,
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Code Vibe Logo"
              width={84}
              height={84}
              priority
              style={{
                objectFit: 'contain',
              }}
            />
          </div>

          {/* SVG Progress Circle */}
          <svg
            height={150}
            width={150}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'rotate(-90deg)',
              zIndex: 4,
              pointerEvents: 'none',
            }}
          >
            {/* Background track circle */}
            <circle
              stroke="var(--color-accent-light, #EBF1FD)"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={75}
              cy={75}
            />
            {/* Active progress circle */}
            <circle
              stroke="var(--color-accent, #2F6FED)"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + ' ' + circumference}
              style={{
                strokeDashoffset,
                transition: 'stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={75}
              cy={75}
            />
          </svg>
        </div>

        {/* ── Status Text ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textAlign: 'center' }}>
          {/* Logo Name & Type */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--color-accent, #2F6FED)',
                background: 'var(--color-accent-light, #EBF1FD)',
                padding: '0.15rem 0.45rem',
                borderRadius: '0.25rem',
                letterSpacing: '-0.03em',
              }}
            >
              {'</>'}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display, inherit)',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--color-foreground, #05070D)',
                letterSpacing: '-0.02em',
              }}
            >
              Code Vibe
            </span>
          </div>

          {/* Percentage */}
          <div
            style={{
              fontFamily: 'var(--font-display, inherit)',
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--color-accent, #2F6FED)',
              lineHeight: 1,
              marginTop: '0.25rem',
            }}
          >
            {progress}%
          </div>

          {/* Subtext description */}
          <p
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '0.725rem',
              color: 'var(--color-muted, #64748B)',
              marginTop: '0.2rem',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}
          >
            {statusText}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulseLogo {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 16px 36px rgba(47, 111, 237, 0.12);
          }
          50% {
            transform: scale(0.97);
            box-shadow: 0 12px 28px rgba(47, 111, 237, 0.08);
          }
        }
      `}</style>
    </div>
  );
}
