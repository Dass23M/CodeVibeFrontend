'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SOCIAL_LINKS, EMAIL_ADDRESS, WHATSAPP_NUMBER } from '@/lib/constants';
import { subscribeBlog } from '@/lib/api';

const footerLinks = {
  Pages: [
    { label: 'Home',         href: '/' },
    { label: 'Services',     href: '/services' },
    { label: 'Portfolio',    href: '/portfolio' },
    { label: 'Process',      href: '/process' },
    { label: 'Blog',         href: '/blog' },
    { label: 'About',        href: '/about' },
  ],
  Services: [
    { label: 'Landing Page',   href: '/services#landing' },
    { label: 'Portfolio Site', href: '/services#portfolio' },
    { label: 'Restaurant Web', href: '/services#restaurant' },
    { label: 'Tourism Web',    href: '/services#tourism' },
    { label: 'Full Web App',   href: '/services#fullapp' },
    { label: 'API Integration',href: '/services#api' },
  ],
};

export default function Footer() {
  const [email, setEmail]       = useState('');
  const [status, setStatus]     = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
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
    <footer
      style={{
        backgroundColor: 'var(--color-surface-dark)',
        color: '#ffffff',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container">
        {/* ── Top Grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  background: 'rgba(47,111,237,0.15)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '0.375rem',
                }}
              >
                {'</>'}
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 }}>
                Code Vibe
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Building scalable web apps for startups and businesses using MERN Stack & Next.js.
              Based in Gampaha, Sri Lanka 🇱🇰
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { href: SOCIAL_LINKS.github,   label: 'GitHub',   svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg> },
                { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/></svg> },
                { href: SOCIAL_LINKS.fiverr,   label: 'Fiverr',   svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.004 15.588a.995.995 0 10-1.99 0 .995.995 0 001.99 0zm-4.9-.62a2.78 2.78 0 00-.407.02c.146-.59.22-1.197.22-1.83 0-4.197-3.416-7.613-7.613-7.613S2.69 8.96 2.69 13.158c0 4.196 3.416 7.612 7.614 7.612 2.162 0 4.12-.904 5.53-2.354l-1.42-1.42a5.57 5.57 0 01-4.11 1.785 5.629 5.629 0 01-5.628-5.623 5.629 5.629 0 015.628-5.624 5.629 5.629 0 015.624 5.624c0 .568-.083 1.118-.24 1.638a2.776 2.776 0 00-1.587-.496 2.79 2.79 0 000 5.578 2.785 2.785 0 002.783-2.783v-.077z"/></svg> },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    color: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = 'var(--color-accent)';
                    el.style.color = '#ffffff';
                    el.style.borderColor = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = 'rgba(255,255,255,0.07)';
                    el.style.color = 'rgba(255,255,255,0.6)';
                    el.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  marginBottom: '1.25rem',
                }}
              >
                {heading}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.55)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)'; }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '1.25rem',
              }}
            >
              Stay Updated
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', lineHeight: 1.7 }}>
              Dev tips, project updates & tech insights from Sri Lanka's dev community.
            </p>
            <form onSubmit={handleSubscribe}>
              <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    padding: '0.6rem 0.9rem',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(255,255,255,0.15)',
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    width: '100%',
                  }}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'var(--color-accent)',
                    color: '#ffffff',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-body)',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    opacity: status === 'loading' ? 0.7 : 1,
                    transition: 'background 0.2s',
                  }}
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {status === 'success' && (
                <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#4ade80' }}>
                  ✓ Subscribed successfully!
                </p>
              )}
              {status === 'error' && (
                <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#f87171' }}>
                  {errorMsg}
                </p>
              )}
            </form>

            {/* Contact info */}
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                ✉ {EMAIL_ADDRESS}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                📱 WhatsApp Business
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © {year} Code Vibe. All rights reserved. Gampaha, Sri Lanka 🇱🇰
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            Built with{' '}
            <span style={{ color: 'var(--color-accent)' }}>Next.js</span> & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
