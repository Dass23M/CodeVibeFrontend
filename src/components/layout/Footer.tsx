'use client';

/* Code Vibe · Apple-Level Refined Editorial Footer · Light Theme */
import Link from 'next/link';
import { useState } from 'react';
import { SOCIAL_LINKS, EMAIL_ADDRESS, WHATSAPP_NUMBER } from '@/lib/constants';
import { subscribeBlog } from '@/lib/api';
import { ArrowRight, Check, Mail, MessageSquare } from 'lucide-react';

const FOOTER_NAV = [
  { label: 'Work', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const FOOTER_SERVICES = [
  { label: 'Full-Stack Web Applications', href: '/services' },
  { label: 'Product Design & UI Systems', href: '/services' },
  { label: 'API & Cloud Architecture', href: '/services' },
  { label: 'Next.js Performance Optimization', href: '/services' },
  { label: 'Technical SEO & Core Vitals', href: '/services' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const year = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setErrorMsg('');
    try {
      await subscribeBlog(email);
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMsg('Subscription unavailable at this time.');
    }
  };

  return (
    <footer className="bg-[#F7F7F7] border-t border-[#EAEAEA] text-[#6B6B6B] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#EAEAEA]">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display font-bold text-xl tracking-tight text-[#111111]">
                Code Vibe
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
            </Link>
            
            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-sm mt-1">
              Independent technology studio designing and engineering high-performance web products, scalable digital architectures, and enduring brand experiences.
            </p>

            <div className="pt-2 text-xs font-mono text-[#999999]">
              COLOMBO, SRI LANKA // GLOBAL CLIENT DELIVERY
            </div>
          </div>

          {/* Navigation Column (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-mono font-medium text-[#111111] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6B6B6B] hover:text-[#111111] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-mono font-medium text-[#111111] uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#6B6B6B] hover:text-[#111111] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dispatch / Newsletter (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-mono font-medium text-[#111111] uppercase tracking-wider mb-4">
              Engineering Notes
            </h4>
            <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">
              Occasional technical memos on Next.js performance, system design, and product craftsmanship.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#EAEAEA] text-xs text-[#111111] placeholder-[#999999] focus:outline-none focus:border-[#111111] transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-2.5 px-4 rounded-lg bg-[#111111] hover:bg-[#262626] text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
              {status === 'success' && (
                <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
                  <Check className="w-3.5 h-3.5" /> Subscribed successfully.
                </p>
              )}
              {status === 'error' && (
                <p className="text-xs text-rose-500 mt-1">{errorMsg}</p>
              )}
            </form>

            <div className="mt-5 pt-4 border-t border-[#EAEAEA] flex flex-col gap-1.5 text-xs font-mono text-[#6B6B6B]">
              <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-[#111111] transition-colors">
                {EMAIL_ADDRESS}
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors">
                WhatsApp Channel
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar — Generous Whitespace */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#999999]">
          <p>© {year} Code Vibe. All rights reserved. Technology &amp; Design Studio.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#111111] transition-colors">
              Privacy Policy
            </Link>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors">
              GitHub
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
