'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { submitLead } from '@/lib/api';
import type { ProjectType, BudgetRange, Timeline } from '@/types/quote';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, EMAIL_ADDRESS, CALENDLY_URL } from '@/lib/constants';

const PROJECT_TYPES: ProjectType[] = ['Landing Page', 'Full Web App', 'API Integration', 'E-commerce', 'Other'];
const BUDGET_RANGES: BudgetRange[] = ['Under 50k', '50k - 150k', '150k - 300k', '300k+'];
const TIMELINES: Timeline[] = ['1-2 weeks', '1 month', '2-3 months', '3+ months', 'Flexible'];

interface FormState {
  name:        string;
  email:       string;
  phone:       string;
  projectType: ProjectType | '';
  budgetRange: BudgetRange | '';
  timeline:    Timeline | '';
  description: string;
}

const INITIAL: FormState = {
  name: '', email: '', phone: '',
  projectType: '', budgetRange: '', timeline: '', description: '',
};

export default function ContactForm() {
  const [form, setForm]     = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError]   = useState('');

  const update = (k: keyof FormState, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.projectType || !form.budgetRange || !form.timeline) return;
    setStatus('loading'); setError('');
    try {
      await submitLead({
        name:        form.name,
        email:       form.email,
        phone:       form.phone,
        projectType: form.projectType as ProjectType,
        budgetRange: form.budgetRange as BudgetRange,
        timeline:    form.timeline as Timeline,
        description: form.description,
      });
      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again or contact via WhatsApp.');
    }
  };

  const inputStyle: React.CSSProperties = {
    width:           '100%',
    height:          '2.875rem',
    padding:         '0 0.875rem',
    borderRadius:    '0.5rem',
    border:          '1.5px solid var(--color-border)',
    fontFamily:      'var(--font-body)',
    fontSize:        '0.9rem',
    color:           'var(--color-foreground)',
    backgroundColor: '#ffffff',
    boxSizing:       'border-box',
    transition:      'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display:     'block',
    fontFamily:  'var(--font-body)',
    fontSize:    '0.85rem',
    fontWeight:  600,
    color:       'var(--color-foreground-2)',
    marginBottom:'0.4rem',
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    appearance:  'none',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2364748B\' stroke-width=\'2\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E")',
    backgroundRepeat:   'no-repeat',
    backgroundPosition: 'right 0.75rem center',
    paddingRight: '2.5rem',
  };

  if (status === 'success') {
    return (
      <div
        style={{
          textAlign:       'center',
          padding:         '4rem 2rem',
          backgroundColor: '#ffffff',
          borderRadius:    '1.25rem',
          border:          '1px solid var(--color-border)',
        }}
      >
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 0.75rem' }}>
          Message Received!
        </h2>
        <p style={{ color: 'var(--color-muted)', lineHeight: 1.8, maxWidth: '420px', margin: '0 auto 2rem' }}>
          I'll get back to you within 24 hours. Prefer faster? Message on WhatsApp.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.75rem 1.75rem', backgroundColor: '#25D366', color: '#ffffff',
            borderRadius: '0.625rem', fontFamily: 'var(--font-body)', fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          📱 Message on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Name + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Saman Perera" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="saman@example.com" style={inputStyle} />
        </div>
      </div>

      {/* Phone + Project Type */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+94 70 123 4567" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Project Type *</label>
          <select required value={form.projectType} onChange={(e) => update('projectType', e.target.value)} style={selectStyle}>
            <option value="">Select project type...</option>
            {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Budget + Timeline */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        <div>
          <label style={labelStyle}>Budget Range (LKR) *</label>
          <select required value={form.budgetRange} onChange={(e) => update('budgetRange', e.target.value)} style={selectStyle}>
            <option value="">Select budget...</option>
            {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Timeline *</label>
          <select required value={form.timeline} onChange={(e) => update('timeline', e.target.value)} style={selectStyle}>
            <option value="">Select timeline...</option>
            {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label style={labelStyle}>Project Description *</label>
        <textarea
          required
          value={form.description}
          onChange={(e) => update('description', e.target.value)}
          placeholder="Tell me about your project: what it does, who it's for, key features you need, any design preferences or references..."
          rows={5}
          style={{
            ...inputStyle,
            height: 'auto',
            padding: '0.75rem 0.875rem',
            resize: 'vertical',
            lineHeight: '1.7',
          }}
        />
      </div>

      {error && <p style={{ color: '#ef4444', fontSize: '0.875rem', margin: 0 }}>{error}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          height:          '3.25rem',
          backgroundColor: 'var(--color-accent)',
          color:           '#ffffff',
          border:          'none',
          borderRadius:    '0.7rem',
          fontFamily:      'var(--font-body)',
          fontWeight:      700,
          fontSize:        '1rem',
          cursor:          status === 'loading' ? 'not-allowed' : 'pointer',
          opacity:         status === 'loading' ? 0.7 : 1,
          transition:      'all 0.2s',
          boxShadow:       '0 4px 14px rgba(47,111,237,0.3)',
        }}
      >
        {status === 'loading' ? 'Sending...' : '✦ Send Message & Get a Quote'}
      </button>

      <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-muted)', margin: 0 }}>
        I'll respond within 24 hours. Or{' '}
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
          WhatsApp me directly
        </a>
        .
      </p>
    </form>
  );
}
