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
          className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-5 md:px-7 py-2.5 flex items-center justify-between border ${
            scrolled
              ? 'bg-[#0B0D14]/80 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(99,102,241,0.15)]'
              : 'bg-[#0B0D14]/40 backdrop-blur-md border-white/5 shadow-none'
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-xl p-1.5 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Code Vibe"
                width={130}
                height={40}
                priority
                className="h-8 md:h-9 w-auto object-contain brightness-125 contrast-110"
              />
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-full">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-indigo-500/40"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
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
              className="hidden sm:inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 md:px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-white/20"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
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
