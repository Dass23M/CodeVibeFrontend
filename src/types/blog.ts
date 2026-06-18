// ===== Blog =====

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  tags: string[];
  author?: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}
