// ===== Quote / Lead Generation =====

export type ProjectType =
  | 'Landing Page'
  | 'Full Web App'
  | 'API Integration'
  | 'E-commerce'
  | 'Other';

export type BudgetRange =
  | 'Under 50k'
  | '50k - 150k'
  | '150k - 300k'
  | '300k+';

export type Timeline =
  | '1-2 weeks'
  | '1 month'
  | '2-3 months'
  | '3+ months'
  | 'Flexible';

export interface QuoteFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: ProjectType;
  budgetRange: BudgetRange;
  timeline: Timeline;
  description: string;
}

export interface EstimateResult {
  minPrice: number;
  maxPrice: number;
  minDays: number;
  maxDays: number;
  packageLabel: string;
  highlights: string[];
}

export type QuoteStep = 1 | 2 | 3 | 4;

export interface QuoteWizardState {
  step: QuoteStep;
  projectType?: ProjectType;
  budgetRange?: BudgetRange;
  timeline?: Timeline;
  name: string;
  email: string;
  phone: string;
  description: string;
  submitted: boolean;
  loading: boolean;
  error?: string;
}
