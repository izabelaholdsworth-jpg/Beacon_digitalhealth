'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface DashboardFramePreviewProps {
  title?: string;
  imageSrc?: string;
  imageAlt: string;
  aspect?: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel?: string;
  ctaPrimaryLabel?: string;
}

const dashboardBullets = [
  'Non-PO exposure and control risk',
  'Credit note reversals and exceptions',
  'Micro-invoice admin burden',
  'Supplier/category anomalies',
];

export default function DashboardFramePreview({
  title,
  imageSrc = '/images/forensic-dashboard.png',
  imageAlt,
  aspect = '16/10',
  ctaPrimaryHref,
  ctaSecondaryLabel = 'View dashboard excerpt',
  ctaPrimaryLabel = 'Request demo',
}: DashboardFramePreviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes sheen {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .dashboard-frame:hover::after {
          animation: sheen 0.8s ease-in-out forwards;
        }

        .dashboard-frame::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          pointer-events: none;
          border-radius: 1rem;
        }
      `}</style>

      <div className="w-full">
        {title && <h2 className="text-2xl font-bold mb-6 text-slate-900">{title}</h2>}

        {/* Browser Frame */}
        <button
          onClick={() => setOpen(true)}
          className="w-full group block"
        >
          <div
            className="dashboard-frame relative rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer bg-white"
            style={{
              perspective: '1000px',
            }}
          >
            {/* Browser Top Bar */}
            <div className="flex items-center gap-2.5 h-9 px-4 bg-slate-50 border-b border-slate-200">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
            </div>

            {/* Image Container with Aspect Ratio */}
            <div
              className={`relative w-full bg-slate-50 aspect-[${aspect.replace('/', '_')}] overflow-hidden`}
              style={{
                aspectRatio: aspect,
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
                priority
              />

              {/* Hover Overlay - Click to Expand */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-lg">
                  Click to expand
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* CTA below frame */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
          >
            {ctaSecondaryLabel}
          </button>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <div className="space-y-6">
            {/* Image in Modal */}
            <div
              className="relative w-full bg-slate-50 rounded-lg overflow-hidden"
              style={{
                aspectRatio: aspect,
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 100vw"
                priority
              />
            </div>

            {/* Content: Bullets + CTAs */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Bullets */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-slate-900 mb-4">
                  Key areas covered
                </h3>
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
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center px-4 py-2 border border-slate-300 text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
