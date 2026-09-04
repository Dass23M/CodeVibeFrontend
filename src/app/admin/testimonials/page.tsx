'use client';

import { useState, useEffect } from 'react';
import {
  getAdminTestimonials, createTestimonial, updateTestimonial, deleteTestimonial,
  type Testimonial,
} from '@/lib/adminApi';

const EMPTY: Partial<Testimonial> = { clientName: '', clientRole: '', platform: 'Fiverr', rating: 5, message: '', featured: false };
const PLATFORMS = ['Fiverr', 'Upwork', 'Direct', 'LinkedIn', 'Google', 'Other'];

function TestimonialForm({ initial, onSave, onCancel }: {
  initial: Partial<Testimonial>;
  onSave: (d: Partial<Testimonial>) => Promise<void>;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Partial<Testimonial>>(initial);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const set = (k: keyof Testimonial, v: unknown) => setForm((f) => ({ ...f, [k]: v }));

  const iStyle: React.CSSProperties = { width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#E2E8F0', fontSize: '0.875rem', padding: '0.6rem 0.75rem', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' };
  const lStyle: React.CSSProperties = { color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.35rem' };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true); setError('');
    try { await onSave(form); }
    catch (err: unknown) { setError(err instanceof Error ? err.message : 'Save failed'); }
    finally { setSaving(false); }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div><label style={lStyle}>Client Name *</label><input required style={iStyle} value={form.clientName ?? ''} onChange={(e) => set('clientName', e.target.value)} placeholder="Kavinda Perera" /></div>
        <div><label style={lStyle}>Role / Company *</label><input required style={iStyle} value={form.clientRole ?? ''} onChange={(e) => set('clientRole', e.target.value)} placeholder="Founder, StartupLK" /></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={lStyle}>Platform</label>
          <select style={{ ...iStyle, appearance: 'none' }} value={form.platform ?? 'Fiverr'} onChange={(e) => set('platform', e.target.value)}>
            {PLATFORMS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label style={lStyle}>Rating (1–5)</label>
          <select style={{ ...iStyle, appearance: 'none' }} value={form.rating ?? 5} onChange={(e) => set('rating', Number(e.target.value))}>
            {[5, 4, 3, 2, 1].map((r) => <option key={r} value={r}>{r} ★</option>)}
          </select>
        </div>
      </div>
      <div><label style={lStyle}>Testimonial Message *</label><textarea required rows={4} style={iStyle} value={form.message ?? ''} onChange={(e) => set('message', e.target.value)} placeholder="Describe what the client said..." /></div>
      <label style={{ ...lStyle, display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>
        <input type="checkbox" checked={!!form.featured} onChange={(e) => set('featured', e.target.checked)} />
        Feature on homepage
      </label>
      {error && <p style={{ color: '#FCA5A5', fontSize: '0.84rem', margin: 0 }}>{error}</p>}
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
        <button type="button" onClick={onCancel} style={{ padding: '0.65rem 1.25rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#E2E8F0', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.875rem' }}>Cancel</button>
        <button type="submit" disabled={saving} style={{ padding: '0.65rem 1.5rem', background: 'linear-gradient(135deg, #2F6FED, #1A56CC)', border: 'none', borderRadius: '8px', color: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: '0.875rem' }}>
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
}

export default function AdminTestimonialsPage() {
  const [items,   setItems]   = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Testimonial> | null>(null);

  const fetch = async () => {
    setLoading(true);
    try { setItems((await getAdminTestimonials()).data); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetch(); }, []);

  const handleSave = async (data: Partial<Testimonial>) => {
    if (data._id) await updateTestimonial(data._id, data);
    else await createTestimonial(data);
    setEditing(null); fetch();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this testimonial?')) return;
    await deleteTestimonial(id);
    setItems((p) => p.filter((x) => x._id !== id));
  };

  const stars = (r: number) => '★'.repeat(r) + '☆'.repeat(5 - r);

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.2rem', letterSpacing: '-0.02em' }}>Testimonials</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.84rem', margin: 0 }}>Manage client reviews and ratings</p>
        </div>
        <button onClick={() => setEditing(EMPTY)} style={{ padding: '0.65rem 1.25rem', background: 'linear-gradient(135deg, #2F6FED, #1A56CC)', border: 'none', borderRadius: '8px', color: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: '0.875rem', boxShadow: '0 4px 14px rgba(47,111,237,0.35)' }}>
          + Add Review
        </button>
      </div>

      {editing !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '1rem', overflowY: 'auto' }}>
          <div style={{ background: '#1A1F2E', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2rem', width: '100%', maxWidth: '560px' }}>
            <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', margin: '0 0 1.5rem' }}>{editing._id ? 'Edit Testimonial' : 'Add Testimonial'}</h2>
            <TestimonialForm initial={editing} onSave={handleSave} onCancel={() => setEditing(null)} />
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {loading && <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>Loading...</p>}
        {!loading && items.length === 0 && <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem' }}>No testimonials yet.</p>}
        {items.map((t) => (
          <div key={t._id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>{t.clientName}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}>{t.clientRole}</div>
              </div>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                {t.featured && <span style={{ background: 'rgba(234,179,8,0.15)', color: '#FCD34D', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: '4px' }}>FEATURED</span>}
                <span style={{ background: 'rgba(107,114,128,0.1)', color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>{t.platform}</span>
              </div>
            </div>
            <div style={{ color: '#FCD34D', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{stars(t.rating)}</div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.84rem', lineHeight: 1.65, margin: '0 0 1rem' }}>"{t.message}"</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => setEditing(t)} style={{ flex: 1, padding: '0.4rem', background: 'rgba(47,111,237,0.12)', border: '1px solid rgba(47,111,237,0.2)', borderRadius: '6px', color: '#93C5FD', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.78rem' }}>Edit</button>
              <button onClick={() => handleDelete(t._id)} style={{ flex: 1, padding: '0.4rem', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '6px', color: '#FCA5A5', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.78rem' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
