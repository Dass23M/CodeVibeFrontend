import { Project } from "@/types/project";
import { QuoteFormData } from "@/types/quote";
import { BlogPost } from "@/types/blog";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://codevibebackend.onrender.com";

// ===========================
//  Generic fetch wrapper
// ===========================

async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(
      (errorBody as { message?: string }).message ??
        `API error: ${res.status} ${res.statusText}`,
    );
  }

  return res.json() as Promise<T>;
}

// ===========================
//  Projects
// ===========================

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export async function getProjects(): Promise<Project[]> {
  const res = await apiFetch<ApiResponse<Project[]>>("/api/projects");
  return res.data;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const res = await apiFetch<ApiResponse<Project[]>>(
    "/api/projects?featured=true",
  );
  return res.data;
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const res = await apiFetch<ApiResponse<Project>>(`/api/projects/${slug}`);
  return res.data;
}

// ===========================
//  Leads
// ===========================

export async function submitLead(data: QuoteFormData): Promise<void> {
  await apiFetch("/api/leads", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// ===========================
//  Quote (alias)
// ===========================

export async function submitQuoteRequest(data: QuoteFormData): Promise<void> {
  await apiFetch("/api/quote", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// ===========================
//  Testimonials
// ===========================

export interface Testimonial {
  _id: string;
  clientName: string;
  clientRole?: string;
  platform: "Fiverr" | "Upwork" | "Direct" | "Other";
  message: string;
  rating: number;
  avatar?: string;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const res = await apiFetch<ApiResponse<Testimonial[]>>("/api/testimonials");
  return res.data;
}

// ===========================
//  Blog
// ===========================

export async function getBlogPosts(): Promise<BlogPost[]> {
  const res = await apiFetch<ApiResponse<BlogPost[]>>("/api/blog");
  return res.data;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const res = await apiFetch<ApiResponse<BlogPost>>(`/api/blog/${slug}`);
  return res.data;
}

// ===========================
//  Newsletter Subscribe
// ===========================

export async function subscribeBlog(email: string): Promise<void> {
  await apiFetch("/api/subscribe", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}
