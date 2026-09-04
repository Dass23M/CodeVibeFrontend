'use client';

import { TRUST_BADGES } from '@/lib/constants';
import { Star, ShieldCheck, Activity, Code2, MapPin } from 'lucide-react';

const ICONS = [
  <Star key="star" className="w-5 h-5 text-amber-400 fill-amber-400/20" />,
  <ShieldCheck key="shield" className="w-5 h-5 text-emerald-400" />,
  <Activity key="activity" className="w-5 h-5 text-cyan-400" />,
  <Code2 key="code" className="w-5 h-5 text-indigo-400" />,
  <MapPin key="map" className="w-5 h-5 text-purple-400" />,
];

export default function TrustBadges() {
  return (
    <section className="relative py-8 border-b border-[var(--color-rule)] bg-[var(--color-paper)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={badge.label}
              className="rounded-lg p-3.5 sm:p-4 bg-[var(--color-paper-2)] border border-[var(--color-rule)] hover:border-[var(--color-rule-strong)] transition-colors duration-200 flex items-center gap-3"
            >
              {/* Icon */}
              <div className="w-9 h-9 rounded-md bg-[var(--color-paper-3)] border border-[var(--color-rule)] flex items-center justify-center shrink-0">
                {ICONS[idx]}
              </div>

              {/* Text */}
              <div className="flex flex-col min-w-0">
                <span className="font-display font-semibold text-sm sm:text-base text-[var(--color-ink)] truncate">
                  {badge.value}
                </span>
                <span className="text-[11px] text-[var(--color-muted)] font-mono truncate">
                  {badge.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
