'use client';

/* Hallmark · genre: modern-minimal · theme: Midnight-Indigo · macrostructure: Asymmetric Studio · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import Link from 'next/link';
import { CALENDLY_URL, EMAIL_ADDRESS, WHATSAPP_NUMBER } from '@/lib/constants';
import { ArrowRight, Calendar, CheckCircle2, MessageSquare, Mail } from 'lucide-react';

const PERKS = [
  'Detailed architecture proposal & fixed quote within 24 hours',
  'Direct engineer & designer communication via Slack or WhatsApp',
  'Milestone-based delivery with 100% intellectual property transfer',
  'Strict adherence to performance, security, and clean code standards',
];

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--color-paper)] border-b border-[var(--color-rule)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-xl p-8 sm:p-12 lg:p-16 bg-[var(--color-paper-2)] border border-[var(--color-rule)] text-left shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left 7 cols: Editorial Statement */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--color-paper-3)] border border-[var(--color-rule)] text-[var(--color-muted)] text-xs font-mono mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>PROJECT INTAKE // 24-HOUR ARCHITECTURE PROPOSAL</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] tracking-tight leading-[1.12] mb-6">
                Ready to build something enduring?
              </h2>

              <p className="text-[var(--color-muted)] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                Whether you need a bespoke MERN/Next.js application built from scratch, a design overhaul, or an API infrastructure that scales effortlessly — we deliver on schedule.
              </p>

              {/* Guarantees checklist */}
              <div className="space-y-3 w-full max-w-xl pt-4 border-t border-[var(--color-rule)]">
                {PERKS.map((perk) => (
                  <div key={perk} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-muted)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Consultation & Estimation Desk */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-lg p-6 bg-[var(--color-paper)] border border-[var(--color-rule)] space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[var(--color-rule)]">
                  <span className="font-mono text-xs text-[var(--color-muted)] uppercase">
                    DEPLOYMENT SPRINT
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    AVAILABLE NOW
                  </span>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/quote"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-medium text-sm transition-colors duration-200"
                  >
                    <span>Request Project Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[var(--color-paper-2)] hover:bg-[var(--color-paper-3)] text-[var(--color-ink)] font-medium text-sm border border-[var(--color-rule)] hover:border-[var(--color-rule-strong)] transition-colors duration-200"
                  >
                    <Calendar className="w-4 h-4 text-[var(--color-muted)]" />
                    <span>Schedule 15-Min Scope Call</span>
                  </a>
                </div>

                {/* Direct quick channels */}
                <div className="pt-4 border-t border-[var(--color-rule)] flex items-center justify-between text-xs font-mono text-[var(--color-muted)]">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-[var(--color-ink)] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                  <span className="text-[var(--color-rule-strong)]">|</span>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="flex items-center gap-1.5 hover:text-[var(--color-ink)] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span>{EMAIL_ADDRESS}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
