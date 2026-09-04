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
    <footer className="bg-[#050608] text-slate-300 pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand & Studio Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Code Vibe"
                width={140}
                height={45}
                className="h-9 w-auto object-contain brightness-125 contrast-110"
              />
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Elite digital engineering and design studio specializing in Next.js, React, and scalable cloud architectures. We craft standout digital products that elevate brands and captivate users.
            </p>

            {/* Availability status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono w-max">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Accepting New Client Inquiries</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
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
                  className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-indigo-500/20 text-slate-400 hover:text-white border border-white/10 hover:border-indigo-500/40 flex items-center justify-center font-mono text-xs font-bold transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.Pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.Services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>Insights</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Join our engineering dispatch. Curated notes on full-stack web architecture, UI craft, and performance.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
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
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Subscribed successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-xs text-rose-400">{errorMsg}</p>
              )}
            </form>

            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-2 text-xs text-slate-400">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{EMAIL_ADDRESS}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Business</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {year} Code Vibe. All rights reserved. Colombo, Sri Lanka.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <span className="text-slate-400">
              Designed &amp; Engineered by Code Vibe
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
