// ── Admin API client ─────────────────────────────────────────────────
// All requests go to the backend with JWT Authorization header.

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('cv_admin_token');
}

async function adminFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || `API error ${res.status}`);
  }
  return data;
}

// ── Auth ─────────────────────────────────────────────────────────────
export async function loginAdmin(email: string, password: string) {
  const data = await adminFetch<{ success: boolean; token: string; admin: AdminUser }>(
    '/api/admin/login',
    { method: 'POST', body: JSON.stringify({ email, password }) }
  );
  if (data.token) localStorage.setItem('cv_admin_token', data.token);
  return data;
}

export function logoutAdmin() {
  localStorage.removeItem('cv_admin_token');
}

export function isAdminLoggedIn(): boolean {
  return !!getToken();
}

export async function getAdminMe() {
  return adminFetch<{ success: boolean; admin: AdminUser }>('/api/admin/me');
}

// ── Stats ─────────────────────────────────────────────────────────────
export async function getStats() {
  return adminFetch<{ success: boolean; data: DashboardStats }>('/api/admin/stats');
}

// ── Leads ─────────────────────────────────────────────────────────────
export async function getLeads(params?: { status?: string; page?: number }) {
  const qs = new URLSearchParams();
  if (params?.status) qs.set('status', params.status);
  if (params?.page)   qs.set('page', String(params.page));
  return adminFetch<LeadsResponse>(`/api/admin/leads?${qs}`);
}

export async function updateLead(id: string, updates: { status?: string; notes?: string }) {
  return adminFetch<{ success: boolean; data: Lead }>(`/api/admin/leads/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  });
}

export async function deleteLead(id: string) {
  return adminFetch<{ success: boolean }>(`/api/admin/leads/${id}`, { method: 'DELETE' });
}

// ── Projects ──────────────────────────────────────────────────────────
export async function getAdminProjects() {
  return adminFetch<{ success: boolean; data: Project[] }>('/api/admin/projects');
}

export async function createProject(data: Partial<Project>) {
  return adminFetch<{ success: boolean; data: Project }>('/api/admin/projects', {
    method: 'POST', body: JSON.stringify(data),
  });
}

export async function updateProject(id: string, data: Partial<Project>) {
  return adminFetch<{ success: boolean; data: Project }>(`/api/admin/projects/${id}`, {
    method: 'PUT', body: JSON.stringify(data),
  });
}

export async function deleteProject(id: string) {
  return adminFetch<{ success: boolean }>(`/api/admin/projects/${id}`, { method: 'DELETE' });
}

// ── Testimonials ──────────────────────────────────────────────────────
export async function getAdminTestimonials() {
  return adminFetch<{ success: boolean; data: Testimonial[] }>('/api/admin/testimonials');
}

export async function createTestimonial(data: Partial<Testimonial>) {
  return adminFetch<{ success: boolean; data: Testimonial }>('/api/admin/testimonials', {
    method: 'POST', body: JSON.stringify(data),
  });
}

export async function updateTestimonial(id: string, data: Partial<Testimonial>) {
  return adminFetch<{ success: boolean; data: Testimonial }>(`/api/admin/testimonials/${id}`, {
    method: 'PUT', body: JSON.stringify(data),
  });
}

export async function deleteTestimonial(id: string) {
  return adminFetch<{ success: boolean }>(`/api/admin/testimonials/${id}`, { method: 'DELETE' });
}

// ── Blog ──────────────────────────────────────────────────────────────
export async function getAdminBlogPosts() {
  return adminFetch<{ success: boolean; data: BlogPost[] }>('/api/admin/blog');
}

export async function createBlogPost(data: Partial<BlogPost>) {
  return adminFetch<{ success: boolean; data: BlogPost }>('/api/admin/blog', {
    method: 'POST', body: JSON.stringify(data),
  });
}

export async function updateBlogPost(id: string, data: Partial<BlogPost>) {
  return adminFetch<{ success: boolean; data: BlogPost }>(`/api/admin/blog/${id}`, {
    method: 'PUT', body: JSON.stringify(data),
  });
}

export async function deleteBlogPost(id: string) {
  return adminFetch<{ success: boolean }>(`/api/admin/blog/${id}`, { method: 'DELETE' });
}

// ── Subscribers ───────────────────────────────────────────────────────
export async function getSubscribers() {
  return adminFetch<{ success: boolean; data: Subscriber[]; total: number }>('/api/admin/subscribers');
}

export async function deleteSubscriber(id: string) {
  return adminFetch<{ success: boolean }>(`/api/admin/subscribers/${id}`, { method: 'DELETE' });
}

// ── Types ─────────────────────────────────────────────────────────────
export interface AdminUser {
  id: string;
  name: string;
  email: string;
  lastLogin: string;
}

export interface DashboardStats {
  totalLeads: number;
  newLeadsThisWeek: number;
  openLeads: number;
  totalSubscribers: number;
  totalProjects: number;
  totalTestimonials: number;
}

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budgetRange: string;
  timeline?: string;
  description: string;
  status: 'new' | 'contacted' | 'in-progress' | 'closed';
  notes?: string;
  createdAt: string;
}

export interface LeadsResponse {
  success: boolean;
  data: Lead[];
  total: number;
  page: number;
  pages: number;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  problem?: string;
  solution?: string;
  result?: string;
  techStack: string[];
  coverImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  published: boolean;
  order: number;
  createdAt: string;
}

export interface Testimonial {
  _id: string;
  clientName: string;
  clientRole: string;
  platform: string;
  rating: number;
  message: string;
  featured: boolean;
  createdAt: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  tags: string[];
  published: boolean;
  readTime?: string;
  publishedAt?: string;
  createdAt: string;
}

export interface Subscriber {
  _id: string;
  email: string;
  createdAt: string;
}
