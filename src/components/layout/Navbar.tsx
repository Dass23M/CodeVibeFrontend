'use client';

/* Code Vibe · Apple-Level Refined Minimal Navigation */
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Work', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-[#EAEAEA] py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
            : 'bg-white/60 backdrop-blur-xs border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#111111] transition-opacity group-hover:opacity-80">
              Code Vibe
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
          </Link>

          {/* Desktop Navigation — Generous Horizontal Spacing */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] tracking-wide transition-colors duration-150 ${
                    isActive
                      ? 'text-[#111111] font-semibold'
                      : 'text-[#6B6B6B] hover:text-[#111111]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action — "Let's Talk" & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link
              href="/quote"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#111111] hover:bg-[#262626] text-white text-xs font-medium tracking-wide transition-all duration-150 active:scale-[0.98]"
            >
              <span>Let&apos;s Talk</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-md text-[#111111] hover:bg-[#F7F7F7] transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Premium Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-between p-8 sm:p-12 md:hidden pt-28"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono tracking-widest text-[#999999] uppercase">
                NAVIGATION
              </span>

              <nav className="flex flex-col gap-5">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-display text-3xl sm:text-4xl font-semibold tracking-tight transition-colors flex items-center justify-between ${
                          isActive ? 'text-[#1D4ED8]' : 'text-[#111111] hover:text-[#6B6B6B]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-5 h-5 opacity-40" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className="pt-8 border-t border-[#EAEAEA] flex flex-col gap-4">
              <Link
                href="/quote"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#111111] text-white font-medium text-sm transition-colors"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-between text-xs text-[#999999] font-mono">
                <span>hello@codevibe.lk</span>
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
