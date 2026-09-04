'use client';

import { useState, useEffect } from 'react';
import {
  getAdminProjects, createProject, updateProject, deleteProject,
  type Project,
} from '@/lib/adminApi';

const EMPTY: Partial<Project> = {
  title: '', slug: '', summary: '', problem: '', solution: '', result: '',
  techStack: [], liveUrl: '', githubUrl: '', featured: false, published: true, order: 0,
};

function ProjectForm({
  initial, onSave, onCancel,
}: { initial: Partial<Project>; onSave: (data: Partial<Project>) => Promise<void>; onCancel: () => void }) {
  const [form,    setForm]    = useState<Partial<Project>>(initial);
  const [techStr, setTechStr] = useState((initial.techStack ?? []).join(', '));
  const [saving,  setSaving]  = useState(false);
  const [error,   setError]   = useState('');

  const set = (k: keyof Project, v: unknown) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true); setError('');
    try {
      await onSave({ ...form, techStack: techStr.split(',').map((s) => s.trim()).filter(Boolean) });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const iStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px', color: '#E2E8F0', fontSize: '0.875rem', padding: '0.6rem 0.75rem',
    fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box',
  };
  const lStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase',
    letterSpacing: '0.05em', display: 'block', marginBottom: '0.35rem',
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div><label style={lStyle}>Title *</label><input required style={iStyle} value={form.title ?? ''} onChange={(e) => set('title', e.target.value)} placeholder="FitSync Platform" /></div>
        <div><label style={lStyle}>Slug *</label><input required style={iStyle} value={form.slug ?? ''} onChange={(e) => set('slug', e.target.value)} placeholder="fitsync-platform" /></div>
      </div>
      <div><label style={lStyle}>Summary *</label><textarea required rows={2} style={iStyle} value={form.summary ?? ''} onChange={(e) => set('summary', e.target.value)} /></div>
      <div><label style={lStyle}>Problem</label><textarea rows={2} style={iStyle} value={form.problem ?? ''} onChange={(e) => set('problem', e.target.value)} /></div>
      <div><label style={lStyle}>Solution</label><textarea rows={2} style={iStyle} value={form.solution ?? ''} onChange={(e) => set('solution', e.target.value)} /></div>
      <div><label style={lStyle}>Result</label><textarea rows={2} style={iStyle} value={form.result ?? ''} onChange={(e) => set('result', e.target.value)} /></div>
      <div><label style={lStyle}>Tech Stack (comma-separated)</label><input style={iStyle} value={techStr} onChange={(e) => setTechStr(e.target.value)} placeholder="React, Node.js, MongoDB" /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div><label style={lStyle}>Live URL</label><input style={iStyle} value={form.liveUrl ?? ''} onChange={(e) => set('liveUrl', e.target.value)} placeholder="https://example.lk" /></div>
        <div><label style={lStyle}>GitHub URL</label><input style={iStyle} value={form.githubUrl ?? ''} onChange={(e) => set('githubUrl', e.target.value)} placeholder="https://github.com/..." /></div>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <label style={{ ...lStyle, display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>
          <input type="checkbox" checked={!!form.featured} onChange={(e) => set('featured', e.target.checked)} />
          Featured
        </label>
        <label style={{ ...lStyle, display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>
          <input type="checkbox" checked={!!form.published} onChange={(e) => set('published', e.target.checked)} />
          Published
        </label>
      </div>
      {error && <p style={{ color: '#FCA5A5', fontSize: '0.84rem', margin: 0 }}>{error}</p>}
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
        <button type="button" onClick={onCancel} style={{ padding: '0.65rem 1.25rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#E2E8F0', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.875rem' }}>Cancel</button>
        <button type="submit" disabled={saving} style={{ padding: '0.65rem 1.5rem', background: 'linear-gradient(135deg, #2F6FED, #1A56CC)', border: 'none', borderRadius: '8px', color: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: '0.875rem' }}>
          {saving ? 'Saving...' : 'Save Project'}
        </button>
      </div>
    </form>
  );
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading,  setLoading]  = useState(true);
  const [editing,  setEditing]  = useState<Partial<Project> | null>(null);
  const [error,    setError]    = useState('');

  const fetch = async () => {
    setLoading(true);
    try { setProjects((await getAdminProjects()).data); }
    catch (e: unknown) { setError(e instanceof Error ? e.message : 'Error'); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetch(); }, []);

  const handleSave = async (data: Partial<Project>) => {
    if (data._id) await updateProject(data._id, data);
    else await createProject(data);
    setEditing(null);
    fetch();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this project?')) return;
    await deleteProject(id);
    setProjects((p) => p.filter((x) => x._id !== id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.2rem', letterSpacing: '-0.02em' }}>Projects</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.84rem', margin: 0 }}>Manage your portfolio case studies</p>
        </div>
        <button onClick={() => setEditing(EMPTY)} style={{ padding: '0.65rem 1.25rem', background: 'linear-gradient(135deg, #2F6FED, #1A56CC)', border: 'none', borderRadius: '8px', color: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: '0.875rem', boxShadow: '0 4px 14px rgba(47,111,237,0.35)' }}>
          + Add Project
        </button>
      </div>

      {error && <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '8px', padding: '0.75rem 1rem', color: '#FCA5A5', marginBottom: '1.5rem', fontSize: '0.875rem' }}>{error}</div>}

      {/* Modal form */}
      {editing !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', zIndex: 50, padding: '2rem 1rem', overflowY: 'auto' }}>
          <div style={{ background: '#1A1F2E', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2rem', width: '100%', maxWidth: '640px' }}>
            <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', margin: '0 0 1.5rem' }}>{editing._id ? 'Edit Project' : 'Add Project'}</h2>
            <ProjectForm initial={editing} onSave={handleSave} onCancel={() => setEditing(null)} />
          </div>
        </div>
      )}

      {/* Projects list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {loading && <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>Loading projects...</p>}
        {!loading && projects.length === 0 && <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem' }}>No projects yet. Add your first one!</p>}
        {projects.map((project) => (
          <div key={project._id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>{project.title}</span>
                {project.featured && <span style={{ background: 'rgba(234,179,8,0.15)', color: '#FCD34D', borderRadius: '100px', padding: '0.1rem 0.5rem', fontSize: '0.65rem', fontWeight: 700 }}>FEATURED</span>}
                {!project.published && <span style={{ background: 'rgba(107,114,128,0.15)', color: '#9CA3AF', borderRadius: '100px', padding: '0.1rem 0.5rem', fontSize: '0.65rem', fontWeight: 700 }}>DRAFT</span>}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', margin: '0 0 0.4rem', lineHeight: 1.5 }}>{project.summary}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                {(project.techStack ?? []).slice(0, 5).map((t) => (
                  <span key={t} style={{ background: 'rgba(47,111,237,0.1)', color: '#93C5FD', borderRadius: '4px', padding: '0.15rem 0.45rem', fontSize: '0.7rem', fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ padding: '0.4rem 0.75rem', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '6px', color: '#6EE7B7', fontSize: '0.78rem', textDecoration: 'none', fontWeight: 600 }}>↗ Live</a>}
              <button onClick={() => setEditing(project)} style={{ padding: '0.4rem 0.75rem', background: 'rgba(47,111,237,0.12)', border: '1px solid rgba(47,111,237,0.2)', borderRadius: '6px', color: '#93C5FD', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.78rem' }}>Edit</button>
              <button onClick={() => handleDelete(project._id)} style={{ padding: '0.4rem 0.75rem', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '6px', color: '#FCA5A5', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.78rem' }}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
