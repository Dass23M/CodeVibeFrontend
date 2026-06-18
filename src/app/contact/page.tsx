import type { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, EMAIL_ADDRESS, CALENDLY_URL } from '@/lib/constants';
import ContactForm from '@/components/contact/ContactForm';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact — Start a Project',
  description:
    'Contact Code Vibe to start your web development project. Share your budget, timeline, and requirements for a custom quote.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop:    '8rem',
          paddingBottom: '4rem',
          textAlign:     'center',
          background:    'linear-gradient(180deg, var(--color-surface) 0%, #ffffff 100%)',
        }}
      >
        <div className="container">
          <span
            style={{
              display:         'inline-block',
              fontFamily:      'var(--font-mono)',
              fontSize:        '0.72rem',
              fontWeight:      600,
              letterSpacing:   '0.1em',
              textTransform:   'uppercase',
              backgroundColor: 'var(--color-accent-light)',
              color:           'var(--color-accent)',
              padding:         '0.3rem 0.9rem',
              borderRadius:    '100px',
              marginBottom:    '1.25rem',
            }}
          >
            Let&apos;s Build Together
          </span>
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight:    800,
              color:         'var(--color-foreground)',
              letterSpacing: '-0.025em',
              margin:        '0 0 1rem',
            }}
          >
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p
            style={{
              fontSize:   'clamp(1rem, 2vw, 1.125rem)',
              color:      'var(--color-muted)',
              maxWidth:   '500px',
              margin:     '0 auto',
              lineHeight: 1.8,
            }}
          >
            Tell me about your project and I&apos;ll get back to you with a custom quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section">
        <div
          className="container"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap:                 '4rem',
            alignItems:          'start',
          }}
        >
          {/* Form (client component) */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 1.75rem', letterSpacing: '-0.01em' }}>
              Share Your Project Details
            </h2>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 1.5rem', letterSpacing: '-0.01em' }}>
                Other Ways to Reach Me
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  {
                    icon: '💬', title: 'WhatsApp Business',
                    desc: 'Fastest way — usually reply in minutes',
                    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
                    label: 'Chat on WhatsApp', color: '#25D366',
                  },
                  {
                    icon: '📅', title: 'Book a Free Call',
                    desc: '15-min discovery call via Google Meet',
                    href: CALENDLY_URL,
                    label: 'Book on Calendly', color: 'var(--color-accent)',
                  },
                  {
                    icon: '✉️', title: 'Email',
                    desc: 'For formal inquiries and NDA requests',
                    href: `mailto:${EMAIL_ADDRESS}`,
                    label: EMAIL_ADDRESS, color: 'var(--color-accent)',
                  },
                ].map(({ icon, title, desc, href, label, color }) => (
                  <div key={title} className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{icon}</span>
                    <div style={{ flexGrow: 1 }}>
                      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-foreground)', margin: '0 0 0.25rem' }}>{title}</p>
                      <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', margin: '0 0 0.75rem' }}>{desc}</p>
                      <a href={href} target="_blank" rel="noopener noreferrer" className="contact-action-link" style={{ color }}>
                        {label} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promise card */}
            <div style={{ backgroundColor: 'var(--color-accent)', borderRadius: '1rem', padding: '1.5rem', color: '#ffffff' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.8, margin: '0 0 0.75rem' }}>My Promise</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', margin: '0 0 0.5rem' }}>Response in 24 Hours</h3>
              <p style={{ fontSize: '0.875rem', opacity: 0.85, lineHeight: 1.75, margin: 0 }}>
                Every message gets a personal reply — not an auto-responder. I&apos;ll review your
                project and come back with honest advice and a clear quote.
              </p>
            </div>

            {/* Location */}
            <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: 600, margin: '0 0 0.6rem' }}>
                Location
              </p>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-foreground)', margin: '0 0 0.25rem' }}>
                🇱🇰 Gampaha, Western Province, Sri Lanka
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-muted)', margin: 0 }}>
                Working hours: Mon–Fri, 9AM–6PM (IST, UTC+5:30)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
