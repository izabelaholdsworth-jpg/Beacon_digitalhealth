'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { caseStudies, caseStudyFilters } from './caseStudiesData';
import CaseStudyHero from '@/components/case-studies/case-study-hero';

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
      <CaseStudyHero
        title="Case studies"
        subtitle="Selected engagements across NHS and private sector."
        showBackButton={true}
        backHref="/"
      >
        <div className="flex flex-wrap gap-3">
          {caseStudyFilters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
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
      </CaseStudyHero>

      <section className="relative z-10 -mt-10">
        <div className="rounded-t-3xl bg-white pt-10 pb-16 shadow-[0_-1px_0_rgba(15,23,42,0.10)]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStudies.map((study) => (
                <div
                  key={study.slug}
                  className="group relative border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 bg-white rounded-lg flex flex-col h-full overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-slate-500">
                      {study.sector}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 mb-2">
                    {study.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {study.summary}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {study.outcomes.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="mt-1 w-1 h-1 rounded-full bg-sky-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] uppercase tracking-widest text-slate-700 border border-slate-200 bg-slate-50 px-2 py-1 rounded-full transition-colors group-hover:border-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors mt-auto"
                  >
                    View case study →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
