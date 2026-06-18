'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const isFirstRender = useRef(true);
  const hideTimer = useRef<NodeJS.Timeout | null>(null);
  const showedFor = useRef<number>(0);

  // ── Show loader when a same-site link is clicked ──────────────────────────
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (
        anchor &&
        anchor.href &&
        anchor.hostname === window.location.hostname &&
        anchor.pathname !== window.location.pathname &&
        !anchor.target &&
        !e.ctrlKey && !e.metaKey && !e.shiftKey
      ) {
        if (hideTimer.current) clearTimeout(hideTimer.current);
        setExiting(false);
        setVisible(true);
        showedFor.current = Date.now();
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  // ── Hide loader when navigation completes (pathname changed) ───────────────
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Ensure the loader was visible for at least 750ms so animation feels right
    const elapsed = Date.now() - showedFor.current;
    const remaining = Math.max(750 - elapsed, 0);

    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setVisible(false);
        setExiting(false);
      }, 450);
    }, remaining);

    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99998,
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: exiting ? 0 : 1,
        pointerEvents: exiting ? 'none' : 'auto',
      }}
    >
      {/* ── Ambient glow ── */}
      <div
        style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(47,111,237,0.07) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Floating code symbols (decorative) ── */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[
          { symbol: '</>',  top: '15%', left: '12%', delay: '0s',    size: '0.75rem' },
          { symbol: '{ }',  top: '20%', left: '80%', delay: '0.4s',  size: '0.7rem'  },
          { symbol: '( )',  top: '72%', left: '8%',  delay: '0.8s',  size: '0.65rem' },
          { symbol: '=>',   top: '75%', left: '82%', delay: '0.2s',  size: '0.7rem'  },
          { symbol: '[ ]',  top: '50%', left: '6%',  delay: '1.1s',  size: '0.6rem'  },
          { symbol: '/**/', top: '45%', left: '85%', delay: '0.6s',  size: '0.6rem'  },
        ].map((item, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: item.size,
              fontWeight: 600,
              color: '#2F6FED',
              opacity: 0.2,
              animation: `floatSymbol 3s ease-in-out ${item.delay} infinite alternate`,
            }}
          >
            {item.symbol}
          </span>
        ))}
      </div>

      {/* ── Cat SVG ── */}
      <div style={{ position: 'relative', zIndex: 2, animation: 'floatCat 2s ease-in-out infinite' }}>
        <svg
          viewBox="0 0 220 250"
          width="190"
          height="215"
          aria-hidden="true"
        >
          {/* ── Tail (wags) ── */}
          <path
            d="M 148 188 Q 178 170 182 150 Q 186 132 172 124"
            stroke="#1E293B"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            style={{ animation: 'wagTail 0.7s ease-in-out infinite alternate', transformOrigin: '148px 188px' }}
          />

          {/* ── Laptop base ── */}
          <rect x="58" y="210" width="104" height="10" rx="5" fill="#2F6FED" opacity="0.18" />
          <rect x="64" y="207" width="92" height="6" rx="3" fill="#2F6FED" opacity="0.3" />

          {/* ── Laptop screen ── */}
          <rect x="66" y="168" width="88" height="42" rx="5" fill="#0B0D17" />
          <rect x="70" y="172" width="80" height="34" rx="3" fill="#0F1421" />

          {/* Code lines on screen (animated) */}
          <rect x="74" y="177" width="38" height="3" rx="1.5" fill="#2F6FED" opacity="0.9" style={{ animation: 'codeFlash 1.2s ease-in-out 0s infinite alternate' }} />
          <rect x="74" y="183" width="55" height="3" rx="1.5" fill="#5B9EFF" opacity="0.7" style={{ animation: 'codeFlash 1.2s ease-in-out 0.2s infinite alternate' }} />
          <rect x="78" y="189" width="30" height="3" rx="1.5" fill="#2F6FED" opacity="0.6" style={{ animation: 'codeFlash 1.2s ease-in-out 0.4s infinite alternate' }} />
          <rect x="74" y="195" width="45" height="3" rx="1.5" fill="#5B9EFF" opacity="0.5" style={{ animation: 'codeFlash 1.2s ease-in-out 0.6s infinite alternate' }} />

          {/* ── Body ── */}
          <ellipse cx="110" cy="185" rx="46" ry="34" fill="#1E293B" />

          {/* ── Left paw (typing, alternates) ── */}
          <ellipse cx="88" cy="210" rx="14" ry="8" fill="#1E293B" style={{ animation: 'typePawLeft 0.4s ease-in-out infinite alternate' }} />
          {/* Left paw toes */}
          <circle cx="80" cy="211" r="3" fill="#253549" />
          <circle cx="88" cy="212" r="3" fill="#253549" />
          <circle cx="96" cy="211" r="3" fill="#253549" />

          {/* ── Right paw (typing, opposite phase) ── */}
          <ellipse cx="132" cy="210" rx="14" ry="8" fill="#1E293B" style={{ animation: 'typePawRight 0.4s ease-in-out infinite alternate' }} />
          {/* Right paw toes */}
          <circle cx="124" cy="211" r="3" fill="#253549" />
          <circle cx="132" cy="212" r="3" fill="#253549" />
          <circle cx="140" cy="211" r="3" fill="#253549" />

          {/* ── Head ── */}
          <circle cx="110" cy="118" r="42" fill="#1E293B" />

          {/* ── Left ear outer ── */}
          <polygon points="78,95 64,62 96,80" fill="#1E293B" />
          {/* ── Left ear inner ── */}
          <polygon points="79,90 68,68 93,80" fill="#2F6FED" opacity="0.45" />

          {/* ── Right ear outer ── */}
          <polygon points="142,95 156,62 124,80" fill="#1E293B" />
          {/* ── Right ear inner ── */}
          <polygon points="141,90 152,68 127,80" fill="#2F6FED" opacity="0.45" />

          {/* ── Eye whites ── */}
          <ellipse cx="95" cy="114" rx="11" ry="12" fill="white" />
          <ellipse cx="125" cy="114" rx="11" ry="12" fill="white" />

          {/* ── Iris ── */}
          <circle cx="97" cy="115" r="7" fill="#2F6FED" />
          <circle cx="123" cy="115" r="7" fill="#2F6FED" />

          {/* ── Pupils ── */}
          <circle cx="98" cy="115" r="3.5" fill="#05070D" style={{ animation: 'blink 3s ease-in-out infinite' }} />
          <circle cx="122" cy="115" r="3.5" fill="#05070D" style={{ animation: 'blink 3s ease-in-out infinite' }} />

          {/* ── Eye shine ── */}
          <circle cx="100" cy="112" r="1.5" fill="white" opacity="0.9" />
          <circle cx="124" cy="112" r="1.5" fill="white" opacity="0.9" />

          {/* ── Eyelid (blinks over pupils) ── */}
          <ellipse cx="95" cy="108" rx="11" ry="0" fill="#1E293B" style={{ animation: 'blinkLid 3s ease-in-out infinite' }} />
          <ellipse cx="125" cy="108" rx="11" ry="0" fill="#1E293B" style={{ animation: 'blinkLid 3s ease-in-out infinite' }} />

          {/* ── Nose ── */}
          <path d="M107,127 L113,127 L110,131 Z" fill="#2F6FED" opacity="0.8" />

          {/* ── Mouth ── */}
          <path d="M105,132 Q110,137 115,132" fill="none" stroke="#2F6FED" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M110,131 L110,133" stroke="#2F6FED" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

          {/* ── Whiskers left ── */}
          <line x1="60" y1="122" x2="88" y2="125" stroke="white" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
          <line x1="60" y1="128" x2="88" y2="128" stroke="white" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
          <line x1="63" y1="134" x2="88" y2="131" stroke="white" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />

          {/* ── Whiskers right ── */}
          <line x1="160" y1="122" x2="132" y2="125" stroke="white" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
          <line x1="160" y1="128" x2="132" y2="128" stroke="white" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />
          <line x1="157" y1="134" x2="132" y2="131" stroke="white" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />

          {/* ── Chest stripe / belly ── */}
          <ellipse cx="110" cy="186" rx="18" ry="20" fill="#253549" opacity="0.6" />
        </svg>
      </div>

      {/* ── Text label ── */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#2F6FED',
              background: '#EBF1FD',
              padding: '0.12rem 0.4rem',
              borderRadius: '0.25rem',
            }}
          >
            {'</>'}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display, inherit)',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#05070D',
              letterSpacing: '-0.02em',
            }}
          >
            Code Vibe
          </span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '0.65rem',
            color: '#64748B',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            animation: 'dotPulse 1.2s ease-in-out infinite',
          }}
        >
          navigating
          <span style={{ animation: 'dotPulse 1.2s 0s infinite' }}>.</span>
          <span style={{ animation: 'dotPulse 1.2s 0.2s infinite' }}>.</span>
          <span style={{ animation: 'dotPulse 1.2s 0.4s infinite' }}>.</span>
        </p>
      </div>

      {/* ── All CSS keyframe animations ── */}
      <style>{`
        @keyframes floatCat {
          0%   { transform: translateY(0px);   }
          100% { transform: translateY(-8px);  }
        }
        @keyframes wagTail {
          0%   { transform: rotate(-18deg); }
          100% { transform: rotate(14deg);  }
        }
        @keyframes typePawLeft {
          0%   { transform: translateY(0px);  }
          100% { transform: translateY(-5px); }
        }
        @keyframes typePawRight {
          0%   { transform: translateY(-5px); }
          100% { transform: translateY(0px);  }
        }
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1);   }
          95%            { transform: scaleY(0.05); }
        }
        @keyframes blinkLid {
          0%, 90%, 100% { ry: 0;  }
          95%            { ry: 12; }
        }
        @keyframes codeFlash {
          0%   { opacity: 0.3; }
          100% { opacity: 0.9; }
        }
        @keyframes floatSymbol {
          0%   { transform: translateY(0px);  opacity: 0.15; }
          100% { transform: translateY(-10px); opacity: 0.28; }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 1;   }
        }
      `}</style>
    </div>
  );
}
