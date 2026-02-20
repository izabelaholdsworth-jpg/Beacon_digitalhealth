'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { caseStudies, caseStudyFilters } from './caseStudiesData';

export default function CaseStudiesClient() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All') {
      return caseStudies;
    }
    return caseStudies.filter((study) => study.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-32 pb-16 bg-background border-b border-white/5">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Case studies
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl">
            Selected engagements across NHS and private sector. Names anonymised. Evidence available via demos and excerpts.
          </p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {caseStudyFilters.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors border ${
                    isActive
                      ? 'bg-primary text-background border-primary'
                      : 'border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="border border-white/10 bg-white/5 rounded-xl p-6 flex flex-col h-full hover:border-white/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-slate-400">
                    {study.sector}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-white mb-2">
                  {study.title}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {study.summary}
                </p>

                <ul className="space-y-2 mb-4">
                  {study.outcomes.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-200">
                      <span className="mt-1 w-1 h-1 rounded-full bg-primary/70" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-widest text-slate-400 border border-white/10 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/case-studies/${study.slug}`}
                  className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto"
                >
                  View case study →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
