// ===== Project / Portfolio =====

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
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  createdAt?: string;
  updatedAt?: string;
}

export type ProjectCategory =
  | 'All'
  | 'MERN Stack'
  | 'Next.js'
  | 'Full Stack'
  | 'API';
