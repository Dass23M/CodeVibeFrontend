'use client';

import { useState } from 'react';
import type { ProjectType, BudgetRange, Timeline, QuoteWizardState } from '@/types/quote';
import { ESTIMATE_MAP } from '@/lib/constants';
import { submitLead } from '@/lib/api';

const PROJECT_TYPES: { value: ProjectType; icon: string; label: string; desc: string }[] = [
  { value: 'Landing Page',    icon: '🖥️', label: 'Landing Page',     desc: 'Single page, convert visitors' },
  { value: 'Full Web App',    icon: '⚙️', label: 'Full Web App',      desc: 'MERN / Next.js full-stack' },
  { value: 'API Integration', icon: '🔌', label: 'API Integration',   desc: 'Connect 3rd-party services' },
  { value: 'E-commerce',      icon: '🛒', label: 'E-commerce',        desc: 'Online shop with payments' },
  { value: 'Other',           icon: '💡', label: 'Custom Project',    desc: 'Something unique' },
];

const BUDGET_RANGES: { value: BudgetRange; label: string }[] = [
  { value: 'Under 50k',    label: 'Under LKR 50,000' },
  { value: '50k - 150k',  label: 'LKR 50,000 – 150,000' },
  { value: '150k - 300k', label: 'LKR 150,000 – 300,000' },
  { value: '300k+',       label: 'LKR 300,000+' },
];

const TIMELINES: { value: Timeline; label: string; icon: string }[] = [
  { value: '1-2 weeks',   label: '1–2 Weeks',    icon: '⚡' },
  { value: '1 month',     label: '1 Month',       icon: '📆' },
  { value: '2-3 months',  label: '2–3 Months',    icon: '🗓️' },
  { value: '3+ months',   label: '3+ Months',     icon: '🏗️' },
  { value: 'Flexible',    label: 'Flexible',      icon: '🤝' },
];

const INITIAL_STATE: QuoteWizardState = {
  step: 1,
  name: '', email: '', phone: '', description: '',
  submitted: false, loading: false,
};

function formatLKR(n: number) {
  return `LKR ${n.toLocaleString('en-LK')}`;
}

export default function ProjectEstimator() {
  const [state, setState] = useState<QuoteWizardState>(INITIAL_STATE);

  const estimate =
    state.projectType && state.budgetRange
      ? ESTIMATE_MAP[state.projectType][state.budgetRange]
      : null;

  const update = (patch: Partial<QuoteWizardState>) =>
    setState((s) => ({ ...s, ...patch }));

  const nextStep = () => update({ step: (state.step < 4 ? state.step + 1 : 4) as QuoteWizardState['step'] });
  const prevStep = () => update({ step: (state.step > 1 ? state.step - 1 : 1) as QuoteWizardState['step'] });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.projectType || !state.budgetRange || !state.timeline) return;
    update({ loading: true, error: undefined });
    try {
      await submitLead({
        name:        state.name,
        email:       state.email,
        phone:       state.phone,
        projectType: state.projectType,
        budgetRange: state.budgetRange,
        timeline:    state.timeline,
        description: state.description,
      });
      update({ submitted: true, loading: false });
    } catch {
      update({ loading: false, error: 'Failed to submit. Please try again or WhatsApp us.' });
    }
  };

  if (state.submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.875rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 0.75rem' }}>
          Quote Request Received!
        </h2>
        <p style={{ color: 'var(--color-muted)', lineHeight: 1.8, maxWidth: '440px', margin: '0 auto 2rem' }}>
          I'll review your project details and send you a custom quote within <strong>24 hours</strong>.
          Check your inbox at <strong>{state.email}</strong>.
        </p>
        <a
          href={`https://wa.me/94701234567?text=Hi! I just submitted a quote request for a ${state.projectType} project.`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:         'inline-flex',
            alignItems:      'center',
            gap:             '0.5rem',
            padding:         '0.75rem 1.75rem',
            backgroundColor: '#25D366',
            color:           '#ffffff',
            borderRadius:    '0.625rem',
            fontFamily:      'var(--font-body)',
            fontWeight:      600,
            textDecoration:  'none',
          }}
        >
          📱 Also message on WhatsApp
        </a>
      </div>
    );
  }

  const steps = [
    { label: 'Project Type' },
    { label: 'Budget' },
    { label: 'Timeline' },
    { label: 'Your Details' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '2.5rem', alignItems: 'start' }}>
      {/* Wizard Panel */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: '0 4px 24px rgba(47,111,237,0.08)' }}>
        {/* Progress bar */}
        <div style={{ backgroundColor: 'var(--color-surface)', padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
            {steps.map((s, i) => (
              <div
                key={s.label}
                style={{
                  flex:            1,
                  height:          '4px',
                  borderRadius:    '2px',
                  backgroundColor: i < state.step ? 'var(--color-accent)' : 'var(--color-border)',
                  transition:      'background 0.3s',
                }}
              />
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted)', margin: 0 }}>
            Step {state.step} of 4 — {steps[state.step - 1].label}
          </p>
        </div>

        <div style={{ padding: '2rem' }}>
          {/* Step 1 — Project Type */}
          {state.step === 1 && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-foreground)', margin: '0 0 1.5rem' }}>
                What type of project do you need?
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {PROJECT_TYPES.map((pt) => (
                  <button
                    key={pt.value}
                    onClick={() => update({ projectType: pt.value })}
                    style={{
                      display:         'flex',
                      alignItems:      'center',
                      gap:             '1rem',
                      padding:         '1rem 1.25rem',
                      borderRadius:    '0.75rem',
                      border:          state.projectType === pt.value
                        ? '2px solid var(--color-accent)'
                        : '1.5px solid var(--color-border)',
                      backgroundColor: state.projectType === pt.value
                        ? 'var(--color-accent-light)'
                        : '#ffffff',
                      cursor:          'pointer',
                      transition:      'all 0.2s',
                      textAlign:       'left',
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{pt.icon}</span>
                    <div>
                      <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9rem', color: state.projectType === pt.value ? 'var(--color-accent)' : 'var(--color-foreground)' }}>
                        {pt.label}
                      </p>
                      <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--color-muted)' }}>
                        {pt.desc}
                      </p>
                    </div>
                    {state.projectType === pt.value && (
                      <svg style={{ marginLeft: 'auto', flexShrink: 0 }} width="20" height="20" viewBox="0 0 24 24" fill="var(--color-accent)">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
              <button
                onClick={nextStep}
                disabled={!state.projectType}
                style={{
                  marginTop:       '1.5rem',
                  width:           '100%',
                  height:          '3rem',
                  backgroundColor: state.projectType ? 'var(--color-accent)' : 'var(--color-border)',
                  color:           state.projectType ? '#ffffff' : 'var(--color-muted)',
                  border:          'none',
                  borderRadius:    '0.625rem',
                  fontFamily:      'var(--font-body)',
                  fontWeight:      700,
                  fontSize:        '0.95rem',
                  cursor:          state.projectType ? 'pointer' : 'not-allowed',
                  transition:      'all 0.2s',
                }}
              >
                Continue →
              </button>
            </div>
          )}

          {/* Step 2 — Budget */}
          {state.step === 2 && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-foreground)', margin: '0 0 1.5rem' }}>
                What's your approximate budget?
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {BUDGET_RANGES.map((br) => (
                  <button
                    key={br.value}
                    onClick={() => update({ budgetRange: br.value })}
                    style={{
                      padding:         '1rem 1.25rem',
                      borderRadius:    '0.75rem',
                      border:          state.budgetRange === br.value ? '2px solid var(--color-accent)' : '1.5px solid var(--color-border)',
                      backgroundColor: state.budgetRange === br.value ? 'var(--color-accent-light)' : '#ffffff',
                      cursor:          'pointer',
                      textAlign:       'left',
                      fontFamily:      'var(--font-body)',
                      fontWeight:      600,
                      fontSize:        '0.9rem',
                      color:           state.budgetRange === br.value ? 'var(--color-accent)' : 'var(--color-foreground)',
                      transition:      'all 0.2s',
                    }}
                  >
                    {br.label}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button onClick={prevStep} style={{ flex: 1, height: '3rem', border: '1.5px solid var(--color-border)', borderRadius: '0.625rem', backgroundColor: 'transparent', color: 'var(--color-foreground)', fontFamily: 'var(--font-body)', fontWeight: 600, cursor: 'pointer' }}>
                  ← Back
                </button>
                <button onClick={nextStep} disabled={!state.budgetRange} style={{ flex: 2, height: '3rem', backgroundColor: state.budgetRange ? 'var(--color-accent)' : 'var(--color-border)', color: state.budgetRange ? '#ffffff' : 'var(--color-muted)', border: 'none', borderRadius: '0.625rem', fontFamily: 'var(--font-body)', fontWeight: 700, cursor: state.budgetRange ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Timeline */}
          {state.step === 3 && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-foreground)', margin: '0 0 1.5rem' }}>
                When do you need it?
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {TIMELINES.map((tl) => (
                  <button
                    key={tl.value}
                    onClick={() => update({ timeline: tl.value })}
                    style={{
                      padding:         '1rem',
                      borderRadius:    '0.75rem',
                      border:          state.timeline === tl.value ? '2px solid var(--color-accent)' : '1.5px solid var(--color-border)',
                      backgroundColor: state.timeline === tl.value ? 'var(--color-accent-light)' : '#ffffff',
                      cursor:          'pointer',
                      textAlign:       'center',
                      transition:      'all 0.2s',
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.35rem' }}>{tl.icon}</div>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: '0.85rem', color: state.timeline === tl.value ? 'var(--color-accent)' : 'var(--color-foreground)' }}>
                      {tl.label}
                    </p>
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button onClick={prevStep} style={{ flex: 1, height: '3rem', border: '1.5px solid var(--color-border)', borderRadius: '0.625rem', backgroundColor: 'transparent', color: 'var(--color-foreground)', fontFamily: 'var(--font-body)', fontWeight: 600, cursor: 'pointer' }}>
                  ← Back
                </button>
                <button onClick={nextStep} disabled={!state.timeline} style={{ flex: 2, height: '3rem', backgroundColor: state.timeline ? 'var(--color-accent)' : 'var(--color-border)', color: state.timeline ? '#ffffff' : 'var(--color-muted)', border: 'none', borderRadius: '0.625rem', fontFamily: 'var(--font-body)', fontWeight: 700, cursor: state.timeline ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 4 — Contact */}
          {state.step === 4 && (
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-foreground)', margin: '0 0 1.5rem' }}>
                Almost done! Your details:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Full Name *', key: 'name',  type: 'text',  placeholder: 'Saman Perera', required: true },
                  { label: 'Email *',     key: 'email', type: 'email', placeholder: 'saman@example.com', required: true },
                  { label: 'Phone',       key: 'phone', type: 'tel',   placeholder: '+94 70 123 4567', required: false },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-foreground-2)', marginBottom: '0.4rem' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={state[field.key as 'name' | 'email' | 'phone']}
                      onChange={(e) => update({ [field.key]: e.target.value } as Partial<QuoteWizardState>)}
                      placeholder={field.placeholder}
                      required={field.required}
                      style={{
                        width:           '100%',
                        height:          '2.75rem',
                        padding:         '0 0.875rem',
                        borderRadius:    '0.5rem',
                        border:          '1.5px solid var(--color-border)',
                        fontFamily:      'var(--font-body)',
                        fontSize:        '0.9rem',
                        color:           'var(--color-foreground)',
                        backgroundColor: '#ffffff',
                        boxSizing:       'border-box',
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-foreground-2)', marginBottom: '0.4rem' }}>
                    Project Description *
                  </label>
                  <textarea
                    value={state.description}
                    onChange={(e) => update({ description: e.target.value })}
                    placeholder="Tell me about your project, what features you need, any special requirements..."
                    required
                    rows={4}
                    style={{
                      width:           '100%',
                      padding:         '0.75rem 0.875rem',
                      borderRadius:    '0.5rem',
                      border:          '1.5px solid var(--color-border)',
                      fontFamily:      'var(--font-body)',
                      fontSize:        '0.9rem',
                      color:           'var(--color-foreground)',
                      resize:          'vertical',
                      boxSizing:       'border-box',
                    }}
                  />
                </div>
              </div>
              {state.error && (
                <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.75rem' }}>{state.error}</p>
              )}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" onClick={prevStep} style={{ flex: 1, height: '3rem', border: '1.5px solid var(--color-border)', borderRadius: '0.625rem', backgroundColor: 'transparent', color: 'var(--color-foreground)', fontFamily: 'var(--font-body)', fontWeight: 600, cursor: 'pointer' }}>
                  ← Back
                </button>
                <button type="submit" disabled={state.loading} style={{ flex: 2, height: '3rem', backgroundColor: 'var(--color-accent)', color: '#ffffff', border: 'none', borderRadius: '0.625rem', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.95rem', cursor: state.loading ? 'not-allowed' : 'pointer', opacity: state.loading ? 0.7 : 1, transition: 'all 0.2s' }}>
                  {state.loading ? 'Sending...' : '✦ Get My Free Quote'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Estimate Panel */}
      <div style={{ position: 'sticky', top: '6rem' }}>
        {estimate ? (
          <div
            style={{
              backgroundColor: '#ffffff',
              border:          '1px solid var(--color-border)',
              borderRadius:    '1.25rem',
              overflow:        'hidden',
              boxShadow:       '0 4px 24px rgba(47,111,237,0.1)',
            }}
          >
            <div style={{ backgroundColor: 'var(--color-accent)', padding: '1.5rem', color: '#ffffff' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.8, margin: '0 0 0.75rem' }}>
                Estimate Preview
              </p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.25rem' }}>
                {estimate.packageLabel}
              </h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.75rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
                  {formatLKR(estimate.minPrice)}
                </span>
                <span style={{ opacity: 0.8 }}>– {formatLKR(estimate.maxPrice)}</span>
              </div>
              <p style={{ opacity: 0.8, fontSize: '0.85rem', margin: '0.35rem 0 0' }}>
                ⏱ {estimate.minDays}–{estimate.maxDays} business days
              </p>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)', margin: '0 0 1rem' }}>
                What's Included
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {estimate.highlights.map((h) => (
                  <li key={h} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--color-foreground-2)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: '1.25rem', fontSize: '0.78rem', color: 'var(--color-muted)', lineHeight: 1.6, padding: '0.75rem', backgroundColor: 'var(--color-surface)', borderRadius: '0.5rem' }}>
                💡 This is an estimate. Final quote will be confirmed after reviewing your project details.
              </p>
            </div>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border:          '1px dashed var(--color-border)',
              borderRadius:    '1.25rem',
              padding:         '3rem 2rem',
              textAlign:       'center',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-foreground)', margin: '0 0 0.5rem' }}>
              Your Estimate Appears Here
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
              Select a project type and budget range to see an instant price & timeline estimate.
            </p>
          </div>
        )}

        {/* Trust points */}
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            '✅ Free quote, no commitment',
            '⚡ Response within 24 hours',
            '💰 Fixed pricing in LKR',
            '📱 Direct WhatsApp access',
          ].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-foreground-2)' }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
