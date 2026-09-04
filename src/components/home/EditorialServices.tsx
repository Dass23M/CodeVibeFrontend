'use client';

/* Code Vibe · Editorial Expanding Service System · Light Theme */
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    title: 'Digital Products',
    summary: 'Websites, applications, and commercial platforms designed around real business goals.',
    capabilities: [
      'Full-Stack Web Applications (Next.js / React 19)',
      'High-Conversion Product Marketing Sites',
      'Client Dashboards & B2B Customer Portals',
      'E-Commerce & Subscription Platforms',
    ],
    deliverables: 'Interactive Prototype, Production Codebase, CI/CD Pipeline',
  },
  {
    id: '02',
    title: 'Software Engineering',
    summary: 'Scalable backend architectures, resilient APIs, and reliable cloud engineering.',
    capabilities: [
      'RESTful & GraphQL API Infrastructure',
      'Database Modeling & Query Optimization (Postgres / Mongo)',
      'Serverless & Edge Middleware Pipelines',
      'Secure Auth (JWT, OAuth2, Session Management)',
    ],
    deliverables: 'Architecture Schema, API Documentation, Automated Tests',
  },
  {
    id: '03',
    title: 'Digital Experience',
    summary: 'Thoughtful interface systems that make complex software feel effortless.',
    capabilities: [
      'Bespoke Design Systems & Component Libraries',
      'Physics-Based Fluid Micro-Interactions',
      'Accessible WCAG AAA+ Color & Contrast Hierarchy',
      'Cross-Platform Adaptive Layouts',
    ],
    deliverables: 'Figma Token Library, Component Documentation, Storybook Matrix',
  },
  {
    id: '04',
    title: 'Growth & Optimization',
    summary: 'Relentless performance auditing, technical SEO, and continuous architectural improvement.',
    capabilities: [
      '100/100 Core Web Vitals Engineering',
      'Structured JSON-LD & Dynamic Sitemap Generation',
      'Edge Caching & Static Generation Optimization',
      'Analytics & Conversion Funnel Instrumentation',
    ],
    deliverables: 'Lighthouse Audit Pass, Schema Validation, Monitoring Setup',
  },
];

export default function EditorialServices() {
  const [activeId, setActiveId] = useState<string>('01');

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#EAEAEA]">
          <div>
            <span className="text-xs font-mono text-[#999999] uppercase tracking-widest block mb-3">
              WHAT WE DO
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111]">
              Capabilities built for scale.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B6B6B] max-w-md leading-relaxed">
            We provide full-lifecycle technical execution — from initial product framing and design to production deployment and long-term performance.
          </p>
        </div>

        {/* Editorial Expanding Service Rows */}
        <div className="divide-y divide-[#EAEAEA]">
          {SERVICES.map((service) => {
            const isActive = activeId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                className={`py-8 md:py-10 transition-all duration-300 cursor-pointer ${
                  isActive ? 'opacity-100' : 'opacity-55 hover:opacity-85'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                  
                  {/* Service Number */}
                  <div className="lg:col-span-1">
                    <span className="font-mono text-sm sm:text-base font-semibold text-[#111111]">
                      {service.id}
                    </span>
                  </div>

                  {/* Service Title & Summary */}
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  {/* Expanding Capabilities & Deliverables (Visible on Active) */}
                  <div className="lg:col-span-7">
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pt-4 lg:pt-0"
                        >
                          <div className="p-6 rounded-xl bg-[#F7F7F7] border border-[#EAEAEA] grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <span className="text-[11px] font-mono text-[#999999] uppercase tracking-wider block mb-2.5">
                                CORE SPECIALTIES
                              </span>
                              <ul className="space-y-2">
                                {service.capabilities.map((cap) => (
                                  <li key={cap} className="flex items-start gap-2 text-xs text-[#111111]">
                                    <Check className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0 mt-0.5" />
                                    <span>{cap}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="sm:border-l sm:border-[#EAEAEA] sm:pl-4 flex flex-col justify-between">
                              <div>
                                <span className="text-[11px] font-mono text-[#999999] uppercase tracking-wider block mb-2.5">
                                  KEY DELIVERABLE
                                </span>
                                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                                  {service.deliverables}
                                </p>
                              </div>
                              <div className="pt-4 mt-2">
                                <Link
                                  href="/services"
                                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#111111] hover:text-[#1D4ED8] transition-colors"
                                >
                                  <span>View detailed specifications</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
