import { Project } from '@/types/project';
import { EstimateResult, BudgetRange, ProjectType, Timeline } from '@/types/quote';

// ===========================
//  NAVIGATION
// ===========================

export const NAV_LINKS = [
  { label: 'Home',        href: '/' },
  { label: 'Services',    href: '/services' },
  { label: 'Portfolio',   href: '/portfolio' },
  { label: 'Process',     href: '/process' },
  { label: 'Blog',        href: '/blog' },
] as const;

// ===========================
//  CONTACT / SOCIAL
// ===========================

export const WHATSAPP_NUMBER = '94701234567'; // Replace with real number
export const WHATSAPP_MESSAGE = "Hi! I'm interested in your web development services.";
export const CALENDLY_URL    = '#'; // Replace with real Calendly URL
export const EMAIL_ADDRESS   = 'hello@codevibe.lk';

export const SOCIAL_LINKS = {
  github:   'https://github.com/codevibe-lk',
  linkedin: 'https://linkedin.com/in/codevibe',
  fiverr:   'https://fiverr.com/codevibe',
  upwork:   'https://upwork.com/freelancers/codevibe',
} as const;

// ===========================
//  TECH STACK MARQUEE
// ===========================

export const TECH_STACK = [
  { name: 'React',       icon: '⚛️' },
  { name: 'Next.js',     icon: '▲' },
  { name: 'Node.js',     icon: '🟢' },
  { name: 'MongoDB',     icon: '🍃' },
  { name: 'Express',     icon: '🚂' },
  { name: 'TypeScript',  icon: '📘' },
  { name: 'Tailwind',    icon: '🎨' },
  { name: 'PostgreSQL',  icon: '🐘' },
  { name: 'Redis',       icon: '🔴' },
  { name: 'Docker',      icon: '🐳' },
  { name: 'AWS',         icon: '☁️' },
  { name: 'Git',         icon: '🔀' },
] as const;

// ===========================
//  SERVICE PACKAGES
// ===========================

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  priceMin: number;
  priceMax: number;
  deliveryDays: string;
  recommended?: boolean;
  features: string[];
  notIncluded?: string[];
  cta: string;
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'landing',
    name: 'Landing Page',
    tagline: 'Convert visitors into customers',
    priceMin: 15000,
    priceMax: 25000,
    deliveryDays: '5–7 days',
    features: [
      'Single-page responsive design',
      'Hero + About + Services + Contact sections',
      'Contact / inquiry form',
      'SEO meta tags & OG image',
      'Mobile-first & fast-loading',
      '1 round of revisions',
    ],
    notIncluded: ['CMS / Blog', 'Backend API', 'E-commerce'],
    cta: 'Get a Quote',
  },
  {
    id: 'portfolio',
    name: 'Portfolio / Brochure',
    tagline: 'Professional multi-page presence',
    priceMin: 25000,
    priceMax: 50000,
    deliveryDays: '10–14 days',
    recommended: true,
    features: [
      'Up to 5 pages (Home, About, Services, Portfolio, Contact)',
      'Responsive design with animations',
      'Blog / case study section',
      'Contact form with email notification',
      'SEO optimized + sitemap',
      'Google Analytics integration',
      '2 rounds of revisions',
    ],
    cta: 'Get a Quote',
  },
  {
    id: 'restaurant',
    name: 'Restaurant / Café',
    tagline: 'Showcase your menu & ambiance',
    priceMin: 40000,
    priceMax: 80000,
    deliveryDays: '14–21 days',
    features: [
      'Full menu page with categories',
      'Photo gallery & team section',
      'Reservation / booking form',
      'Google Maps integration',
      'Instagram feed embed',
      'Mobile-first design',
      'WhatsApp order button',
      '2 rounds of revisions',
    ],
    cta: 'Get a Quote',
  },
  {
    id: 'tourism',
    name: 'Tourism / Travel',
    tagline: 'Showcase destinations & packages',
    priceMin: 50000,
    priceMax: 100000,
    deliveryDays: '21–28 days',
    features: [
      'Tour package listing pages',
      'Image/video gallery',
      'Booking inquiry form',
      'Interactive map',
      'Testimonials & reviews section',
      'Multi-language ready structure',
      'SEO for travel keywords',
      '3 rounds of revisions',
    ],
    cta: 'Get a Quote',
  },
  {
    id: 'fullapp',
    name: 'Full Web App',
    tagline: 'Scalable MERN/Next.js application',
    priceMin: 80000,
    priceMax: 200000,
    deliveryDays: '30–90 days',
    features: [
      'Full-stack architecture (MERN / Next.js)',
      'User auth (JWT / OAuth)',
      'Custom admin dashboard',
      'REST API or GraphQL backend',
      'Database design & optimization',
      'CI/CD pipeline setup',
      'Deployment to cloud (Vercel / AWS / VPS)',
      'Post-launch support (30 days)',
    ],
    cta: 'Start a Project',
  },
];

// ===========================
//  PROCESS STEPS
// ===========================

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery Call',
    description:
      'Free 15-min consultation to understand your goals, requirements, and vision. We align on scope, timeline, and success criteria.',
    icon: '🎯',
    duration: '15 min',
  },
  {
    step: '02',
    title: 'Proposal & Quote',
    description:
      'Detailed project proposal with scope of work, tech stack, timeline, milestones, and fixed-price LKR quote — no surprises.',
    icon: '📋',
    duration: '1–2 days',
  },
  {
    step: '03',
    title: 'Design & Wireframes',
    description:
      'UI/UX wireframes and design mockups for your approval. You see exactly how the product will look before a single line of code is written.',
    icon: '🎨',
    duration: '3–7 days',
  },
  {
    step: '04',
    title: 'Development',
    description:
      'Clean, type-safe code following best practices. Regular progress updates via WhatsApp. Git version control throughout.',
    icon: '💻',
    duration: 'Per timeline',
  },
  {
    step: '05',
    title: 'Review & Deploy',
    description:
      'Testing phase → your feedback → revisions → production deployment. Includes SEO setup, performance optimization, and SSL.',
    icon: '🚀',
    duration: '2–5 days',
  },
  {
    step: '06',
    title: 'Ongoing Support',
    description:
      '30-day post-launch support included. Optional monthly maintenance packages available for updates and monitoring.',
    icon: '🛡️',
    duration: '30+ days',
  },
] as const;

// ===========================
//  PORTFOLIO PROJECTS (Static Fallback)
// ===========================

export const PORTFOLIO_PROJECTS: Omit<Project, '_id'>[] = [
  {
    title: 'FitSync',
    slug: 'fitsync',
    summary: 'A comprehensive fitness tracking platform for Sri Lankan gym-goers with workout planning, progress analytics, and nutrition logging.',
    problem: 'Local gym members had no affordable digital tool to track workouts and nutrition tailored to Sri Lankan dietary habits.',
    solution: 'Built a full-stack MERN platform with custom workout builder, calorie tracking with local food database, and progress visualization using Chart.js.',
    result: '500+ active users within 3 months, 4.8★ average rating. Featured on local tech blog "TechTalk LK".',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'JWT', 'Tailwind CSS'],
    coverImage: '/images/fitsync-cover.png',
    liveUrl: 'https://fitsync.lk',
    featured: true,
    order: 1,
  },
  {
    title: 'Lost & Found Platform',
    slug: 'lost-found-platform',
    summary: 'A geo-location based lost and found item reporting system for universities and public spaces across Sri Lanka.',
    problem: 'No centralized platform existed for Sri Lankan institutions to manage lost-and-found items efficiently.',
    solution: 'Developed a Next.js app with image upload, Google Maps integration, category filtering, and automated email notification when a matching item is reported.',
    result: 'Deployed at 3 Colombo universities. Matched 200+ lost items in first semester.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Google Maps API', 'Cloudinary', 'Nodemailer'],
    coverImage: '/images/lostfound-cover.png',
    featured: true,
    order: 2,
  },
  {
    title: 'CodeNews.lk',
    slug: 'codenews-lk',
    summary: 'A developer-focused news aggregator and blog platform for the Sri Lankan tech community.',
    problem: 'Sri Lankan developers had no dedicated local source for tech news, tutorials, and job opportunities in Sinhala and English.',
    solution: 'Built a full CMS-powered blog platform with RSS feed aggregation, markdown editor, tag filtering, newsletter subscribe, and Google Search Console integration.',
    result: '1,200+ monthly visitors organically. Ranked #1 for "Sri Lanka tech news" on Google within 6 months.',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'next-mdx-remote', 'Resend', 'Tailwind CSS', 'SEO'],
    coverImage: '/images/codenews-cover.png',
    liveUrl: 'https://codenews.lk',
    featured: true,
    order: 3,
  },
];

// ===========================
//  TESTIMONIALS (Static)
// ===========================

export const STATIC_TESTIMONIALS = [
  {
    _id: '1',
    clientName: 'Kavinda Perera',
    clientRole: 'Founder, RestaurantLK',
    platform: 'Fiverr' as const,
    message: 'Exceptional work! Delivered my restaurant website in 10 days, exactly as discussed. Clean code, responsive design, and excellent communication throughout. Highly recommend Code Vibe!',
    rating: 5,
  },
  {
    _id: '2',
    clientName: 'Shalini Fernando',
    clientRole: 'CEO, TourSriLanka.com',
    platform: 'Upwork' as const,
    message: 'Our tourism platform needed a complete rebuild. Code Vibe delivered a stunning Next.js site that loads in under 2 seconds and ranks on the first page of Google. Amazing results!',
    rating: 5,
  },
  {
    _id: '3',
    clientName: 'Rajan Krishnamurthy',
    clientRole: 'Startup Founder, Colombo',
    platform: 'Direct' as const,
    message: 'Built our full MERN stack app from scratch. Excellent attention to detail, type-safe code, and a smooth development process. The project estimator on the website was super helpful!',
    rating: 5,
  },
  {
    _id: '4',
    clientName: 'Amara Silva',
    clientRole: 'Marketing Manager, TechCo',
    platform: 'Fiverr' as const,
    message: 'Fast delivery, great communication, and a beautiful landing page. We saw a 40% increase in inquiry conversions after launch. Will definitely work with Code Vibe again.',
    rating: 5,
  },
  {
    _id: '5',
    clientName: 'David Chen',
    clientRole: 'Product Manager, HealthApp',
    platform: 'Upwork' as const,
    message: 'Professional, reliable, and technically skilled. Integrated our complex API requirements flawlessly. The code quality was production-ready from day one.',
    rating: 5,
  },
  {
    _id: '6',
    clientName: 'Nishani Jayawardena',
    clientRole: 'Business Owner, Kandy',
    platform: 'Direct' as const,
    message: 'My e-commerce site went live in 3 weeks. The WhatsApp integration and mobile-first design have been game-changers for my business. Highly professional service!',
    rating: 5,
  },
] as const;

// ===========================
//  ESTIMATE CALCULATOR
// ===========================

export const ESTIMATE_MAP: Record<ProjectType, Record<BudgetRange, EstimateResult>> = {
  'Landing Page': {
    'Under 50k':    { minPrice: 15000, maxPrice: 25000, minDays: 5,  maxDays: 7,  packageLabel: 'Landing Page',           highlights: ['Responsive design', 'Contact form', 'SEO ready'] },
    '50k - 150k':  { minPrice: 25000, maxPrice: 50000, minDays: 7,  maxDays: 14, packageLabel: 'Premium Landing Page',    highlights: ['Animations', 'Blog section', 'Analytics'] },
    '150k - 300k': { minPrice: 50000, maxPrice: 100000, minDays: 14, maxDays: 21, packageLabel: 'Advanced Landing + CMS', highlights: ['CMS integration', 'Multi-language', 'A/B testing'] },
    '300k+':       { minPrice: 100000, maxPrice: 200000, minDays: 21, maxDays: 30, packageLabel: 'Enterprise Landing',     highlights: ['Custom API', 'Advanced analytics', 'Priority support'] },
  },
  'Full Web App': {
    'Under 50k':    { minPrice: 30000, maxPrice: 50000, minDays: 21, maxDays: 30, packageLabel: 'MVP Web App',             highlights: ['Basic auth', 'Core features', 'Responsive UI'] },
    '50k - 150k':  { minPrice: 80000, maxPrice: 150000, minDays: 30, maxDays: 60, packageLabel: 'Full-Stack Web App',       highlights: ['Auth + Roles', 'Admin dashboard', 'REST API'] },
    '150k - 300k': { minPrice: 150000, maxPrice: 250000, minDays: 45, maxDays: 75, packageLabel: 'Advanced Web Platform',   highlights: ['Microservices', 'Real-time features', 'Cloud deploy'] },
    '300k+':       { minPrice: 250000, maxPrice: 500000, minDays: 60, maxDays: 120, packageLabel: 'Enterprise Platform',    highlights: ['Full DevOps', 'Scalable infra', '24/7 monitoring'] },
  },
  'API Integration': {
    'Under 50k':    { minPrice: 15000, maxPrice: 30000, minDays: 7,  maxDays: 14, packageLabel: 'Basic Integration',       highlights: ['Single API', 'Webhook setup', 'Error handling'] },
    '50k - 150k':  { minPrice: 40000, maxPrice: 80000, minDays: 14, maxDays: 28, packageLabel: 'Multi-API Integration',   highlights: ['Multiple services', 'Data sync', 'Admin panel'] },
    '150k - 300k': { minPrice: 80000, maxPrice: 150000, minDays: 21, maxDays: 45, packageLabel: 'Enterprise Integration',  highlights: ['Queue system', 'Retry logic', 'Monitoring'] },
    '300k+':       { minPrice: 150000, maxPrice: 300000, minDays: 30, maxDays: 60, packageLabel: 'Platform Integrations',  highlights: ['ERP/CRM connect', 'Real-time sync', 'SLA guarantee'] },
  },
  'E-commerce': {
    'Under 50k':    { minPrice: 30000, maxPrice: 60000, minDays: 14, maxDays: 21, packageLabel: 'Basic Shop',              highlights: ['Product catalog', 'Cart', 'PayHere gateway'] },
    '50k - 150k':  { minPrice: 70000, maxPrice: 120000, minDays: 21, maxDays: 45, packageLabel: 'Full E-commerce',         highlights: ['Inventory mgmt', 'Orders', 'Customer portal'] },
    '150k - 300k': { minPrice: 120000, maxPrice: 220000, minDays: 45, maxDays: 75, packageLabel: 'Advanced Store',         highlights: ['Multi-vendor', 'Analytics', 'Mobile app'] },
    '300k+':       { minPrice: 220000, maxPrice: 500000, minDays: 60, maxDays: 120, packageLabel: 'Enterprise Commerce',   highlights: ['Custom platform', 'ERP connect', 'AI recommendations'] },
  },
  'Other': {
    'Under 50k':    { minPrice: 15000, maxPrice: 50000, minDays: 7,  maxDays: 30, packageLabel: 'Custom Project',          highlights: ['Tailored solution', 'Consultation included'] },
    '50k - 150k':  { minPrice: 50000, maxPrice: 150000, minDays: 14, maxDays: 45, packageLabel: 'Custom Project',          highlights: ['Detailed spec', 'Agile delivery'] },
    '150k - 300k': { minPrice: 100000, maxPrice: 250000, minDays: 30, maxDays: 75, packageLabel: 'Complex Custom Project', highlights: ['Architecture design', 'Team collaboration'] },
    '300k+':       { minPrice: 200000, maxPrice: 500000, minDays: 45, maxDays: 120, packageLabel: 'Enterprise Custom',     highlights: ['Dedicated resources', 'Full lifecycle'] },
  },
};

export const TRUST_BADGES = [
  { label: 'Fiverr Rating',   value: '5.0 ★',   sub: 'Level 2 Seller' },
  { label: 'Upwork Score',    value: 'Top Rated', sub: 'Job Success 98%' },
  { label: 'Projects Done',   value: '15+',       sub: 'Delivered on time' },
  { label: 'Experience',      value: '3+ Years',  sub: 'MERN & Next.js' },
  { label: 'Based in',        value: '🇱🇰 SL',     sub: 'Gampaha, Sri Lanka' },
] as const;
