'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroBackgroundPaths } from './ui/background-paths';

export default function Hero() {
  const handleScrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-hero-navy">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated paths - visible on dark backgrounds */}
        <HeroBackgroundPaths
          intensity="strong"
          className="inset-0"
        />
        
        {/* Reduced glow intensity */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/3 rounded-full blur-[120px]"></div>
        
        {/* Strong radial vignette overlay for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 max-w-6xl mx-auto text-center">
        <div className="pointer-events-none absolute inset-x-8 -top-6 -bottom-6 rounded-[32px] bg-gradient-to-b from-black/40 via-black/10 to-transparent blur-2xl"></div>
        <div className="relative z-10">
          {/* Top badge pill */}
          <div className="inline-block mb-8 px-3.5 py-1.5 rounded-full border border-white/10 bg-transparent backdrop-blur-sm">
            <span className="text-[10px] font-medium text-slate-300 tracking-[0.15em] uppercase">
              Beacon Digital Health
            </span>
          </div>

          {/* Main Headline */}
          <motion.h1
            initial={{ y: -14, opacity: 0, filter: 'blur(6px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white/90 mb-8 max-w-5xl mx-auto leading-[1.15]"
          >
            <span className="text-white">Operational intelligence</span>{' '}
            <span className="bg-gradient-to-b from-white/80 to-white/40 bg-clip-text text-transparent">
              for digital health systems
            </span>
          </motion.h1>

          {/* Supporting paragraph */}
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Beacon builds analytics, dashboards and workflow automation that help teams spot risk, reduce wasted effort and improve pathway flow.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-6">
            {/* Primary CTA Button */}
            <Link
              href="#contact"
              onClick={handleScrollToSection('#contact')}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Request a Demo
            </Link>
            
            {/* Secondary CTA as text link */}
            <Link
              href="/case-studies"
              className="w-full sm:w-auto text-slate-300 font-semibold hover:text-white hover:underline hover:decoration-slate-400 hover:underline-offset-4 transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none"
            >
              View case studies
              <span className="text-primary">→</span>
            </Link>
          </div>

          {/* Trust/Credibility Line */}
          <div className="text-sm text-slate-300 font-light tracking-wide">
            Built from real NHS delivery and commercial analytics work.
          </div>
        </div>
      </div>
    </section>
  );
}
