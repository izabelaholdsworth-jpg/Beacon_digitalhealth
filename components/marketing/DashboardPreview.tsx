'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface DashboardPreviewProps {
  title?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  caseStudySlug: string;
  demoEmail?: string;
  compact?: boolean;
}

const dashboardBullets = [
  'Non-PO exposure and control risk',
  'Credit note reversals and exceptions',
  'Micro-invoice admin burden',
  'Supplier/category anomalies',
];

export default function DashboardPreview({
  title = 'Dashboard preview',
  subtitle = 'Forensic expenditure analysis (example excerpt)',
  imageSrc,
  imageAlt,
  caseStudySlug,
  demoEmail = 'izabela@beacondh.co.uk',
  compact = false,
}: DashboardPreviewProps) {
  const [open, setOpen] = useState(false);

  if (compact) {
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <button
            onClick={() => setOpen(true)}
            className="group w-full border border-slate-200 rounded-2xl p-0 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-200 hover:-translate-y-1"
          >
            <div className="relative w-full h-48 bg-slate-100">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-sm font-medium text-slate-700">View dashboard excerpt</p>
            </div>
          </button>

          <DialogContent className="max-w-4xl">
            <div className="space-y-6">
              {/* Image */}
              <div className="relative w-full h-96 bg-slate-100 rounded-lg overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </div>

              {/* Mobile: Bullets below, Desktop: Bullets beside */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Bullets list */}
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">Key areas</h3>
                  <ul className="space-y-3">
                    {dashboardBullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold mt-0.5">
                          •
                        </span>
                        <span className="text-sm text-slate-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3 md:w-48">
                  <a
                    href={`mailto:${demoEmail}?subject=Forensics%20demo`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Request a demo
                  </a>
                  <Link
                    href={`/case-studies/${caseStudySlug}`}
                    className="inline-flex items-center justify-center px-4 py-2 border border-slate-300 text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    View case study
                  </Link>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  // Full (non-compact) version
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <button
          onClick={() => setOpen(true)}
          className="w-full group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-200 hover:-translate-y-1"
        >
          <div className="bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-950 mb-1">{title}</h3>
            <p className="text-sm text-slate-600 mb-4">{subtitle}</p>

            {/* Image container with demo label and hover overlay */}
            <div className="relative w-full h-80 bg-slate-100 rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Demo label */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-xs font-semibold">
                  DEMO PREVIEW
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium">
                  Click to expand
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Modal Content */}
        <DialogContent className="max-w-5xl">
          <div className="space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Image */}
            <div className="relative w-full h-96 bg-slate-100 rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>

            {/* Mobile: Bullets below, Desktop: Bullets beside */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Bullets list */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-slate-900 mb-4">Key areas</h3>
                <ul className="space-y-3">
                  {dashboardBullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold mt-0.5">
                        •
                      </span>
                      <span className="text-sm text-slate-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 md:w-48">
                <a
                  href={`mailto:${demoEmail}?subject=Forensics%20demo`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Request a demo
                </a>
                <Link
                  href={`/case-studies/${caseStudySlug}`}
                  className="inline-flex items-center justify-center px-4 py-2 border border-slate-300 text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
                >
                  View case study
                </Link>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
