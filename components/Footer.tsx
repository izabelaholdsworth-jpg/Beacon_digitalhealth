'use client';

import { Linkedin, ChevronUp, Shield, Lock, Award, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CONTACT_EMAIL, getMailtoLink } from '@/lib/contact';

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
    <footer className="relative bg-[#050914] border-t border-white/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]"></div>
      </div>

      <div className="relative z-10 pt-20 pb-12 px-4 md:px-6 container mx-auto">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <span className="text-xl font-bold tracking-tight text-white">BEACON</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Operational intelligence for digital health teams.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Capabilities Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Capabilities</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/capabilities/forensics" className="hover:text-white transition-colors">Forensics</Link></li>
              <li><Link href="/capabilities/contracts" className="hover:text-white transition-colors">Contracts</Link></li>
              <li><Link href="/capabilities/statutory-response" className="hover:text-white transition-colors">Automation</Link></li>
              <li><Link href="/capabilities/patient-flow" className="hover:text-white transition-colors">Visualisation</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href={getMailtoLink('Beacon Digital Health enquiry')} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="https://maps.google.com/?q=London,+United+Kingdom" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">London, United Kingdom</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Beacon Analytics Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 z-50"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}