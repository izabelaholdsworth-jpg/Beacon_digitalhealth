'use client';

import { ChevronDown } from 'lucide-react';
import { DottedSurface } from '@/components/ui/dotted-surface';

export default function Hero() {
  const handleScrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollBy({ top: window.innerHeight * 0.5, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen bg-gradient-to-br from-[#0A0E1A] via-[#0F1729] to-[#1a2332] flex items-center justify-center pt-20 md:pt-24 overflow-hidden">
      {/* DottedSurface background with animated dots */}
      <DottedSurface className="absolute inset-0" />

      {/* Subtle radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-radial opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 lg:space-y-10">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            BEACON ANALYTICS
          </h1>

          {/* Subheading */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/90 max-w-3xl px-2">
            Strategic Intelligence for Healthcare Transformation
          </h2>

          {/* Simplified Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed px-2">
            From investment due diligence to AI-powered service delivery—we illuminate the data that drives decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col w-full sm:flex-row sm:w-auto items-center justify-center gap-4 mt-8 md:mt-10 lg:mt-12 px-2">
            <button
              onClick={handleScrollToServices}
              className="w-full sm:w-auto h-12 sm:h-auto px-6 sm:px-10 py-3 sm:py-4 bg-cyan text-white font-bold text-base sm:text-lg rounded-lg hover:bg-cyan/90 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan/50 active:scale-95"
            >
              Explore Services
            </button>
            <button
              onClick={handleScrollToContact}
              className="w-full sm:w-auto h-12 sm:h-auto px-6 sm:px-10 py-3 sm:py-4 border-2 border-white text-white font-semibold text-base sm:text-lg rounded-lg hover:bg-white hover:text-navy transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-95"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={handleScrollDown}
          className="text-white/80 hover:text-white transition-all duration-300 animate-bounce opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-full p-2"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
