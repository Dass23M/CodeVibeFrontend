'use client';

/* Hallmark · genre: modern-minimal · theme: Midnight-Indigo · macrostructure: Asymmetric Studio · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import Link from 'next/link';
import { Palette, Zap, Layers, Box, ArrowRight, ShieldCheck, Sliders } from 'lucide-react';

const FEATURES = [
  {
    icon: <Palette className="w-5 h-5 text-[var(--color-accent)]" />,
    title: 'Pixel-Perfect UI/UX',
    description: 'Every interaction and screen is crafted with intentional micro-animations, optical balance, and fluid responsiveness.',
  },
  {
    icon: <Zap className="w-5 h-5 text-cyan-400" />,
    title: 'Sub-Second Speeds',
    description: 'Engineered on Next.js 16 with optimized server components, aggressive edge caching, and perfect 100/100 Core Web Vitals.',
  },
  {
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    title: 'Scalable Architecture',
    description: 'Clean, type-safe code structures with modular APIs and reusable design patterns that scale seamlessly with your growth.',
  },
  {
    icon: <Box className="w-5 h-5 text-emerald-400" />,
    title: 'Turnkey Delivery',
    description: 'Full product lifecycle handling — from interactive wireframes to automated CI/CD cloud deployment.',
  },
];

export default function IllustratorSection() {
  return (
    <section id="why-code-vibe" className="relative py-20 md:py-28 bg-[var(--color-paper)] border-b border-[var(--color-rule)]">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Natural Real UI Component Anatomy Inspector on Left */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 space-y-5 shadow-xl">
              
              {/* Card Header with Design System Beacon */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--color-rule)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-[var(--color-paper-3)] border border-[var(--color-rule)] flex items-center justify-center text-[var(--color-accent)]">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-ink)] font-mono">Hallmark.tokens</div>
                    <div className="text-[10px] text-[var(--color-muted)] font-mono">OKLCH Semantic Scale</div>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded text-emerald-400 text-[10px] font-mono font-semibold bg-[var(--color-paper-3)] border border-[var(--color-rule)]">
                  SYSTEM LOCKED
                </span>
              </div>

              {/* Real UI Component Element 1: Color Palette Scales */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[var(--color-muted)] flex items-center justify-between">
                  <span>OKLCH ANCHOR PALETTE</span>
                  <span className="text-[var(--color-accent)]">Hue 255</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { name: 'Paper', val: 'oklch(13.5%)', color: 'bg-[var(--color-paper)]' },
                    { name: 'Paper-2', val: 'oklch(17.5%)', color: 'bg-[var(--color-paper-2)]' },
                    { name: 'Accent', val: 'oklch(65.0%)', color: 'bg-[var(--color-accent)]' },
                    { name: 'Ink', val: 'oklch(96.0%)', color: 'bg-[var(--color-ink)]' },
                  ].map((token) => (
                    <div key={token.name} className="p-2 rounded-lg bg-[var(--color-paper)] border border-[var(--color-rule)] flex flex-col gap-1.5">
                      <div className={`w-full h-6 rounded ${token.color} border border-[var(--color-rule)]`} />
                      <div className="text-[10px] font-mono text-[var(--color-ink)] font-medium truncate">{token.name}</div>
                      <div className="text-[9px] font-mono text-[var(--color-muted)] truncate">{token.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real UI Component Element 2: Named Spacing & States */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono text-[var(--color-muted)] flex items-center justify-between">
                  <span>NAMED SCALE &amp; STATES</span>
                  <span className="text-[var(--color-ink)]">4-pt Steps</span>
                </div>
                
                <div className="p-3.5 rounded-lg bg-[var(--color-paper)] border border-[var(--color-rule)] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--color-ink)] font-medium">Exponential Ease Out</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--color-paper-3)] text-[var(--color-muted)]">
                      cubic-bezier(0.16, 1, 0.3, 1)
                    </span>
                  </div>
                  
                  {/* Real Live Mini Interactive Buttons Showcase */}
                  <div className="flex items-center gap-2.5">
                    <div className="flex-1 py-2 px-3 rounded-md bg-[var(--color-accent)] text-white font-medium text-xs text-center">
                      Primary Action
                    </div>
                    <div className="flex-1 py-2 px-3 rounded-md bg-[var(--color-paper-2)] border border-[var(--color-rule)] text-[var(--color-ink)] text-xs font-medium text-center">
                      Hairline Action
                    </div>
                  </div>
                </div>
              </div>

              {/* Real UI Component Element 3: Verified Performance Score */}
              <div className="p-3 rounded-lg bg-[var(--color-paper)] border border-[var(--color-rule)] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-xs font-bold text-[var(--color-ink)] font-mono">100% Optical Balance</div>
                    <div className="text-[10px] text-[var(--color-muted)] font-mono">Accessibility &amp; Responsive Verified</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-emerald-400 font-mono">PASS</div>
                  <div className="text-[9px] text-[var(--color-muted)] font-mono">WCAG AAA</div>
                </div>
              </div>

            </div>
          </div>

          {/* Features Grid on Right */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--color-paper-2)] border border-[var(--color-rule)] text-[var(--color-muted)] text-xs font-mono mb-4">
                ENGINEERING STANDARDS
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] tracking-tight leading-tight mb-4">
                Engineered with purpose. Built for speed and enduring craft.
              </h2>
              <p className="text-[var(--color-muted)] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                We bridge the gap between creative visual artistry and mission-critical engineering. No cartoon placeholders or generic AI templates — only tailored, bespoke digital systems built to perform.
              </p>
            </div>

            {/* 2x2 Feature Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-lg p-5 bg-[var(--color-paper-2)] border border-[var(--color-rule)] hover:border-[var(--color-rule-strong)] transition-colors duration-200 flex flex-col gap-3"
                >
                  <div className="w-9 h-9 rounded-md bg-[var(--color-paper-3)] border border-[var(--color-rule)] flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-semibold text-base text-[var(--color-ink)]">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-sm font-medium transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-paper-2)] hover:bg-[var(--color-paper-3)] border border-[var(--color-rule)] text-[var(--color-ink)] text-sm font-medium transition-colors"
              >
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
