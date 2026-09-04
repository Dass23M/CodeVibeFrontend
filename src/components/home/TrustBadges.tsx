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
    <section className="relative py-12 border-y border-white/5 bg-[#0A0B10]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={badge.label}
              className="group relative rounded-2xl p-4 md:p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-md flex items-center gap-3.5"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-indigo-500/40 transition-all duration-300">
                {ICONS[idx]}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="font-display font-bold text-base md:text-lg text-white group-hover:text-indigo-300 transition-colors">
                  {badge.value}
                </span>
                <span className="text-xs text-slate-400 font-mono">
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
