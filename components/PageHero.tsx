'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AnimatedGridPattern } from './ui/animated-grid-pattern';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backButton?: boolean;
  backHref?: string;
  children?: ReactNode;
  className?: string;
  variant?: 'homepage' | 'subpage';
}

export default function PageHero({
  title,
  subtitle,
  description,
  backButton = false,
  backHref = '/',
  children,
  className,
  variant = 'subpage',
}: PageHeroProps) {
  const isHomepage = variant === 'homepage';

  return (
    <section className={cn(
      'relative overflow-hidden',
      // Force explicit background color: deep navy for subpages, slate-950 for homepage
      isHomepage
        ? 'bg-slate-950 min-h-[90vh] flex items-center pt-20'
        : 'bg-hero-navy pt-14 md:pt-16 lg:pt-18 pb-8 md:pb-10 lg:pb-12',
      className
    )}>
      {/* Background: Dark navy base + grid overlay + glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated grid pattern - subtle texture overlay */}
        <AnimatedGridPattern
          width={32}
          height={32}
          numSquares={isHomepage ? 60 : 50}
          maxOpacity={isHomepage ? 0.18 : 0.12}
          duration={2.2}
          repeatDelay={0.35}
          className={cn(
            'text-white fill-white stroke-white',
            '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[-35%] h-[220%] skew-y-12',
          )}
        />
        
        {/* Subtle radial glow elements for depth */}
        <div className={cn(
          'absolute rounded-full blur-[100px]',
          isHomepage 
            ? 'top-1/4 left-1/4 w-96 h-96 bg-primary/3'
            : 'top-1/3 left-1/4 w-80 h-80 bg-primary/2'
        )}></div>
        <div className={cn(
          'absolute rounded-full blur-[120px]',
          isHomepage
            ? 'bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/3'
            : 'bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/2'
        )}></div>
        
        {/* Vignette overlay - subtle darkening at edges for text readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6">
        {backButton && (
          <Link
            href={backHref}
            className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to main page</span>
          </Link>
        )}

        <div className="max-w-4xl">
          <h1 className={cn(
            'font-bold text-white mb-4 tracking-tight leading-tight',
            isHomepage ? 'text-4xl md:text-6xl lg:text-8xl' : 'text-4xl md:text-6xl'
          )}>
            {title}
          </h1>

          {subtitle && (
            <p className={cn(
              'text-white/80 mb-4',
              isHomepage ? 'text-lg md:text-xl' : 'text-lg md:text-xl'
            )}>
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-base text-white/70 max-w-3xl leading-relaxed mb-6">
              {description}
            </p>
          )}

          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


