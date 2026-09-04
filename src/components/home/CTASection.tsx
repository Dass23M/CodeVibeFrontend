'use client';

/* Code Vibe · Apple-Level Refined Final CTA · Light Editorial */
import Link from 'next/link';
import { CALENDLY_URL, EMAIL_ADDRESS, WHATSAPP_NUMBER } from '@/lib/constants';
import { ArrowRight, Calendar, MessageSquare, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-28 md:py-36 bg-[#F7F7F7] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow */}
          <span className="text-xs font-mono text-[#999999] uppercase tracking-widest block mb-4">
            INITIATE A PROJECT
          </span>

          {/* Confident Headline */}
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#111111] leading-[1.08] mb-6">
            Have something worth building?
          </h2>

          <p className="text-base sm:text-xl text-[#6B6B6B] leading-relaxed mb-10 max-w-xl mx-auto font-normal">
            Tell us about your objectives. We will review your requirements and send a detailed architecture proposal with a fixed quote within 24 hours.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              href="/quote"
              className="btn-primary text-base px-7 py-3.5"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-7 py-3.5"
            >
              <Calendar className="w-4 h-4 text-[#6B6B6B]" />
              <span>Schedule 15-min scope call</span>
            </a>
          </div>

          {/* Quiet direct lines */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#6B6B6B] pt-8 border-t border-[#EAEAEA]">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="flex items-center gap-2 hover:text-[#111111] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#111111]" />
              <span>{EMAIL_ADDRESS}</span>
            </a>
            <span className="text-[#D4D4D4]">•</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#111111] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct WhatsApp Channel</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
