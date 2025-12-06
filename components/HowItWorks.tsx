'use client';

import { Search, PenTool, Rocket, Target, ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  badgeGradient: string;
  borderColor: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Discovery & Diagnosis',
    description:
      'Understand your challenges, map current processes, identify quick wins',
    icon: <Search className="w-5 h-5" />,
    badgeGradient: 'bg-gradient-to-br from-cyan to-cyan-dark',
    borderColor: 'border-cyan',
  },
  {
    number: 2,
    title: 'Strategy & Design',
    description:
      'ROI modeling, automation roadmap, technical architecture planning',
    icon: <PenTool className="w-5 h-5" />,
    badgeGradient: 'bg-gradient-to-br from-mint to-mint-dark',
    borderColor: 'border-mint',
  },
  {
    number: 3,
    title: 'Build & Deploy',
    description:
      'Agile development, testing, integration with existing systems',
    icon: <Rocket className="w-5 h-5" />,
    badgeGradient: 'bg-gradient-to-br from-cyan to-cyan-dark',
    borderColor: 'border-cyan',
  },
  {
    number: 4,
    title: 'Optimize & Empower',
    description:
      'Training, handover, ongoing support, continuous improvement',
    icon: <Target className="w-5 h-5" />,
    badgeGradient: 'bg-gradient-to-br from-mint to-mint-dark',
    borderColor: 'border-mint',
  },
];

export default function HowItWorks() {
  const handleBookCall = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24 lg:py-28 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-grey max-w-2xl mx-auto px-2">
            Our proven four-stage approach
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative mb-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className={`bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-cyan/30 transition-all duration-300 p-8 border-2 border-gray-100 border-t-4 ${step.borderColor}`}>
                <div className="flex flex-col h-full min-h-0 md:min-h-[280px]">
                  
                  {/* Number Badge - Centered */}
                  <div className="flex justify-center mb-6">
                    <div className={`${step.badgeGradient} w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-navy mb-3 text-center">
                    {step.title}
                  </h3>

                  {/* Description - flex-1 to fill space */}
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                </div>
              </div>

              {/* Arrow Connector - After cards 1, 2, 3 */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`bg-white border-2 ${index % 2 === 0 ? 'border-cyan' : 'border-mint'} rounded-full p-2 shadow-md`}>
                    <ArrowRight className={`w-6 h-6 ${index % 2 === 0 ? 'text-cyan' : 'text-mint'}`} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleBookCall}
            className="h-12 sm:h-auto bg-gradient-to-r from-navy to-navy-light hover:from-cyan hover:to-cyan-dark text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
