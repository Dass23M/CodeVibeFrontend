'use client';

/* Code Vibe · Apple-Level Refined Testimonials Grid · Light Theme */
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= rating
              ? 'text-amber-500 fill-amber-500'
              : 'text-[#EAEAEA] fill-transparent'
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
        width={36}
        height={36}
        className="w-9 h-9 rounded-full object-cover border border-[#EAEAEA]"
      />
    );
  }

  return (
    <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-semibold text-xs text-[#111111] bg-white border border-[#EAEAEA] shrink-0">
      {initials}
    </div>
  );
}

export default function Testimonials({ testimonials, maxDisplay = 6 }: TestimonialsProps) {
  const items = (testimonials ?? STATIC_TESTIMONIALS).slice(0, maxDisplay) as Testimonial[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((t) => (
        <div
          key={t._id}
          className="rounded-xl p-6 sm:p-7 bg-[#F7F7F7] border border-[#EAEAEA] hover:border-[#D4D4D4] transition-all duration-200 flex flex-col justify-between gap-6"
        >
          {/* Header with stars & platform */}
          <div className="flex items-center justify-between">
            <StarRating rating={t.rating} />
            <span className="text-[11px] font-mono text-[#6B6B6B] px-2 py-0.5 rounded bg-white border border-[#EAEAEA]">
              {t.platform === 'Direct' ? 'Direct Retainer' : t.platform}
            </span>
          </div>

          {/* Quote Body */}
          <blockquote className="text-[#111111] text-sm sm:text-base leading-relaxed font-normal flex-grow">
            &ldquo;{t.message}&rdquo;
          </blockquote>

          {/* Client info footer */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#EAEAEA]">
            <Avatar name={t.clientName} avatarUrl={t.avatar} />
            <div>
              <div className="font-display font-semibold text-sm text-[#111111]">
                {t.clientName}
              </div>
              {t.clientRole && (
                <div className="text-xs text-[#6B6B6B] font-mono mt-0.5">
                  {t.clientRole}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
