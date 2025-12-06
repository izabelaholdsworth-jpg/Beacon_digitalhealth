'use client';

import { Mail, MapPin, Send, Check } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT SIDE - Branded Visual Area */}
        <div className="relative min-h-[60vh] md:min-h-screen bg-gradient-to-br from-[#0F1729] via-[#1a3a5f] to-[#0A0E1A] overflow-hidden p-6 md:p-12 lg:p-20 flex flex-col justify-center">
          
          {/* Background glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-cyan/15 blur-3xl"></div>
          </div>
          
          {/* Lighthouse Beacon Graphic - HIGHER OPACITY */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 md:opacity-50">
            <img 
              src="/lighthouse-beacon.png" 
              alt="" 
              className="w-full h-full object-cover mix-blend-screen animate-beacon-glow"
            />
          </div>
          
          {/* Additional subtle glow overlays */}
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"></div>
          
          {/* Main Content */}
          <div className="relative z-10 max-w-xl mx-auto md:mx-0 px-4 md:px-0">
            
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs md:text-sm font-medium rounded-full border border-white/20">
                Let&apos;s Work Together ✨
              </span>
            </div>
            
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s build something brilliant
            </h2>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Whether you&apos;re facing operational challenges, drowning in data, or ready to transform your service—we&apos;re here to help.
            </p>
            
            {/* Value Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-mint rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-navy" />
                </div>
                <p className="text-white/80 text-sm md:text-base lg:text-lg">
                  Investment intelligence that drives decisions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-mint rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-navy" />
                </div>
                <p className="text-white/80 text-sm md:text-base lg:text-lg">
                  Healthcare analytics that transform operations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-mint rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-navy" />
                </div>
                <p className="text-white/80 text-sm md:text-base lg:text-lg">
                  AI solutions that deliver measurable results
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* RIGHT SIDE - Contact Form */}
        <div className="bg-white min-h-auto md:min-h-screen p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center shadow-2xl">
          <div className="max-w-lg w-full mx-auto">
            
            {/* Form Header */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
                Reach out to us today! ✨
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Fill in the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            
            {/* Quick Contact Info */}
            <div className="mb-8 p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-xs md:text-sm text-gray-500 mb-2">Or email us directly</p>
              <a 
                href="mailto:izabela@beaconanalytics.com" 
                className="text-base sm:text-lg font-semibold text-cyan hover:text-cyan-dark transition flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                izabela@beaconanalytics.com
              </a>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs md:text-sm text-gray-600">London, UK</span>
              </div>
            </div>
            
            {/* Contact Form */}
            <form className="space-y-5 md:space-y-6">
              
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 md:px-4 py-3 h-11 md:h-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan focus:border-cyan transition text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-3 md:px-4 py-3 h-11 md:h-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan focus:border-cyan transition text-sm md:text-base"
                    required
                  />
                </div>
              </div>
              
              {/* Company */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  Company <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-3 md:px-4 py-3 h-11 md:h-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan focus:border-cyan transition text-sm md:text-base"
                />
              </div>
              
              {/* Message */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your challenge or opportunity..."
                  className="w-full px-3 md:px-4 py-3 min-h-[120px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan focus:border-cyan transition resize-none text-sm md:text-base"
                  required
                ></textarea>
              </div>
              
              {/* Service Interests */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-3">
                  I&apos;m interested in...
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-2">
                  {[
                    'Investment Intelligence',
                    'Healthcare Analytics',
                    'AI & Automation',
                    'Data Forensics',
                    'Strategic Consulting',
                    'Other'
                  ].map((service) => (
                    <label key={service} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-cyan border-gray-300 rounded focus:ring-cyan"
                      />
                      <span className="text-gray-700 text-xs md:text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 md:h-auto bg-gradient-to-r from-cyan to-cyan-dark text-white px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base lg:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send message
                <Send className="w-5 h-5" />
              </button>
              
              <p className="text-xs md:text-sm text-gray-500 text-center mt-4">
                We typically respond within 24 hours
              </p>
              
            </form>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}