'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SOCIAL_LINKS, EMAIL_ADDRESS, WHATSAPP_NUMBER } from '@/lib/constants';
import { subscribeBlog } from '@/lib/api';
import { ArrowRight, Mail, MessageSquare, Check, Sparkles } from 'lucide-react';

const footerLinks = {
  Pages: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Process', href: '/process' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ],
  Services: [
    { label: 'High-Converting Landing Pages', href: '/services#landing' },
    { label: 'Interactive Portfolio Platforms', href: '/services#portfolio' },
    { label: 'Restaurant & Hospitality Systems', href: '/services#restaurant' },
    { label: 'Tourism & Booking Solutions', href: '/services#tourism' },
    { label: 'Full-Stack MERN Web Apps', href: '/services#fullapp' },
    { label: 'Custom REST & GraphQL APIs', href: '/services#api' },
  ],
};

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
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="bg-[var(--color-paper)] text-[var(--color-muted)] pt-16 pb-12 border-t border-[var(--color-rule)] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--color-rule)]">
          
          {/* Brand & Studio Info */}
          <div className="lg:col-span-2 flex flex-col gap-5 text-left">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Code Vibe"
                width={140}
                height={45}
                className="h-9 w-auto object-contain brightness-125 contrast-110"
              />
            </Link>
            
            <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-sm">
              Independent software studio engineering bespoke web platforms, Next.js full-stack applications, and resilient digital products for startups and enterprises.
            </p>

            {/* Availability status */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-mono text-emerald-400 bg-[var(--color-paper-2)] border border-[var(--color-rule)] w-max">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Accepting New Client Sprints</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { href: SOCIAL_LINKS.github, label: 'GitHub', icon: 'GH' },
                { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', icon: 'IN' },
                { href: SOCIAL_LINKS.fiverr, label: 'Fiverr', icon: 'FI' },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-md bg-[var(--color-paper-2)] hover:bg-[var(--color-paper-3)] text-[var(--color-muted)] hover:text-[var(--color-ink)] border border-[var(--color-rule)] hover:border-[var(--color-rule-strong)] flex items-center justify-center font-mono text-xs font-semibold transition-colors duration-150"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-left">
            <h4 className="font-mono text-xs font-semibold text-[var(--color-ink)] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.Pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="text-left">
            <h4 className="font-mono text-xs font-semibold text-[var(--color-ink)] uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.Services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="text-left">
            <h4 className="font-mono text-xs font-semibold text-[var(--color-ink)] uppercase tracking-wider mb-4">
              Engineering Dispatch
            </h4>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-4">
              Technical memos on Next.js architecture, state design, and web vitals optimization.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 rounded-md bg-[var(--color-paper-2)] border border-[var(--color-rule)] text-xs text-[var(--color-ink)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-focus)] transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-2 px-4 rounded-md bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <span>Subscribe to Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
              {status === 'success' && (
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Subscribed successfully.
                </p>
              )}
              {status === 'error' && (
                <p className="text-xs text-rose-400">{errorMsg}</p>
              )}
            </form>

            <div className="mt-5 pt-4 border-t border-[var(--color-rule)] flex flex-col gap-2 text-xs font-mono text-[var(--color-muted)]">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-2 hover:text-[var(--color-ink)] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                <span className="truncate">{EMAIL_ADDRESS}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[var(--color-ink)] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Available</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)] font-mono">
          <p>© {year} Code Vibe. All rights reserved. Independent Digital Studio.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[var(--color-ink)] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <span className="text-[var(--color-muted)]">
              Engineered with Next.js 16
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
