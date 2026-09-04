'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import { Sparkles, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-200 px-5 md:px-7 py-2 flex items-center justify-between border ${
            scrolled
              ? 'bg-[var(--color-paper-2)]/90 backdrop-blur-md border-[var(--color-rule)] shadow-xl'
              : 'bg-[var(--color-paper-2)]/60 backdrop-blur-sm border-[var(--color-rule)] shadow-none'
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-xl p-1 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Code Vibe"
                width={130}
                height={40}
                priority
                className="h-8 md:h-9 w-auto object-contain brightness-125 contrast-110"
              />
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-emerald-400 bg-[var(--color-paper-3)] border border-[var(--color-rule)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>STUDIO ACTIVE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[var(--color-paper-3)] border border-[var(--color-rule)] px-2 py-1 rounded-full">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1 rounded-full text-xs font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-[var(--color-ink)] font-semibold'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-[var(--color-paper-2)] border border-[var(--color-rule-strong)]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Link
              href="/quote"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white shadow-sm transition-colors duration-150"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              className="md:hidden p-2 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-3)] transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden rounded-3xl bg-[#0B0D14]/95 backdrop-blur-2xl border border-white/10 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-indigo-400" />}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-white/10">
                <Link
                  href="/quote"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
