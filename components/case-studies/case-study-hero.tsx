import React, { ReactNode } from 'react';
import PageHero from '@/components/PageHero';

export interface CaseStudyHeroProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  children?: ReactNode;
  showBackButton?: boolean;
  backHref?: string;
}

export default function CaseStudyHero({
  title,
  subtitle,
  tags,
  children,
  showBackButton = false,
  backHref = '/case-studies',
}: CaseStudyHeroProps) {
  return (
    <PageHero
      title={title}
      subtitle={subtitle}
      backButton={showBackButton}
      backHref={backHref}
    >
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6 -mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] uppercase tracking-widest text-slate-400 border border-white/10 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {children}
    </PageHero>
  );
}
