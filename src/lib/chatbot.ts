// ─────────────────────────────────────────────────────────────────
//  Code Vibe Chatbot AI Engine
//  Rule-based NLP: keyword scoring → intent → rich response
// ─────────────────────────────────────────────────────────────────

export interface ChatMessage {
  id: string;
  role: 'bot' | 'user';
  text: string;
  timestamp: Date;
  quickReplies?: string[];
}

// ── Intent definitions ────────────────────────────────────────────

interface Intent {
  name: string;
  keywords: string[];
  weight?: number; // bonus multiplier for high-signal words
}

const INTENTS: Intent[] = [
  {
    name: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'hiya', 'howdy', 'sup', 'good morning', 'good afternoon', 'good evening', 'start', 'begin'],
  },
  {
    name: 'services',
    keywords: ['service', 'services', 'offer', 'what do you do', 'build', 'create', 'develop', 'design', 'make', 'web', 'app', 'website', 'solution', 'help', 'package', 'what can'],
  },
  {
    name: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'how much', 'lkr', 'budget', 'rate', 'fee', 'charge', 'affordable', 'cheap', 'expensive', 'pay', 'rupee', 'plan', 'package'],
  },
  {
    name: 'portfolio',
    keywords: ['portfolio', 'project', 'work', 'example', 'case study', 'fitsync', 'lost and found', 'codenews', 'past', 'previous', 'show me', 'built', 'sample', 'demo'],
  },
  {
    name: 'contact',
    keywords: ['contact', 'email', 'reach', 'call', 'talk', 'meet', 'message', 'connect', 'touch', 'chat', 'whatsapp', 'phone', 'number', 'address'],
  },
  {
    name: 'process',
    keywords: ['process', 'how do you work', 'steps', 'workflow', 'how it works', 'methodology', 'approach', 'procedure', 'phases', 'stages', 'collaboration'],
  },
  {
    name: 'tech',
    keywords: ['tech', 'stack', 'technology', 'react', 'next', 'node', 'mern', 'mongodb', 'typescript', 'javascript', 'express', 'tailwind', 'postgresql', 'redis', 'docker', 'aws', 'framework', 'language', 'use'],
  },
  {
    name: 'location',
    keywords: ['where', 'location', 'based', 'country', 'city', 'sri lanka', 'gampaha', 'colombo', 'remote', 'online', 'local'],
  },
  {
    name: 'quote',
    keywords: ['quote', 'estimate', 'start', 'hire', 'inquiry', 'project', 'get a quote', 'proposal', 'start project', 'begin project', 'work with', 'collaborate', 'onboard'],
  },
  {
    name: 'testimonials',
    keywords: ['review', 'rating', 'client', 'feedback', 'testimonial', 'fiverr', 'upwork', 'trusted', 'reliable', 'reputation', 'satisfied', 'experience', 'opinion', 'recommend'],
  },
  {
    name: 'timeline',
    keywords: ['timeline', 'how long', 'duration', 'days', 'weeks', 'deadline', 'delivery', 'turnaround', 'fast', 'quick', 'time', 'schedule', 'eta', 'when'],
  },
  {
    name: 'navigation',
    keywords: ['navigate', 'find', 'page', 'link', 'go to', 'where is', 'show', 'open', 'visit', 'about', 'blog', 'home'],
  },
  {
    name: 'about',
    keywords: ['about', 'who are you', 'company', 'team', 'founder', 'background', 'story', 'history', 'experience', 'years', 'expertise', 'skill'],
  },
];

// ── Knowledge Base Responses ──────────────────────────────────────

const RESPONSES: Record<string, { text: string; quickReplies: string[] }> = {
  greeting: {
    text: `👋 Hey there! Welcome to **Code Vibe**!\n\nI'm your AI assistant. I can help you with:\n\n• 🛠️ Services & solutions\n• 💰 Pricing & packages\n• 📁 Our portfolio & projects\n• 📞 Contact & office info\n• 🚀 Starting your project\n\nWhat would you like to know?`,
    quickReplies: ['View Services', 'See Pricing', 'Our Portfolio', 'Get a Quote'],
  },

  services: {
    text: `🛠️ **Code Vibe Services**\n\nWe specialise in building modern, scalable web solutions:\n\n🔹 **Landing Pages** — Clean, converting single-page sites\n🔹 **Portfolio / Brochure Sites** — Multi-page professional presence\n🔹 **Restaurant / Café Sites** — Menu, gallery, reservations\n🔹 **Tourism & Travel Portals** — Listings, maps, booking forms\n🔹 **Full Web Applications** — MERN / Next.js scalable apps\n🔹 **API Integrations** — Connect third-party services\n🔹 **E-commerce Platforms** — Full online shops with payments\n\nAll projects include SEO optimisation, mobile-first design, and clean TypeScript code. 💪`,
    quickReplies: ['Pricing?', 'Our Portfolio', 'How long does it take?', 'Get a Quote'],
  },

  pricing: {
    text: `💰 **Pricing Packages (LKR)**\n\n| Package | Price Range | Delivery |\n|---------|------------|----------|\n| Landing Page | 15,000 – 25,000 | 5–7 days |\n| Portfolio Site | 25,000 – 50,000 | 10–14 days |\n| Restaurant / Café | 40,000 – 80,000 | 14–21 days |\n| Tourism Portal | 50,000 – 100,000 | 21–28 days |\n| Full Web App | 80,000 – 200,000 | 30–90 days |\n| E-commerce | 30,000 – 500,000 | 14–120 days |\n\n💡 All prices are in **Sri Lankan Rupees (LKR)**. Use our interactive estimator on the Quote page for a personalised estimate!\n\n📬 Contact us for a free custom quote.`,
    quickReplies: ['Get a Quote', 'View Portfolio', 'Our Process', 'Contact Us'],
  },

  portfolio: {
    text: `📁 **Featured Projects**\n\n🏋️ **FitSync** — Fitness Tracking Platform\nFull-stack MERN app for Sri Lankan gym-goers with workout planning, nutrition logging & analytics. 500+ active users, 4.8★ rating.\n*Stack: React, Node.js, Express, MongoDB, Chart.js*\n\n🔍 **Lost & Found Platform** — University System\nGeo-location based item recovery system deployed at 3 Colombo universities. Matched 200+ lost items in the first semester.\n*Stack: Next.js, TypeScript, PostgreSQL, Prisma, Google Maps*\n\n📰 **CodeNews.lk** — Developer News Aggregator\nSri Lanka's tech news platform. 1,200+ monthly visitors, ranked #1 for "Sri Lanka tech news" on Google.\n*Stack: Next.js, MongoDB, MDX, Resend, SEO*`,
    quickReplies: ['View Full Portfolio', 'Our Services', 'Start a Project', 'Tech Stack'],
  },

  contact: {
    text: `📞 **Get in Touch with Code Vibe**\n\n📧 **Email:** hello@codevibe.lk\n💬 **WhatsApp:** +94 70 123 4567\n📍 **Location:** Gampaha, Sri Lanka\n🌐 **Website:** codevibe.lk\n\n**Social / Freelance Profiles:**\n• 🟢 Fiverr — Level 2 Seller, 5.0★\n• 🔵 Upwork — Top Rated, 98% Job Success\n• 💻 GitHub — @codevibe-lk\n• 🔗 LinkedIn — linkedin.com/in/codevibe\n\nWe typically reply within **1–2 hours** during business hours (9 AM – 7 PM SLST). 🕐`,
    quickReplies: ['Get a Quote', 'WhatsApp Us', 'Our Services', 'View Portfolio'],
  },

  process: {
    text: `🚀 **Our Development Process**\n\n**Step 1 — Discovery Call** 🎯 *(15 min, Free)*\nFree consultation to understand your goals, requirements & vision.\n\n**Step 2 — Proposal & Quote** 📋 *(1–2 days)*\nDetailed scope of work, tech stack, milestones & fixed-price LKR quote.\n\n**Step 3 — Design & Wireframes** 🎨 *(3–7 days)*\nUI/UX mockups for your approval before any code is written.\n\n**Step 4 — Development** 💻 *(Per timeline)*\nClean, type-safe code with regular WhatsApp updates & Git version control.\n\n**Step 5 — Review & Deploy** 🚀 *(2–5 days)*\nTesting → Your feedback → Revisions → Production deployment with SEO & SSL.\n\n**Step 6 — Ongoing Support** 🛡️ *(30+ days)*\n30-day post-launch support included. Optional monthly maintenance packages.`,
    quickReplies: ['Get Started', 'Pricing?', 'Contact Us', 'Our Portfolio'],
  },

  tech: {
    text: `⚡ **Our Technology Stack**\n\n**Frontend:**\n⚛️ React • ▲ Next.js • 📘 TypeScript • 🎨 Tailwind CSS\n\n**Backend:**\n🟢 Node.js • 🚂 Express • 🔷 GraphQL\n\n**Databases:**\n🍃 MongoDB • 🐘 PostgreSQL • 🔴 Redis\n\n**DevOps & Cloud:**\n🐳 Docker • ☁️ AWS • ▲ Vercel • 🔀 Git / GitHub\n\n**Integrations:**\n💳 Stripe / PayHere • 📧 Resend / Nodemailer • 🗺️ Google Maps • ☁️ Cloudinary\n\nWe pick the **right tool for your project**, not just the trendy one. 🎯`,
    quickReplies: ['Our Services', 'View Portfolio', 'Get a Quote', 'Our Process'],
  },

  location: {
    text: `📍 **Where We Are**\n\nCode Vibe is based in **Gampaha, Sri Lanka** 🇱🇰\n\nWe work with clients **100% remotely** worldwide — from Sri Lanka to the UK, UAE, USA, and beyond.\n\n**Business Hours:**\n🕐 Monday – Saturday: 9:00 AM – 7:00 PM (SLST / UTC+5:30)\n\nAll project communication is done via **WhatsApp, Email, and GitHub** — no office visits required! 🌐`,
    quickReplies: ['Contact Us', 'Our Services', 'Get a Quote', 'View Portfolio'],
  },

  quote: {
    text: `🎯 **Ready to Start Your Project?**\n\nHere's how to get a free quote:\n\n**Option 1 — Use Our Estimator** 🧮\nVisit our [Quote Page](/quote) for an instant estimate based on your project type, features, and budget.\n\n**Option 2 — Direct Contact** 📬\n• Email: hello@codevibe.lk\n• WhatsApp: +94 70 123 4567\n\n**What to prepare:**\n✅ Project type & goals\n✅ Key features needed\n✅ Target audience\n✅ Budget range (LKR)\n✅ Deadline (if any)\n\nWe'll get back to you with a detailed proposal within **24 hours**! 🚀`,
    quickReplies: ['Go to Quote Page', 'Our Pricing', 'Contact Us', 'Our Process'],
  },

  testimonials: {
    text: `⭐ **What Our Clients Say**\n\n🟢 **Fiverr — 5.0★ (Level 2 Seller)**\n*"Exceptional work! Delivered my restaurant website in 10 days, exactly as discussed."*\n— Kavinda Perera, Founder, RestaurantLK\n\n🔵 **Upwork — Top Rated (98% Job Success)**\n*"Delivered a stunning Next.js site that loads under 2 seconds and ranks on the first page of Google."*\n— Shalini Fernando, CEO, TourSriLanka.com\n\n💬 **Direct Client:**\n*"Code quality was production-ready from day one."*\n— David Chen, Product Manager, HealthApp\n\n📊 **Stats:**\n• 15+ projects delivered on time\n• 3+ years of MERN & Next.js experience\n• Clients across Sri Lanka, UAE, USA, UK`,
    quickReplies: ['View Portfolio', 'Get a Quote', 'Our Services', 'Contact Us'],
  },

  timeline: {
    text: `⏱️ **Project Timelines**\n\n| Project Type | Timeline |\n|-------------|----------|\n| Landing Page | 5–7 days |\n| Portfolio Site | 10–14 days |\n| Restaurant Site | 14–21 days |\n| Tourism Portal | 21–28 days |\n| Full Web App | 30–90 days |\n| E-commerce | 14–120 days |\n\n💡 **Factors that affect timeline:**\n• Complexity & number of features\n• Content readiness (images, text)\n• Speed of your feedback & approvals\n• Number of revision rounds\n\n🚀 Need it faster? Ask us about **rush delivery** options!`,
    quickReplies: ['Get a Quote', 'Pricing?', 'Our Process', 'Contact Us'],
  },

  navigation: {
    text: `🗺️ **Site Navigation Guide**\n\nHere are all the pages on the Code Vibe website:\n\n🏠 **[Home](/)** — Overview, hero, tech stack, portfolio preview\n🛠️ **[Services](/services)** — All service packages & pricing\n📁 **[Portfolio](/portfolio)** — Detailed case studies of our projects\n⚙️ **[Process](/process)** — How we work, step by step\n📝 **[Blog](/blog)** — Tech articles & tutorials\n📊 **[Get a Quote](/quote)** — Interactive project estimator\n📞 **[Contact](/contact)** — Get in touch\n\nWhere would you like to go? 👇`,
    quickReplies: ['Our Services', 'View Portfolio', 'Get a Quote', 'Contact Us'],
  },

  about: {
    text: `🏢 **About Code Vibe**\n\nCode Vibe is a **professional web development studio** based in Gampaha, Sri Lanka 🇱🇰\n\nWe specialise in building **modern, scalable, high-performance** web applications using the MERN stack and Next.js.\n\n**Our Mission:** Empower Sri Lankan businesses and global startups with world-class digital solutions at affordable prices.\n\n**Why Choose Code Vibe?**\n✅ 3+ years of professional experience\n✅ 15+ projects delivered on time\n✅ Fiverr Level 2 Seller — 5.0★ rating\n✅ Upwork Top Rated — 98% job success\n✅ Clean, type-safe, production-ready code\n✅ Transparent communication throughout\n✅ 30-day post-launch support included`,
    quickReplies: ['Our Services', 'View Portfolio', 'See Reviews', 'Get a Quote'],
  },

  fallback: {
    text: `🤔 I'm not sure I understood that perfectly, but I'm here to help!\n\nHere are some things I can assist you with:\n\n• **Services** — What we build & offer\n• **Pricing** — Package costs in LKR\n• **Portfolio** — Our past projects\n• **Contact** — How to reach us\n• **Process** — How we work\n• **Quote** — Start your project\n\nFeel free to type your question, or click one of the options below! 👇\n\n📧 You can also email us directly at **hello@codevibe.lk**`,
    quickReplies: ['Our Services', 'See Pricing', 'Contact Us', 'Get a Quote'],
  },
};

// ── URL map for quick replies ─────────────────────────────────────

export const QUICK_REPLY_URLS: Record<string, string> = {
  'View Full Portfolio': '/portfolio',
  'Go to Quote Page': '/quote',
  'View Portfolio': '/portfolio',
  'Get a Quote': '/quote',
  'Our Services': '/services',
  'Our Portfolio': '/portfolio',
  'Our Process': '/process',
  'Contact Us': '/contact',
  'WhatsApp Us': `https://wa.me/94701234567?text=${encodeURIComponent("Hi! I'm interested in your web development services.")}`,
};

// ── Intent detection engine ───────────────────────────────────────

function detectIntent(message: string): string {
  const lower = message.toLowerCase().trim();

  // Score each intent
  const scores: Record<string, number> = {};

  for (const intent of INTENTS) {
    scores[intent.name] = 0;
    for (const keyword of intent.keywords) {
      if (lower.includes(keyword)) {
        scores[intent.name] += keyword.split(' ').length; // longer phrases score higher
      }
    }
  }

  // Find highest scoring intent
  let best = 'fallback';
  let bestScore = 0;

  for (const [name, score] of Object.entries(scores)) {
    if (score > bestScore) {
      bestScore = score;
      best = name;
    }
  }

  return bestScore > 0 ? best : 'fallback';
}

// ── Public API ────────────────────────────────────────────────────

export function getBotResponse(userMessage: string): { text: string; quickReplies: string[] } {
  const intent = detectIntent(userMessage);
  return RESPONSES[intent] || RESPONSES.fallback;
}

export function getWelcomeMessage(): ChatMessage {
  return {
    id: 'welcome',
    role: 'bot',
    text: `👋 Hi! I'm **Vibe**, the Code Vibe AI assistant.\n\nI can help you learn about our services, pricing, portfolio, and more. What would you like to know?`,
    timestamp: new Date(),
    quickReplies: ['Our Services', 'See Pricing', 'Our Portfolio', 'Get a Quote'],
  };
}

export function generateId(): string {
  return Math.random().toString(36).slice(2, 9);
}
