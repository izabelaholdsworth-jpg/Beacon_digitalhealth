import Link from 'next/link';
import { ReactNode } from 'react';

export type CaseStudyLayoutProps = {
  title: string;
  lede: string;
  tags: string[];
  primaryCta: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
  atAGlance: Array<{ label: string; value: string; note?: string }>;
  challenge: string;
  approach: string[];
  dataSources?: string[];
  delivered: string[];
  exploredModules?: string[];
  impact: string[];
  dashboardPreview?: ReactNode;
};

export default function CaseStudyLayout({
  title,
  lede,
  tags,
  primaryCta,
  secondaryLink,
  atAGlance,
  challenge,
  approach,
  dataSources,
  delivered,
  exploredModules,
  impact,
  dashboardPreview,
}: CaseStudyLayoutProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative bg-slate-950 text-white pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-widest text-slate-400 border border-white/10 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mb-8">{lede}</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-background font-semibold hover:bg-primary/90 transition-colors"
            >
              {primaryCta.label}
            </Link>
            {secondaryLink && (
              <Link
                href={secondaryLink.href}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                {secondaryLink.label}
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 bg-white">
        <div className="rounded-t-3xl bg-white pt-10 pb-16 shadow-[0_-1px_0_rgba(15,23,42,0.10)]">
          <div className="mx-auto max-w-5xl px-6 space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">At a glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {atAGlance.map((tile, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-xl font-semibold text-slate-900 mb-1">
                    {tile.value}
                  </div>
                  <div className="text-sm text-slate-600">{tile.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">Challenge</h2>
            <p className="text-slate-700 leading-relaxed">{challenge}</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">Approach</h2>
            <ul className="space-y-2">
              {approach.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <span className="mt-2 w-1 h-1 rounded-full bg-sky-500" />
                  {item}
                </li>
              ))}
            </ul>
            {dataSources && dataSources.length > 0 && (
              <div className="mt-4">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Data sources</p>
                <ul className="space-y-2">
                  {dataSources.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <span className="mt-2 w-1 h-1 rounded-full bg-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">What was delivered</h2>
            <ul className="space-y-2">
              {delivered.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <span className="mt-2 w-1 h-1 rounded-full bg-sky-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {exploredModules && exploredModules.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">Explored modules</h2>
              <ul className="space-y-2">
                {exploredModules.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-700">
                    <span className="mt-2 w-1 h-1 rounded-full bg-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {impact.map((metric, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-slate-700"
                >
                  {metric}
                </div>
              ))}
            </div>
          </div>

          {dashboardPreview && (
            <div>
              {dashboardPreview}
            </div>
          )}
          </div>
        </div>
      </section>
    </main>
  );
}
