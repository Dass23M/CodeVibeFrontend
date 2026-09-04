'use client';

/* Code Vibe · Editorial Design Philosophy · Magazine Cadence */
export default function DesignPhilosophy() {
  return (
    <section className="py-24 md:py-36 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Eyebrow */}
        <div className="mb-8">
          <span className="text-xs font-mono text-[#999999] uppercase tracking-widest block">
            DESIGN PHILOSOPHY // THE CODE VIBE VIEW
          </span>
        </div>

        {/* Large Statement */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#111111] leading-[1.06]">
            Good technology should disappear.
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl font-normal">
            The best software does not draw attention to its own machinery. It creates an immediate, friction-free bridge between a person and what they want to accomplish.
          </p>
        </div>

        {/* Magazine-Style 4-Column Philosophy Manifesto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-12 border-t border-[#EAEAEA]">
          
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold text-[#111111]">
              01 // SIMPLICITY
            </span>
            <h3 className="font-display text-lg font-semibold text-[#111111]">
              Restraint over novelty.
            </h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Simplicity is not the lack of complexity — it is the mastery of it. We design interfaces where decorative noise is stripped away so core utility stands clear.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold text-[#111111]">
              02 // PERFORMANCE
            </span>
            <h3 className="font-display text-lg font-semibold text-[#111111]">
              Speed is respect.
            </h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Sub-second page rendering is not an afterthought; it is fundamental hospitality. We optimize every byte, query, and render tree for absolute responsiveness.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold text-[#111111]">
              03 // LONGEVITY
            </span>
            <h3 className="font-display text-lg font-semibold text-[#111111]">
              Architecture that endures.
            </h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              We reject ephemeral boilerplate and fragile dependencies. We deliver clean, type-safe code that your internal engineers will praise five years from now.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold text-[#111111]">
              04 // IMPACT
            </span>
            <h3 className="font-display text-lg font-semibold text-[#111111]">
              Aligned with reality.
            </h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              Software exists to produce commercial and operational outcomes. We measure success not by lines of code, but by uptime, customer clarity, and business momentum.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
