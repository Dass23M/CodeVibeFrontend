import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'Code Vibe privacy policy regarding client lead details, emails, and phone numbers.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <section style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '720px' }}>
        <h1
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2rem, 4vw, 2.75rem)',
            fontWeight:    800,
            color:         'var(--color-foreground)',
            letterSpacing: '-0.02em',
            marginBottom:  '1.5rem',
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>
          Last Updated: July 3, 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', color: 'var(--color-foreground-2)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <p>
            At Code Vibe, accessible from <Link href="/" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600 }}>https://codevibe.lk</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Code Vibe and how we use it.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '1rem 0 0.5rem' }}>
            1. Information We Collect
          </h2>
          <p>
            If you contact us directly or request a quote, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '1rem 0 0.5rem' }}>
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you to provide quote estimates and project updates</li>
            <li>Send you email updates regarding our newsletters (only if you subscribe)</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '1rem 0 0.5rem' }}>
            3. Data Protection and Security
          </h2>
          <p>
            We take appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data. Your contact details and project descriptions are stored in a secured database and are only accessible by Authorized Admin personnel.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '1rem 0 0.5rem' }}>
            4. Third-Party Links
          </h2>
          <p>
            Our website may contain links to external sites (such as GitHub, Fiverr, Upwork, or live project URLs) that are not operated by us. We advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '1rem 0 0.5rem' }}>
            5. Contact Us
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:hello@codevibe.lk" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600 }}>hello@codevibe.lk</a>.
          </p>
        </div>

        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
