'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, AlertCircle, DollarSign, Zap, Users, Globe } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { getMailtoLink } from '@/lib/contact';

// Set to false to hide the placeholder Example outputs section
const SHOW_EXAMPLE_OUTPUTS = false;

export default function IntelligencePage() {
  const intelligenceTypes = [
    {
      icon: TrendingUp,
      title: 'Variation signals',
      description: 'Spot unusual shifts by service, site, supplier or pathway step.',
    },
    {
      icon: AlertCircle,
      title: 'Demand and capacity pressure',
      description: 'Identify rising demand, bottlenecks and queue build-up patterns.',
    },
    {
      icon: DollarSign,
      title: 'Commercial exposure and leakage',
      description: 'Surface non-PO patterns, off-contract movement and pricing drift.',
    },
    {
      icon: Zap,
      title: 'Risk and anomaly detection',
      description: 'Flag high-risk transaction patterns for review and investigation.',
    },
    {
      icon: Users,
      title: 'Pathway friction signals',
      description: 'Highlight where drop-off, no-shows or avoidable admin is increasing.',
    },
    {
      icon: Globe,
      title: 'Market movement (public + private)',
      description: 'Track provider activity and opportunities using public and client datasets.',
    },
  ];

  const outputExamples = [
    {
      title: 'Signals pack (one-page)',
      description: 'What changed / drivers / recommended actions',
    },
    {
      title: 'Exceptions list',
      description: 'Flagged items with rationale and evidence trail',
    },
    {
      title: 'Executive dashboard view',
      description: 'Trend + drill-down for governance meetings',
    },
  ];

  const useCases = [
    'Finance and procurement control visibility',
    'Contract risk and expiry exposure',
    'Pathway performance and no-show reduction',
    'Corporate reporting and board-ready packs',
    'Investigation support (risk triage)',
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Intelligence you can act on"
        description="Practical signals from operational, commercial and pathway data. Built for decision-makers who need clarity, not more dashboards."
        backButton={true}
        backHref="/"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            View case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={getMailtoLink('Intelligence demo request', 'I\'d like to learn more about your Intelligence capability.')}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-white/60 transition-colors"
          >
            Request a demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </PageHero>

      {/* White Content Section */}
      <div className="bg-white text-slate-950">
        <div className="mx-auto max-w-6xl px-6 pt-10 md:pt-14 pb-16 space-y-20">
          {/* Section 1: What we mean by Intelligence */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Signals, not noise</h2>
            <p className="text-base leading-relaxed text-slate-700 mb-8">
              Beacon focuses on a small set of indicators that answer leadership questions: What changed? Why does it matter? What should we do next?
            </p>
            <p className="text-base leading-relaxed text-slate-700 mb-8">
              We combine spend, contracting, operational and pathway data (where available) to surface movement early — before it becomes a performance issue, a control failure, or a capacity problem.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">
                  ✓
                </span>
                <span className="text-base text-slate-700">Early warning indicators tied to real decisions (not vanity metrics)</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">
                  ✓
                </span>
                <span className="text-base text-slate-700">Exceptions and drivers explained in plain English</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium">
                  ✓
                </span>
                <span className="text-base text-slate-700">Outputs designed for governance and action tracking</span>
              </li>
            </ul>
          </section>

          {/* Section 2: Intelligence Types */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Intelligence types</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {intelligenceTypes.map((type, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-lg p-6 hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center mb-4">
                    <type.icon className="w-5 h-5 text-sky-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-slate-950 mb-2">{type.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: How It Works */}
          <section>
            <h2 className="text-3xl font-bold mb-8">How Beacon produces signals</h2>
            <ol className="space-y-6">
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950 mb-2">Define the decision</h3>
                  <p className="text-base text-slate-700">What someone needs to decide weekly/monthly</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950 mb-2">Design the indicators</h3>
                  <p className="text-base text-slate-700">8–15 metrics with thresholds + context</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950 mb-2">Deliver outputs</h3>
                  <p className="text-base text-slate-700">Signals pack, dashboard view, exceptions list, actions</p>
                </div>
              </li>
            </ol>
            <p className="text-sm text-slate-600 mt-8 italic">
              Most engagements start with a short discovery + sample output on your data.
            </p>
          </section>

          {/* Section 4: Public Intelligence Demo */}
          <section className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h2 className="text-3xl font-bold mb-4">Public market intelligence demo</h2>
            <p className="text-base text-slate-700 mb-8 leading-relaxed">
              A demonstration dashboard built using publicly available procurement and provider datasets. Designed to help identify and prioritise potential acquisition targets across a fragmented provider landscape.
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-slate-950 mb-4">What it shows</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-lg text-blue-600 mt-0.5">•</span>
                  <span className="text-base text-slate-700">Market segmentation and provider mapping</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lg text-blue-600 mt-0.5">•</span>
                  <span className="text-base text-slate-700">Activity signals and growth indicators (where available)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lg text-blue-600 mt-0.5">•</span>
                  <span className="text-base text-slate-700">Shortlisting and scoring logic</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lg text-blue-600 mt-0.5">•</span>
                  <span className="text-base text-slate-700">A structured view for faster diligence</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://example.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View public dashboard
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/case-studies/deal-sourcing-intelligence"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-950 font-medium rounded-lg hover:border-slate-400 transition-colors"
              >
                Read the case study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-sm text-slate-600">Built from public data sources. No confidential client data. No patient data.</p>
          </section>

          {/* Section 5: Example Outputs */}
          {SHOW_EXAMPLE_OUTPUTS && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Example outputs</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                {outputExamples.map((example, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                      <span className="text-slate-400 text-sm font-medium">[Placeholder]</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-slate-950 mb-2">{example.title}</h3>
                      <p className="text-sm text-slate-600">{example.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 6: Where It's Used */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Common use cases</h2>
            <ul className="space-y-3">
              {useCases.map((useCase, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-lg text-blue-600 mt-0.5">•</span>
                  <span className="text-base text-slate-700">{useCase}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Closing CTA */}
          <section className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Want to see signals on your data?</h2>
            <p className="text-base text-slate-800 mb-6">
              Share a sample extract or describe your data sources — we'll show what early warnings we can generate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={getMailtoLink('Intelligence demo request', 'I\'d like to see what early-warning signals Beacon can generate for our data.')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Request a demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={getMailtoLink('Intelligence enquiry')}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Or email Izabela →
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
