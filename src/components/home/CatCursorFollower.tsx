'use client';

import { useEffect, useRef } from 'react';

export default function CatCursorFollower() {
  const catRef = useRef<HTMLDivElement>(null);
  const rippleContainerRef = useRef<HTMLDivElement>(null);

  // Position and physics values stored in refs to prevent React re-renders at 60fps
  const pos = useRef({
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    isMoving: false,
    isPouncing: false,
    dx: 1, // last movement direction (positive = right, negative = left)
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize the cat in the bottom-right corner of the viewport
    pos.current.currentX = window.innerWidth - 60;
    pos.current.currentY = window.innerHeight - 80;
    pos.current.targetX = pos.current.currentX;
    pos.current.targetY = pos.current.currentY;

    // Show the cat once mounted
    const cat = catRef.current;
    if (cat) {
      cat.classList.add('active-visible');
    }

    const spawnRipple = (x: number, y: number) => {
      const container = rippleContainerRef.current;
      if (!container) return;

      const ripple = document.createElement('div');
      const symbols = ['</>', '{}', '=>', '( )', 'js', 'ts', 'react'];
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

      ripple.className = 'cat-click-ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.innerHTML = `<span class="ripple-symbol">${randomSymbol}</span><div class="ripple-ring"></div>`;

      container.appendChild(ripple);

      // Clean up after animations complete
      setTimeout(() => {
        ripple.remove();
      }, 900);
    };

    const handleClick = (e: MouseEvent) => {
      // Target the click spot
      pos.current.targetX = e.clientX - 18;
      pos.current.targetY = e.clientY - 18;
      pos.current.isPouncing = true;

      const catEl = catRef.current;
      if (catEl) {
        catEl.classList.add('pouncing');
      }

      spawnRipple(e.clientX, e.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        
        pos.current.targetX = touch.clientX - 18;
        pos.current.targetY = touch.clientY - 18;
        pos.current.isPouncing = true;

        const catEl = catRef.current;
        if (catEl) {
          catEl.classList.add('pouncing');
        }

        spawnRipple(touch.clientX, touch.clientY);
      }
    };

    // Bind click/touch events (no mousemove)
    window.addEventListener('click', handleClick, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    // ── Animation Frame loop for smooth translation ──
    let frameId: number;

    const tick = () => {
      const catEl = catRef.current;
      if (!catEl) {
        frameId = requestAnimationFrame(tick);
        return;
      }

      const p = pos.current;
      // Slower, smooth jog pace to the target
      const easing = 0.035;

      const dx = p.targetX - p.currentX;
      const dy = p.targetY - p.currentY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 1.5) {
        p.currentX += dx * easing;
        p.currentY += dy * easing;
        p.isMoving = true;
      } else {
        p.isMoving = false;
        if (p.isPouncing) {
          p.isPouncing = false;
          catEl.classList.remove('pouncing');
        }
      }

      // Flip orientation based on horizontal velocity
      let scaleX = 1;
      if (p.isMoving && Math.abs(dx) > 0.4) {
        p.dx = dx;
      }
      if (p.dx < 0) {
        scaleX = -1; // face left
      }

      // Dynamic tilt/angle during locomotion
      let tilt = 0;
      if (p.isMoving && dist > 8) {
        const angleRad = Math.atan2(dy, Math.abs(dx));
        tilt = angleRad * (180 / Math.PI) * 0.45; // dampening multiplier
      }

      // Perform fast translate3d transform to avoid browser layout passes
      catEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px, 0) scaleX(${scaleX}) rotate(${tilt}deg)`;

      // Handle leg states
      if (p.isMoving) {
        catEl.classList.add('running');
        catEl.classList.remove('idle');
      } else {
        catEl.classList.add('idle');
        catEl.classList.remove('running');
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleTouchStart);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* ── Ripple Container ── */}
      <div
        ref={rippleContainerRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 39,
        }}
      />

      {/* ── Animated Cat Follower ── */}
      <div
        ref={catRef}
        className="cat-follower-wrapper"
        aria-hidden="true"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          style={{ display: 'block' }}
        >
          {/* Tail */}
          <path
            className="cat-tail"
            d="M 12 21 Q 6 15 9 10"
            stroke="#1E293B"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Legs (swing in opposite phases during movement) */}
          <line
            className="cat-leg leg-back-left"
            x1="15"
            y1="23"
            x2="13"
            y2="30"
            stroke="#1E293B"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <line
            className="cat-leg leg-back-right"
            x1="17"
            y1="23"
            x2="15"
            y2="30"
            stroke="#253549"
            strokeWidth="2.8"
            strokeLinecap="round"
            opacity="0.8"
          />
          <line
            className="cat-leg leg-front-left"
            x1="22"
            y1="23"
            x2="24"
            y2="30"
            stroke="#1E293B"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <line
            className="cat-leg leg-front-right"
            x1="24"
            y1="23"
            x2="26"
            y2="30"
            stroke="#253549"
            strokeWidth="2.8"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Body */}
          <ellipse cx="19" cy="20" rx="9" ry="6.5" fill="#1E293B" />

          {/* Head */}
          <circle cx="26" cy="15" r="5.5" fill="#1E293B" />

          {/* Ears */}
          <polygon points="22.5,12 23.5,7 26,10.5" fill="#1E293B" />
          <polygon points="27,10.5 29.5,7 30.5,12" fill="#1E293B" />

          {/* Glowing Eyes */}
          <circle cx="27.5" cy="14" r="1.1" fill="#2F6FED" />

          {/* Collar */}
          <path
            d="M 23 18 A 5 5 0 0 0 24.5 19.5"
            stroke="#2F6FED"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ── Scoped Keyframe Styles ── */}
      <style>{`
        .cat-follower-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 36px;
          height: 36px;
          pointer-events: none;
          z-index: 40;
          opacity: 0;
          transform: translate3d(0, 0, 0);
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        .cat-follower-wrapper.active-visible {
          opacity: 1;
        }

        /* SVG Bobbing animations */
        .cat-follower-wrapper.running svg {
          animation: catBob 0.11s ease-in-out infinite alternate;
        }

        .cat-follower-wrapper.pouncing svg {
          animation: catPounce 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          transform-origin: bottom center;
        }

        /* Leg connection origins */
        .leg-back-left   { transform-origin: 15px 23px; }
        .leg-back-right  { transform-origin: 17px 23px; }
        .leg-front-left  { transform-origin: 22px 23px; }
        .leg-front-right { transform-origin: 24px 23px; }
        .cat-tail        { transform-origin: 12px 21px; }

        /* Swing cycle */
        .running .leg-back-left,
        .running .leg-front-right {
          animation: catLegSwing1 0.2s ease-in-out infinite alternate;
        }

        .running .leg-back-right,
        .running .leg-front-left {
          animation: catLegSwing2 0.2s ease-in-out infinite alternate;
        }

        /* Tail sways */
        .idle .cat-tail {
          animation: tailWagSlow 1.4s ease-in-out infinite alternate;
        }
        
        .running .cat-tail {
          animation: tailWagFast 0.15s ease-in-out infinite alternate;
        }

        /* Click Ripple styling */
        .cat-click-ripple {
          position: fixed;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 39;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ripple-symbol {
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          font-weight: 700;
          color: #2F6FED;
          background-color: #EBF1FD;
          border: 1px solid rgba(47, 111, 237, 0.25);
          padding: 0.12rem 0.35rem;
          border-radius: 0.25rem;
          box-shadow: 0 4px 10px rgba(47, 111, 237, 0.12);
          animation: symbolPop 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .ripple-ring {
          position: absolute;
          width: 12px;
          height: 12px;
          border: 2px solid #2F6FED;
          border-radius: 50%;
          opacity: 0.8;
          animation: ringExpand 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Keyframes */
        @keyframes catBob {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-2px); }
        }

        @keyframes catPounce {
          0%   { transform: scale(1) translateY(0); }
          25%  { transform: scale(1.3, 0.65) translateY(1px); }
          50%  { transform: scale(0.9, 1.35) translateY(-12px); }
          75%  { transform: scale(1.1, 0.88) translateY(0); }
          100% { transform: scale(1) translateY(0); }
        }

        @keyframes catLegSwing1 {
          0%   { transform: rotate(-24deg); }
          100% { transform: rotate(24deg); }
        }

        @keyframes catLegSwing2 {
          0%   { transform: rotate(24deg); }
          100% { transform: rotate(-24deg); }
        }

        @keyframes tailWagSlow {
          0%   { transform: rotate(-5deg); }
          100% { transform: rotate(8deg); }
        }

        @keyframes tailWagFast {
          0%   { transform: rotate(-10deg); }
          100% { transform: rotate(14deg); }
        }

        @keyframes symbolPop {
          0%   { transform: scale(0) translateY(12px) rotate(-15deg); opacity: 0; }
          30%  { transform: scale(1.1) translateY(-6px) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) translateY(-14px) rotate(0deg); opacity: 0; }
        }

        @keyframes ringExpand {
          0%   { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(4.8); opacity: 0; }
        }
      `}</style>
    </>
  );
}
