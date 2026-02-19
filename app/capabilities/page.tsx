'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { capabilities } from '@/app/capabilities/capabilitiesData';

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Capabilities"
        subtitle="Six deployable, operational capabilities"
        description="Delivered through dashboards, workflows, and documented methods."
        backButton={true}
        backHref="/"
      />

      {/* White Content Section */}
      <div className="bg-white text-slate-950">
        <div className="mx-auto max-w-6xl px-6 pt-10 md:pt-14 pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <Link
                key={capability.slug}
                href={`/capabilities/${capability.slug}`}
                className="group border border-slate-200 rounded-lg p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-auto">
                    <h3 className="text-lg font-semibold text-slate-950 group-hover:text-blue-600 transition-colors mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{capability.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
