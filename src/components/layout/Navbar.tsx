'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    setActivePath(window.location.pathname);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : '#ffffff',
        borderBottom: scrolled
          ? '1px solid var(--color-border)'
          : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 20px rgba(47,111,237,0.07)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: '4.5rem' }}>
        {/* ── Logo ── */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Code Vibe"
            width={140}
            height={52}
            priority
            style={{
              objectFit: 'contain',
              height: '52px',
              width: 'auto',
            }}
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            marginLeft: 'auto',
            marginRight: '2rem',
          }}
          className="hide-mobile"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activePath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--color-accent)' : 'var(--color-foreground-2)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive ? 'var(--color-accent-light)' : 'transparent',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-surface)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-foreground-2)';
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ── CTA Button ── */}
        <Link
          href="/quote"
          className="hide-mobile"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#ffffff',
            backgroundColor: 'var(--color-accent)',
            padding: '0.55rem 1.25rem',
            borderRadius: '0.625rem',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            flexShrink: 0,
            letterSpacing: '0.01em',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-accent-hover)';
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 12px rgba(47,111,237,0.3)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-accent)';
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
          }}
        >
          Get a Free Quote
        </Link>

        {/* ── Mobile Hamburger ── */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: 'var(--color-foreground)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transformOrigin: 'center',
                transform:
                  menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                  menuOpen && i === 1 ? 'scaleX(0)' :
                  menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' :
                  'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {menuOpen && (
        <div
          className="animate-slide-down show-mobile"
          style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid var(--color-border)',
            padding: '1rem 1.5rem 1.5rem',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  padding: '0.65rem 1rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                  backgroundColor: activePath === link.href ? 'var(--color-accent-light)' : 'transparent',
                  color: activePath === link.href ? 'var(--color-accent)' : 'var(--color-foreground-2)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                marginTop: '0.75rem',
                textAlign: 'center',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: 'var(--color-accent)',
                padding: '0.7rem 1rem',
                borderRadius: '0.625rem',
                textDecoration: 'none',
              }}
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .hide-mobile { display: none !important; }
        }
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
