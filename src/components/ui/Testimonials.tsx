'use client';

import { STATIC_TESTIMONIALS } from '@/lib/constants';
import { Star } from 'lucide-react';

interface Testimonial {
  _id: string;
  clientName: string;
  clientRole?: string;
  platform: 'Fiverr' | 'Upwork' | 'Direct' | 'Other';
  message: string;
  rating: number;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  maxDisplay?: number;
}

const platformColors: Record<string, { bg: string; color: string; label: string; border: string }> = {
  Fiverr: { bg: 'rgba(16,185,129,0.12)', color: '#34D399', label: 'Fiverr Pro', border: 'border-emerald-500/20' },
  Upwork: { bg: 'rgba(6,182,212,0.12)', color: '#22D3EE', label: 'Upwork Top Rated', border: 'border-cyan-500/20' },
  Direct: { bg: 'rgba(99,102,241,0.15)', color: '#A5B4FC', label: 'Direct Client', border: 'border-indigo-500/20' },
  Other: { bg: 'rgba(255,255,255,0.06)', color: '#94A3B8', label: 'Verified Review', border: 'border-white/10' },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? 'text-amber-400 fill-amber-400'
              : 'text-slate-600 fill-transparent'
          }`}
        />
      ))}
    </div>
  );
}

function Avatar({ name, avatarUrl }: { name: string; avatarUrl?: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={name}
        width={42}
        height={42}
        className="w-10 h-10 rounded-full object-cover border border-white/20"
      />
    );
  }

  const hue = (name.charCodeAt(0) * 137) % 360;

  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white shrink-0 shadow-md border border-white/15"
      style={{ background: `hsl(${hue}, 65%, 45%)` }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials({ testimonials, maxDisplay = 6 }: TestimonialsProps) {
  const items = (testimonials ?? STATIC_TESTIMONIALS).slice(0, maxDisplay) as Testimonial[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((t) => {
        const plat = platformColors[t.platform] ?? platformColors.Other;
        return (
          <div
            key={t._id}
            className="group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#11131C] to-[#0A0B10] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.2)] hover:-translate-y-1"
          >
            {/* Header with stars & platform */}
            <div className="flex items-center justify-between">
              <StarRating rating={t.rating} />
              <span
                className={`text-xs font-mono font-medium px-3 py-1 rounded-full border ${plat.border}`}
                style={{ backgroundColor: plat.bg, color: plat.color }}
              >
                {plat.label}
              </span>
            </div>

            {/* Quote Body */}
            <blockquote className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal flex-grow italic">
              &ldquo;{t.message}&rdquo;
            </blockquote>

            {/* Client info footer */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
              <Avatar name={t.clientName} avatarUrl={t.avatar} />
              <div>
                <div className="font-display font-bold text-sm text-white group-hover:text-indigo-300 transition-colors">
                  {t.clientName}
                </div>
                {t.clientRole && (
                  <div className="text-xs text-slate-400 font-mono">
                    {t.clientRole}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
