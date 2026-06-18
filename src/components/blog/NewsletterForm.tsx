'use client';

import { useState } from 'react';
import { subscribeBlog } from '@/lib/api';

export default function NewsletterForm() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await subscribeBlog(email);
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p style={{ color: '#16a34a', fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 600 }}>
        ✓ Subscribed! You'll hear from me soon.
      </p>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', gap: '0.75rem', maxWidth: '400px', margin: '0 auto', flexWrap: 'wrap' }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          style={{
            flex:            '1 1 200px',
            height:          '2.875rem',
            padding:         '0 0.875rem',
            borderRadius:    '0.5rem',
            border:          '1.5px solid var(--color-border)',
            fontFamily:      'var(--font-body)',
            fontSize:        '0.9rem',
            color:           'var(--color-foreground)',
            boxSizing:       'border-box' as const,
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            height:          '2.875rem',
            padding:         '0 1.5rem',
            backgroundColor: 'var(--color-accent)',
            color:           '#ffffff',
            border:          'none',
            borderRadius:    '0.5rem',
            fontFamily:      'var(--font-body)',
            fontWeight:      600,
            fontSize:        '0.9rem',
            cursor:          status === 'loading' ? 'not-allowed' : 'pointer',
            flexShrink:      0,
            opacity:         status === 'loading' ? 0.7 : 1,
          }}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </>
  );
}
