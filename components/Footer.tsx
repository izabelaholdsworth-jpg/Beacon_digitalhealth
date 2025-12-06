'use client';

import Image from 'next/image';
import { Linkedin, ChevronUp, Shield, Lock, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Animated Background Section */}
      <div className="relative w-full overflow-hidden bg-[#0A0E1A]">
        {/* Background Paths Animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 696 316"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <title>Background Paths</title>
              {Array.from({ length: 36 }, (_, i) => {
                const d = `M-${380 - i * 5} -${189 + i * 6}C-${380 - i * 5} -${189 + i * 6} -${312 - i * 5} ${216 - i * 6} ${152 - i * 5} ${343 - i * 6}C${616 - i * 5} ${470 - i * 6} ${684 - i * 5} ${875 - i * 6} ${684 - i * 5} ${875 - i * 6}`;
                return (
                  <motion.path
                    key={i}
                    d={d}
                    stroke="#B8F4D4"
                    strokeWidth={0.5 + i * 0.03}
                    strokeOpacity={0.4 + i * 0.02}
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0.3, opacity: 0.6 }}
                    animate={{
                      pathLength: 1,
                      opacity: [0.4, 0.7, 0.4],
                      pathOffset: [0, 1, 0],
                    }}
                    transition={{
                      duration: 20 + Math.random() * 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                {["Ready", "to", "Transform", "Your", "Healthcare", "Operations?"].map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-3 last:mr-0">
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={`${wordIndex}-${letterIndex}`}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: wordIndex * 0.1 + letterIndex * 0.03,
                          type: "spring",
                          stiffness: 150,
                          damping: 25,
                        }}
                        className="inline-block text-white"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h2>
            </motion.div>
            <div className="inline-block group relative bg-gradient-to-b from-mint/20 to-cyan/20 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <button className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-[#0A0E1A]/95 hover:bg-[#0A0E1A]/100 text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-mint/30 hover:shadow-md hover:shadow-mint/20">
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  Get Started Today
                </span>
                <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 inline-block">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <footer className="relative z-10 text-white pt-8 md:pt-12 pb-8 md:pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pb-8 md:pb-10 mb-8 md:mb-10">
          <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
            <Shield className="w-5 h-5 text-cyan" />
            <span>ISO Certified</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
            <Lock className="w-5 h-5 text-mint" />
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
            <Award className="w-5 h-5 text-cyan" />
            <span>NHS Approved</span>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="pt-8 md:pt-10 pb-6 md:pb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg md:text-xl font-bold text-white mb-3">Stay Updated</h4>
            <p className="text-xs md:text-sm text-gray-400 mb-6">
              Get insights on healthcare analytics and NHS intelligence delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 md:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-mint transition-all duration-300 text-sm md:text-base"
              />
              <button
                type="submit"
                className="px-4 md:px-6 py-2 md:py-3 bg-mint text-navy font-semibold rounded-lg hover:bg-white transition-all duration-300 text-sm md:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Image 
              src="/images/logo.png" 
              alt="Beacon Analytics" 
              width={150}
              height={48}
              className="h-10 md:h-12 w-auto mb-4 animate-pulse"
            />
            <p className="text-gray-400 text-xs md:text-sm">
              Strategic intelligence for healthcare transformation. 
              Illuminating data. Driving decisions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-cyan text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#services" className="text-xs md:text-base text-gray-300 hover:text-mint transition-all duration-300 relative group">
                  <span className="relative">
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mint group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-xs md:text-base text-gray-300 hover:text-mint transition-all duration-300 relative group">
                  <span className="relative">
                    Case Studies
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mint group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#market-signals" className="text-xs md:text-base text-gray-300 hover:text-mint transition-all duration-300 relative group">
                  <span className="relative">
                    Market Signals
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mint group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xs md:text-base text-gray-300 hover:text-mint transition-all duration-300 relative group">
                  <span className="relative">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mint group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-4 text-mint text-sm md:text-base">Connect</h4>
            <ul className="space-y-2 md:space-y-3 mb-6">
              <li>
                <a 
                  href="mailto:izabela@beaconanalytics.com" 
                  className="text-xs md:text-base text-gray-300 hover:text-cyan transition-all duration-300"
                >
                  izabela@beaconanalytics.com
                </a>
              </li>
              <li className="text-xs md:text-base text-gray-300">London, United Kingdom</li>
            </ul>
            
            <div className="flex gap-3 md:gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan hover:rotate-6 transition-all duration-300"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8 mt-8">
          <div className="flex flex-col items-center md:flex-row justify-between gap-4 text-xs md:text-sm text-gray-400">
            <div className="text-center md:text-left">
              © 2024 Beacon Analytics Ltd. All rights reserved.
            </div>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-white transition-all duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-all duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 md:w-12 h-10 md:h-12 bg-cyan text-white rounded-full flex items-center justify-center hover:bg-mint transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 md:w-6 h-5 md:h-6" />
        </button>
      )}
    </footer>
      </div>
    </>
  );
}