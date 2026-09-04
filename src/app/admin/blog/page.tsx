'use client';

import { useState, useEffect } from 'react';
import {
  getAdminBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost,
  type BlogPost,
} from '@/lib/adminApi';

const EMPTY: Partial<BlogPost> = { title: '', slug: '', excerpt: '', content: '', tags: [], readTime: '', published: false };

function BlogForm({ initial, onSave, onCancel }: {
  initial: Partial<BlogPost>;
  onSave: (d: Partial<BlogPost>) => Promise<void>;
  onCancel: () => void;
}) {
  const [form,    setForm]    = useState<Partial<BlogPost>>(initial);
  const [tagStr,  setTagStr]  = useState((initial.tags ?? []).join(', '));
  const [saving,  setSaving]  = useState(false);
  const [error,   setError]   = useState('');
  const set = (k: keyof BlogPost, v: unknown) => setForm((f) => ({ ...f, [k]: v }));

  const iStyle: React.CSSProperties = { width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#E2E8F0', fontSize: '0.875rem', padding: '0.6rem 0.75rem', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' };
  const lStyle: React.CSSProperties = { color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.35rem' };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true); setError('');
    try { await onSave({ ...form, tags: tagStr.split(',').map((s) => s.trim()).filter(Boolean) }); }
    catch (err: unknown) { setError(err instanceof Error ? err.message : 'Save failed'); }
    finally { setSaving(false); }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div><label style={lStyle}>Title *</label><input required style={iStyle} value={form.title ?? ''} onChange={(e) => set('title', e.target.value)} /></div>
        <div><label style={lStyle}>Slug *</label><input required style={iStyle} value={form.slug ?? ''} onChange={(e) => set('slug', e.target.value)} placeholder="my-article-slug" /></div>
      </div>
      <div><label style={lStyle}>Excerpt</label><textarea rows={2} style={iStyle} value={form.excerpt ?? ''} onChange={(e) => set('excerpt', e.target.value)} placeholder="Short summary shown in blog listing..." /></div>
      <div><label style={lStyle}>Content (Markdown)</label><textarea rows={12} style={{ ...iStyle, resize: 'vertical', lineHeight: 1.6 }} value={form.content ?? ''} onChange={(e) => set('content', e.target.value)} placeholder="Write your article in Markdown..." /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
        <div><label style={lStyle}>Tags (comma-separated)</label><input style={iStyle} value={tagStr} onChange={(e) => setTagStr(e.target.value)} placeholder="MERN Stack, Tutorial, Sri Lanka" /></div>
        <div><label style={lStyle}>Read Time</label><input style={iStyle} value={form.readTime ?? ''} onChange={(e) => set('readTime', e.target.value)} placeholder="5 min read" /></div>
      </div>
      <label style={{ ...lStyle, display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>
        <input type="checkbox" checked={!!form.published} onChange={(e) => set('published', e.target.checked)} />
        Publish immediately
      </label>
      {error && <p style={{ color: '#FCA5A5', fontSize: '0.84rem', margin: 0 }}>{error}</p>}
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
        <button type="button" onClick={onCancel} style={{ padding: '0.65rem 1.25rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#E2E8F0', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.875rem' }}>Cancel</button>
        <button type="submit" disabled={saving} style={{ padding: '0.65rem 1.5rem', background: 'linear-gradient(135deg, #2F6FED, #1A56CC)', border: 'none', borderRadius: '8px', color: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: '0.875rem' }}>
          {saving ? 'Saving...' : 'Save Post'}
        </button>
      </div>
    </form>
  );
}

export default function AdminBlogPage() {
  const [posts,   setPosts]   = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(null);

  const fetch = async () => {
    setLoading(true);
    try { setPosts((await getAdminBlogPosts()).data); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetch(); }, []);

  const handleSave = async (data: Partial<BlogPost>) => {
    if (data._id) await updateBlogPost(data._id, data);
    else await createBlogPost(data);
    setEditing(null); fetch();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this blog post?')) return;
    await deleteBlogPost(id);
    setPosts((p) => p.filter((x) => x._id !== id));
  };

  const togglePublish = async (post: BlogPost) => {
    await updateBlogPost(post._id, { published: !post.published });
    setPosts((p) => p.map((x) => x._id === post._id ? { ...x, published: !x.published } : x));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.2rem', letterSpacing: '-0.02em' }}>Blog Posts</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.84rem', margin: 0 }}>Write and manage articles</p>
        </div>
        <button onClick={() => setEditing(EMPTY)} style={{ padding: '0.65rem 1.25rem', background: 'linear-gradient(135deg, #2F6FED, #1A56CC)', border: 'none', borderRadius: '8px', color: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: '0.875rem', boxShadow: '0 4px 14px rgba(47,111,237,0.35)' }}>
          + Write Article
        </button>
      </div>

      {editing !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', zIndex: 50, padding: '2rem 1rem', overflowY: 'auto' }}>
          <div style={{ background: '#1A1F2E', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2rem', width: '100%', maxWidth: '780px' }}>
            <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', margin: '0 0 1.5rem' }}>{editing._id ? 'Edit Article' : 'Write New Article'}</h2>
            <BlogForm initial={editing} onSave={handleSave} onCancel={() => setEditing(null)} />
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {loading && <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>Loading posts...</p>}
        {!loading && posts.length === 0 && <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem' }}>No posts yet. Write your first article!</p>}
        {posts.map((post) => (
          <div key={post._id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>{post.title}</span>
                <span style={{ background: post.published ? 'rgba(16,185,129,0.15)' : 'rgba(107,114,128,0.15)', color: post.published ? '#6EE7B7' : '#9CA3AF', borderRadius: '100px', padding: '0.1rem 0.5rem', fontSize: '0.65rem', fontWeight: 700 }}>
                  {post.published ? 'LIVE' : 'DRAFT'}
                </span>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontFamily: 'monospace' }}>/{post.slug}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '0.4rem' }}>
                {(post.tags ?? []).map((t) => <span key={t} style={{ background: 'rgba(47,111,237,0.1)', color: '#93C5FD', borderRadius: '4px', padding: '0.1rem 0.4rem', fontSize: '0.7rem' }}>{t}</span>)}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
              <button onClick={() => togglePublish(post)} style={{ padding: '0.4rem 0.75rem', background: post.published ? 'rgba(107,114,128,0.1)' : 'rgba(16,185,129,0.12)', border: `1px solid ${post.published ? 'rgba(107,114,128,0.2)' : 'rgba(16,185,129,0.2)'}`, borderRadius: '6px', color: post.published ? '#9CA3AF' : '#6EE7B7', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.78rem' }}>
                {post.published ? 'Unpublish' : 'Publish'}
              </button>
              <button onClick={() => setEditing(post)} style={{ padding: '0.4rem 0.75rem', background: 'rgba(47,111,237,0.12)', border: '1px solid rgba(47,111,237,0.2)', borderRadius: '6px', color: '#93C5FD', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.78rem' }}>Edit</button>
              <button onClick={() => handleDelete(post._id)} style={{ padding: '0.4rem 0.75rem', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '6px', color: '#FCA5A5', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.78rem' }}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
