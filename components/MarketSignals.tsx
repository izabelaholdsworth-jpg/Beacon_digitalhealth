'use client';

import {
  CheckCircle2,
  Building2,
  TrendingUp,
  Users,
  Target,
  FileSearch,
  BarChart3,
  ArrowRight,
  ExternalLink,
  Info,
} from 'lucide-react';

interface BenefitItem {
  icon: React.ReactNode;
  text: string;
}

const marketSignalsFeatures = [
  'Real-time procurement tracking (£14.5B+ spend analyzed)',
  'Contract award notifications and trend analysis',
  'Provider financial health monitoring',
  'Emerging market opportunities and risk alerts',
  'Competitive intelligence and market positioning',
];

const benefits: BenefitItem[] = [
  {
    icon: <Building2 size={20} />,
    text: 'Private equity firms evaluating healthcare investments',
  },
  {
    icon: <TrendingUp size={20} />,
    text: 'Investment managers tracking portfolio performance',
  },
  {
    icon: <Users size={20} />,
    text: 'Healthcare providers benchmarking against peers',
  },
  {
    icon: <Target size={20} />,
    text: 'Strategic planners identifying partnership opportunities',
  },
  {
    icon: <FileSearch size={20} />,
    text: 'Procurement teams monitoring market pricing',
  },
];

export default function MarketSignals() {
  const handleRequestDemo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="market-signals" className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 lg:py-28 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-7xl">
        {/* Heading Section - Centered */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Market Signals: Healthcare Intelligence You Can Act On
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 md:mb-16 px-2">
            Stay ahead of NHS market movements with real-time analytics and
            insights
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 space-y-8 md:space-y-0 mb-12">
          {/* Left Column - What Are Market Signals */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-navy mb-4">
              What Are Market Signals?
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
              Market Signals transforms raw NHS procurement data into actionable
              intelligence. We analyze billions in spending, track contract
              awards, monitor provider health, and surface opportunities.
            </p>
            <ul className="space-y-3">
              {marketSignalsFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-cyan flex-shrink-0"
                  />
                  <span className="text-xs md:text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Column - Who Benefits (Mini Cards) */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-navy mb-4">
              Who Benefits?
            </h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-cyan/5 hover:border-cyan/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-cyan flex-shrink-0 w-5 h-5">
                      {benefit.icon}
                    </div>
                    <span className="text-xs md:text-sm text-gray-600">{benefit.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 shadow-md h-64 md:h-full flex flex-col items-center justify-center min-h-0 md:min-h-64 hover:border-cyan/30 transition-all duration-300">
              <p className="text-base md:text-lg font-semibold text-navy mb-4">Dashboard Preview</p>
              <BarChart3 className="w-20 md:w-24 h-20 md:h-24 text-gray-300 mb-4" />
              <p className="text-xs md:text-sm text-gray-500 text-center">Interactive Analytics Platform</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 px-2">
            <button
              onClick={handleRequestDemo}
              className="w-full sm:w-auto h-12 sm:h-auto bg-cyan text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg font-semibold hover:bg-cyan-dark hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan/40 inline-flex items-center justify-center gap-2"
            >
              Request Market Signals Demo
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="w-full sm:w-auto h-12 sm:h-auto bg-white border-2 border-navy text-navy px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg font-semibold hover:bg-navy hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-navy/30 inline-flex items-center justify-center gap-2">
              View Sample Dashboard
              <ExternalLink className="ml-2" size={20} />
            </button>
          </div>

          {/* Small Text */}
          <div className="flex items-center justify-center gap-2 mt-6 px-2">
            <Info size={16} className="text-gray-500 flex-shrink-0" />
            <p className="text-xs md:text-sm text-gray-600 text-center">
              Custom intelligence packages available. From monthly market briefings
              to fully integrated real-time dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
